const cardContainer = document.getElementById('app');
const apiUrl = 'https://ghibliapi.herokuapp.com/films';

function createCard(film) {
  return `
    <div class="movie-item card">
      <h3>${film.title}</h3>
      <p>${film.description.substring(0, 300)}</p>
    </div>
  `;
}

function createItems(films) {
  films.forEach(function (film) {
    cardContainer.innerHTML += createCard(film);
  });
}

function getFilms() {
  fetch(apiUrl)
    .then(function (response) {
      response.json()
        .then(function (data) {
          createItems(data);
        });
    })
    .catch(function (reason) {
      console.log('ERROR:', reason);
    });
}

// function getFilms() {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', apiUrl);

//   xhr.onload = function (event) {
//     let data = JSON.parse(event.target.response);
//     createItems(data);
//   }

//   xhr.send();
// }

getFilms();

// setTimeout(function() {
//   console.log('SetTimeOut is called');
//   alert('Hello')
// }, 500);

// Let's say this code take 10 mintues to finish
setInterval(function() {
  console.log('Hello');
}, 1000);

console.log('adadasda');

