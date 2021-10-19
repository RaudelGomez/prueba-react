import { createStore } from "redux";

const inicial = {
  jugadores: [
    {
      adult: false,
      backdrop_path: "/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg",
      genre_ids: [16, 12, 14, 10751, 28],
      id: 527774,
      original_language: "en",
      original_title: "Raya and the Last Dragon",
      overview:
        "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
      popularity: 3686.429,
      poster_path: "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
      release_date: "2021-03-03",
      nombre: "Raya and the Last Dragon",
      video: false,
      vote_average: 8.5,
      vote_count: 1407,
    },
    {
      adult: false,
      backdrop_path: "/gzJnMEMkHowkUndn9gCr8ghQPzN.jpg",
      genre_ids: [53, 28, 18],
      id: 793723,
      original_language: "fr",
      original_title: "Sentinelle",
      overview:
        "Transferred home after a traumatizing combat mission, a highly trained French soldier uses her lethal skills to hunt down the man who hurt her sister.",
      popularity: 2375.293,
      poster_path: "/fFRq98cW9lTo6di2o4lK1qUAWaN.jpg",
      release_date: "2021-03-05",
      nombre: "Sentinelle",
      video: false,
      vote_average: 6.1,
      vote_count: 217,
    },
    {
      adult: false,
      backdrop_path: "/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
      genre_ids: [28, 12, 878, 14],
      id: 791373,
      original_language: "en",
      original_title: "Zack Snyder's Justice League",
      overview:
        "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      popularity: 2190.931,
      poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
      release_date: "2021-03-18",
      nombre: "Zack Snyder's Justice League",
      video: false,
      vote_average: 8.8,
      vote_count: 1837,
    },
    {
      adult: false,
      backdrop_path: "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
      genre_ids: [28, 35, 10751, 16],
      id: 587807,
      original_language: "en",
      original_title: "Tom & Jerry",
      overview:
        "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
      popularity: 2039.388,
      poster_path: "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
      release_date: "2021-02-11",
      nombre: "Tom & Jerry",
      video: false,
      vote_average: 7.5,
      vote_count: 883,
    },
    {
      adult: false,
      backdrop_path: "/z8TvnEVRenMSTemxYZwLGqFofgF.jpg",
      genre_ids: [14, 28, 12],
      id: 458576,
      original_language: "en",
      original_title: "Monster Hunter",
      overview:
        "A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",
      popularity: 1887.571,
      poster_path: "/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
      release_date: "2020-12-03",
      nombre: "Monster Hunter",
      video: false,
      vote_average: 7.2,
      vote_count: 1164,
    },
    {
      adult: false,
      backdrop_path: "/6TPZSJ06OEXeelx1U1VIAt0j9Ry.jpg",
      genre_ids: [28, 80, 53],
      id: 587996,
      original_language: "es",
      original_title: "Bajocero",
      overview:
        "When a prisoner transfer van is attacked, the cop in charge must fight those inside and outside while dealing with a silent foe: the icy temperatures.",
      popularity: 1813.556,
      poster_path: "/dWSnsAGTfc8U27bWsy2RfwZs0Bs.jpg",
      release_date: "2021-01-29",
      nombre: "Below Zero",
      video: false,
      vote_average: 6.4,
      vote_count: 448,
    },
    {
      adult: false,
      backdrop_path: "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
      genre_ids: [14, 28, 12],
      id: 464052,
      original_language: "en",
      original_title: "Wonder Woman 1984",
      overview:
        "A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.",
      popularity: 1656.015,
      poster_path: "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      release_date: "2020-12-16",
      nombre: "Wonder Woman 1984",
      video: false,
      vote_average: 6.8,
      vote_count: 4325,
    },
    {
      adult: false,
      backdrop_path: "/drulhSX7P5TQlEMQZ3JoXKSDEfz.jpg",
      genre_ids: [18, 14, 878],
      id: 581389,
      original_language: "ko",
      original_title: "승리호",
      overview:
        "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
      popularity: 1595.095,
      poster_path: "/qiUesQForGW872kIC0Crqx3vAr0.jpg",
      release_date: "2021-02-05",
      nombre: "Space Sweepers",
      video: false,
      vote_average: 7.3,
      vote_count: 391,
    },
    {
      adult: false,
      backdrop_path: "/vKzbIoHhk1z9DWYi8kyFe9Gg0HF.jpg",
      genre_ids: [35],
      id: 484718,
      original_language: "en",
      original_title: "Coming 2 America",
      overview:
        "Prince Akeem Joffer is set to become King of Zamunda when he discovers he has a son he never knew about in America – a street savvy Queens native named Lavelle. Honoring his royal father's dying wish to groom this son as the crown prince, Akeem and Semmi set off to America once again.",
      popularity: 1208.53,
      poster_path: "/nWBPLkqNApY5pgrJFMiI9joSI30.jpg",
      release_date: "2021-03-05",
      nombre: "Coming 2 America",
      video: false,
      vote_average: 7,
      vote_count: 910,
    },
    {
      adult: false,
      backdrop_path: "/lOSdUkGQmbAl5JQ3QoHqBZUbZhC.jpg",
      genre_ids: [53, 28, 878],
      id: 775996,
      original_language: "en",
      original_title: "Outside the Wire",
      overview:
        "In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.",
      popularity: 1051.629,
      poster_path: "/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg",
      release_date: "2021-01-15",
      nombre: "Outside the Wire",
      video: false,
      vote_average: 6.5,
      vote_count: 866,
    },
    {
      adult: false,
      backdrop_path: "/uQtqiAu2bBlokqjlURVLEha6zoi.jpg",
      genre_ids: [80, 18],
      id: 544401,
      original_language: "en",
      original_title: "Cherry",
      overview:
        "Cherry drifts from college dropout to army medic in Iraq - anchored only by his true love, Emily. But after returning from the war with PTSD, his life spirals into drugs and crime as he struggles to find his place in the world.",
      popularity: 916.833,
      poster_path: "/pwDvkDyaHEU9V7cApQhbcSJMG1w.jpg",
      release_date: "2021-02-26",
      nombre: "Cherry",
      video: false,
      vote_average: 8,
      vote_count: 277,
    },
    {
      adult: false,
      backdrop_path: "/7KL4yJ4JsbtS1BNRilUApLvMnc5.jpg",
      genre_ids: [18, 53],
      id: 649087,
      original_language: "sv",
      original_title: "Red Dot",
      overview:
        "On a hiking trip to rekindle their marriage, a couple find themselves fleeing for their lives in the unforgiving wilderness from an unknown shooter.",
      popularity: 876.593,
      poster_path: "/xZ2KER2gOHbuHP2GJoODuXDSZCb.jpg",
      release_date: "2021-02-11",
      nombre: "Red Dot",
      video: false,
      vote_average: 6.2,
      vote_count: 356,
    },
    {
      adult: false,
      backdrop_path: "/nz8xWrTKZzA5A7FgxaM4kfAoO1W.jpg",
      genre_ids: [878, 28],
      id: 651571,
      original_language: "en",
      original_title: "Breach",
      overview:
        "A hardened mechanic must stay awake and maintain an interstellar ark fleeing the dying planet Earth with a few thousand lucky souls on board... the last of humanity. Unfortunately, humans are not the only passengers. A shapeshifting alien creature has taken residence, its only goal is to kill as many people as possible. The crew must think quickly to stop this menace before it destroys mankind.",
      popularity: 865.81,
      poster_path: "/13B6onhL6FzSN2KaNeQeMML05pS.jpg",
      release_date: "2020-12-17",
      nombre: "Breach",
      video: false,
      vote_average: 4.5,
      vote_count: 311,
    },
    {
      adult: false,
      backdrop_path: "/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg",
      genre_ids: [53, 80],
      id: 602269,
      original_language: "en",
      original_title: "The Little Things",
      overview:
        "Deputy Sheriff Joe \"Deke\" Deacon joins forces with Sgt. Jim Baxter to search for a serial killer who's terrorizing Los Angeles. As they track the culprit, Baxter is unaware that the investigation is dredging up echoes of Deke's past, uncovering disturbing secrets that could threaten more than his case.",
      popularity: 865.5,
      poster_path: "/c7VlGCCgM9GZivKSzBgzuOVxQn7.jpg",
      release_date: "2021-01-28",
      nombre: "The Little Things",
      video: false,
      vote_average: 6.4,
      vote_count: 598,
    },
    {
      adult: false,
      backdrop_path: "/iopYFB1b6Bh7FWZh3onQhph1sih.jpg",
      genre_ids: [28, 878],
      id: 399566,
      original_language: "en",
      original_title: "Godzilla vs. Kong",
      overview:
        "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      popularity: 816.779,
      poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
      release_date: "2021-03-24",
      nombre: "Godzilla vs. Kong",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: "/jeAQdDX9nguP6YOX6QSWKDPkbBo.jpg",
      genre_ids: [14, 28, 878],
      id: 590706,
      original_language: "en",
      original_title: "Jiu Jitsu",
      overview:
        "Every six years, an ancient order of jiu-jitsu fighters joins forces to battle a vicious race of alien invaders. But when a celebrated war hero goes down in defeat, the fate of the planet and mankind hangs in the balance.",
      popularity: 774.879,
      poster_path: "/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg",
      release_date: "2020-11-20",
      nombre: "Jiu Jitsu",
      video: false,
      vote_average: 5.2,
      vote_count: 330,
    },
    {
      adult: false,
      backdrop_path: "/fRrpOILyXuWaWLmqF7kXeMVwITQ.jpg",
      genre_ids: [27, 53, 12, 9648],
      id: 522444,
      original_language: "en",
      original_title: "Black Water: Abyss",
      overview:
        "An adventure-loving couple convince their friends to explore a remote, uncharted cave system in the forests of Northern Australia. With a tropical storm approaching, they abseil into the mouth of the cave, but when the caves start to flood, tensions rise as oxygen levels fall and the friends find themselves trapped. Unknown to them, the storm has also brought in a pack of dangerous and hungry crocodiles.",
      popularity: 768.015,
      poster_path: "/95S6PinQIvVe4uJAd82a2iGZ0rA.jpg",
      release_date: "2020-07-09",
      nombre: "Black Water: Abyss",
      video: false,
      vote_average: 5,
      vote_count: 166,
    },
    {
      adult: false,
      backdrop_path: "/yR27bZPIkNhpGEIP3jKV2EifTgo.jpg",
      genre_ids: [16, 10751],
      id: 755812,
      original_language: "fr",
      original_title: "Miraculous World: New York, United HeroeZ",
      overview:
        "During a school field trip, Ladybug and Cat Noir meet the American superheroes, whom they have to save from an akumatised super-villain. They discover that Miraculous exist in the United States too.",
      popularity: 753.756,
      poster_path: "/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg",
      release_date: "2020-09-26",
      nombre: "Miraculous World: New York, United HeroeZ",
      video: false,
      vote_average: 8.4,
      vote_count: 507,
    },
    {
      adult: false,
      backdrop_path: "/6hgItrYQEG33y0I7yP2SRl2ei4w.jpg",
      genre_ids: [10749, 18],
      id: 613504,
      original_language: "en",
      original_title: "After We Collided",
      overview:
        "Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
      popularity: 728.49,
      poster_path: "/kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
      release_date: "2020-09-02",
      nombre: "After We Collided",
      video: false,
      vote_average: 7.3,
      vote_count: 3458,
    },
    {
      adult: false,
      backdrop_path: "/u5WUCO6irZoq27qbYYrtLUrCGDV.jpg",
      genre_ids: [27, 53],
      id: 630586,
      original_language: "en",
      original_title: "Wrong Turn",
      overview:
        "Jen and a group of friends set out to hike the Appalachian Trail. Despite warnings to stick to the trail, the hikers stray off course—and cross into land inhabited by The Foundation, a hidden community of mountain dwellers who use deadly means to protect their way of life.",
      popularity: 691.58,
      poster_path: "/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg",
      release_date: "2021-01-26",
      nombre: "Wrong Turn",
      video: false,
      vote_average: 6.3,
      vote_count: 262,
    },
  ],
  titulares: [],
  suplentes: [],
  hora: 102,
  segundo: 111
};

const reducerEntrenador = (state = inicial, action) => {
    switch (action.type) {
      case "AGREGAR_TITULAR":
        return {
          ...state,
          titulares: state.titulares.concat(action.jugador),
          jugadores: state.jugadores.filter(j => j.id !== action.jugador.id),
          
        };

        case "AGREGAR_SUPLENTE":
        return {
          ...state,
          suplentes: state.suplentes.concat(action.jugador),
          jugadores: state.jugadores.filter(j => j.id !== action.jugador.id),
          
        };

        case "QUITAR_TITULAR": 
        return {
          ...state,
          jugadores: state.jugadores.concat(action.jugador),
          titulares: state.titulares.filter(j => j.id !== action.jugador.id),
          
        };

        case "QUITAR_SUPLENTE":
          return {
            ...state,
            jugadores: state.jugadores.concat(action.jugador),
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            
          };

          case "CAMBIAR_A_SUPLENTES":
          return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            suplentes: state.suplentes.concat(action.jugador),
            
          };

          case "CAMBIAR_A_TITULARES":
          return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            titulares: state.titulares.concat(action.jugador),
            
          };

          case 'CAMBIATE':
      return {
          ...state,
          hora: state.segundo,
          segundo: state.hora,
      };

      default:
        return state;
    }
   
};





export default createStore(reducerEntrenador);
