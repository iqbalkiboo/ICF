import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import moment from 'moment';

export default function CarouselResponsive(data) {
    const datas = data.data
    return (
        <div className="sec-grid-responsive">
            <Carousel infiniteLoop={false} showThumbs={false} showArrows={false}>
            {/* row 1 */}
                <div className="timeline-carousel">
                    {datas?.timeline_date1 && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline_date1).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline_date1).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                                {datas?.timeline1?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                    {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {datas?.timeline2_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline2_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline2_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                                {datas?.timeline2?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                        {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
                <div className="timeline-carousel">
                    {datas?.timeline3_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline3_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline3_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                            {datas?.timeline3?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                    {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {datas?.timeline4_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline4_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline4_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                                {datas?.timeline4 !== null ? (
                                    <>
                                        {datas?.timeline4?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                            <li key={index}>
                                            {timeline !== null ? timeline : <span>no timeline available</span>}
                                            </li>
                                        ))}
                                    </>
                                ) : (
                                    <li>
                                        No Timeline Available
                                    </li>
                                )}
                            </ul>
                        </div>
                    }
                </div>
                <div className="timeline-carousel">
                    {datas?.timeline5_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline5_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline5_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                                {datas?.timeline5?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                        {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {datas?.timeline6_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline6_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline6_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                            {datas?.timeline6?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                    {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
                <div className="timeline-carousel">
                    {datas?.timeline7_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline7_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline7_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                                {datas?.timeline7?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                    {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {datas?.timeline8_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline8_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline8_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                                {datas?.timeline8?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                        {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
                <div className="timeline-carousel">
                    {datas?.timeline9_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline9_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline9_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                            {datas?.timeline9?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                    {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {datas?.timeline10_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline10_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline10_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                            {datas?.timeline9?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                    {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
                <div className="timeline-carousel">
                    {datas?.timeline11_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline11_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline11_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                            {datas?.timeline9?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                    {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                    {datas?.timeline12_date && 
                        <div className="date-list">
                            <div style={{fontWeight: "600"}}>
                                {moment(datas?.timeline12_date).format('DD MMMM').toUpperCase()}
                            </div>
                            <span>{moment(datas?.timeline12_date).format('dddd').toUpperCase()}</span>
                            <hr style={{
                                backgroundColor: "#fff", 
                                width: "100%", 
                                border: "none", 
                                height: "1px",
                                maxWidth: "100px",
                                margin: "16px 0px 0px 0px",
                            }}/>
                            <ul>
                            {datas?.timeline9?.replace(/\n/g, ",").split(",").map((timeline, index) => (
                                    <li key={index}>
                                    {timeline}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </Carousel>
        </div>
    )
}
