// Obtener acceso a la API de Spotify
const clientId = 'd34a8ffb482e4637b0e833148fd418f8';
const clientSecret = '2fd7d4967bcd421e950e76ce6f65c824';
const accessToken = 'TU_ACCESS_TOKEN'; // Necesitas obtener esto mediante un flujo de autenticación

// ID de la playlist de Spotify que deseas mostrar
const playlistId = 'ID_DE_LA_PLAYLIST';

// Elemento de la lista en el HTML donde se mostrarán las canciones
const playlistElement = document.getElementById('playlist');

// Función para obtener las canciones de la playlist
async function getPlaylistTracks() {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    const data = await response.json();
    return data.items;
}

// Función para mostrar las canciones en la página
async function displayPlaylist() {
    const tracks = await getPlaylistTracks();
    tracks.forEach(track => {
        const trackName = track.track.name;
        const artistName = track.track.artists[0].name;
        const listItem = document.createElement('li');
        listItem.textContent = `${trackName} - ${artistName}`;
        playlistElement.appendChild(listItem);
    });
}

// Mostrar la lista de canciones cuando la página se cargue
window.onload = displayPlaylist;
