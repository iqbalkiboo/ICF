import { Grid } from '@mui/material'
import React from 'react'
import '../../assets/style/about.css'
import imageAbout1 from '../../assets/image/about/about1.png'
import imageAbout2 from '../../assets/image/about/about2.png'
import imageAbout3 from '../../assets/image/about/about3.png'

export default function AboutPages() {
    return (
        <>
            <div className="about-pages">
                <div className="labels">About ICF</div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="image-grid">
                            <img className="image-grid-col-2 image-grid-row-3" src={itemData[0].img} alt="gallery-icf" />
                            {itemData?.map((item, index) => (
                                <img key={index} src={item.img} alt="architecture"/>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="sub-title-years">
                            <div className="years-about">19<b>59</b></div>
                            <div className="story">
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
                                
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="about-pages-2">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="image-grid-hide">
                            <img className="image-grid-col-2 image-grid-row-3" src={itemData[0].img} alt="gallery-icf" />
                            {itemData?.map((item, index) => (
                                <img key={index} src={item.img} alt="architecture"/>
                            ))}
                        </div>
                        <div className="sub-years">
                            <div className="years">19<b>89</b></div>
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
                                
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="image-grid">
                            <img className="image-grid-col-2 image-grid-row-3" src={itemData[0].img} alt="gallery-icf" />
                            {itemData?.map((item, index) => (
                                <img key={index} src={item.img} alt="architecture"/>
                            ))}
                        </div>
                    </Grid>
                    
                </Grid>
            </div>
            <div className="about-pages">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <div className="image-grid">
                            <img className="image-grid-col-2 image-grid-row-3" src={itemData[0].img} alt="gallery-icf" />
                            {itemData?.map((item, index) => (
                                <img key={index} src={item.img} alt="architecture"/>
                            ))}
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="sub-title-years">
                            <div className="years-about">20<b>12</b></div>
                            <div className="story">
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
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <hr />
            </div>
        </>
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
