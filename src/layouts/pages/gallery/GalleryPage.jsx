import React from 'react'
import '../../../assets/style/about.css'
import GalleryPages from '../homepages/components/gallery'
// import AboutGallery from '../homepages/components/aboutGallery'

export default function GalleryPage() {
    return (
        <>
            <div className="about-pages">
                <div className="labels">Gallery</div>
                <GalleryPages />
            </div>
            
        </>
    )
}
