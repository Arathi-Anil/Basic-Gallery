import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    'https://tse2.mm.bing.net/th?id=OIP.9Izv-aszItToTtEqRMSE0QHaE6&pid=Api&P=0&h=180/400',
    'https://tse1.mm.bing.net/th?id=OIP.vNw_hcxUnxGNxCk00eO6rQHaE8&pid=Api&P=0&h=180/400',
    'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9/400',
    'https://tse3.mm.bing.net/th?id=OIP.Z0PLkCGpEDNcan8n3m-OIAHaFk&pid=Api&P=0&h=180/400'
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    console.log("Opening modal with image:", image);
    setSelectedImage(image);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setSelectedImage(null);
  };

  console.log("Rendering ImageGallery with images:", images);

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <Image key={index} src={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && <Modal src={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default ImageGallery;
