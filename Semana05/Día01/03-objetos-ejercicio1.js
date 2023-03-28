

const peliculas = [
    {
        "adult": false,
        "backdrop_path": "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
        "genre_ids": [
            53,
            35,
            80
        ],
        "id": 804150,
        "original_language": "en",
        "original_title": "Cocaine Bear",
        "overview": "Inspirado en hechos reales ocurridos en Kentucky en 1985, durante los cuales un oso negro de 175 libras ingirió 88 libras de cocaína pura.",
        "popularity": 3474.498,
        "poster_path": "/xNaMZMtGUPPmjYU5h5iqVxvcSe.jpg",
        "release_date": "2023-02-22",
        "title": "Oso vicioso",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 506
    },
    {
        "adult": false,
        "backdrop_path": "/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 603692,
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "John Wick descubre un camino para derrotar a la Alta Mesa. Pero para poder ganar su libertad, Wick deberá enfrentarse a un nuevo rival con poderosas alianzas en todo el mundo, capaz de convertir a viejos amigos en enemigos.",
        "popularity": 3361.154,
        "poster_path": "/gh2bmprLtUQ8oXCSluzfqaicyrm.jpg",
        "release_date": "2023-03-22",
        "title": "John Wick 4",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 384
    },
    {
        "adult": false,
        "backdrop_path": "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 980078,
        "original_language": "en",
        "original_title": "Winnie the Pooh: Blood and Honey",
        "overview": "Christopher Robin se dirige a la universidad y ha abandonado a sus viejos amigos, Pooh y Piglet, lo que lleva al dúo a aceptar sus monstruos internos.",
        "popularity": 3800.257,
        "poster_path": "/ZmbSkGEpXFufbDhgfTnSrFAguo.jpg",
        "release_date": "2023-01-27",
        "title": "Winnie the Pooh: Blood and Honey",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 205
    },
    {
        "adult": false,
        "backdrop_path": "/ovM06PdF3M8wvKb06i4sjW3xoww.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 76600,
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Ambientada más de una década después de los acontecimientos de la primera película, 'Avatar: The Way of Water' empieza contando la historia de la familia Sully (Jake, Neytiri y sus hijos), los problemas que los persiguen, lo que tienen que hacer para mantenerse a salvo, las batallas que libran para seguir con vida y las tragedias que sufren.",
        "popularity": 3464.178,
        "poster_path": "/kUAG4ZQcsNbRyiPyAr3hLdsVgAq.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: El sentido del agua",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 5982
    },
    {
        "adult": false,
        "backdrop_path": "/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg",
        "genre_ids": [
            16,
            12,
            35,
            10751
        ],
        "id": 315162,
        "original_language": "en",
        "original_title": "Puss in Boots: The Last Wish",
        "overview": "Secuela de 'El gato con botas' (2011). El Gato con Botas descubre que su pasión por la aventura le ha pasado factura: ha consumido ocho de sus nueve vidas, por ello emprende un viaje épico para encontrar el mítico Último Deseo y restaurar sus nueve vidas...",
        "popularity": 1862.289,
        "poster_path": "/lyP4WNmUiiOgl4g2z7ywE0z6SGF.jpg",
        "release_date": "2022-12-07",
        "title": "El Gato con Botas: El último deseo",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 4854
    }];


    const generos = [
        [
            {
                "id": 28,
                "name": "Acción"
            },
            {
                "id": 12,
                "name": "Aventura"
            },
            {
                "id": 16,
                "name": "Animación"
            },
            {
                "id": 35,
                "name": "Comedia"
            },
            {
                "id": 80,
                "name": "Crimen"
            },
            {
                "id": 99,
                "name": "Documental"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 10751,
                "name": "Familia"
            },
            {
                "id": 14,
                "name": "Fantasía"
            },
            {
                "id": 36,
                "name": "Historia"
            },
            {
                "id": 27,
                "name": "Terror"
            },
            {
                "id": 10402,
                "name": "Música"
            },
            {
                "id": 9648,
                "name": "Misterio"
            },
            {
                "id": 10749,
                "name": "Romance"
            },
            {
                "id": 878,
                "name": "Ciencia ficción"
            },
            {
                "id": 10770,
                "name": "Película de TV"
            },
            {
                "id": 53,
                "name": "Suspense"
            },
            {
                "id": 10752,
                "name": "Bélica"
            },
            {
                "id": 37,
                "name": "Western"
            }
        ]
    ]

    // Ejercicio 1
    // Función que retorna el número total de películas

    function totalDePeliculas() {
        return peliculas.length
    }

    console.log('total de peliculas', totalDePeliculas())

      // Ejercicio 2
      // Función que devuelve el nombre de la pelicula con mayor pularidad
      // Hint:
      // Campo a analizar _popularity_
      // Iterar todas las películas guardando:
      // 1- El index o posición de la pélicula con mayor popularidad.
      // 2- El valor de mayor popularidad como tal.

      function peliculaConMayorPopularidad() {
        let mayorPopularidad = 0;
        let posicionMP = -1;
        for (let i = 0; i < peliculas.length; i++) {
            if (peliculas[i].popularity > mayorPopularidad) {
                mayorPopularidad = peliculas[i].popularity;
                posicionMP = i;
            }
        }
        return peliculas[posicionMP].title;
      }

      console.log('Pelicula más popular', peliculaConMayorPopularidad());

      // Ejercicio 3:
      // Función que retorna el nombre de la película con más géneros

      // Ejercicio 4:
      // Función que imprime los géneros a los que pertenece la primera película
      // Es decir, la película de la posición 0
