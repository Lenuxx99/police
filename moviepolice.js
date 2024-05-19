
         var words = ['Welcome to FliksHub, your destination for unlimited movies, TV shows, and more – all rights reserved © 2024.', 'This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.'],
            part,
            i = 0,
            offset = 0,
            len = words.length,
            forwards = true,
            skip_count = 0,
            skip_delay = 15,
            speed = 50;
        var wordflick = function () {
            setInterval(function () {
                if (forwards) {
                    if (offset >= words[i].length) {
                        ++skip_count;
                        if (skip_count == skip_delay) {
                            forwards = false;
                            skip_count = 0;
                        }
                    }
                }
                else {
                    if (offset == 0) {
                        forwards = true;
                        i++;
                        offset = 0;
                        if (i >= len) {
                            i = 0;
                        }
                    }
                }
                part = words[i].substr(0, offset);
                if (skip_count == 0) {
                    if (forwards) {
                        offset++;
                    }
                    else {
                        offset--;
                    }
                }
                $('.word').text(part);
            }, speed);
        };

        $(document).ready(function () {
            wordflick();
        });
        // tbaadel 3 tsawer aala jnab
        function cycleThumbnails() {
            const movieItems = document.querySelectorAll('.movie-list .movie-item');
            const totalItems = movieItems.length;
            let currentIndex = 0;

            movieItems.forEach((item, index) => {
                item.classList.add(index < 3 ? 'visible' : 'invisible');
            });

            function cycleItem() {
                movieItems[currentIndex].classList.remove('visible');
                movieItems[currentIndex].classList.add('invisible');

                const nextIndex = (currentIndex + 3) % totalItems;
                movieItems[nextIndex].classList.add('visible');
                movieItems[nextIndex].classList.remove('invisible');


                currentIndex = (currentIndex + 1) % totalItems;
            }

            setInterval(cycleItem, 3000);
        }

        window.onload = cycleThumbnails;

      
        let currentIndex = 0;
        const sliderContainer = document.querySelector('.movie-slides-container');


        function updateSliderPosition() {
            const slideWidth = document.querySelector('.movie-slide').clientWidth;
            const offset = -currentIndex * slideWidth;
            sliderContainer.style.transform = `translateX(${offset}px)`;
        }

        function countMovieSlides() {
            return document.querySelectorAll('.movie-slide').length;
        }
        function nextMovie() {
            let movies = countMovieSlides()
            currentIndex = (currentIndex + 1) % movies;
            updateSliderPosition();
        }

        function previousMovie() {
            let movies = countMovieSlides()
            currentIndex = (currentIndex - 1 + movies) % movies;
            updateSliderPosition();
        }

        // Event-Listener für die Buttons
        document.querySelector('.right-button').addEventListener('click', nextMovie);
        document.querySelector('.left-button').addEventListener('click', previousMovie);


        document.addEventListener('DOMContentLoaded', () => {
            updateSliderPosition();
        });



        const imageContainer = document.querySelector('.carousel-images');

        let currentI = 0;


        function updateSliderPosition_() {
            const slideWidth = document.querySelector('.carousel-image').clientWidth;
            const offset = -currentI * slideWidth;
            imageContainer.style.transform = `translateX(${offset}px)`;
            imageContainer.style.transition = 'transform 0.5s ease';
        }


        setInterval(() => {
            currentI++;
            if (currentI >= 12 - 5) {
                // Erreicht das Ende, springt sofort zum Anfang (zum "geklonten" ersten Bild)
                console.log("Hello world!");
                currentI = 0;
                updateSliderPosition_();
            } else {
                updateSliderPosition_();
                // const firstSlide = document.createElement('div');                                         hetha nraj3ou ken naa7i - 5 fel if loula
                // firstSlide.className = 'carousel-image';
                // firstSlide.innerHTML = `<img src="${covers[i]}" alt="Anime Slide Loop" class="movie">`;
                // imageContainer.appendChild(firstSlide);
                // i++;
            }
        }, 3000);
        const url = '<%= url %>';
        const DataLiminId = '<%= DataLimin.id %>';
        document.addEventListener('DOMContentLoaded', function() {
            const carouselImages = document.querySelector('.carousel-images');
        
            carouselImages.addEventListener('click', function(event) {
                // Überprüfe, ob das geklickte Element die Klasse 'carousel-image' hat
                if (event.target && event.target.matches('.carousel-image img')) {
                    // Finde das übergeordnete Element mit der Klasse 'carousel-image'
                    const carouselImage = event.target.closest('.carousel-image');
        
                    // Überprüfe, ob das übergeordnete Element gefunden wurde
                    if (carouselImage) {
                        // Finde das Titel-Element innerhalb des übergeordneten Elements
                        const titleElement = carouselImage.querySelector('.onwen');
        
                        // Überprüfe, ob das Titel-Element gefunden wurde
                        if (titleElement) {
                            const title = titleElement.innerText;
        
                            // Hier kannst du die URL-Logik anpassen, je nachdem, wie die URL generiert wird
                            const url1 = `${url}/movies/${encodeURIComponent(title)}`;
        
                            // Leite zur URL weiter
                            window.location.href = url1;
                        } else {
                            console.error('Element with class "onwen" not found within carousel-image.');
                        }
                    }
                }
            });
        });
        document.addEventListener('click', function(event) {
            if (event.target && event.target.matches('.watch-now-btn')) {
                const title = event.target.parentElement.querySelector('.movie-info-list h3').innerText;
                window.location.href = `${url}/movies/${encodeURIComponent(title)}`;
            }
        });
        
        document.addEventListener('click', function (event) {
            if (event.target && event.target.matches('.moremovie')) {
                window.location.href = `${url}/movies/page/1`;
            }
        });
        
        async function searchDatabase() {
            const searchInput = document.getElementById('input_search').value;
            const searchcontainer = document.getElementById('search-container');
            // AJAX-Aufruf an die aktuelle Seite mit dem Suchbegriff als POST-Anfrage
            const response = await fetch('/api/searchmovies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: searchInput })
            });

            const data = await response.json();

            // Ergebnisse in der HTML-Liste anzeigen
            const resultsList = document.getElementById('results');
            resultsList.innerHTML = '';

            data.forEach(result => {
                const listItem = document.createElement('li');
                listItem.classList.add('result-item');
                listItem.innerHTML = `
                    <a href = "${url}/movies/${result.movie}" >
                        <img src="https://image.tmdb.org/t/p/w500/${result.poster_image}" alt="Movie Poster" style="max-width: 100%;">
                        <div class = "info-search">   
                            <strong>${result.movie}</strong>
                            <div class ="info">
                                <p>Year: ${result.year}</p>
                                <p>Rating: ⭐ ${result.rating}</p>
                            </div>    
                        </div>
                    </a>
                    
                `;

                document.addEventListener("click", function (event) {
                    if (!searchcontainer.contains(event.target)) {
                        hideResultsOverlay();
                        document.getElementById('input_search').value = "";
                        document.getElementById('search_box').style.boxShadow = '0 0 0 ';
                    }
                });
                resultsList.appendChild(listItem);
            });
            const searchTerm = document.getElementById('input_search').value;
            const backButton = document.createElement('a');
            backButton.textContent = 'View All Results';
            backButton.classList.add('result-link');
            backButton.href = `/search?search=${encodeURIComponent(searchTerm)}&page=1`;
            resultsList.appendChild(backButton);

            // Overlay anzeigen, wenn Ergebnisse vorhanden sind
            if (document.getElementById('input_search').value.trim().length > 0 && data.length > 0) {
                showResultsOverlay();
                document.getElementById('search_box').style.boxShadow = '0 0 10px #a06000';
            } else {
                hideResultsOverlay();
                document.getElementById('search_box').style.boxShadow = '0 0 0 ';
            }
        }

        // Funktion zum Anzeigen des Overlays
        function showResultsOverlay() {
            document.getElementById('results-overlay').style.display = 'block';
        }

        // Funktion zum Ausblenden des Overlays
        function hideResultsOverlay() {
            document.getElementById('results-overlay').style.display = 'none';
        }
        document.getElementById('searchForm').addEventListener('submit', function (event) {
            const searchTerm = document.getElementById('input_search').value.trim();
            if (searchTerm === '') {
                event.preventDefault(); // Verhindern Sie das Standardverhalten des Formulars (Senden)
                document.getElementById('input_search').select(); // Wählen Sie das Eingabefeld aus
            }
        });
        //search result

        //filter
        document.addEventListener("DOMContentLoaded", function () {
            var typeButtons = document.querySelectorAll(".type");
            var yearButtons = document.querySelectorAll(".year");
            var genreButtons = document.querySelectorAll(".genre");
            var countryButtons = document.querySelectorAll(".country");

            yearButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    this.classList.toggle("selected");
                });
            });

            genreButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    this.classList.toggle("selected");
                });
            });
            countryButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    this.classList.toggle("selected");
                });
            })
            typeButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    this.classList.toggle("selected");
                });
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            var filterIcon = document.querySelector(".search_box .filter_btn");
            var overlay = document.getElementById("overlay1");
            var typeButtons = document.querySelectorAll(".type");
            var yearButtons = document.querySelectorAll(".year");
            var genreButtons = document.querySelectorAll(".genre");
            var countryButtons = document.querySelectorAll(".country");

            filterIcon.addEventListener("click", function () {
                overlay.style.display = "block";
            });

            overlay.addEventListener("click", function (event) {
                if (event.target === overlay) {
                    overlay.style.display = "none";

                    yearButtons.forEach(function (button) {
                        button.classList.remove("selected");
                    });
                    genreButtons.forEach(function (button) {
                        button.classList.remove("selected");
                    });
                    countryButtons.forEach(function (button) {
                        button.classList.remove("selected");
                    });
                    typeButtons.forEach(function (button) {
                        button.classList.remove("selected");
                    });
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            const filterButton = document.querySelector('.filter-start');
            filterButton.addEventListener('click', function () {
                const selectedYears = Array.from(document.querySelectorAll('.year.selected')).map(button => button.textContent);
                const selectedGenres = Array.from(document.querySelectorAll('.genre.selected')).map(button => button.textContent);
                const selectedCountries = Array.from(document.querySelectorAll('.country.selected')).map(button => button.textContent);
                const selectedType = Array.from(document.querySelectorAll('.type.selected')).map(button => button.textContent);
                console.log(selectedType);
                // Konvertiere die Arrays in Zeichenketten für die URL
                const yearString = selectedYears.join('-');
                const genreString = selectedGenres.join('-');
                const countryString = selectedCountries.join('-');
                const typeString = selectedType.join('-');

                // Erstelle die URL basierend auf den ausgewählten Werten
                const url = `/filter?type=${typeString}&release_year=${yearString}&genre=${genreString}&country=${countryString}&page=${1}`;

                // Weiterleitung zur erstellten URL
                window.location.href = url;
            });
        });
        //filter
        
        function submitSearchForm() {
            var input = document.getElementById('input_search');
            if (window.innerWidth > 900 && input.value.trim() !== '') {
                document.getElementById('searchForm').submit();
            } else if (input.value.trim() == '') {
                input.focus();
            }
        }
        document.addEventListener('DOMContentLoaded', function () {
            // Seite ist geladen, Ladekreis ausblenden
            document.getElementById('loading-spinner-container').style.display = 'none';
        });

        window.addEventListener('beforeunload', function () {
            // Seite wird entladen, Ladekreis anzeigen
            document.getElementById('loading-spinner-container').style.display = 'block';
        });
        
     document.addEventListener('DOMContentLoaded', function () {
            var btn = document.querySelector('.toggle');
            var sidebar = document.getElementById('sidebar');
            var btnst = true;

            btn.onclick = function () {
                if (btnst == true) {
                    document.querySelector('.toggle span').classList.add('toggle');
                    sidebar.classList.add('sidebarshow');
                    btnst = false;
                } else if (btnst == false) {
                    document.querySelector('.toggle span').classList.remove('toggle');
                    sidebar.classList.remove('sidebarshow');
                    btnst = true;
                }
            }

            // Close sidebar when clicked outside
            document.addEventListener('click', function (event) {
                if (!sidebar.contains(event.target) && event.target !== btn) {
                    sidebar.classList.remove('sidebarshow');
                    btnst = true;
                    document.querySelector('.toggle span').classList.remove('toggle');
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function () {
            const searchContainer = document.getElementById('search-container');
            const searchIcon = document.querySelector('.search_btn');

            // Eventlistener hinzufügen, um den Input bei Klick auf das Suchsymbol anzuzeigen
            searchIcon.addEventListener('click', function () {
                // Überprüfen, ob die Bildschirmbreite kleiner als 700px ist
                if (window.innerWidth < 900) {
                    searchContainer.classList.toggle('show-input');
                    document.getElementById('results-overlay').style.display = 'none';
                }
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            var movieItems = document.querySelectorAll(".movie-item");

            movieItems.forEach(function (item) {
                var preloader = item.querySelector("#preloader");
                var movieThumbnail = item.querySelector(".movie-thumbnail");

                if (preloader && movieThumbnail) {
                    // Show preloader
                    preloader.style.display = "block";

                    // Hide preloader once movie thumbnail is loaded
                    movieThumbnail.onload = function () {
                        preloader.style.display = "none";
                    };

                    // In case the image is already loaded (for cached images)
                    if (movieThumbnail.complete) {
                        preloader.style.display = "none";
                    }
                }
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            // Function to detect connection speed
            function getConnectionSpeed() {
                // Simulate connection speed detection (you would replace this with your actual method)
                return 'low'; // For demonstration, assume low speed
            }

            var connectionSpeed = getConnectionSpeed();

            // If connection speed is low, show preloader
            if (connectionSpeed === 'low') {
                var movieCards = document.querySelectorAll(".movie-card");

                movieCards.forEach(function (card) {
                    var preloader2 = card.querySelector(".preloader2");
                    var movieImages = card.querySelectorAll(".movie-image");

                    // Calculate the total expected loading time based on the number of images
                    var loadingTimePerImage = 1000; // Adjust this value as needed (milliseconds)
                    var totalLoadingTime = movieImages.length * loadingTimePerImage;

                    // Show preloader with a minimum visibility of 1 second
                    preloader2.style.display = "block";
                    setTimeout(function () {
                        preloader2.style.display = "none";
                    }, Math.max(1000, totalLoadingTime)); // Ensure preloader stays visible for at least 1 second
                });
            }
        });
        document.addEventListener("DOMContentLoaded", function () {
            // Function to detect connection speed
            function getConnectionSpeed() {
                // Simulate connection speed detection (you would replace this with your actual method)
                return 'low'; // For demonstration, assume low speed
            }

            var connectionSpeed = getConnectionSpeed();

            // If connection speed is low, show preloader
            if (connectionSpeed === 'low') {
                var movieCards = document.querySelectorAll(".movie-card");

                movieCards.forEach(function (card) {
                    var preloader2 = card.querySelector(".preloader3");
                    var movieImages = card.querySelectorAll(".movie-image");

                    // Calculate the total expected loading time based on the number of images
                    var loadingTimePerImage = 1000; // Adjust this value as needed (milliseconds)
                    var totalLoadingTime = movieImages.length * loadingTimePerImage;

                    // Show preloader with a minimum visibility of 1 second
                    preloader2.style.display = "block";
                    setTimeout(function () {
                        preloader2.style.display = "none";
                    }, Math.max(1000, totalLoadingTime)); // Ensure preloader stays visible for at least 1 second
                });
            }
        });
        document.addEventListener("DOMContentLoaded", function () {
            var movieItems = document.querySelectorAll(".movie-list1");

            movieItems.forEach(function (item) {
                var preloader = item.querySelector("#preloader3");
                var movieThumbnail = item.querySelector(".movie-container");

                // Show preloader
                preloader.style.display = "block";

                // Hide preloader once movie thumbnail is loaded
                movieThumbnail.onload = function () {
                    preloader.style.display = "none";
                };
            });
        });
