// https://www.omdbapi.com/?i=tt3896198&apikey=a57f6202

// console.log(fetch("https://www.omdbapi.com/?i=tt3896198&apikey=a57f6202&s=anime"))
const moviesListEl = document.querySelector('.movie-list')


async function main () {
    const movies = await fetch('http://www.omdbapi.com/?apikey=a57f6202&s=anime')
    const moviesData = await movies.json();
    moviesListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).slice(0,6).join("");
}

main();

function movieHTML(movie) {
  return `<div class="movie">
  <div class="movie-card">s
    <div class="movie-card__container">
        <img src="${movie.poster}" alt="">
      <h3>${movie.title}</h4>
        <p><b>Type:</b>${movie.type}</p>
        <p><b>Year:</b>${movie.title}</p>
    </div>
  </div>
</div>`;
}