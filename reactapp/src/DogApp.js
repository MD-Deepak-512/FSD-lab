import React, { useState, useEffect } from 'react';
function DogsApp() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => setDogImage(data.message));
  },[]);
  
  return (
    <div>
      {dogImage && <img src={dogImage} alt="Random Image of Dog Breed" />}
    </div>
  );
}

export default DogsApp;
