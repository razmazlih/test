document.addEventListener("DOMContentLoaded", function() {
    const secret = '123123123123123123';
    const tag = document.getElementById('secret');
  
    console.log('Secret value:', secret); // הדפסת הערך של הסוד
    if (tag) {
      console.log('Element found:', tag); // בדיקה אם האלמנט נמצא
      tag.innerHTML = secret;
    } else {
      console.error('Element with id "secret" not found.');
    }
  });