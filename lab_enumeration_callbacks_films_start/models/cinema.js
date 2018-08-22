const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilms = function () {
  const result = this.films.map((film) => { //takes in function that takes in film
    return film.title;
  })
  return result;
};

Cinema.prototype.findByTitle = function () {
  const result = this.films.find((film) => {
    if (film.title === 'Dunkirk')
    return film;
  })
  return result;
}

Cinema.prototype.filterByGenre = function () {
  return this.film.find((film) => {
    return film.title === title;
  })
};

Cinema.prototype.filterByYear = function () {
  const result = this.films.filter((film) => {
    if (film.year === 2017)
    return film
  })
  return result;
};

Cinema.prototype.returnEmptyArray = function () {
  const result = this.films.filter((film) => {
    if (film.year === 2010)
    return film
  })
  return result;
};

Cinema.prototype.filterByLength = function () {
  const result = this.films.filter((film) => {
    if (film.length > 120)
    return film
  })
  return result;
};

Cinema.prototype.totalRunTime = function () {
  const result = this.films.reduce((film) => {

  })
};

module.exports = Cinema;
