import React from 'react'
// import { useTranslation } from "react-i18next";
import '../../assets/style/highlight.css'
// import { Carousel } from 'react-responsive-carousel';
// import moment from 'moment';

export default function Highlight(props) {

    // TODO: uncomment after fixing bug from member.icf.id
    // const { t } = useTranslation();
    // const data = props.props
    return (
        <div className="highlight">
            <></>
            {/* {data.length !== 0 ? 
                <div className="for-highlight">
                    <span>Race Hub</span>
                    <Carousel autoPlay infiniteLoop={true} showThumbs={false} showArrows={false}>
                        {data?.map((items, index) => (
                            <div key={index} className="list-highlight">
                                <div className="captions">
                                    {moment(items?.tgl_ditutup).format('DD MMMM YYYY')}
                                </div>
                                <div>
                                    <span className="captions">
                                        {items?.nama_event}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                : 
                <span className="dataNotFound">{t("No Up Coming Race")}</span>
            } */}
        </div>
    )
}