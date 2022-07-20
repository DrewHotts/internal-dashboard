import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_HYbfsv5D9',
  ClientId: '682hcu8t07h529261ev11c7crg'
};

export default new CognitoUserPool(poolData);