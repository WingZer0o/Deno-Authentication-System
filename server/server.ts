import express from "npm:express@4.18.2";


export default class Server {
  public port = 8080;
  public app: express.Application;
  private indexRouter: express.Router;

  constructor() {
    this.app = express();
    this.configureMiddleware();
  }

  private configureMiddleware(): void {
    
  }
}