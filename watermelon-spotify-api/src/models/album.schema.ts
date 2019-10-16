// Import from Mongoose.
import mongoose, {Schema} from 'mongoose';
import {AlbumInterface} from '../interfaces/album.interface';

const AlbumSchema = new Schema({
  album_type: String,
  artists: [Schema.Types.Mixed],
  external_urls: {
    spotify: String
  },
  href: String,
  id: {type: String, unique: true},
  images: [Schema.Types.Mixed],
  name: {type: String, lowercase: true},
  release_date: String,
  release_date_precision: String,
  total_tracks: String,
  type: String,
  uri: String,
});

export default mongoose.model<AlbumInterface>('Album', AlbumSchema);
