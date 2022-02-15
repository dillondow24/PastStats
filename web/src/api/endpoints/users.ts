import { User } from "../../model/user";

const BASE_URL = 'http://localhost:8080/users'

export const UserAPI = {
    getUser: async (uid: string) => {
        const response = await fetch(`${BASE_URL}/getUser/${uid}`);
        if(response.status === 200) {
            return await response.json() as User;
        } else {
            throw new Error(response.statusText)
        }
    },
    createUser: async (payload: User) => {
        const body = JSON.stringify(payload)
        const response = await fetch(`${BASE_URL}/putUser`, {
            body, // body data type must match "Content-Type" header
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {'Content-Type': 'application/json'},
        });
        if(response.status === 200) {
            return await response.json() as User;
        } else {
            throw new Error(response.statusText)
        }
    }
}
