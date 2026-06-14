import { defineFunction } from '@aws-amplify/backend';

export const goApiHandler = defineFunction({
  name: 'go-api-handler',
  entry: './functions/go/api-handler',
  runtime: 'provided.al2023',
  architecture: 'arm64',
  timeout: 30,
  memoryMB: 512,
});

export const goDataProcessor = defineFunction({
  name: 'go-data-processor',
  entry: './functions/go/data-processor',
  runtime: 'provided.al2023',
  architecture: 'arm64',
  timeout: 60,
  memoryMB: 1024,
});

export const goFunctions = {
  goApiHandler,
  goDataProcessor,
};
