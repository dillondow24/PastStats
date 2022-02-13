import { Button, Typography } from '@mui/material'
import React from 'react'


// Example POST method implementation:
async function createUser() {
  const payload = { "uid": "830a1a70-8c1c-4b96-95f4-f1d31056708c" }
  const body = JSON.stringify(payload)
  const response = await fetch('http://localhost:8080/users/putUser', {
    body, // body data type must match "Content-Type" header
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const {data} = await response.json(); // parses JSON response into native JavaScript objects
  console.log('Data Response: ', data);
}


/**
 * Component for the header of the application.
 *
 * @export
 * @return {*} 
 */
export default function Header() {

  return (
    <div>
      <Button variant='contained' onClick={createUser}>Create User</Button>
    </div>
  )
}
