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
     * @param {*} query
     * @param {*} page
     * @param {*} limit
     * @return {*} 
     * @memberof UserService
     */
    async getUser(uid: string) {
        try {
            return await mapper.get(Object.assign(new User, {uid}))
        } catch (e) {
            throw Error('Error while retrieving User')
        }
    }


    /**
     * Put a user in the database
     *
     * @param {*} user
     * @return {*} 
     * @memberof UserService
     */
    async putUser(user: any) {
        try {
            const toPut = Object.assign(new User, user);
            console.log(toPut);
            return
            // return await mapper.put(toPut)
        } catch (e) {
            throw Error('Error while creating User')
        }
    }
}