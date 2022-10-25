import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = (props)=>{
        const [search,setSearch] = useState('');
        

        const searchValue = (data)=>{
            setSearch(data)
            console.log(search);
        }

        const LoginBtn = () =>{
            return (
                <div className='item'>
                    <a href={`/login`} className="ui inverted teal basic button ">login</a>
                </div>
            )
        }

        const LogoutBtn = () =>{
            return(
                <div className='item ui inverted segment'>
                    <a href='/' className="ui inverted teal basic button" >Logout</a>
                </div>
            )
        }

        // const logout = () => {
            // const initialUserData = {
            //     email:'',
            //     userId:null,
            //     product:''
            //   }
            // console.log("from logout fun",props.userData.email)
        // } 

        const UserLog = () => {
            if (props.userData.userId === null) {
                return (
                    <LoginBtn />
                );
            }
            return (

                <LogoutBtn />
            );
        }
        
        const activeLink = (isActive) =>{
           return isActive ?  'item active': 'item'
        }      

        return(
            <header>
            <nav className='ui top fixed  inverted  segment black secondary  menu'>
                <NavLink end  to='/' onClick={(e)=>console.log(e.target)}   className={({isActive})=>{return activeLink(isActive)}}>
                    Home
                </NavLink>

                <NavLink to='/tickets' onClick={(e)=>console.log(e.target)}  className={({isActive})=>
                {return activeLink(isActive)}} >
                    Bus tickets 
                </NavLink>

                <NavLink to='/cart'  onClick={(e)=>console.log(e.target)} className={({isActive})=>
                {return activeLink(isActive)}} >
                    My ride
                </NavLink>

                <div className="right menu">

                    <div className="item">
                        <form className='ui inverted transparent icon input'>
                            <input type="text" placeholder="Search..." value={search} onChange={(e)=>{searchValue(e.target.value)}}/>
                            <i className="search link icon"></i>
                        </form>
                    </div>

                    <UserLog/>

                </div>

            </nav>           
            </header>
        );
}

