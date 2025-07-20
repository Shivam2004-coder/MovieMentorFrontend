export const API_OPTIONS = {
  // method: "GET",
  // headers: {
  //   accept: "application/json",
  //   Authorization:
  //     "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  // },
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key": process.env.REACT_APP_TRAKT_CLIENT_ID,
  },
};


export const DEFAULT_TRAILER = [
  {
    "title" : {
      "adult": false,
      "backdrop_path": "/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg",
      "genre_ids": [
        16,
        10751,
        12,
        18,
        35
      ],
      "id": "tt2096673",
      "original_language": "en",
      "original_title": "Inside Out",
      "overview": "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
      "popularity": 3.915,
      "poster_path": "/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
      "release_date": "2015-06-17",
      "title": "Inside Out",
      "video": false,
      "vote_average": 7.91,
      "vote_count": 22343
    } ,
    "video" : {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Inside Out - Official US Trailer 2",
      "key": "1HFv47QHWJU",
      "published_at": "2015-03-10T19:00:06.000Z",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer",
      "official": true,
      "id": "571f2fffc3a3683393002ca1"
    },
  },
  {
    "title" : {
      "adult": false,
      "backdrop_path": "/q62bpQ67qaXY0u6b2wFEnQYIbPd.jpg",
      "genre_ids": [
        10751,
        12,
        16,
        35,
        14
      ],
      "id": "tt1979376",
      "original_language": "en",
      "original_title": "Toy Story 4",
      "overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \"Forky\" to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
      "popularity": 3.583,
      "poster_path": "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
      "release_date": "2019-06-19",
      "title": "Toy Story 4",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 9928
    },
    "video" : {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Official Trailer 2",
      "key": "Pl9JS8-gnWQ",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer",
      "official": true,
      "published_at": "2019-05-21T13:00:03.000Z",
      "id": "5d0b262c92514171b0b85c16"
    },
  },
  {
    "title" : {
      "adult": false,
      "backdrop_path": "/4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg",
      "genre_ids": [
        12,
        10751,
        16,
        28,
        35
      ],
      "id": "tt2245084",
      "original_language": "en",
      "original_title": "Big Hero 6",
      "overview": "A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
      "popularity": 6.667,
      "poster_path": "/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
      "release_date": "2014-10-24",
      "title": "Big Hero 6",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 15804
    },
    "video" : {
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Disney's Big Hero 6 - Official US Trailer 2",
      "key": "8IdMPpKMdcc",
      "published_at": "2014-09-25T16:00:00.000Z",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer",
      "official": true,
      "id": "571eb280925141052c0001f8"
    },
  }
]


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SHUFFLE_ARRAY = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
};

export const GOOGLE_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
// export const GOOGLE_API_KEY = "AIzaSyBO-V0rExu-3lfJ-1qpVhTl6vzLqK_zhLU";


export const SAMPLE_DATA = {
  "dates": {
    "maximum": "2025-03-19",
    "minimum": "2025-02-05"
  },
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/m6VEymThX62GkUVCBnSykRAS9cG.jpg",
      "genre_ids": [
        10402
      ],
      "id": 1286773,
      "original_language": "de",
      "original_title": "The Metropolitan Opera: Fidelio",
      "overview": "Following a string of awe-inspiring Met performances, soprano Lise Davidsen stars as Leonore, who risks everything to save her husband from the clutches of tyranny.",
      "popularity": 22.796,
      "poster_path": "/9DU8GX7tiIZQQ15MY4b44Rtgnba.jpg",
      "release_date": "2025-03-15",
      "title": "The Metropolitan Opera: Fidelio",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/xrahxwR14YhmrvH8kC4j1jpozpy.jpg",
      "genre_ids": [
        18,
        27
      ],
      "id": 1315476,
      "original_language": "bg",
      "original_title": "Paradiso",
      "overview": "Inside a cold and rusty bunker, Irina and Georgi endure the aftermath of a nuclear holocaust. Georgi´s heavy radiation sickness and imminent death prompts Irina to repair his old and beloved guitar so he can hear it one last time.",
      "popularity": 22.708,
      "poster_path": "/jN5fvKt25DtWVoPTRaEQgGmmMqd.jpg",
      "release_date": "2025-03-15",
      "title": "Paradiso",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 1325495,
      "original_language": "ja",
      "original_title": "逃走",
      "overview": "Follows the final days of left-wing terrorist Satoshi Kirishima, who died in 2024 after evading capture for 49 years.",
      "popularity": 22.677,
      "poster_path": "/l8v8L2OC95tB4za2oex6wye4TwW.jpg",
      "release_date": "2025-03-15",
      "title": "The Escape",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/pr1tVdPrFUn85fBsA1q5DreDjqd.jpg",
      "genre_ids": [
        27,
        10749
      ],
      "id": 1340727,
      "original_language": "en",
      "original_title": "Afterwards",
      "overview": "A young man receives advice from his deceased grandfather about the afterlife when he suddenly starts to see said advice materialize.",
      "popularity": 22.645,
      "poster_path": "/nR5oqvfkWw94vVChRRiZRwEXhCL.jpg",
      "release_date": "2025-03-15",
      "title": "Afterwards",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/efMmUfbqfMTtheqjcWiHDtxcXbA.jpg",
      "genre_ids": [
        18,
        10749
      ],
      "id": 1424217,
      "original_language": "te",
      "original_title": "కోర్ట్ - State Vs. A Nobody",
      "overview": "A determined lawyer takes on a high-stakes case to defend a 19-year-old boy, challenging a system that has already branded him guilty.",
      "popularity": 13.571,
      "poster_path": "/4pEX67LJd7ZIqYWtksBtOgQEGcQ.jpg",
      "release_date": "2025-03-14",
      "title": "Court - State Vs. A Nobody",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        10402
      ],
      "id": 1359744,
      "original_language": "en",
      "original_title": "Myself Two Seconds to Cry",
      "overview": "The digital presence left by people I knew who died young has vanished.  Songs they’ve uploaded, photo albums, public diary entries, all deleted and all that’s left is generic obituaries.  When I think of these people, I think of a place. With two cameras, I’m capturing the outline of a memory we shared there in present and in past.",
      "popularity": 22.614,
      "poster_path": "/cnqztuI8rYP2XkGDvhMUmLbqnNe.jpg",
      "release_date": "2025-03-15",
      "title": "Myself Two Seconds to Cry",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/IwADj3Pn2s9SLSthhBxZp3X53g.jpg",
      "genre_ids": [
        18,
        35,
        80
      ],
      "id": 1442417,
      "original_language": "en",
      "original_title": "A Murder in Oakland: Beauty is Deadly",
      "overview": "Recently cleared of an embezzlement charge, Detective Williams (Marcus D Spencer) is handed a high-profile murder case while also forced to take on a new partner. Williams is trying to solve this case while also working to see if he can trust his partner.",
      "popularity": 13.556,
      "poster_path": "/iGz5PJNLHKZnWI2x36kP8igIZOe.jpg",
      "release_date": "2025-03-14",
      "title": "A Murder in Oakland: Beauty is Deadly",
      "video": false,
      "vote_average": 1,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/n8HIfpC7nsVOrK8dWb8DHl01jQM.jpg",
      "genre_ids": [
        99
      ],
      "id": 1368096,
      "original_language": "fr",
      "original_title": "Vodu Entre deux mondes",
      "overview": "Voodoo tradition is too often victim of misperceptions and stereotypes in the Western imagination. In Togo, Voodoo is revealed in all its splendour and complexity. Through spectacular ceremonies, consultations and rites, an intimate connection is revealed that unites the visible world with that of invisible forces. By giving a voice to those who live and practise Voodoo, an authentic and nuanced perspective emerges, revealing the richness of this mysterious spirituality. It's a genuine burst of curiosity about a living heritage and the sumptuousness of its traditions.",
      "popularity": 22.591,
      "poster_path": "/pgFFAiInWaxkK3DDceITw3wUPKM.jpg",
      "release_date": "2025-03-15",
      "title": "Vodu Between two worlds",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/fGQCss2nAosaRfaa4NXyr0ZfiEB.jpg",
      "genre_ids": [
        10770,
        35,
        10749
      ],
      "id": 1418287,
      "original_language": "en",
      "original_title": "Royal-ish",
      "overview": "Lacey is an amusement park princess who befriends 8-year-old Rose, a real-life princess, and is recruited by her handsome father to travel to their kingdom and be the new governess.",
      "popularity": 22.579,
      "poster_path": "/eviXuwmjoxSRzAz0sdkkvOEjNgh.jpg",
      "release_date": "2025-03-15",
      "title": "Royal-ish",
      "video": false,
      "vote_average": 7,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": "/y0VkevEaXZAEgDW83iwrelTeBKK.jpg",
      "genre_ids": [
        18,
        10751
      ],
      "id": 1047884,
      "original_language": "zh",
      "original_title": "我家的事",
      "overview": "Elder sister, Spring, seeks her origins before heading to university, Autumn, the mother, grapples with conceiving a child through artificial insemination, Summer, the younger brother, tries to engage with a paternal figure he barely knows just before his military service, and Winter, the father, desperately tries to change his fate as problems mount up.",
      "popularity": 22.548,
      "poster_path": "/kLI40epleDwfcpLRC6hAAQUerA4.jpg",
      "release_date": "2025-03-15",
      "title": "Family Matters",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/b1Pms8IQTCzZimyliCx8CFeqfSa.jpg",
      "genre_ids": [
        35,
        18,
        27
      ],
      "id": 1275248,
      "original_language": "en",
      "original_title": "Sister Midnight",
      "overview": "In Mumbai, an arranged marriage spirals into darkness as the spineless husband watches his wife morph into a ruthless, feral force within their marital confines.",
      "popularity": 13.513,
      "poster_path": "/lXMJ6un3SZvRq8cOHap7LviY5hG.jpg",
      "release_date": "2025-03-14",
      "title": "Sister Midnight",
      "video": false,
      "vote_average": 9,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": "/9JwHIV82IQOhUTV8w1FlFQnKBZC.jpg",
      "genre_ids": [
        53,
        35
      ],
      "id": 1399893,
      "original_language": "en",
      "original_title": "Dead-Weight",
      "overview": "When three high school graduates supply booze for the big party, they discover their cargo isn't what they expected.",
      "popularity": 22.505,
      "poster_path": "/7FIlPqSh9i8uSmyrimpRj6rbWag.jpg",
      "release_date": "2025-03-15",
      "title": "Dead-Weight",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/qQn52VABdwlsHgsRT1RoWsMR3cO.jpg",
      "genre_ids": [
        10749,
        35
      ],
      "id": 1404722,
      "original_language": "zh",
      "original_title": "真爱营业",
      "overview": "Influencer couple Xu Xiaoli and her \"hired boyfriend\" Hao Zha face a fan crisis and pressure from their boss. In response, Xu Xiaoli plans a fake wedding, but when Hao Zha unexpectedly disappears, she embarks on a wild chase to find him. Will their relationship survive the chaos?",
      "popularity": 22.492,
      "poster_path": "/lEnfI1fM97TYUSj4NykkUwI1yYF.jpg",
      "release_date": "2025-03-15",
      "title": "Liar, Liar, Love is on Fire",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        18,
        53
      ],
      "id": 1411411,
      "original_language": "en",
      "original_title": "A Day",
      "overview": "A young boxer must confront his family's traumatic past when his estranged older brother is released from prison.",
      "popularity": 22.477,
      "poster_path": "/cVY0jS7iRs1TQwSMQAfufKJh9sd.jpg",
      "release_date": "2025-03-15",
      "title": "A Day",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/hrD0lZ9pzOtp2Pr3TyF1xFhqyi4.jpg",
      "genre_ids": [
        18,
        27
      ],
      "id": 1418112,
      "original_language": "id",
      "original_title": "Beneath The Tall Tree's Gaze",
      "overview": "",
      "popularity": 22.461,
      "poster_path": "/oVIJMEEO5elDaaFf9gyBP3HEl6M.jpg",
      "release_date": "2025-03-15",
      "title": "Beneath The Tall Tree's Gaze",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/tMu0mt67XkCbTb6LbLFQdipox2l.jpg",
      "genre_ids": [
        878,
        9648,
        53
      ],
      "id": 1420234,
      "original_language": "en",
      "original_title": "Reincarnation",
      "overview": "\"A man is confronted with a haunting reality as he uncovers dark secrets about his identity and the truth behind his mysterious circumstances.\"",
      "popularity": 22.457,
      "poster_path": "/4f0yXq68ukd5VBQGustyimX9ojz.jpg",
      "release_date": "2025-03-15",
      "title": "Reincarnation",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/yZAZEIin8xhg7Jy3ABVQLJlCy88.jpg",
      "genre_ids": [],
      "id": 1420492,
      "original_language": "id",
      "original_title": "Jenuh Eksistensialisme",
      "overview": "Three female students discusses existentialism while trapped in their classroom.",
      "popularity": 22.456,
      "poster_path": "/kJGpgrsxW7ggv87vMQ1sJ6BQbAj.jpg",
      "release_date": "2025-03-15",
      "title": "Jenuh Eksistensialisme",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/qUc0Hol3eP74dbW4YyqT6oRLYgT.jpg",
      "genre_ids": [
        878,
        35,
        12
      ],
      "id": 696506,
      "original_language": "en",
      "original_title": "Mickey 17",
      "overview": "Unlikely hero Mickey Barnes finds himself in the extraordinary circumstance of working for an employer who demands the ultimate commitment to the job… to die, for a living.",
      "popularity": 22.436,
      "poster_path": "/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
      "release_date": "2025-02-28",
      "title": "Mickey 17",
      "video": false,
      "vote_average": 7,
      "vote_count": 590
    },
    {
      "adult": false,
      "backdrop_path": "/75RPFgjv5nCmxR9xJcvvOJrcsAS.jpg",
      "genre_ids": [
        99
      ],
      "id": 1422166,
      "original_language": "en",
      "original_title": "The Age of Disclosure",
      "overview": "Director Dan Farah got 34 senior members of the U.S. Government, military, and intelligence community to come on camera. He says they reveal an 80 year cover-up of the existence of non-human intelligent life and a secret war amongst major nations to reverse engineer technology of non-human origin. The film explores the profound impact the situation has on the future of humanity, while providing a look behind-the-scenes with those at the forefront of the bi-partisan disclosure effort.",
      "popularity": 13.714,
      "poster_path": "/qsV4QTjO1jLLezzPA8yRm207ymb.jpg",
      "release_date": "2025-03-14",
      "title": "The Age of Disclosure",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/gwavBG1hohzAKB6Nb3Z0LgeDfzQ.jpg",
      "genre_ids": [
        53
      ],
      "id": 1422471,
      "original_language": "ta",
      "original_title": "Dexter",
      "overview": "Aadi and Yamini's love story takes a tragic turn when Yamini is kidnapped and brutally murdered, plunging Aadi into despair. Struggling with PTSD, he undergoes a memory-erasing treatment and starts anew, reuniting with his childhood friend Bhuvi. However, their lives are upended when Bhuvi's family is taken hostage by a dangerous man named Sadhik. In a tense showdown, Sadhik traps Aadi, Bhuvi, and others in a deadly game, revealing the dark motives behind a string of murders, including Yamini's. Will Aadi uncover the truth and find redemption amidst the chaos?",
      "popularity": 13.424,
      "poster_path": "/6jLbZlzNOfHQgD0a1wgtBuscriZ.jpg",
      "release_date": "2025-03-14",
      "title": "Dexter",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    }
  ],
  "total_pages": 211,
  "total_results": 4201
}