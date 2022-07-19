import React from 'react'
import '../../../assets/style/race.css'
import moment from 'moment'
import { useNavigate } from 'react-router'
import LinesEllipsis from 'react-lines-ellipsis'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next'

export default function PastRace(props) {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const handleDetailRace = (e, raceId) => {
        e.preventDefault();
        navigate(`/calendar/${raceId}`, { 
            replace: true
        });
    }
    const onPaginationSizeChange = (event, value) => {
        props.setPagination(value);
    };

    return (
        <div>
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
                            <span>{t("Registration Date")}:</span>
                            <div className="dates">{moment(item?.tgl_dibuka).format('DD MMMM YYYY') + " - " + moment(item?.tgl_ditutup).format('DD MMMM YYYY') }</div>
                            <span>
                                {t("Class / Category")}:
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
                                    {t("View Detail")}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="paginations-race">
                <Stack spacing={2}>
                    <Pagination
                        onChange={onPaginationSizeChange}
                        count={props.meta.total_pages}
                        renderItem={(item) => (
                            <PaginationItem
                            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                            />
                        )}
                    />
                </Stack>
            </div>
        </div>
    )
}
