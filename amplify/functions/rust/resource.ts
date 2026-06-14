import { defineFunction } from '@aws-amplify/backend'

export const rustFunction = defineFunction({
  name: 'rust-function',
  entry: '../../../functions/rust-function/src/main.rs', // ← Points to external folder
  runtime: 'provided.al2'
})

