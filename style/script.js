const dropZone = document.querySelector('.drop-zone');
const videoInput = document.getElementById('video-upload');

dropZone.addEventListener('dragover', function(e) {
  e.preventDefault();
  this.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', function(e) {
  this.classList.remove('drag-over');
});

dropZone.addEventListener('drop', function(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file.type.startsWith('video/')) {
    videoInput.files = [file];
    // Implement video processing functionalities here
  } else {
    alert('Please upload a valid video file');
  }
});

// Add functionalities for the 'Download' and 'Crop Tool' buttons

