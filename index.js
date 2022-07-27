console.log(`hello world`);
let movieForm = document.querySelector("form");
let message = document.querySelector("#message");

function addMovie(event){
    event.preventDefault();
    //getting inputfield
    let inputfield = document.querySelector("input");
    //creating list element
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    movieTitle.textContent = inputfield.value;
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle);
    //deleteing button
    let deleteBtn = document.createElement("button"); 
    deleteBtn.textContent = `x`;
    movie.appendChild(deleteBtn);
    //getting the unordered list
    let movieList = document.querySelector("ul");
    movieList.appendChild(movie);
    deleteBtn.addEventListener("click", deleteMovie);
};

function deleteMovie(event){
    event.target.parentNode.remove();
    console.log(`things`);
    message.textContent = "Movie deleted!";
    console.log(`thing2`);
};

function crossOffMovie(event){
    event.target.classList.toggle(`checked`)
    if(event.target.classList.contains(`checked`)){
        console.log(`hi`);
        message.textContent = `Movie watched!`;
    }else{
        message.textContent = "Movie added back!"
    }
}

movieForm.addEventListener("submit", addMovie);


