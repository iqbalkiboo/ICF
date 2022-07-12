import React from 'react'
// import { Link } from 'react-router-dom'
import images from '../../assets/image/trend-bike.png'
import '../../assets/style/card.css'


export default function Card() {
    // const data = props.props
    return (
        <div className="card">
            <img src={images} alt="Avatar" style={{width: "100%"}} />
            <div className="container">
                <h4>
                    <b>ICF BMX NATIONAL CHAMPIONSHIP 2022</b>
                </h4> 
                <div className="chips">
                    <button className="flag-tag" disabled>ICF CHAMPIONSHIP</button> 
                </div>
                
                <span>Registration Date:</span>
                <div className="dates">13 - 23 Mar 2022</div>
                <span>
                    Class / Category:
                </span>
                <div className="desc">
                    Men Elite, Women Elite, Men U-23, Women U-23, Men Junior, Women Junior, Challenge~CB 13-14, Challenge~CG 13-14, Challenge~CB 15-16, Challenge~CG 15-16,
                </div>
                <div className="btn-cards">
                    {/* <Link to={`/calendar/${data.props}`}> */}
                        <button className="btn-view-detail">
                            View Details
                        </button>
                    {/* </Link> */}
                    <button className="btn-register">
                        Register Race
                    </button>
                </div>
            </div>
        </div>
    )
}
