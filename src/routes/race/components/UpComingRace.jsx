import React from 'react'
import '../../../assets/style/race.css'
import moment from 'moment'
import { useNavigate } from 'react-router'
import LinesEllipsis from 'react-lines-ellipsis'

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
                <div key={index} className="cards">
                    <img src={`${process.env.REACT_APP_BE_URL_MEMBER_UPLOAD}` + item?.poster } alt="card-event"/>
                    <div className="container">
                        <div className="h4">
                        {item?.nama_event}
                        </div> 
                        <div className="chip">
                            <button className="flag-tag" disabled>{item?.tipe_race}</button> 
                        </div>
                        
                        <span>Registration Date:</span>
                        <div className="dates">{moment(item?.tgl_dibuka).format('DD MMMM YYYY') + " - " + moment(item?.tgl_ditutup).format('DD MMMM YYYY') }</div>
                        <span>
                            Class / Category:
                        </span>
                        <div className="desc">
                            <LinesEllipsis
                                className="desc-event"
                                text={JSON.parse(item?.kelas).map(kelas => kelas.kelas + ", ")}
                                maxLine='2'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            />
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
