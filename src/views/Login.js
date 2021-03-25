import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Form, FormInput, FormGroup,
Button, Card, CardBody, 
CardTitle, CardSubtitle } 
from "shards-react";
const  Login=(props)=> {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  //const [valid, setValid]=useState(false);
const valid = ()=>{
if(username==''){
  setNameError('Please enter username')

}
else if(!username.includes('@')){
  setNameError('Please enter valid username')

}
 
else if(password == ''){
  setPasswordError('Please enter password')

}
else if(password.length < 8){
  setPasswordError('Please enter atleast 8 character')

}
else{
  return true;
}
}
  const Submit = ()=>{
    if(valid()){
      setNameError('');
      setPasswordError('')
      props.getLoginData()
    }
   
    
  } 

  return (
    <div style={{
      width: 400, height: 300, position: 'absolute',
      top: 0, bottom: 0, left: 0, right: 0, margin: 'auto'
    }}>
      <Card>
        <CardBody>
          <CardTitle style={{ textAlign: 'center' }}>Login</CardTitle>

          <Form>
            <FormGroup>
              <label htmlFor="#username">Username</label>
              <FormInput id="#username" 
              placeholder="Username" 
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              
              />
              <p style={{color:'red'}}>{nameError}</p>
            </FormGroup>
            <FormGroup>
              <label htmlFor="#password">Password</label>
              <FormInput type="password" 
              id="#password" placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} />
              <p style={{color:'red'}}>{passwordError}</p>
            </FormGroup>
          </Form>
          <Button onClick={Submit} block theme="secondary">
            Login
      </Button>
        </CardBody>
      </Card>

    </div>
  )
}

export default Login
