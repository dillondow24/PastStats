/** 
 * The schema definition of the User model
 */

import {
    attribute,
    hashKey,
    rangeKey,
    table,
} from '@aws/dynamodb-data-mapper-annotations';

/**
 * The User model
 *
 * @export
 * @class User
 */
@table('users-table')
export class User {
    @hashKey()
    uid: string;

    // @rangeKey({defaultProvider: () => new Date().valueOf()})
    @attribute({defaultProvider: () => new Date().valueOf()})
    timestamp: number;

    @attribute()
    username: string;

    @attribute()
    email: string;

    @attribute()
    phone: string;

    @attribute()
    avatar?: string;
}

