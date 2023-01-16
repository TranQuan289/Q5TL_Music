import {ThemeProvider} from '@react-navigation/native';
import {createContext, useState,useEffect} from 'react';

const AlbumsContext = createContext();

function AlbumsProvider({children}) {
//   const [albums, setAlbums] = useState([]);
    const [heart, setHeart] = useState(false);
    const [accessToken, setAccessToken] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [searchInput, setSearchInput] = useState('Tayler Swist');
  useEffect(() => {
    // API access token

    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        CLIENT_ID +
        '&client_secret=' +
        CLIENT_SECRET,
    };
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => {
        console.log(data.access_token);
        setAccessToken(data.access_token);
      })
      .catch(err => console.error(err));
  }, []);
  // SEARCH

  async function search() {
    console.log('Search for ' + searchInput);
    // Get request using search to get the Artist ID
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };

    //
    const artistID = await fetch(
      'https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist',
      searchParameters,
    )
      .then(response => response.json())
      .then(data => {
        {
          console.log(data.artists.items[0].id);
          return data.artists.items[0].id;
        }
      })
      .catch(err => console.log(err));
    console.log(' Atrist ID is ' + artistID);
    // Get request with artist Id grad all the albums from that artist

    const returnAlbums = await fetch(
      'https://api.spotify.com/v1/artists/' +
        artistID +
        '/albums' +
        '?include_groups=album&market=US&limit=50',
      +searchParameters,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        setAlbums(data.items);
      })
      .catch(err => console.log(err));
  }
  useEffect(() => {
    search();
  }, []);
  const context = {
    albums,
  };
  console.log(albums)
  return (
    <ThemeProvider.Provider value={context}>{children}</ThemeProvider.Provider>
  );
}
export {AlbumsContext, AlbumsProvider};