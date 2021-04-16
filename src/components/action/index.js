//npm i axios, conexion con la API

import axios from 'axios'

const API_KEY = 'e301a61d8fmsh8fddbaf99ed986ap1a2b08jsnc4ef5b5023f3';
const request = axios.create({
    baseURL : 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout : 30000,
    headers : {'X-Rapidapi-key' : API_KEY}
})

//por defecto al cargar la pagina nos mostrará una lista de albunes por esta funcion
export function getAlbums(search = `romeo`){
    const Albums = request.get(`search?q=${search}`)
            .then(response => response.data.data)
            .catch(error => console.log(error));
    return Albums;
}

//lista de canciones de un album
export function getAlbum(id){
    const album = request.get(`album/${id}`)
            .then(response => response.data)
            .catch(error => console.log(error));
    return album;
}

export function getFavoritesAlbum(){
    const albums = localStorage.getItem('favoritos');
    return albums;
}