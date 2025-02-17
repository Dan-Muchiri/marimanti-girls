import React from 'react';
import imageList from './Images'; // Importing the image URLs
import styles from "./GalleryStyles.module.css";

function Gallery() {
  return (
    <>
      <div className={styles.wAw}>
        <h2>Gallery</h2>
      </div>
      <div className={styles.galleryContainer}>
        {imageList.map((src, index) => (
          <img key={index} src={src} alt={`Gallery image ${index + 1}`} className={styles.galleryImage} loading="lazy"/>
        ))}
      </div>
    </>
    
  );
}

export default Gallery;
