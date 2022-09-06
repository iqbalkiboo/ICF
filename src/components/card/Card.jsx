import moment from 'moment'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import '../../assets/style/card.css'


export default function Card(props) {
    const {item} = props
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleDetailRace = (e, raceId) => {
        e.preventDefault();
        navigate(`/calendar/${raceId}`, { 
            replace: true
        });
    }

    return (
        <div className="card">
            <img src={`${process.env.REACT_APP_BE_URL_MEMBER_WEB}/images/race/` + item?.poster } alt="Avatar" style={{width: "100%"}} />
            <div className="container">
                <h4>
                    <b>{item?.nama_event}</b>
                </h4> 
                <div className="chips">
                    <button className="flag-tag" disabled>{item?.tipe_race}</button> 
                </div>
                
                <span>{t("Registration Date")}:</span>
                <div className="dates">{moment(item?.tgl_dibuka).format('DD MMMMM YYYY') + " - " + moment(item?.tgl_ditutup).format('DD MMMMM YYYY') }</div>
                <span>
                    {t("Class / Category")}:
                </span>
                <div className="desc">
                {JSON.parse(item?.kelas).map(kelas => kelas.kelas + ", ")}
                </div>
                <div className="btn-cards">
                    <button className="btn-view-detail" onClick={(e) => handleDetailRace(e, item?.id)}>
                        {t("View Detail")}
                    </button>
                    <button className="btn-register">
                    <a href={`${process.env.REACT_APP_BE_URL_MEMBER_WEB}/race-management/all/${item?.id}`} target="_blank" rel="noreferrer">{t("Register Race")}</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
