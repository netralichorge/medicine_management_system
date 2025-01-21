
const API_LINK = "http://localhost:8081/medicines"
export const getMedicines=()=>{

    return fetch(API_LINK)
    .then(data=>data.json())
    .then(data=>data["_embedded"]["medicines"])
}