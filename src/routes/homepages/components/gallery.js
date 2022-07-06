import * as React from 'react';
import '../../../assets/style/gallery.css'

export default function GalleryPages(props) {
  const data = props.props
    return (
        <div className="image-grid">
          <img className="image-grid-col-2 image-grid-row-2" src={`${process.env.REACT_APP_BE_URL}` + props?.props[0]?.attributes?.image?.data?.attributes?.url} alt="gallery-icf" />
          {data?.map((item, index) => (
              <img key={index} src={`${process.env.REACT_APP_BE_URL}` + item?.attributes?.image?.data?.attributes?.url} alt="architecture"/>
          ))}
        </div>
    );
}
