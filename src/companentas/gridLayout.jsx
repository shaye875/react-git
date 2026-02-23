import React, { useState } from 'react'

function GridLayout() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [click, setClick] = useState(0)
    const random = Math.floor(Math.random() * 100)
    const [arr2, setArr] = useState([])
    const [bool, setBool] = useState(false)
    if (arr2.length === 0) {
        for (let i = 0; i < 100; i++) {
            if (i === random) {
                arr2.push("one")
            } else {
                arr2.push("square")
            }
        }
    }

    return (
        <div id='fCom'>
            <div id='header'>
                <h1 id='fH'>Find The</h1>
                <h1 id='lh'>Secret Color!</h1>
                <div id='red'></div>
            </div>
            <div id='board'>
                {arr2.map((item) => {
                    return (
                        <div onClick={(e) => {
                            setClick(click + 1)
                            if (e.target.className == "one") {
                                setBool(true)
                                e.target.className += " clickone"
                            } else {
                                e.target.className += " clickc"
                            }

                        }} className={item}></div>
                    )
                })}
            </div>
            <div>
                <h1 id='click'>Clicks: {click}</h1>
            </div>
            <div>
                {bool == false && <h2 id='keep'>Keep Searching!</h2>}
                {bool == true && <h2 id='keep'>you win!</h2>}
            </div>
        </div>
    )
}

export default GridLayout
