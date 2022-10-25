import React from 'react'

export function Steps() {
  return (
    <div className='step-con'> 
        <h1 class="ui header huge inverted blue">
            Steps
            <div class="sub header">Steps to get your tickets</div>
        </h1>
        <div class="ui three  inverted steps ">
            <div class="step">
                <i class="search icon"></i>
                <div class="content">
                <div class="title">Bus tickets</div>
                </div>
            </div>
            <div class="step ">
                <i class="payment icon"></i>
                <div class="content">
                <div class="title">Billing</div>
                </div>
            </div>
            <div class="step">
                <i class="travel icon"></i>
                <div class="content">
                <div class="title">Enjoy your travel</div>
                </div>
            </div>
        </div>
    </div>
  )
}
