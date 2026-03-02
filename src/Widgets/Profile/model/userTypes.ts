export interface User {
    "login": string,
    "className": string,
    "parallelName": string,
    "expValue": number,
    "level": number,
    "expToNextLevel": number,
    "campus": {
    "id": string,
        "shortName": string
    },
    "status": string
}