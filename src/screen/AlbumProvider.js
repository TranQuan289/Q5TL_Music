import {createContext, useState, useEffect} from 'react';

const AlbumsContext = createContext();
const CLIENT_ID = '35944a520f8c43cdb73fad9b6909da4e';
const CLIENT_SECRET = '778535db4d7a43e18f149aefeb1a3223';

function AlbumsProvider({children}) {
  const [accessToken, setAccessToken] = useState([]);
  const [albums, setAlbums] = useState([]);
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
        // console.log(data.access_token);
        setAccessToken(data.access_token);
      })
      .catch(err => console.error(err));
  }, []);
  async function search() {
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    };

    //
    const artistID = await fetch(
      'https://api.spotify.com/v1/search?q=' + 'Taylor Swift' + '&type=artist',
      searchParameters,
    )
      .then(response => response.json())
      .then(data => {
        {
          return data.artists.items[0].id;
        }
      })
      .catch(err => console.log(err));
    console.log(' Atrist ID is ' + '06HL4z0CvFAxyc27GXpf02');

    const returnAlbums = await fetch(
      'https://api.spotify.com/v1/artists/' +
        '06HL4z0CvFAxyc27GXpf02' +
        '/albums' +
        '?include_groups=album&market=US&limit=50',
      searchParameters,
    )
      .then(response => response.json())
      .then(data => {
        // if (data.items) {
        // console.log(data.items.indexOf(index % 2 == 0));
        setAlbums(data.items);
        // }
      })
      .catch(err => console.log(err));
  }
  useEffect(() => {
    search();
  }, []);
  console.log(albums);
  const context = {
    albums,
    setAlbums,
  };
  return (
    <AlbumsContext.Provider value={context}>{children}</AlbumsContext.Provider>
  );
}
export {AlbumsContext, AlbumsProvider};
