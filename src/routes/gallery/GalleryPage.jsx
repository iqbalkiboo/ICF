import React, {useEffect, useState} from 'react'
import '../../assets/style/gallery.css'
import {
    makeStyles,
    Modal,
    Backdrop,
    Fade
  } from "@material-ui/core";
import { Box } from '@mui/material';
import API from '../../service/API';
import galleryParams from '../../service/URL/home/galleryParams';
// import GalleryPages from '../homepages/components/gallery';

const useStyles = makeStyles((theme) => ({
      text: {
          color: '#fff',
          textAlign: "center"
      },
      textModal: {
        color: '#fff',
        textAlign: "center",
        padding: "12px"
    },
      modal: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
              backgroundcolor: "red"
          }
      },
      img: {
          outline: "none",
          display: "block"
      },
      box: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 900,
          outline: 'none',
          p: 4
      }
  }));

export default function GalleryPage() {
  const classes = useStyles();
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
    const paramsGallery = galleryParams.getUrlGallery
    fetchGallerys(paramsGallery)
  },[])
  return (
    <div>
      <div className="gallery-list gallery__content--flow">
        {dataGallery.map((item) => (
          <div className="figure" onClick={() => handleImage(item)}>
            <img src={`${process.env.REACT_APP_BE_URL + item.attributes.image.data.attributes.url}`}
              alt="A light brown, long-haired chihuahua sitting next to three rubber duckies. "
              title="Photo by Giacomo Lucarini for Unsplash"
            />
            <figcaption className="header__caption" role="presentation">
                <h1 className="title title--primary">{item.attributes.title}</h1>
                <h2 className="title title--secondary">{item.attributes.description}</h2>
            </figcaption>
        </div>
        ))}
      </div>
      
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500
        }}
      >
        <Box className={classes.box}>
            <Fade in={open} timeout={500} className={classes.img}>
                <img
                    src={`${process.env.REACT_APP_BE_URL}` + image?.attributes?.image?.data?.attributes?.url}
                    alt="asd"
                    style={{ maxHeight: "50%", maxWidth: "50%", margin: "0 auto" }}
                />
            </Fade>
            <div className={classes.textModal}>{image?.attributes?.title}</div>
            <div className={classes.textModal}>{image?.attributes?.description}</div>
        </Box>
      </Modal>
    </div>
  )
}