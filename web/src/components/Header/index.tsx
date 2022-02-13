import { Button, Typography } from '@mui/material'
import React from 'react'
import { API } from '../../api';
import { User } from '../../model/user';


// Example POST method implementation:
async function createUser() {

  // material-ui/docs/data/material/getting-started/templates/dashboard/
  
  const newUser: User = {
    uid: "*3456789886cb0155-6802-4f32-8b18-baf9ece506e576",
    timestamp: new Date().valueOf(),
    username: "newUser",
    email: "test@email.com",
    phone: "123-456-7890"
  }

  const response = await API.UserAPI.createUser(newUser);
  console.log('response: ', response);
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
