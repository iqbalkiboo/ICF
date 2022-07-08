import React, {useEffect, useState} from 'react'
import '../../assets/style/gallery.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
        }&fit=crop&auto=format&dpr=4 4x`,
    };
}

const useStyles = makeStyles((theme) => ({
    text: {
        color: '#fff',
        textAlign: "center"
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
    const [image, setImage] = useState("false");
    const [dataGallery, setDataGallery] = useState([])
    const paramsGallery = galleryParams.getUrlGallery
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleImage = (value) => {
        setImage(value);
        setOpen(true);
    };

    const fetchGallerys = () => {
      try {
        return API.GET_GALLERY('?' + paramsGallery.pagination + paramsGallery.paginationSize + paramsGallery.sort + paramsGallery.populate)
        .then((res) => {
          setDataGallery(res?.data?.data)
        })
      } catch (error) {
        console.log(error)
      }
    }

    console.log(dataGallery)

    useEffect(() => {
      fetchGallerys()
    },[])
    return (
        <>
            <div className="wrapp">
                <div className="labels-gall">Gallery</div>
                <div className="wrap-gallery-pages">
                    {/* <ImageList
                        sx={{ width: 1520, height: 750 }}
                        variant="quilted"
                        cols={4}
                        rowHeight={141}
                        gap={12}
                        overflow="none"
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                                style={{ borderRadius: '12px'}}
                                onClick={() => handleImage(item)}
                            />
                            </ImageListItem>
                        ))}
                    </ImageList> */}
                    <ImageList sx={{ width: 900, height: 900 }} cols={3} rowHeight={164}>
                      {dataGallery.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            className="images-gallery"
                            src={`${process.env.REACT_APP_BE_URL + item.attributes.image.data.attributes.url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${process.env.REACT_APP_BE_URL + item.attributes.image.data.attributes.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.attributes.title}
                            loading="lazy"
                            onClick={() => handleImage(item)}
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    {/* <GalleryPages /> */}
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
                                    src={`${process.env.REACT_APP_BE_URL}` + image.attributes.image.data.attributes.url}
                                    alt="asd"
                                    style={{ maxHeight: "50%", maxWidth: "50%", margin: "0 auto" }}
                                />
                            </Fade>
                            <div className={classes.text}>{image.attributes.description}</div>
                        </Box>
                    </Modal>
                </div>
            </div>
            
        </>
    )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    }
  ];
  
