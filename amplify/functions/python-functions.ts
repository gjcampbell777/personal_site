import { defineFunction } from '@aws-amplify/backend';

export const pythonImageProcessing = defineFunction({
  name: 'python-image-processing',
  entry: './functions/python/image-processing',
  runtime: 'python3.11',
  timeout: 300,
  memoryMB: 3008,
});

export const pythonDataAnalytics = defineFunction({
  name: 'python-data-analytics',
  entry: './functions/python/data-analytics',
  runtime: 'python3.11',
  timeout: 900,
  memoryMB: 2048,
});

export const pythonFunctions = {
  pythonImageProcessing,
  pythonDataAnalytics,
};
