import { mapper } from '../../helpers/DynamoDBMapper';
import { User } from './users.model';

/**
 * The services contains the database queries and returning objects or throwing errors
 *
 * @export
 * @class UserService
 */
export class UserService {
    /**
     * Get a user from the database by uid
     *
     * @param {string} uid
     * @return {User} 
     * @memberof UserService
     */
    async getUser(uid: string) {
        return await mapper.get(Object.assign(new User, {uid}))
    }


    /**
     * Put a user in the database
     *
     * @param {*} user
     * @return {*} 
     * @memberof UserService
     */
    async putUser(user: any) {
        const toPut = Object.assign(new User, user)
        await mapper.put(toPut);
        return toPut;
    }
}