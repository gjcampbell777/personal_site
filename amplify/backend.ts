import { defineBackend } from '@aws-amplify/backend'
import { goFunction } from './functions/go/resource.ts'
import { pythonFunction } from './functions/python/resource.ts'
import { rustFunction } from './functions/rust/resource.ts'

defineBackend({
  goFunction,
  pythonFunction,
  rustFunction
})



