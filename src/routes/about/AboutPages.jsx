import React, { useEffect } from 'react'
import aboutPageParams from '../../service/URL/about/aboutPageParams'
import '../../assets/style/about.css'
import imageAbout1 from '../../assets/image/about/about1.png'
import imageAbout2 from '../../assets/image/about/about2.png'
import imageAbout3 from '../../assets/image/about/about3.png'
import imageJourney1 from '../../assets/image/about/image.png'
import imageJourney2 from '../../assets/image/about/image1.png'
import image20221 from '../../assets/image/about/image2.png'
import image20222 from '../../assets/image/about/image3.png'
import API from '../../service/API';
import { useTranslation } from 'react-i18next'

export default function AboutPages() {
    const { t } = useTranslation();
    const [dataAbout, setDataAbout] = React.useState([]);
    
    const fetchAbout = (about) => {
        try {
            return API.GET_ABOUT('1?' + about.populate)
            .then((res) => {
                setDataAbout(res.data.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const about = aboutPageParams.getAboutPageParams
        fetchAbout(about)
    }, [])
    return (
        <div className="wrap-abouts">
            <div className="labels">{t("ABOUT ICF")}</div>
            <div className="about">
                <div className="image-grid-about">
                    {itemData?.map((item, index) => (
                        <div key={index} className="content-list-about">
                            <img src={item.img} alt="event-bike" style={{width: "90%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                        </div>
                    ))}
                </div>
                <div className="sub-title-years">
                    <div className="years-about"><b>SEJARAH</b></div>
                    <div className="story">
                        {dataAbout.map((item, index) => (
                            <p key={index}>
                            {item?.attributes?.section1_description}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="about-2">
                <div className="sub-title-years-2">
                    <div className="years-about"><b>VISI</b>MISI</div>
                    <div className="story">
                            {dataAbout.map((item, index) => (
                            <p key={index}>
                                {item?.attributes?.section2_description}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="image-grid-about">
                    {journey?.map((item, index) => (
                        <div key={index} className="content-list-about">
                            <img src={item.img} alt="event-bike" style={{width: "90%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="about">
                <div className="image-grid-about">
                    {image2022?.map((item, index) => (
                        <div key={index} className="content-list-about">
                            <img src={item.img} alt="event-bike" style={{width: "90%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                        </div>
                    ))}
                </div>
                <div className="sub-title-years">
                    <div className="years-about"><b>20</b>22</div>
                    <div className="story">
                        {dataAbout.map((item, index) => (
                            <p key={index}>
                                {item?.attributes?.section3_description}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="new1"/>
        </div>
    )
}

const itemData = [
    {
        img: imageAbout1,
        title: 'story',
        rows: 3,
        cols: 2,
    },
    {
        img: imageAbout2,
        title: 'rodeBike',
        cols: 2,
        rows: 2
    },
    {
        img: imageAbout3,
        title: 'pranko',
        cols: 2,
    }
];

const journey = [
    {
        img: imageJourney1,
        title: 'story',
        rows: 3,
        cols: 2,
    },
    {
        img: imageJourney2,
        title: 'rodeBike',
        cols: 2,
        rows: 2
    }
];


const image2022 = [
    {
        img: image20221,
        title: 'story',
        rows: 3,
        cols: 2,
    },
    {
        img: image20222,
        title: 'rodeBike',
        cols: 2,
        rows: 2
    }
];
