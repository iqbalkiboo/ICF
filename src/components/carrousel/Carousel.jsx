import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../assets/style/carousel.css'
import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function CarouselPages(props) {
    const data = props.props
    const { t } = useTranslation();

    const getURIParam = (url) => {

        if(url.trim().length > 0) { 
            const urlArray = url.split('/');
            const uri = urlArray[urlArray.length - 2];
            const id = urlArray[urlArray.length - 1]
    
            return `/${uri}/${id}`
        } else {
            return "";
        }
    }

    return (
        <div>
            <Carousel autoPlay infiniteLoop={true} showThumbs={false} showArrows={true}>
                {data?.map((item, index) => (
                    <div key={index} className="banner">
                        <img src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.banner?.data?.attributes?.url} alt="banner" width="100%" height="625px"/>
                        <div className="card-banner">
                            <span className="title-highlight">
                                {item?.attributes?.title}
                            </span>
                            <LinesEllipsis 
                                className="label-highlight"
                                text={item?.attributes?.description}
                                maxLine='2'
                                ellipsis='...'
                                trimRight
                                basedOn='letters'
                            />
                            <Link to={getURIParam(item?.attributes?.link)}> <span className="readmore">{t("Read More")}...</span> </Link>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselPages
