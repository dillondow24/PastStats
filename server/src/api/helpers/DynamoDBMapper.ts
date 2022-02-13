import {DataMapper} from '@aws/dynamodb-data-mapper';
import DynamoDB = require('aws-sdk/clients/dynamodb');

export const mapper = new DataMapper({
    client: new DynamoDB({region: process.env.AWS_REGION}), // the SDK client used to execute operations
    tableNamePrefix: 'dev_' // optionally, you can provide a table prefix to keep your dev and prod tables separate
});