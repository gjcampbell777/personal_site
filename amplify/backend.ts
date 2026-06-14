import { defineBackend } from '@aws-amplify/backend';
import { goFunctions } from './functions/go-functions';
import { rustFunctions } from './functions/rust-functions';
import { pythonFunctions } from './functions/python-functions';
import { defineData } from '@aws-amplify/backend';
import { schema } from './data/resource';

const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});

const backend = defineBackend({
  data,
  ...goFunctions,
  ...rustFunctions,
  ...pythonFunctions,
});

// Export backend for use in frontend
export default backend;


