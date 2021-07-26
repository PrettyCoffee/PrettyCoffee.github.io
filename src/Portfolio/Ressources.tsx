import React from 'react';

import { Tile, TileGroup } from '../components';
import { ressources } from '../data/ressources';

export const Ressources = () => (
  <TileGroup autoFill={true} tileSize={'11.5rem'}>
    {ressources.map((ressource, index) => (
      <Tile key={'ressource-' + index} {...ressource} />
    ))}
  </TileGroup>
);
