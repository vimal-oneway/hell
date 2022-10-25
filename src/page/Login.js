import React,{useState} from 'react'
import  Axios  from 'axios'
import { useNavigate } from 'react-router-dom'
import { Nav } from '../component/Nav'
export const Login= (props)=> {

  let navigate = useNavigate();

  const options={
    mode:'no-cors'
  }

  const initialFormState = {
    email :'',
    password:''
  }

  const [user, setUser]=useState(initialFormState);

  const handleChange = (event) =>{
    setUser({...user,[event.target.name]:event.target.value})
    console.log(user);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();

    Axios.post('http://localhost:9000/login',user
    ,options)
    .then(async(res)=>{
        props.userData.email= await res.data.email;
        props.userData.userId= await res.data.userId;
        navigate('/')
    })
      .catch(e=>console.log(e))
    }


    return (

      <div className='main-con'>
        <Nav userData = {props.userData}/>
        <div className='sub-con'>
          <div className='flex-con h90 '>
           <div className='form-con-black'>  

              <form className="ui inverted form" onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="fields-con">
                  <div className="field-con">
                    <label htmlFor='email'>Email</label>
                    <input id='email' name='email' onChange={e=>{handleChange(e)}} className='inputField' placeholder="Email"  type="email"/>
                  </div>
                  <div className="field-con">
                    <label htmlFor='password'>Password</label>
                    <input id='password' onChange={e=>{handleChange(e)}} className='error' name='password' placeholder="Password" type="password"/>
                  </div>
                </div>
                <div className="inline field-con">
                  <div className="ui checkbox">
                    <input id='remember' type="checkbox" tabIndex="0" className="hidden "/>
                    <label htmlFor='remember'>Remember me.</label>
                  </div>
                </div>
                <div className='field-con'>
                  <button type='submit' className="ui inverted teal basic button">Submit</button>
                </div>
               </form>
              <div className="ui inverted horizontal divider">
                Or register
              </div> 
              <div className='computer only '>
                <a href='/register' className="ui animated fade inverted teal basic button" tabIndex="0">
                  <div className="visible content">Sign-up to unlock your offers </div>
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

