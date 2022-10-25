import React from 'react' 

export const About=()=> {
  return (
    <div className="two equal width row about">
        <div className="  column">
          <div className='about-info'>
              <h1 className="ui header huge inverted blue">
                Hello Bus!
                <div className="sub header">Hello bus is a bus ticket web app</div>
              </h1>
          </div>
        </div>
        
        <div className="column ">
          <div className='about-form'>
            <form className="ui form inverted blue">
              <div className="fields">
                <div className="field"> 
                  <label htmlFor='pickUp'>From</label>
                  <input type="text" id='pickUp' placeholder="From"/>
                </div>
                <div className="field">
                  <label htmlFor='drop'>To</label>
                  <input type="text" id='drop' placeholder="To"/>
                </div>
              </div>
              <div className='field'>
                  <label htmlFor='date'>Date</label>
                  <input type='date' id='date'></input>
              </div>
              <div className="field">
                   <button className="ui inverted basic teal button" type='submit'>Submit</button> 
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}  
