let contain = document.querySelector(".container");

let API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

fetch(API)
  .then((res) => res.json())
  .then((data) =>
    data.Search.forEach((item) => {
      contain.innerHTML += `
<div class="card" style="width: 18rem">
<img src="${item.Poster}" class="card-img-top" alt="..." />
<div class="card-body">
<h2>${item.Title}</h2>
  <p class="card-text">
    ${item.Year}
  </p>
</div>
</div>`;
    })
  );
