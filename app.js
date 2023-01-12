let form = document.querySelector("#searchForm");
let searchInput = document.querySelector("#gifTerm");
let img = document.querySelector("img");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getGif();
});

function getGif() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchInput.value}`
  )
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      console.log(body);
      img.src = body.data.images.original.url;
      img.alt = `${body.data.title}`;
      img.title = `${body.data.title}`;
    })
    .catch((err) => {
      console.error(err);
    });
}
