import { User } from "../../model/user";

const ENDPOINT = 'http://localhost:8080'
export const UserAPI = {
    getUser: async (uid: string) => {
        const response = await fetch(`${ENDPOINT}/users/${uid}`);
        const { data } = await response.json(); // parses JSON response into native JavaScript objects
        return data
    },
    createUser: async (payload: User) => {
        const body = JSON.stringify(payload)
        const response = await fetch(`${ENDPOINT}/users/putUser`, {
        body, // body data type must match "Content-Type" header
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        });
        const { data } = await response.json(); // parses JSON response into native JavaScript objects
        return data
    }
}
