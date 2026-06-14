import { defineFunction } from '@aws-amplify/backend';

export const rustImageProcessor = defineFunction({
  name: 'rust-image-processor',
  entry: './functions/rust/image-processor',
  runtime: 'provided.al2023',
  architecture: 'arm64',
  timeout: 300,
  memoryMB: 2048,
});

export const rustFunctions = {
  rustImageProcessor
};
