import { defineFunction } from '@aws-amplify/backend'

export const pythonFunction = defineFunction({
  name: 'python-function',
  entry: '../../../functions/python-function/handler.py', // ← Points to external folder
  runtime: 'python3.12'
})

