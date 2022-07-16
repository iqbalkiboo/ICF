import React from 'react'
import '../../../assets/style/race.css'
import imageWomanBike from '../../../assets/image/woman.png'
import imageBikes from '../../../assets/image/bikes.png'
import imageTrend from '../../../assets/image/trend-bike.png'

export default function UpComingRace(props) {
    return (
        <div className="wrap-race">
            {newsEvent.map((item) => (
                <div key={item.label} className="card">
                    <img src={item.imagePath} alt="card-event"/>
                    <div className="container">
                        <div className="h4">
                            ICF BMX NATIONAL CHAMPIONSHIP 2022
                        </div> 
                        <div className="chip">
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
                            <button className="btn-view-detail">
                                View Details
                            </button>
                            <button className="btn-register">
                                <a href="https://member.icf.id/race-management/all" target="_blank" rel="noreferrer">Register Race</a>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


const newsEvent = [
    {
        label: 'Women On Bikes',
        imagePath: imageWomanBike,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Mountain Side Track - Ngawi',
        imagePath: imageBikes,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Bike Commuting Trends 2022',
        imagePath: imageTrend,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    }
]