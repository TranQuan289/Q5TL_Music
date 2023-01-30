import React from 'react';
import Providers from './src/navigation';
import {AlbumsProvider} from './src/screen/AlbumProvider';

const App = () => {
  return (
    <AlbumsProvider>
      <Providers />
    </AlbumsProvider>
  );
};

export default App;
