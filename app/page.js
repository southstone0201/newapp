'use client';
import React, {useState, useEffect} from 'react';
import AddImagePage from './AddImagePage';

export default ImageComponent;
function ImageComponent() {
    const [isLoading, setIsLoading] = useState(false); // 수정된 부분
    const [data, setData] = useState([]); // 수정된 부분
    const axios = require('axios');
    const handleImageAdded = (imageUrl) => {
        // 이미지 추가 후 이미지 목록 갱신
        setImages([...images, imageUrl]);
      };

    const postData = {
        userId: "did:vdb:edb89817-421d-46d9-ad4d-3996230fdb68",
    };

    async function loadAllMyVDBs() {
        const baseUrl = "https://us-central1-openbadges-537a3.cloudfunctions.net/api";

        try {
            setIsLoading(true);
            const res = await axios.post(`${baseUrl}/getAllMyVDBs`, postData);
            setIsLoading(false);
            setData(res.data);
            console.log(res.data);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        loadAllMyVDBs();
    }, []);

    const handleImageClick = () => {
        if (data.length > 0 && data[0].isVerified) {
            const imageUrl = data[0].image;
            copyToClipboard(imageUrl);
            alert('Image URL copied to clipboard!');
        }
    };

    const copyToClipboard = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };
    const imageList = data.map((item, index) => (
        <img
          key={index} // 고유한 키값을 설정
          src={item.image || ''} // 이미지 주소가 없는 경우 빈 문자열로 설정
          alt="Badge Image"
          onClick={() => handleImageClick(item.image)} // 해당 이미지의 주소를 전달
        />
      ));



    return (
        <div>
        <h1>Image App</h1>
        <AddImagePage onImageAdded={handleImageAdded} />
        {imageList}
      </div>
    );
    
}
