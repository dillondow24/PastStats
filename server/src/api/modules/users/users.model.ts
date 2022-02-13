/** 
 * The schema definition of the User model
 */

import {
    attribute,
    hashKey,
    rangeKey,
    table,
} from '@aws/dynamodb-data-mapper-annotations';

@table('past-stats-development-users')
export class User {
    @hashKey()
    uid: string;

    @rangeKey({defaultProvider: () => new Date().valueOf()})
    timestamp: string;

    @attribute()
    username: string;

    @attribute()
    email: string;

    @attribute()
    phone: string;
}

