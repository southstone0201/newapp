// ImageListPage.js
import React from 'react';

const ImageListPage = ({ imageUrls }) => {
  return (
    <div>
      <h2>Image List</h2>
      <ul>
        {imageUrls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
};

export default ImageListPage;
