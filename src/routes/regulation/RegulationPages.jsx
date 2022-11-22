import React, { useEffect, useState } from 'react'
import '../../assets/style/regulation.css'
import imageRegulation from '../../assets/image/partners/icf-office.png'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { saveAs } from "file-saver";
import { useTranslation } from 'react-i18next';
import API from '../../service/API';
import regulationParams from '../../service/URL/regulation/regulationParams';
import moment from 'moment';

// const listMainRegulation = [
//     {
//         text: 'LAPORAN KERJA BIDANG ORGANISASI PB ISSI'
//     },
//     {
//         text: 'ANGGARAN DASAR ISSI'
//     },
//     {
//         text: 'ANGGARAN RUMAH TANGGA ISSI'
//     },
//     {
//         text: 'PERATURAN PERWASITAN'
//     },
//     {
//         text: 'PERATURAN PERLOMBAAN'
//     },
//     {
//         text: 'POIN NASIONAL'
//     },
// ]


export default function RegulationPages() {
    const [dataRegulation, setDataRegulation] = useState([]);
    const { t } = useTranslation();

    const fetchRegulations = (params) => {
        try {
            return API.GET_REGULATIONS('?' + params.sort + params.populate)
            .then((res) => {
                setDataRegulation(res?.data?.data)
            })
          } catch (error) {
            console.log(error)
          }
    }

    const downloadFile = (e, path, filename) => {
        e.preventDefault()

        if (path) { 
            const downloadUrl = process.env.REACT_APP_BE_URL + path
            saveAs(downloadUrl, filename)
        }

    }

    useEffect(() => {
        const params = regulationParams
        fetchRegulations(params)
      },[])

    return (
        <div className="about-pages">
            <div className="regulation">
                <div className="reg-pages">
                    <div style={{textAlign: "left", fontSize: "42px", fontWeight: "600", padding: "10px auto"}}>{t("REGULATION")}</div>
                        <div className="story" style={{textAlign: "left"}}>
                        {t("Translations of the UCI Constitution and Regulations in various languages are available on the website of several National Federations. These texts provide guidance for users, however they cannot be considered as official texts binding the responsibility of the UCI. In the case of disparity between the UCI’s original version and one of the translations, only the original UCI texts should be taken into account.")}
                    </div>
                </div>
                <div>
                    <img src={imageRegulation} alt="regulation-icf" style={{ width: "100%", objectFit: "cover"}}/>
                </div>
            </div>
            <div className="main-reg">
                {/* <div className="main-reg-menus" style={{ width: "26%", margin: "30px auto", padding: "20px 20px" , textAlign: "left", background: "#fff", color: "#000"}}>
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
                </div> */}
            
                <div className="reg-pages-main">
                    {dataRegulation.map((item, index) => (
                        <div key={index} className="reg-list-items">
                            <span>{item?.attributes?.title}</span>
                            <div className="set-docs-reg">
                                <div className="wrap-docs">
                                    <span className="title-reg">
                                        {item.attributes?.sub_title}
                                    </span>
                                    <div className="date-reg">
                                         {item?.attributes?.updatedAt ? ('updated ' + moment(item?.attributes?.updatedAt).format('DD MMMM YYYY')).toUpperCase() : ""}
                                    </div>
                                </div>
                                {
                                    item?.attributes?.file?.data?.attributes?.url &&
                                    <div className="wrap-docs">
                                        <button onClick={(e) => downloadFile(e, item?.attributes?.file?.data?.attributes?.url, item?.attributes?.file?.data?.attributes?.name)}>
                                            <FileDownloadIcon sx={{ fontSize: 20, color: "#fff" }} />
                                        </button>
                                    </div>
                                }
                               
                            </div>
                            <hr style={{color: "#fff"}}/>
                        </div>
                    ))}
                </div>
            </div>
            <hr className="new1"/>
        </div>
    )
}
