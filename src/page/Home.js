import React from 'react';
import { About } from '../component/About'
import {Award} from '../component/Award'
import {Nav} from '../component/Nav'
// import {Steps} from '../component/Steps'
export const Home = (props) =>{
        return(
        <div>
            <Nav userData = {props.userData}/>

           <div className='main-con'>
                <div className='sub-con'>
                    <div className="ui equal width grid">
                        <About/>
                        {/* <Steps/> */}
                        <Award/>
                    </div>
                </div>
            </div>
           
        </div>
        );
}
// export default home;