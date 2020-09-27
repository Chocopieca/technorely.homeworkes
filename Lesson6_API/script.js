const API = "http://api.tvmaze.com/search/shows/?q=";
const wrapper = document.getElementById("wrapper");
const form = document.querySelector("form");


async function search(url, metod = 'GET') {
    const response = await fetch(API+url)
    return await response.json()
}

function show(films) {
    films.forEach(
        async film => {
            const theFilm = {};
            //название, изображение, премьера, жанры, описание
            [theFilm.name, theFilm.imag, theFilm.premiered, theFilm.genres, theFilm.summary] = [film.show.name, film.show.image, film.show.premiered, film.show.genres, film.show.summary]
            
            // console.log(theFilm)
            // console.log(theFilm.imag)

            const div = document.createElement('div');
            div.classList.add("col-12", "col-md-4", "col-lg-3", "card_block");

            const filmCard = await createCard(theFilm);
            div.appendChild(filmCard);
            wrapper.appendChild(div);
        }
    )
}

async function createCard(obj) {
    const card = document.createElement('div');
    card.classList.add('card', 'card_film');
    const title = addTitle(obj.name);
    const imag = await addImage(obj.imag);
    const premiered = addText(obj.premiered);
    premiered.classList.add('premiered');
    const genres = addGenres(obj.genres)
    const summary = addText(obj.summary);
    summary.classList.add('summary');
    // console.log(imag)

    card.appendChild(title);
    card.appendChild(imag);
    card.appendChild(premiered);
    card.appendChild(genres);
    card.appendChild(summary);
    return card
}

function addTitle(objTitle) {
    const title = document.createElement('h3')
    title.innerHTML = objTitle;
    title.classList.add("title");
    return title
}

async function addImage(objImg) {
    try {
        const imageUrl = await download(objImg);
        // console.log(imageUrl)
        const image = document.createElement('img');
        image.src = imageUrl;
        image.classList.add("image");
        return image
    } catch(err) {
        console.log(err)
    }
}

async function download(objImg) {
    try {
        // console.log(obj.imag.medium)
        if(!objImg) {
            const response = await fetch('https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png')
            const blob = await response.blob();
            const src = URL.createObjectURL(blob);
            return src
        } else{
            const response = await fetch(objImg.medium)
            const blob = await response.blob();
            const src = URL.createObjectURL(blob);
            return src
        }
    } catch(err) {
        console.log(err);
    }
}

function addText(objText) {
    const text = document.createElement('p')
    text.innerHTML = objText;
    return text
}

function addGenres(objGenres) {
    // console.log(objGenres);
    const genres = document.createElement('div');
    genres.classList.add('genres')
    for(let genre of objGenres) {
        const block = document.createElement('span');
        block.innerHTML = genre;
        block.classList.add("genre_block");
        genres.appendChild(block);
    }
    return genres
}

form.onsubmit = sendSurch;

function sendSurch(e) {
    e.preventDefault();

    wrapper.innerText = "";

    console.log(e.target[0].value)
    search(e.target[0].value)
    .then((res) => show(res))
    .catch(err => console.log(err))
    // for (let input of e.target) {

    // }
}