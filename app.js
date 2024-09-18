// Replace 'YOUR_UNSPLASH_API_KEY' with your actual Unsplash API Access Key
const accessKey = 'YOUR_UNSPLASH_API_KEY';

async function fetchImage() {
    const imageElement = document.getElementById('inspirationalImage');
    const apiUrl = `https://api.unsplash.com/photos/random/?query=inspiration&client_id=${accessKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.status === 200) {
            imageElement.src = data.urls.regular;
            imageElement.alt = data.alt_description || 'Inspirational Image';
        } else {
            imageElement.alt = 'Error fetching image. Please try again.';
        }
    } catch (error) {
        imageElement.alt = 'Error fetching image. Please try again later.';
        console.error('Error:', error);
    }
}

// Fetch a new image when the page loads
fetchImage();
