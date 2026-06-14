// infrastructure/api-gateway-stack.ts
import { Stack, StackProps, CfnOutput } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as logs from 'aws-cdk-lib/aws-logs'
import * as iam from 'aws-cdk-lib/aws-iam'

export interface ApiGatewayStackProps extends StackProps {
  // Reference to your Lambda functions from another stack
  goFunction: lambda.Function
  pythonFunction: lambda.Function
  rustFunction: lambda.Function
}

export class ApiGatewayStack extends Stack {
  public readonly api: apigateway.RestApi
  public readonly apiUrl: string

  constructor(scope: Construct, id: string, props: ApiGatewayStackProps) {
    super(scope, id, props)

    // Create CloudWatch Log Group for API Gateway
    const logGroup = new logs.LogGroup(this, 'ApiGatewayLogGroup', {
      logGroupName: `/aws/apigateway/${id}`,
      retention: logs.RetentionDays.ONE_WEEK,
    })

    // Create API Gateway
    this.api = new apigateway.RestApi(this, 'MyApi', {
      restApiName: 'My Multi-Language API',
      description: 'API Gateway for Go, Python, and Rust Lambda functions',
      
      // Enable CORS for frontend integration
      defaultCorsPreflightOptions: {
        allowOrigins: [
          'http://localhost:3000',  // Local development
          'https://your-amplify-domain.amplifyapp.com', // Your Amplify domain
        ],
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
          'X-Amz-Security-Token',
        ],
      },

      // Deploy automatically
      deploy: true,
      deployOptions: {
        stageName: 'prod',
        loggingLevel: apigateway.MethodLoggingLevel.INFO,
        dataTraceEnabled: true,
        metricsEnabled: true,
        accessLogDestination: new apigateway.LogGroupLogDestination(logGroup),
        accessLogFormat: apigateway.AccessLogFormat.jsonWithStandardFields(),
      },

      // Enable endpoint configuration
      endpointConfiguration: {
        types: [apigateway.EndpointType.REGIONAL],
      },
    })

    // Create API resources and methods
    this.createGoEndpoints(props.goFunction)
    this.createPythonEndpoints(props.pythonFunction)
    this.createRustEndpoints(props.rustFunction)

    // Add a health check endpoint
    this.createHealthEndpoint()

    // Store API URL for output
    this.apiUrl = this.api.url

    // Output the API URL
    new CfnOutput(this, 'ApiUrl', {
      value: this.apiUrl,
      description: 'API Gateway URL',
      exportName: `${this.stackName}-ApiUrl`,
    })

    // Output individual endpoint URLs
    new CfnOutput(this, 'GoEndpoint', {
      value: `${this.apiUrl}go`,
      description: 'Go Lambda endpoint',
    })

    new CfnOutput(this, 'PythonEndpoint', {
      value: `${this.apiUrl}python`,
      description: 'Python Lambda endpoint',
    })

    new CfnOutput(this, 'RustEndpoint', {
      value: `${this.apiUrl}rust`,
      description: 'Rust Lambda endpoint',
    })
  }

  private createGoEndpoints(goFunction: lambda.Function) {
    // Create /go resource
    const goResource = this.api.root.addResource('go')
    
    // Create Lambda integration
    const goIntegration = new apigateway.LambdaIntegration(goFunction, {
      requestTemplates: { 'application/json': '{ "statusCode": "200" }' },
      proxy: true, // Enable Lambda proxy integration
    })

    // Add methods
    goResource.addMethod('GET', goIntegration)
    goResource.addMethod('POST', goIntegration)

    // Add sub-resources if needed
    const goHealthResource = goResource.addResource('health')
    goHealthResource.addMethod('GET', goIntegration)
  }

  private createPythonEndpoints(pythonFunction: lambda.Function) {
    // Create /python resource
    const pythonResource = this.api.root.addResource('python')
    
    // Create Lambda integration
    const pythonIntegration = new apigateway.LambdaIntegration(pythonFunction, {
      proxy: true,
    })

    // Add methods
    pythonResource.addMethod('GET', pythonIntegration)
    pythonResource.addMethod('POST', pythonIntegration)
    pythonResource.addMethod('PUT', pythonIntegration)

    // Add sub-resources
    const pythonDataResource = pythonResource.addResource('data')
    pythonDataResource.addMethod('GET', pythonIntegration)
    pythonDataResource.addMethod('POST', pythonIntegration)
  }

  private createRustEndpoints(rustFunction: lambda.Function) {
    // Create /rust resource
    const rustResource = this.api.root.addResource('rust')
    
    // Create Lambda integration
    const rustIntegration = new apigateway.LambdaIntegration(rustFunction, {
      proxy: true,
    })

    // Add methods
    rustResource.addMethod('GET', rustIntegration)
    rustResource.addMethod('POST', rustIntegration)
    rustResource.addMethod('DELETE', rustIntegration)

    // Add sub-resources
    const rustProcessResource = rustResource.addResource('process')
    rustProcessResource.addMethod('POST', rustIntegration)
  }

  private createHealthEndpoint() {
    // Create a simple health check endpoint
    const healthResource = this.api.root.addResource('health')
    
    // Mock integration for health check (no Lambda needed)
    const healthIntegration = new apigateway.MockIntegration({
      integrationResponses: [{
        statusCode: '200',
        responseTemplates: {
          'application/json': JSON.stringify({
            status: 'healthy',
            timestamp: '$context.requestTime',
            requestId: '$context.requestId'
          })
        },
      }],
      requestTemplates: {
        'application/json': '{ "statusCode": 200 }'
      },
    })

    healthResource.addMethod('GET', healthIntegration, {
      methodResponses: [{
        statusCode: '200',
        responseModels: {
          'application/json': apigateway.Model.EMPTY_MODEL,
        },
      }],
    })
  }
}
