const Vibrant = require('node-vibrant');
const sharp = require('sharp');

// Function to extract vibrant colors from an image
async function extractVibrantColors(imagePath) {
  try {
    const palette = await Vibrant.from(imagePath).getPalette();
    return palette.Vibrant.hex;
  } catch (error) {
    console.error('Error extracting vibrant colors:', error);
    return null;
  }
}

// Function to resize an image
async function resizeImage(inputPath, outputPath, width, height) {
  try {
    await sharp(inputPath).resize(width, height).toFile(outputPath);
    console.log('Image resized successfully!');
  } catch (error) {
    console.error('Error resizing image:', error);
  }
}

module.exports = {
  extractVibrantColors,
  resizeImage
};
