import * as React from 'react';
import '../../../assets/style/gallery.css'

export default function GalleryPages(props) { 
  const data = props.dataGallery
  let firstData = '';
  let sliceData = [];
  
  if (data.length > 0) { 
    firstData = data[0]?.attributes?.image?.data?.attributes?.url;
    sliceData = data.slice(1)
  }

    return (
        <div className="image-grid">
          <img className="image-grid-col-2 image-grid-row-2" src={`${process.env.REACT_APP_BE_URL}` + firstData } alt="gallery-icf" />
          {sliceData?.map((item, index) => (
              <img key={index} src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url} alt="architecture"/>
          ))}
        </div>
    );
}
