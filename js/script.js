const ImageGallery = {
    init: function() {
      //Event listeners
      this.addEventListeners();
    },
    addEventListeners: function() {
      const featuredImage = document.querySelector('.big img');
      const imgName = document.querySelector('.big figcaption');
      const thumbnails = document.querySelectorAll('.small li img');
  
      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          thumbnails.forEach(t => t.classList.remove('current'));
          thumbnail.classList.add('current');
  
          featuredImage.src = thumbnail.src.replace('-small.jpg', '-large.jpg');
          featuredImage.alt = thumbnail.alt.replace('(thumb)', '');
  
          const photoName = thumbnail.alt.split('(')[0].trim(); 
  
          imgName.textContent = photoName;    
        });
      });
    }
  };
  
  // initializing the ImageGallery object
  ImageGallery.init();
  