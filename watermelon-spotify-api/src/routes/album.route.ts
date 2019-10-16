// Import form Express.
import { Router } from 'express';

// Import Albums Controllers.
import albumController from '../controllers/album.controller';


class AlbumRoutes {

  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes() {
    this.router.get('/', albumController.getAlbums);
    this.router.get('/:album', albumController.getAlbum);
  }
}

const albumRoute = new AlbumRoutes();
albumRoute.routes();

export default albumRoute.router;
