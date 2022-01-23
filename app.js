const romance1URL= "//www.omdbapi.com/?apikey=a525e77c&i=tt0332280";

fetch (romance1URL)
.then((response) => response.json())
.then((movieInfo) => {
    console.log(movieInfo);

    document.getElementById("title").innerHTML=movieInfo.Title;
    document.getElementById("genre").innerHTML=movieInfo.Genre;
    document.getElementById("actors").innerHTML=movieInfo.Actors;
    document.getElementById("awards").innerHTML=movieInfo.Awards;
    document.getElementById("plot").innerHTML=movieInfo.Plot;
});

const romance2URL= "//www.omdbapi.com/?apikey=a525e77c&i=tt0120338";

fetch (romance2URL)
.then((response) => response.json())
.then((movieInfo) => {
    console.log(movieInfo);

    document.getElementById("title2").innerHTML=movieInfo.Title;
    document.getElementById("genre2").innerHTML=movieInfo.Genre;
    document.getElementById("actors2").innerHTML=movieInfo.Actors;
    document.getElementById("awards2").innerHTML=movieInfo.Awards;
    document.getElementById("plot2").innerHTML=movieInfo.Plot;
});

const romance3URL= "//www.omdbapi.com/?apikey=a525e77c&i=tt2322441";

fetch (romance3URL)
.then((response) => response.json())
.then((movieInfo) => {
    console.log(movieInfo);

    document.getElementById("title3").innerHTML=movieInfo.Title;
    document.getElementById("genre3").innerHTML=movieInfo.Genre;
    document.getElementById("actors3").innerHTML=movieInfo.Actors;
    document.getElementById("awards3").innerHTML=movieInfo.Awards;
    document.getElementById("plot3").innerHTML=movieInfo.Plot;
});