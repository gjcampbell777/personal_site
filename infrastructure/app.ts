// infrastructure/app.ts
import * as cdk from 'aws-cdk-lib'
import { LambdaStack } from './lambda-stack'
import { ApiGatewayStack } from './api-gateway-stack'

const app = new cdk.App()

// Create Lambda functions first
const lambdaStack = new LambdaStack(app, 'LambdaStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
})

// Create API Gateway and connect to Lambda functions
const apiStack = new ApiGatewayStack(app, 'ApiGatewayStack', {
  goFunction: lambdaStack.goFunction,
  pythonFunction: lambdaStack.pythonFunction,
  rustFunction: lambdaStack.rustFunction,
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
})

// Ensure Lambda stack is deployed before API Gateway
apiStack.addDependency(lambdaStack)
