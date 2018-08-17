import Service from './Service';
import DataContext from './DataContext';
const bodyParser = require('body-parser');
const express = require('express');

 export default class App {

    port: Number;
    databasePath: string;

     constructor(port: Number, databasePath: string) {
        this.port = port;
        this.databasePath = databasePath;
        console.log(this.databasePath);
    }

     public initiaize() {
        return new Promise((resolve, reject) => {

            const app = express();

            this.configureBodyParser(app);
            this.configureCrossOrigin(app);
            this.configureLogging(app);

            const context = new DataContext(this.databasePath);
            const mainService = new Service(context);

            app.get('/labels', async (req, res) => {
                res.send(await mainService.getLabels());
            });

            app.post('/labels', async (req, res) => {
                res.send(await mainService.resetLabels(req.body));
            });

            app.post('/threads', async (req, res) => {
                res.send(await mainService.addThreads(req.body));
            });

            const server = app.listen(this.port, () => {
                const host = server.address().address;
                const port = server.address().port;
            
                resolve(`server http://${host}:${port}`);
            });
        });
    }

    configureBodyParser(app){
        app.use(bodyParser.json());
        app.use(bodyParser.raw({ type: () => true }));
    }

    configureCrossOrigin(app){
        app.use((req, res, next) => {
            console.log(`${req.url} - ${req.method} - ${JSON.stringify(req.body)}`);
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
          });
    }

    configureLogging(app){
        app.use((req, res, next) => {
            console.log(`${req.method} - ${req.url} - ${JSON.stringify(req.body)}`);
            next();
        });
    }
}
