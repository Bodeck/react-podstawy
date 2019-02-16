var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'images/harry-potter.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        img: 'images/krol-lew.jpg'
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        desc: 'Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii, żonie gangstera, bokserze i parze okradającej ludzi w restauracji.',
        img: 'images/pulp-fiction.jpg'
    },
    {
        id:4,
        title: 'Mad Max: Na drodze gniewu',
        desc: 'Max przyłącza się do grupy uciekinierek z Cytadeli - osady rządzonej przez Wiecznego Joe. Tyran wraz ze swoją bandą rusza za nimi w pościg.',
        img: 'images/mad-max.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id, className: 'movie'}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img',{src: movie.img})
        )
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista Filmów'),
    React.createElement('ul', {className: 'movie-list'}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));