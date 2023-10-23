export type FilmsData = 
    {
        "adult": boolean,
        "backdrop_path": string;
        "genres": [
          {
            "id": number;
            "name": string;
          }
        ],
        "homepage": string;
        "id": number;
        "overview": string;
        "poster_path": string;
        "release_date": string;
        "title": string;
        "runtime": number;
      }
