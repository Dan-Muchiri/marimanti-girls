import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import imageList from './Images'; // Importing the image URLs
import styles from "./GalleryStyles.module.css";

// Import the necessary CSS for the lazy loading
import 'react-lazy-load-image-component/src/effects/blur.css';

function Gallery() {
  return (
    <>
      <div className={styles.wAw}>
        <h2>Gallery</h2>
      </div>
      <div className={styles.galleryContainer}>
        {imageList.map((src, index) => (
          <LazyLoadImage
            key={index}
            src={src} // Image source
            alt={`Gallery image ${index + 1}`} // Alt text
            className={styles.galleryImage} // Apply your custom styling
            effect="blur" // You can change the effect (e.g., 'opacity', 'blur', etc.)
            loading="lazy" // Enables lazy loading with fallback in case the library fails
          />
        ))}
      </div>
    </>
  );
}

export default Gallery;
