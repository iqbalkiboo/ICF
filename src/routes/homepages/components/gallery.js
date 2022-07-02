import * as React from 'react';
import '../../../assets/style/gallery.css'

export default function GalleryPages() {
    return (
        <div class="image-grid">
          <img class="image-grid-col-2 image-grid-row-2" src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="architecture" />
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="architecture"/>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="architecture"/>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="architecture"/>
          <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="architecture"/>
        </div>
    );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast'
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
    // cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    // cols: 2,
  },
];
