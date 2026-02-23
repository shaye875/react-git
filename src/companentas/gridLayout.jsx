import React, { useState } from 'react'

function GridLayout() {
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const [click,setClick] = useState(0)
    return (
        <div id='fCom'>
            <div id='header'>
                <h1 id='fH'>Find The</h1>
                <h1 id='lh'>Secret Color!</h1>
                <div id='red'></div>
            </div>
            <div id='board'>
               {arr.map(()=>{
                return(
                  arr.map(()=>{
                    return(
                        <div id='square'></div>
                    )
                  }))
               })}
            </div>
            <div>
                <h1 id='click'>Clicks: {click}</h1>
            </div>
            <div>
                <h2 id='keep'>Keep Searching!</h2>
            </div>
        </div>
    )
}

export default GridLayout
