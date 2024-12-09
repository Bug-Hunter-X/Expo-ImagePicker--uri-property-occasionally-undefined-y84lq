// bugSolution.js
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    // Check if the uri property exists before accessing it
    if (result.uri) {
      console.log('Image URI:', result.uri);
      // Use the image uri
    } else {
      console.error('Image URI is undefined or null.');
      // Handle the case where the uri is missing gracefully
    }
  }
}

//Example usage
pickImage();