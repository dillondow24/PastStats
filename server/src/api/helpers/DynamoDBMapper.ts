import {DataMapper} from '@aws/dynamodb-data-mapper';
import AWS, { DynamoDB } from 'aws-sdk';
import { aws_local_config } from '../../config/aws-config';

AWS.config.update(aws_local_config);

export const mapper = new DataMapper({
    client: new DynamoDB(aws_local_config), // the SDK client used to execute operations
    // tableNamePrefix: 'dev_' // optionally, you can provide a table prefix to keep your dev and prod tables separate
});