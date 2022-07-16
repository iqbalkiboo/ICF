import React from 'react'
import '../../../assets/style/race.css'
import moment from 'moment'
import { useNavigate } from 'react-router'

export default function UpComingRace(props) {
    const navigate = useNavigate()

    const handleDetailRace = (e, raceId) => {
        e.preventDefault();
        navigate(`/calendar/${raceId}`, { 
            replace: true
        });
    }

    return (
        <div className="wrap-race">
            {props?.props.map((item, index) => (
                <div key={index} className="card">
                    <img src={`${process.env.REACT_APP_BE_URL_MEMBER_UPLOAD}` + item?.poster } alt="card-event"/>
                    <div className="container">
                        <div className="h4">
                        {item?.nama_event}
                        </div> 
                        <div className="chip">
                            <button className="flag-tag" disabled>{item?.tipe_race}</button> 
                        </div>
                        
                        <span>Registration Date:</span>
                        <div className="dates">{moment(item?.tgl_dibuka).format('LL') + " - " + moment(item?.tgl_ditutup).format('LL') }</div>
                        <span>
                            Class / Category:
                        </span>
                        <div className="desc">
                        {JSON.parse(item?.kelas).map(kelas => kelas.kelas + ", ")}
                        </div>
                        <div className="btn-cards">
                            <button className="btn-view-detail" onClick={(e) => handleDetailRace(e, item?.id)}>
                                View Details
                            </button>
                            <button className="btn-register">
                                <a href={`https://member.icf.id/race-management/all/${item?.id}`} target="_blank" rel="noreferrer">Register Race</a>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
