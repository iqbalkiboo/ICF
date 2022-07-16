import moment from 'moment'
import React from 'react'
import { useNavigate } from 'react-router'
import '../../assets/style/card.css'


export default function Card(props) {
    const {item} = props
    const navigate = useNavigate()

    const handleDetailRace = (e, raceId) => {
        e.preventDefault();
        navigate(`/calendar/${raceId}`, { 
            replace: true
        });
    }

    return (
        <div className="card">
            <img src={`${process.env.REACT_APP_BE_URL_MEMBER_UPLOAD}` + item?.poster } alt="Avatar" style={{width: "100%"}} />
            <div className="container">
                <h4>
                    <b>{item?.nama_event}</b>
                </h4> 
                <div className="chips">
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
    )
}
