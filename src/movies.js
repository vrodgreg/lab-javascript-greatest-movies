// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(dirArr) {
  return dirArr.map((movie) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  return array.filter((movie) => {
    const directedStevenS = movie.director == "Steven Spielberg";
    const dramaMovie = movie.genre.includes("Drama");
    return directedStevenS && dramaMovie;
  }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
/*
function ratesAverage(myArr) {

  if(myArr.length==0){
    return 0;
  }

  const ratesArr = myArr.map(x => x.rate)
  const reducer = (acc, curVal) => acc += curVal;

  const filtered = ratesArr.filter(function(item){
      return (parseInt(item)==item);
  });


  return Number(((filtered.reduce(reducer))/myArr.length).toFixed(2));
}
*/

function ratesAverage(myArr) {
  return (
    Number(
      (
        myArr.reduce((acc, movie) => {
          return (acc += movie.rate || 0);
        }, 0) / myArr.length
      ).toFixed(2)
    ) || 0
  );
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let filteredDramaMovies = array.filter((eachMovie) => {
    return eachMovie.genre.includes('Drama')
  })

  return ratesAverage(filteredDramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  console.log(array)
  const result = array.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {

      return a.title.localeCompare(b.title);
    }
  })
  return [...result];
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  //sort but title
  let sortedArray = [...arr].sort((a, b) => {
    return (a.title.localeCompare(b.title)) //it is either 0,1,-1


  })

  let first20titles = sortedArray.slice(0, 20).map(item => {
    return item.title
  })

  return first20titles
  // return first 20 items
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



function turnHoursToMinutes(arr) {
  let newArr = arr.map((movie) => {
    let eachMovie = {...movie};
    let words = eachMovie.duration.split(" ");
    if (words[0].includes('m')) {
      eachMovie.duration = parseInt(words[0])
    } else {
    let hours = parseInt(words[0]);
    let minutes = 0;
    if (words[1]) {
      minutes = parseInt(words[1]);
    }
    let totalTime = hours * 60 + minutes;
    eachMovie.duration = totalTime;
  }
    return eachMovie;
  });


  return newArr;
}



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
