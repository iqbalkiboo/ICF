import React from 'react'
import '../../assets/style/regulation.css'
import imageRegulation from '../../assets/image/regulations.png'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const listMainRegulation = [
    {
        text: 'LAPORAN KERJA BIDANG ORGANISASI PB ISSI'
    },
    {
        text: 'ANGGARAN DASAR ISSI'
    },
    {
        text: 'ANGGARAN RUMAH TANGGA ISSI'
    },
    {
        text: 'PERATURAN PERWASITAN'
    },
    {
        text: 'PERATURAN PERLOMBAAN'
    },
    {
        text: 'POIN NASIONAL'
    },
]

const listContent = [
    {
        label: 'LAPORAN KERJA BIDANG ORGANISASI PB ISSI',
        title: 'LAPORAN 2022',
        date: '2 Feb 2022'
    },
    {
        label: 'ANGGARAN DASAR ISSI',
        title: 'LAPORAN 2022',
        date: '2 Feb 2022'
    },
    {
        label: 'ANGGARAN RUMAH TANGGA ISSI',
        title: 'LAPORAN 2022',
        date: '2 Feb 2022'
    },
    {
        label: 'PERATURAN PERWASITAN',
        title: 'LAPORAN 2022',
        date: '2 Feb 2022'
    },
    {
        label: 'PERATURAN PERLOMBAAN',
        title: 'LAPORAN 2022',
        date: '2 Feb 2022'
    },
    {
        label: 'POIN NASIONAL',
        title: 'LAPORAN 2022',
        date: '2 Feb 2022'
    },
]

export default function RegulationPages() {
    return (
        <>
            <div className="regulation">
                <div className="reg-pages">
                    <div style={{textAlign: "left", fontSize: "42px", fontWeight: "600", padding: "10px auto"}}>REGULATIONS</div>
                        <div className="story" style={{textAlign: "left"}}>
                        Translations of the UCI Constitution and Regulations in various languages are available on the website of several National Federations. These texts provide guidance for users, however they cannot be considered as official texts binding the responsibility of the UCI. In the case of disparity between the UCI’s original version and one of the translations, only the original UCI texts should be taken into account.
                    </div>
                </div>
                <div>
                    <img src={imageRegulation} alt="regulation-icf" style={{ width: "100%", objectFit: "cover"}}/>
                </div>
            </div>
            <div className="main-reg">
                <div className="main-reg-menus" style={{ width: "20%", margin: "30px auto", padding: "20px 0" , textAlign: "left"}}>
                    {listMainRegulation.map((item, index) => (
                        <div key={index} className="list-reg">
                            <div style={{padding: "4px"}}>
                                <span className="list-main-reg">
                                    {item.text}
                                </span>
                            </div>
                            <hr style={{color: "#DC2028"}}/>
                        </div>
                    ))}
                </div>
            
                <div className="reg-pages-main">
                    {listContent.map((item, index) => (
                        <div key={index} className="reg-list-items">
                            <span>{item.label}</span>
                            <div className="set-docs-reg">
                                <div className="wrap-docs">
                                    <span className="title-reg">
                                        {item.title}
                                    </span>
                                    <div className="date-reg">
                                        update {item.date}
                                    </div>
                                </div>
                                <div className="wrap-docs">
                                    <FileDownloadIcon sx={{ fontSize: 20 }} />
                                </div>
                            </div>
                            <hr style={{color: "#fff"}}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
