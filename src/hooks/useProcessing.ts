// src/hooks/useProcessing.ts
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource';

const client = generateClient<Schema>();

export const useProcessing = () => {
  const processImageRust = async (imageUrl: string, operations: string[]) => {
    try {
      const result = await client.mutations.processImageRust({
        imageUrl,
        operations,
        quality: 90,
      });
      return result.data;
    } catch (error) {
      console.error('Image processing failed:', error);
      throw error;
    }
  };

  const processImagePython = async (imageUrl: string, operations: string[]) => {
    try {
      const result = await client.mutations.processImagePython({
        imageUrl,
        operations,
        quality: 90,
      });
      return result.data;
    } catch (error) {
      console.error('Image processing failed:', error);
      throw error;
    }
  };

  const analyzeData = async (userId?: string, dateRange?: any) => {
    try {
      const result = await client.queries.analyzeUserData({
        userId,
        dateRange,
        metrics: ['engagement', 'behavior', 'preferences'],
      });
      return result.data;
    } catch (error) {
      console.error('Data analysis failed:', error);
      throw error;
    }
  };

  return {
    processImageRust,
    processImagePython,
    analyzeData,
  };
};
