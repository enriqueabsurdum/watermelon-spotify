// Import Mongoose.
import { Document } from 'mongoose';

export interface AlbumInterface extends Document {
  readonly album_type?: string;
  readonly artists?: Artist[];
  readonly external_urls?: ExternalUrls;
  readonly href?: string;
  readonly id?: string;
  readonly images?: Image[];
  readonly name?: string;
  readonly release_date?: string;
  readonly release_date_precision?: string;
  readonly total_tracks?: number;
  readonly type?: string;
  readonly uri?: string;
}

interface Image {
  readonly height?: number;
  readonly url?: string;
  readonly width?: number;
}

interface Artist {
  readonly external_urls?: ExternalUrls;
  readonly href?: string;
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly uri?: string;
}

interface ExternalUrls {
  readonly spotify?: string;
}
