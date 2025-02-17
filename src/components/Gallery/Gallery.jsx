import React, { useState } from 'react';
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
        {imageList.map((src, index) => {
          const [isLoading, setIsLoading] = useState(true);

          return (
            <div className={styles.imageWrapper} key={index}>
              {/* Display spinner while the image is loading */}
              {isLoading && <div className={styles.spinner}></div>}
              
              <LazyLoadImage
                src={src} // Image source
                alt={`Gallery image ${index + 1}`} // Alt text
                className={styles.galleryImage} // Apply your custom styling
                effect="blur" // Optional: adds blur effect while loading
                loading="lazy" // Native lazy loading for fallback
                onLoad={() => setIsLoading(false)} // Hide spinner once the image is loaded
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
