// Import Modules.
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';

// Import Database.
import mongodb from './database/mongodb';

// Import Routes.
import albumRoutes from './routes/album.route';

class Server {

  app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  public config(): void {
    // MongoDB.
    mongodb().then();

    // Port Setting.
    this.app.set('port', process.env.PORT || 3000);
  }

  public middlewares(): void {
    // Middlewares Settings.
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  public routes(): void {
    // Routes Settings.
    this.app.use('/api/v1/albums', albumRoutes);
  }

  public start(): void {
    // Start application.
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server running in the port ${this.app.get('port')}.`)
    });
  }

}

const server = new Server();
server.start();
