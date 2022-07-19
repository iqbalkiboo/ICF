import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// import gallery static
import imageAbout1 from '../../../assets/image/about/about1.png'
import imageAbout2 from '../../../assets/image/about/about2.png'
import imageAbout3 from '../../../assets/image/about/about3.png'

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=4 4x`,
  };
}

export default function AboutGallery() {
    return (
        <div style={{margin: '20px', overflow: 'none'}}>
            <ImageList
                sx={{ width: 620, height: 570 }}
                variant="quilted"
                cols={4}
                rowHeight={131}
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
                    />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
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
