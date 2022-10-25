import React,{ useEffect,useState} from 'react';
import Axios from 'axios';
import busImg from '../img/matthew.png'
import { Nav } from '../component/Nav';
import { useNavigate } from 'react-router-dom';
export const  Tickets = (props) =>{
    let navigate = useNavigate();

    const [data,setData] = useState();
    const getData=async()=>{
      const response = await Axios.get('http://localhost:9000/tickets');
        setData(response.data)
        console.log(response.data);
    }
  
    useEffect(() => {
     getData()
    });

    const navigateToBus = (id) =>{
        navigate(`/viewBus/${id}`)
    }

    const disp = data?.map((e,key)=>{
            return( 
                <div className="teal card" onClick={()=>{navigateToBus(e.id)}} key={e.id}>
                    <div className="image">
                        <img src={busImg} alt='bus-img'/>
                    </div>
                    <div className="content">
                    <div className="header">{e.busName}</div>
                        <div className="meta">
                            <a href='./'>Route: From {e.busStart} To {e.busEnd}</a>
                        </div>
                        <div className="description">
                            Matthew is an interior designer living in New York.
                            A/C Bus
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                        <div className='ui buttons'>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">cart</div>
                                <div className="visible content">
                                    <i className="shop icon"></i>
                                </div>
                            </div>
                            <div className='or'></div>
                            <div className="ui animated button" tabIndex="0">
                                <div className="visible content">buy</div>
                                <div className="hidden content">
                                    <i className="right arrow icon"></i>
                                </div>
                            </div>
                        </div>
                        

                        </span>
                        <span>
                            <i className="rupee icon"></i>
                            {e.price}
                        </span>
                    </div>
              </div>
            );
        }
    )

    return(
        <div className='main-con'>
            <Nav userData = {props.userData} active = {"tickets"} />
            <div className='sub-con'>
                <div className='ui link cards cards-con'>
                        {disp}
                </div>
            </div>
        </div>
    );
}


