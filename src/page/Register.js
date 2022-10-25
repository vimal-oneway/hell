import React,{useState} from 'react'
import Axios from 'axios';
import { Nav } from '../component/Nav';
 export const Register =(props)=>{
  const options={
    mode:'no-cors'
  }

  const initialFormState = {
    username :'',
    id: null,
    email :'',
    password:''
  }

  const [user, setUser]=useState(initialFormState);
  const handleChange = (event) =>{
    setUser({...user,[event.target.name]:event.target.value})
    console.log(user);
  }

  const handleSumbit = (event)=>{
    event.preventDefault();

    Axios.post('http://localhost:9000/register',user
    ,options).then(res=>console.log(res))
    .catch(e=>console.log(e))
  }
  
  return (
    <div className='main-con'>
      <Nav userData = {props.userData}/>
        <div className='sub-con'>
          <div className='flex-con h90 '>
           <div className='form-con-black'>  
              <form className="ui inverted form " onSubmit={(e)=>handleSumbit(e)}  method='post'>
                <div className="fields-con">
                <div className="field-con">
                    <label htmlFor='username'>User name</label>
                    <input id='username' className='inputField'  placeholder="user name"  name='username' onChange={(e)=>{handleChange(e)}}  type="text"/>
                  </div>
                  <div className="field-con">
                    <label htmlFor='email'>Email</label>
                    <input id='email'  className='inputField' placeholder="Email" name='email' onChange={(e)=>{handleChange(e)}}  type="email"/>
                  </div>
                  <div className="field-con">
                    <label htmlFor='password'>Password</label>
                    <input id='password' onChange={(e)=>{handleChange(e)}}  className='error' placeholder="Password" name='password' type="password"/>
                  </div>
                </div>
                <div className="inline field-con">
                  <div className="ui checkbox">
                    <input id='remember' type="checkbox" tabIndex="0" className="hidden "/>
                    <label htmlFor='remember'>I agree to the Terms and Conditions</label>
                  </div>
                </div>
                <div className='field-con'>
                  <input type='submit' className="ui inverted teal basic button" value="submit"/>
                </div>
               </form>
              <div className="ui inverted horizontal divider">
                Or login
              </div> 
              <div className='computer only '>
                <a href='/register' className="ui animated fade inverted teal basic button" tabIndex="0">
                  <div className="visible content">Login, let's go</div>
                  <div className="hidden content">
                    Happy journey
                  </div>
                </a>
              </div>
           </div>
          </div>
        </div>
      </div>
  )
}
