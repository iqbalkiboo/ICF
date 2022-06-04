import React, { useState, useEffect } from 'react'
import Header from './Header'
import Headers from './Header2'

import '../../App.css'

function IndexHeader() {
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true)
    const cls = visible ? "visible" : "hidden";

    useEffect(()=> {
        const handleScroll = () => {
            let moving = window.pageYOffset
            
            setVisible(position < moving);
            setPosition(moving)
        };
            window.addEventListener("scroll", handleScroll);
        return(() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })
    return (
        <div className={cls} style={{position: 'fixed', zIndex: '99', width: '100%'}}>
            <Header />
            <Headers />
        </div>
    )
}

export default IndexHeader
