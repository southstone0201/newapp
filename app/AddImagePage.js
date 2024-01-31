// AddImagePage.js
'use client';
import React, { useState } from 'react';

const AddImagePage = ({ onImageAdded }) => {
  const [imageUrl, setImageUrl] = useState('');

  const handleAddImage = () => {
    // 이미지 URL이 비어있지 않은 경우에만 추가
    if (imageUrl.trim() !== '') {
      onImageAdded(imageUrl);
      setImageUrl(''); // 이미지 추가 후 입력 필드 초기화
    }
  };

  return (
    <div>
      <h2>Add Image</h2>
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button onClick={handleAddImage}>Add Image</button>
    </div>
  );
};

export default AddImagePage;
