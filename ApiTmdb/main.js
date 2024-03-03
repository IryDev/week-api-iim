import './scss/main.scss'
import logo from './assets/img/logo.png'
import {fetchMovies} from './api.js'
import {requests} from './api.js'
import {setBanner} from "./api.js";
import {loader} from './loader.js';


document.querySelector('#app').innerHTML = `
  <div class="overlay-container">
        <div class="overlay first"></div>

        <div class="overlay second"></div>

        <div class="overlay third"></div>
    </div>

    <nav class="navbar">
        <img class="logo" src="${logo}" alt="logo" />
        <div class="nav-links">
            <ul>
                <li>
                    <p>SE CONNECTER</p>
                </li>
                <li><button>COMMENCEZ VOTRE ESSAI GRATUIT</button></li>
            </ul>
        </div>
    </nav>

    <header id="banner">
        <div class="row">
            <div class="col">
                <h1 id="banner-title">Squid Game</h1>
                <p class="carac">
                    <span id="release-date">2021</span> <span class="spacer">|</span> <span id="media-type">16 +</span>
                    <span class="spacer">|</span> <span id="vote"></span>
                    <span class="spacer">|</span> <span id="genre"></span>
                </p>

                <button class="teaser">Teaser</button>
                <p id="banner-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                    vitae eum itaque aperiam harum sequi tempora perferendis quas
                    consequuntur ratione, ullam delectus dicta veniam accusamus magni
                    assumenda commodi veritatis unde!
                </p>
            </div>
        </div>
    </header>

    <section>
        <div id="headrow">

        </div>
    </section>

    <div class="info-autour">
        <div class="info">
            <div>
                <ul>
                    <li>Ad-free streaming</li>
                    <li>Discounted quarterly</li>
                    <li>Limited time special offer</li>
                </ul>
            </div>

            <div>
                <h2>Starting at</h2>
                <h1>$2.99/mo</h1>
                <p>Cancel anytime</p>
            </div>

            <div>
                <button>Start Wacthing now</button>
                <p>Terms of use</p>
            </div>
        </div>
    </div>
`
setBanner();
fetchMovies(requests.fetchPopular, "Popular Movies");
fetchMovies(requests.fetchTrending, "Trending Movies");
fetchMovies(requests.fetchActionMovies, "Action Movies");
fetchMovies(requests.fetchComedyMovies, "Comedy Movies");
fetchMovies(requests.fetchHorrorMovies, "Horror Movies");
fetchMovies(requests.fetchRomanceMovies, "Romance Movies");
fetchMovies(requests.fetchDocumentaries, "Documentaries");
loader();
