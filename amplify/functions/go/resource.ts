import { defineFunction } from '@aws-amplify/backend'

export const goFunction = defineFunction({
  name: 'go-functions',
  entry: '../../../functions/go-functions/main.go', // ← Points to your Go file
  runtime: 'provided.al2023'  // ← Custom runtime for Go
})


