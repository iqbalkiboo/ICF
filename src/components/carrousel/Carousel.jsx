import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../assets/style/carousel.css'
import image from '../../assets/image/img-banner.svg'

const images = [
    {
        label: 'Watch the special video that summarize ICF achievement.',
        imgPath: image,
        title: 'ICF 2019 HIGHLIGHT'
    },
    {
        label: 'Watch the special video that summarize ICF achievement.',
        imgPath: image,
        title: 'ICF 2020 HIGHLIGHT'
    },
    {
        label: 'Watch the special video that summarize ICF achievement.',
        imgPath: image,
        title: 'ICF 2021 HIGHLIGHT'
    },
    {
        label: 'Watch the special video that summarize ICF achievement.',
        imgPath: image,
        title: 'ICF 2022 HIGHLIGHT'
    },
];

function CarouselPages() {
    return (
            <Carousel autoPlay showThumbs={false}>
                {images.map((item) => (
                    <div key={item} className="banner">
                        <img src={item.imgPath} alt="banner"/>
                        <div className="card-banner">
                            <span className="title-highlight">
                                {item.title}
                            </span>
                            <span className="label-highlight">
                                {item.label}
                            </span>
                        </div>
                    </div>
                ))}
            </Carousel>
    )
}

export default CarouselPages
