import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  // Data Models
  User: a
    .model({
      id: a.id(),
      email: a.string().required(),
      name: a.string().required(),
      profileImage: a.string(),
      preferences: a.json(),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
      // Relations
      posts: a.hasMany('Post', 'userId'),
      analytics: a.hasMany('UserAnalytics', 'userId'),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(['read']),
    ]),

  Post: a
    .model({
      id: a.id(),
      title: a.string().required(),
      content: a.string().required(),
      imageUrl: a.string(),
      processedImageUrl: a.string(),
      status: a.enum(['draft', 'published', 'archived']),
      tags: a.string().array(),
      metadata: a.json(),
      userId: a.id().required(),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
      // Relations
      user: a.belongsTo('User', 'userId'),
      analytics: a.hasMany('PostAnalytics', 'postId'),
    })
    .authorization((allow) => [
      allow.owner(),
      allow.authenticated().to(['read']),
      allow.guest().to(['read']),
    ]),

  UserAnalytics: a
    .model({
      id: a.id(),
      userId: a.id().required(),
      sessionData: a.json(),
      behaviorMetrics: a.json(),
      timestamp: a.datetime(),
      // Relations
      user: a.belongsTo('User', 'userId'),
    })
    .authorization((allow) => [
      allow.owner(),
    ]),

  PostAnalytics: a
    .model({
      id: a.id(),
      postId: a.id().required(),
      views: a.integer().default(0),
      likes: a.integer().default(0),
      shares: a.integer().default(0),
      engagementData: a.json(),
      timestamp: a.datetime(),
      // Relations
      post: a.belongsTo('Post', 'postId'),
    })
    .authorization((allow) => [
      allow.authenticated().to(['read', 'update']),
      allow.owner().to(['create', 'read', 'update', 'delete']),
    ]),

  ProcessingJob: a
    .model({
      id: a.id(),
      type: a.enum(['image_processing', 'data_analysis', 'ml_inference', 'crypto_operation']),
      status: a.enum(['pending', 'processing', 'completed', 'failed']),
      inputData: a.json(),
      outputData: a.json(),
      errorMessage: a.string(),
      processingTime: a.integer(),
      userId: a.id().required(),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    })
    .authorization((allow) => [
      allow.owner(),
    ]),

  // Custom Types
  ApiResponse: a.customType({
    success: a.boolean().required(),
    message: a.string(),
    data: a.json(),
    timestamp: a.datetime(),
  }),

  ProcessingResult: a.customType({
    jobId: a.string().required(),
    status: a.string().required(),
    result: a.json(),
    processingTime: a.integer(),
    error: a.string(),
  }),

  AnalyticsData: a.customType({
    metrics: a.json().required(),
    insights: a.json(),
    recommendations: a.string().array(),
    generatedAt: a.datetime(),
  }),

  // Custom Queries - Go Functions
  processData: a
    .query()
    .arguments({
      input: a.json().required(),
      processingType: a.string().required(),
    })
    .returns(a.ref('ProcessingResult'))
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function('goDataProcessor')),

  getApiHealth: a
    .query()
    .arguments({})
    .returns(a.ref('ApiResponse'))
    .authorization((allow) => [allow.authenticated(), allow.guest()])
    .handler(a.handler.function('goApiHandler')),

  // Custom Mutations - Rust Functions
  processImageRust: a
    .mutation()
    .arguments({
      imageUrl: a.string().required(),
      operations: a.string().array().required(),
      quality: a.integer().default(80),
    })
    .returns(a.ref('ProcessingResult'))
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function('rustImageProcessor')),

  // Custom Queries - Python Functions
  processImagePython: a
    .mutation()
    .arguments({
      imageUrl: a.string().required(),
      operations: a.string().array().required(),
      quality: a.integer().default(80),
    })
    .returns(a.ref('ProcessingResult'))
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function('pythonImageProcessing')),

  analyzeUserData: a
    .query()
    .arguments({
      userId: a.string(),
      dateRange: a.json(),
      metrics: a.string().array(),
    })
    .returns(a.ref('AnalyticsData'))
    .authorization((allow) => [allow.authenticated()])
    .handler(a.handler.function('pythonDataAnalytics')),

  // Subscriptions for real-time updates
  onProcessingJobUpdate: a
    .subscription()
    .for(a.ref('ProcessingJob'))
    .authorization((allow) => [allow.owner()]),

  onPostAnalyticsUpdate: a
    .subscription()
    .for(a.ref('PostAnalytics'))
    .authorization((allow) => [allow.authenticated()]),

  // Custom Subscriptions
  onJobStatusChange: a
    .subscription()
    .arguments({
      jobId: a.string().required(),
    })
    .returns(a.ref('ProcessingResult'))
    .authorization((allow) => [allow.authenticated()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    // API Key mode for guest access
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

