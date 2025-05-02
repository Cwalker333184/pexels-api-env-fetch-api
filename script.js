// Create Variables
//const apiKey = process.env.PEXELS_API_KEY;
const url = "https://api.pexels.com/v1/search";
const searchButton = document.getElementById("fetchBtn");
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("results");

searchButton.addEventListener(`click`, searchImages);

async function searchImages(){
   let query = searchInput.value;
    try{
const response = await fetch(`${url}?query=${query}&per_page=10`, {
headers: {
    Authorization: apiKey
}
    })

    const data = await response.json();
  searchResults.innerHTML = data.photos.map(photo => {
return `
<img src="${photo.src.medium}" alt="${photo.alt}" />
`
  
}).join('');
console.log(data);

    
  
} catch(errors) {
        console.log(errors);
    }
}
