/* eslint-disable jsx-a11y/heading-has-content */
import React,{useState,useEffect} from 'react'
import { Nav } from '../component/Nav'
import testImg from '../img/matthew.png'
import  Axios from 'axios'

export const  ViewBus = (props) => {
  const options={
    mode:'no-cors'
  }

 const initialTicketBooked= {
    ticketId: [],
    busId:null,
    selectedTickets:[]
  }

  const [busData,setBusData] = useState('')
  const [ticketBooked,setTicketBooked] = useState(initialTicketBooked)

  const getBusData=async()=>{
    const response = await Axios.get(`http://localhost:9000${window.location.pathname}`);
     await setBusData(response.data[0]);
      const tickets = JSON.parse((response.data[0].bookedSeats));
      const id =response.data[0].id;
     setTicketBooked({ ticketId:tickets,busId: id,selectedTickets:[null] })
  }
    //  console.log(ticketBooked);

  useEffect(() => {
   getBusData()
  });


  const BusImg = () => (
      <div className='con'>
        <img src={testImg} className='ui fluid image' alt='bus img'/>

      </div>
  )
  // *rupee sign icon
  // ! todo rating system

  const BusInfo = () => (
    <div className='con lora'>
      <div className='con'>
        <h3 className='headerText'>{busData.busName} Bus </h3>
        <p>Route : {`${busData.busStart} - ${busData.busEnd}`}</p>
        <p>{`${busData.ac===1? `Ac bus`:`Non - Ac bus`} || ${busData.sleeper===1? `Sleeper bus`:`Non - Sleeper bus`}` }</p>
        <p>Bus fear <i className='rupee sign icon '></i>{busData.price}</p>
      </div>
    </div>
  )

  const getLen= () =>{
    return ticketBooked.selectedTickets?ticketBooked.selectedTickets.length : 0
  }


  const BuyTicket = () =>{
    return(
      <div className='con'>
        <h4 className='subHeaderText'>Buying options:</h4>
        <p>{`Number of selected tickets ${getLen()>1?"are":"is"} ${getLen()}.`}</p>
        <p>Total price : <i className='rupee sign icon'></i>{`${busData.price*getLen()}`}</p>
        <div className="ui buttons">
          <button className="ui button">Cart</button>
          <div className="or"></div>
          <button className="ui positive button" onClick={()=>{toSubmit()}}>Buy</button>
        </div>
      </div>
    )
  }


  const toSubmit=()=>{
    ticketBooked.busId=busData.id;
    Axios.post('http://localhost:9000/bookSeat',ticketBooked
    ,options).then(res=>console.log(res))
    .catch(e=>console.log(e))
  }

  function arrayRemove(arr, value) {     
    for( var i = 0; i < arr.length; i++){ 
      if ( arr[i] === value) { 
          arr.splice(i, 1); 
      }
    }
  }

  const handleClick = (e) =>{
    const selectedTickets = ticketBooked.ticketId;
    const isPresent = selectedTickets.includes(Number(e.target.id));
    console.log(e.target.id,isPresent);
    if(isPresent)
    {
      e.target.className = `${e.target.className.replace('busSeatSelected',"")} `.trim()
      arrayRemove(selectedTickets, Number(e.target.id))
    }
    else{
       e.target.className = `${e.target.className} busSeatSelected`.trim()
       var lastele =  selectedTickets.push(Number(e.target.id));
       console.log(selectedTickets,lastele);

    }
  }

  return (
    <div className='main-con'>
      <Nav userData={props.userData}/>
      <div className='sub-con' >
         <div className='flex-lay'>
            <div>
              <BusImg />
            </div>
            <div>
              <BusInfo />
                <div className='con mrt5 '>
                  <h4 className='con subHeaderText'> Select your seat</h4>
                    <div className=' con bus mrt2'>
                      <div className="parent">
                        <div  id='15' onClick={(e)=>{handleClick(e)}}  className="div1 bg"></div>
                        <div  id='14' onClick={(e)=>{handleClick(e)}}  className="div2 bg"> </div>
                        <div  id='4'  onClick={(e)=>{handleClick(e)}}  className="div3 bg"> </div>
                        <div  id='5'  onClick={(e)=>{handleClick(e)}}  className="div4 bg"> </div>
                        <div  id='13' onClick={(e)=>{handleClick(e)}}  className="div5 bg"> </div>
                        <div  id='12' onClick={(e)=>{handleClick(e)}}  className="div6 bg"> </div>
                        <div  id='2'  onClick={(e)=>{handleClick(e)}}  className="div7 bg"> </div>
                        <div  id='1'  onClick={(e)=>{handleClick(e)}}  className="div8 bg"> </div>
                        <div  id='11' onClick={(e)=>{handleClick(e)}}  className="div9 bg"> </div>
                        <div  id='3'  onClick={(e)=>{handleClick(e)}}  className="div10 bg"> </div>
                        <div  id='6'  onClick={(e)=>{handleClick(e)}}  className="div11 bg"> </div>
                        <div  id='16' onClick={(e)=>{handleClick(e)}}  className="div12 bg"> </div>
                        <div  id='7'  onClick={(e)=>{handleClick(e)}}  className="div13 bg"> </div>
                        <div  id='17' onClick={(e)=>{handleClick(e)}}  className="div14 bg"> </div>
                        <div  id='18' onClick={(e)=>{handleClick(e)}}  className="div15 bg"> </div>
                        <div  id='8'  onClick={(e)=>{handleClick(e)}}  className="div16 bg"> </div>
                        <div  id='9'  onClick={(e)=>{handleClick(e)}}  className="div17 bg"> </div>
                        <div  id='19' onClick={(e)=>{handleClick(e)}}  className="div18 bg"> </div>
                        <div  id='10' onClick={(e)=>{handleClick(e)}}  className="div19 bg"> </div>
                        <div  id='20' onClick={(e)=>{handleClick(e)}}  className="div20 bg"> </div>
                      </div>
                      <div className="parent mrt5">
                        <div  id='35' onClick={(e)=>{handleClick(e)}}  className="div1 bg"></div>
                        <div  id='34' onClick={(e)=>{handleClick(e)}}  className="div2 bg"> </div>
                        <div  id='24' onClick={(e)=>{handleClick(e)}}  className="div3 bg"> </div>
                        <div  id='25' onClick={(e)=>{handleClick(e)}}  className="div4 bg"> </div>
                        <div  id='33' onClick={(e)=>{handleClick(e)}}  className="div5 bg"> </div>
                        <div  id='32' onClick={(e)=>{handleClick(e)}}  className="div6 bg"> </div>
                        <div  id='22' onClick={(e)=>{handleClick(e)}}  className="div7 bg"> </div>
                        <div  id='21' onClick={(e)=>{handleClick(e)}}  className="div8 bg"> </div>
                        <div  id='31' onClick={(e)=>{handleClick(e)}}  className="div9 bg"> </div>
                        <div  id='23' onClick={(e)=>{handleClick(e)}}  className="div10 bg"> </div>
                        <div  id='26' onClick={(e)=>{handleClick(e)}}  className="div11 bg"> </div>
                        <div  id='36' onClick={(e)=>{handleClick(e)}}  className="div12 bg"> </div>
                        <div  id='27' onClick={(e)=>{handleClick(e)}}  className="div13 bg"> </div>
                        <div  id='37' onClick={(e)=>{handleClick(e)}}  className="div14 bg"> </div>
                        <div  id='38' onClick={(e)=>{handleClick(e)}}  className="div15 bg"> </div>
                        <div  id='28' onClick={(e)=>{handleClick(e)}}  className="div16 bg"> </div>
                        <div  id='29' onClick={(e)=>{handleClick(e)}}  className="div17 bg"> </div>
                        <div  id='39' onClick={(e)=>{handleClick(e)}}  className="div18 bg"> </div>
                        <div  id='30' onClick={(e)=>{handleClick(e)}}  className="div19 bg"> </div>
                        <div  id='40' onClick={(e)=>{handleClick(e)}}  className="div20 bg"> </div>
                      </div>
                    </div>
                  </div>
                  {/* start of buying */}
                  <div className='con mrt5'>
                        <BuyTicket/>
                  </div>
                </div>
                {/* end of flex */}
            </div>
        </div>
    </div>
  )
}
