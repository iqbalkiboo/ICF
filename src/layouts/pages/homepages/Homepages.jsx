import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

import '../../../assets/style/homepages.css'

import GalleryPages from './components/gallery';
import AboutGallery from './components/aboutGallery';

import CarouselPages from '../../../components/carrousel/Carousel'
import imageRoad from '../../../assets/image/road.svg'
import imageOffRoad from '../../../assets/image/offroad.svg'
import imageTrack from '../../../assets/image/track.svg'
import imageWomanBike from '../../../assets/image/woman.png'
import imageBikes from '../../../assets/image/bikes.png'
import imageTrend from '../../../assets/image/trend-bike.png'
import partner1 from '../../../assets/image/partners/image1.svg'
import partner2 from '../../../assets/image/partners/image2.svg'
import partner3 from '../../../assets/image/partners/image3.svg'
import partner4 from '../../../assets/image/partners/image4.svg'
import API from '../../../service/API';

const images = [
    {
        label: 'ROAD',
        imagePath: imageRoad
    },
    {
        label: 'OFF ROAD',
        imagePath: imageOffRoad
    },
    {
        label: 'TRACK',
        imagePath: imageTrack
    }
]

const newsEvent = [
    {
        label: 'Women On Bikes',
        imagePath: imageWomanBike,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Mountain Side Track - Ngawi',
        imagePath: imageBikes,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Bike Commuting Trends 2022',
        imagePath: imageTrend,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Women On Bikes',
        imagePath: imageTrend,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Mountain Side Track - Ngawi',
        imagePath: imageBikes,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    },
    {
        label: 'Bike Commuting Trends 2022',
        imagePath: imageWomanBike,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan magna pellentesque interdum sagittis. Cras aliquam sapien vitae volutpat vulputate...'
    }
]

const partnerList = [
    {
        label: 'UCI',
        imagePartner: partner1
    },
    {
        label: 'KEMENPORA',
        imagePartner: partner2
    },
    {
        label: 'OLIMPIADE',
        imagePartner: partner3
    },
    {
        label: 'POLRI',
        imagePartner: partner4
    }
]

function Homepages() {
    const [home, setHome] = React.useState([]);

    console.log(home)

    function fetchHome() {
		return API.GET_HOME()
			.then((res) => {
				console.log(res)
			})
			.then((result) => {
				setHome(result)
			});
	}

    useEffect(() => {
        fetchHome()
    }, [])
    return (
        <div className="sections">
            <CarouselPages />
            <div className="disciplines">
                <div className="labels">disciplines</div>
                <div className="list-disciplines">
                    {images.map((item) => (
                        <div className="container" key={item.label}>
                            <img src={item.imagePath} alt="Avatar" className="image" />
                            <div className="overlay">
                                <div className="text">
                                    {item.label}
                                    <hr className="dividers" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="homepages">
                <div className="labels">
                    news, event, and insight
                    <Link to="/news">
                        <span style={{fontSize: "16px", marginRight: "80px", color: "#fff", textDecoration: "none"}}>Read More</span>
                    </Link>
                </div>
                <div className="list-news-event">
                    <Grid container
                        spacing={1}
                        direction="coloumn"
                        alignItems="center"
                        justify="center"
                    >
                            {newsEvent.map((item) => (
                                <Grid item xs={4}>
                                    <div key={item.label} className="content-list">
                                        <img src={item.imagePath} alt="event-bike" style={{width: "100%"}}/>
                                        <div className="event">
                                            <span className="label-event">{item.label}</span>
                                            <p className="desc-event">{item.desc}</p>
                                            <div className="footlabel">
                                                <Link to="/news">
                                                    Read More
                                                </Link>
                                                <span>
                                                    21 MAR 2022
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            ))}
                    </Grid>
                </div>
            </div>
            <div className="homepages">
                <div className="labels">
                    Gallery
                    <Link to="/gallery">
                        <span style={{fontSize: "16px", marginRight: "80px", color: "#fff", textDecoration: "none"}}>View Gallery</span>
                    </Link>
                    
                </div>
                <div className="gallery">
                    <GalleryPages />
                </div>
            </div>
            <div className="homepages">
                <div className="about-icf"> 
                    <div className="labels-gallery">About ICF</div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <div>
                                <AboutGallery />
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="sub-title-years">
                                <div className="years-about">19<b>59</b></div>
                                <div className="story-about">
                                    <p>
                                        The Indonesian Cycling Federation 
                                        or ISSI (in Indonesian: Ikatan Sepeda Sport Indonesia) 
                                        is the national governing body of cycle racing in Indonesia. 
                                    </p>
                                    <p>
                                        The ISSI is a member of the UCI and the ACC. 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Morbi elementum eget dolor vel vulputate. In rhoncus tristique dolor,
                                        vitae venenatis metus tristique eget. Sed iaculis risus in porttitor porta. 
                                        Duis eget ligula lacus. Donec eros nunc, volutpat quis elit vel, tempor porttitor purus. 
                                        Maecenas quam ipsum, dapibus eu volutpat ac, venenatis nec metus. 
                                        Vestibulum egestas nulla porta orci finibus, quis elementum sapien tempus.
                                    </p>
                                    <p>
                                        In tempus lobortis porta. 
                                        Phasellus blandit, est sit amet cursus porttitor, 
                                        massa felis tempus risus, eget sagittis dolor mauris ut arcu. 
                                        In at facilisis dolor, in scelerisque odio. Morbi tincidunt a mi et rhoncus. 
                                        Integer at euismod lacus. Mauris quam urna, lobortis sed mauris ut, 
                                        facilisis efficitur nibh. Integer tristique nibh vel est pharetra, 
                                        sit amet malesuada felis vehicula. Phasellus condimentum nulla in mattis gravida. 
                                        Sed auctor massa tempor pharetra luctus. Suspendisse efficitur magna in est finibus aliquam. 
                                        Donec ac pellentesque nunc.
                                    </p>
                                    <div style={{ textAlign: "center", marginTop: "40px"}}>
                                        <Link to="/about">
                                            <button className="learn-more-btn">Learn More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="partners">
                        <span>ICF PARTNERS</span>
                        <div className="partner-list">
                            <Grid container
                                spacing={1}
                                direction="coloumn"
                                alignItems="center"
                                justify="center"
                            >
                                    {partnerList.map((item) => (
                                        <Grid item xs={3}>
                                            <div key={item.label} className="content-list">
                                                <img src={item.imagePartner} alt={item.label} style={{width: "64%"}}/>
                                            </div>
                                        </Grid>
                                    ))}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepages
