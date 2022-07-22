import React from 'react'
import '../../assets/style/about.css'
import imageAbout1 from '../../assets/image/about/about1.png'
import imageAbout2 from '../../assets/image/about/about2.png'
import imageAbout3 from '../../assets/image/about/about3.png'
import { useTranslation } from 'react-i18next'

export default function AboutPages() {
    const { t } = useTranslation();
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
                    <div className="years-about">19<b>59</b></div>
                    <div className="story">
                        <p>
                            {t("The Indonesian Cycling Federation or ISSI (in Indonesian: Ikatan Sepeda Sport Indonesia) is the national governing body of cycle racing in Indonesia.")}
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
            </div>
            <div className="about-2">
                <div className="sub-title-years-2">
                    <div className="years-about">19<b>59</b></div>
                    <div className="story">
                        <p>
                            {t("The Indonesian Cycling Federation or ISSI (in Indonesian: Ikatan Sepeda Sport Indonesia) is the national governing body of cycle racing in Indonesia.")}
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
                <div className="image-grid-about">
                    {itemData?.map((item, index) => (
                        <div key={index} className="content-list-about">
                            <img src={item.img} alt="event-bike" style={{width: "90%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="about">
                <div className="image-grid-about">
                    {itemData?.map((item, index) => (
                        <div key={index} className="content-list-about">
                            <img src={item.img} alt="event-bike" style={{width: "90%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}/>
                        </div>
                    ))}
                </div>
                <div className="sub-title-years">
                    <div className="years-about">19<b>59</b></div>
                    <div className="story">
                        <p>
                            {t("The Indonesian Cycling Federation or ISSI (in Indonesian: Ikatan Sepeda Sport Indonesia) is the national governing body of cycle racing in Indonesia.")}
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
