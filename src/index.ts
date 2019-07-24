import * as bodyParser from 'body-parser';
import express from 'express';
import { Routes } from './routes/Routes';
import 'reflect-metadata';
import { config } from 'dotenv';
import errorhandler from 'strong-error-handler';


class Index {
  public app: express.Application = express();
  public routePrv: Routes = new Routes();

  constructor() {
    this.basicConfig();
    this.routePrv.routes(this.app);
  }

  private basicConfig(): void {
    config();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // middleware for json body parsing
    this.app.use(bodyParser.json({limit: '5mb'}));

    this.app.use(errorhandler({
      debug: process.env.ENV !== 'prod',
      log: true,
    }));

    // enable corse for all origins
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Expose-Headers", "x-total-count");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
      res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

      next();
    });

    // serving static files
    this.app.use(express.static('public'));
  }
}

export default new Index();
