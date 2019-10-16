// Import from Express.
import {Request, Response} from 'express';

// Import Album Schema.
import AlbumSchema from '../models/album.schema'

// Import Spotify Controller.
import spotifyController from '../controllers/spotify.controller'


class AlbumControllers {

  constructor() {
  }

  public async getAlbums(req: Request, res: Response): Promise<void> {
    const albums = await AlbumSchema.find();
    res.json({
      message: 'List of albums registered in MongoDB',
      data: albums
    });
  }

  public async getAlbum(req: Request, res: Response): Promise<void> {
    const album = await AlbumSchema.find({name: {$regex: req.params.album}});
    console.log(album);
    if (album.length <= 0) {
      const album = await spotifyController.getAlbumFromSpotify(res, req.params.album, 'album', 'ES');
      for (let i = 0; i < album.length; i++) {
        const newAlbum = new AlbumSchema(album[i]);
        await newAlbum.save();
        console.log('ID =============>>> ', newAlbum.id);
      }
      res.json({
        message: 'New albums inserted in the MongoDB',
        data: album
      });
    } else {
      res.json({
        message: 'The requested album already exists in MongoDB',
        data: album
      });
    }
  }

}

const albumController = new AlbumControllers();
export default albumController;
