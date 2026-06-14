// infrastructure/lambda-stack.ts
import { Stack, StackProps, Duration } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'

export class LambdaStack extends Stack {
  public readonly goFunction: lambda.Function
  public readonly pythonFunction: lambda.Function
  public readonly rustFunction: lambda.Function

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    // Go function
    this.goFunction = new lambda.Function(this, 'GoFunction', {
      runtime: lambda.Runtime.PROVIDED_AL2023,
      handler: 'bootstrap',
      code: lambda.Code.fromAsset('../functions/go-functions'),
      timeout: Duration.minutes(15),
      memorySize: 1024,
    })

    // Python function
    this.pythonFunction = new lambda.Function(this, 'PythonFunction', {
      runtime: lambda.Runtime.PYTHON_3_12,
      handler: 'handler.handler',
      code: lambda.Code.fromAsset('../functions/python-function'),
      timeout: Duration.minutes(5),
      memorySize: 512,
    })

    // Rust function
    this.rustFunction = new lambda.Function(this, 'RustFunction', {
      runtime: lambda.Runtime.PROVIDED_AL2023,
      handler: 'bootstrap',
      code: lambda.Code.fromAsset('../functions/rust-function'),
      timeout: Duration.minutes(10),
      memorySize: 2048,
    })
  }
}

