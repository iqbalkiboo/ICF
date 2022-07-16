import React, {useEffect, useState} from 'react'
import '../../assets/style/gallery.css'
import {
    Modal,
    Backdrop,
    Fade
  } from "@material-ui/core";
import { Box } from '@mui/material';
import API from '../../service/API';
import galleryParams from '../../service/URL/gallery/galleryPageParams';
import LinesEllipsis from 'react-lines-ellipsis';

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [dataGallery, setDataGallery] = useState([])

  const handleClose = () => {
    setOpen(false);
  };
  const handleImage = (value) => {
      setImage(value);
      setOpen(true);
  };

  const fetchGallerys = (paramsGallery) => {
    try {
      return API.GET_GALLERY('?' + paramsGallery.pagination + paramsGallery.paginationSize + paramsGallery.sort + paramsGallery.populate)
      .then((res) => {
        setDataGallery(res?.data?.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const paramsGallery = galleryParams.getUrlGalleryPage
    fetchGallerys(paramsGallery)
  },[])
  
  return (
    <div>
      <div className="list-news-event">
        {dataGallery.map((item) => (
          <div className="figure" onClick={() => handleImage(item)}>
            <img src={`${process.env.REACT_APP_BE_URL + item.attributes.image.data.attributes.url}`}
              alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
              title="Photo by Giacomo Lucarini for Unsplash"
              style={{width: "100%", height: '34vh', objectFit: "cover", borderRadius: '10px'}}
            />
            <figcaption className="header__caption" role="presentation">
                <h1 className="title title--primary">{item.attributes.title}</h1>
                <h2 className="title title--secondary">
                  <LinesEllipsis
                    className="desc-event"
                    text={item?.attributes?.description}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                  />
                </h2>
            </figcaption>
        </div>
        ))}
      </div>
      
      <Modal
        className='modal-gallery'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500
        }}
      >
        <Box className='box-modal'>
            <Fade in={open} timeout={500} className='fade-img'>
                <img
                    src={`${process.env.REACT_APP_BE_URL}` + image?.attributes?.image?.data?.attributes?.url}
                    alt="asd"
                    className='this-img'
                />
            </Fade>
            <div className='text-modal'>{image?.attributes?.title}</div>
            <div className='text-modal'>{image?.attributes?.description}</div>
        </Box>
      </Modal>
    </div>
  )
}