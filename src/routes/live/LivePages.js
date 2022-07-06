import { useEffect, useState } from "react"
import API from "../../service/API"
import '../../assets/style/live.css'

export default function LivePages() {
    const[live, setLive] = useState([])
    const urlParams = '?sort%5B0%5D=createdAt%3Adesc&pagination%5Bpage%5D=1&pagination%5BpageSize%5D=1'
    
    function fetchLive() {
        try {
            return API.GET_LIVE(urlParams)
            .then((res) => {
                setLive(res?.data?.data)
            })
            
        } catch (error) {
            console.log('error ==> ',error);
        }
    }
    useEffect(() => {
        fetchLive()
    }, [])
    return (
        <div className="about-pages">
            <div className="labels">Live Race</div>
            <div className="list-news-event">
                {live?.map(item => (
                    <div className="container-live" key={item?.index}>
                        <iframe className="responsive-iframe" src={item?.attributes?.video_live} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                ))}
                {/* <iframe width="1440" height="780" src="https://www.youtube.com/embed/5FfYsP4cXGE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </div>
        </div>
    )
}
