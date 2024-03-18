# marikovmailbory-sdk

marikovmailbory-sdk is a Node.js module that provides functions for working with vibrant colors and image processing.

## Installation

To install marikovmailbory-sdk, run: `npm install marikovmailbory-sdk`

## Usage
```javascript
const vibrantUtils = require('vibrant-utils');

// Extract vibrant colors from an image
vibrantUtils.extractVibrantColors('path/to/image.jpg')
  .then(color => {
    console.log('Vibrant color:', color);
  })
  .catch(err => {
    console.error('Error:', err);
  });

// Resize an image
vibrantUtils.resizeImage('input.jpg', 'output.jpg', 300, 200);
```


