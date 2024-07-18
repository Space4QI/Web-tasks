class Movie {
    constructor(name, date, director) {
        this.name = name;
        this.date = date;
        this.director = director;
    }

    setDirector(director) {
        this.director = director;
    }

    setDate(date) {
        this.date = date; 
    }

    toJSON() {
        return {
            name: this.name,
            date: this.date,
            director: this.director
        };
    }
}

function films(array) {
    let movieArray = [];

    array.forEach(element => {
        if (element.includes('addMovie')) {
            let movieName = element.slice('addMovie'.length).trim();
            let movie = new Movie(movieName, '', '');
            movieArray.push(movie);
        } else if (element.includes('directedBy')) {
            let movieName = element.split('directedBy')[0].trim();
            let director = element.split('directedBy')[1].trim();
            movieArray.forEach(movie => {
                if (movie.name === movieName)
                    movie.setDirector(director);
            });
        } else if (element.includes('onDate')) {
            let movieName = element.split('onDate')[0].trim();
            let date = element.split('onDate')[1].trim();
            movieArray.forEach(film => { 
                if (film.name === movieName)
                    film.setDate(date);
            });
        }
    });

    return movieArray.map(movie => movie.toJSON());
}

console.log(JSON.stringify(films([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]), null, 2));
