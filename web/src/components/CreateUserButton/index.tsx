import { Button, makeStyles, Typography } from '@mui/material'
import React from 'react'
import { API } from '../../api';
import { User } from '../../model/user';
import { useStyles } from './styles';


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
 * button to test the post user api call
 *
 * @export
 * @return {*} 
 */
export default function CreateUserButton() {
  const classes = useStyles();

  return (
    <div>
      <Button variant='contained' className={classes.button} onClick={createUser}>Create User</Button>
    </div>
  )
}
