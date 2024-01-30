export type SeriesData = 
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
    "first_air_date": string;
    "last_air_date": string;
    "name": string;
    "number_of_episodes": number;
    "number_of_seasons": number;
  }