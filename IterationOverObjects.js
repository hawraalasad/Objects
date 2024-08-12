/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
let person = {
  name: "Hawraa",
  age: 24,
  city: "Kuwait",
};

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
person.emailAddress = "hawra@trymindscape.com";

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/

const movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: "Crime",
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    genre: "Crime",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: "Action",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
  },
];

function hasKey(Object, key) {
  if (Object[key] == undefined) {
    return false;
  } else {
    return true;
  }
}
console.log(hasKey(person, "age"));
console.log(hasKey(person, "country"));

//Another method
// function hasKey(Object, key) {
//   return Object.hasOwnProperty(key);
// }

/******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to print the titles of all the movies.
  ********************************/
let titleName = (Object) => {
  Object.forEach((Object) => {
    console.log(Object.title);
  });
};
titleName(movies);
/******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
let movies1994 = (Object) => {
  let movies = Object.filter((Object) => {
    if (Object.year == 1994) {
      return true;
    } else {
      return false;
    }
  });
  return movies;
};
let howMany = movies1994(movies);

console.log(howMany.length);
/******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
let batman = (Object) => {
  let darkNew = Object.map((Object) => {
    if (Object.title == "The Dark Knight") {
      return (Object.genre = "Action/Drama");
    }
  });
  return darkNew;
};

// console.log(batman(movies));
console.log(movies);

/******************************
      Q7) (Challenge)
      Write a function groupMoviesByGenre that accepts an array of movie objects. 
      The function should return an object where the keys are movie genres 
      and the values are arrays of movie titles that belong to those genres. 
  ********************************/
function groupMoviesByGenre(movies) {
  let genreGroups = {};
  movies.forEach((movie) => {
    let genre = movie.genre;
    if (!genreGroups[genre]) {
      genreGroups[genre] = [];
    }
    genreGroups[genre].push(movie.title);
  });
  return genreGroups;
}
function getMoviesByGenre(movies, genre) {
  let genreGroups = groupMoviesByGenre(movies);
  return genreGroups[genre] || [];
}

console.log(`Drama movies are: ${getMoviesByGenre(movies, "Drama")}`);
console.log(`Crime movies are: ${getMoviesByGenre(movies, "Crime")}`);
