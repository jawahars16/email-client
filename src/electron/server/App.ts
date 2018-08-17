import MainService from './MainService';
import context from './DataContext';
import MainController from './MainController';
import DataContext from './DataContext';
const bodyParser = require('body-parser');

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
            let express = require('express');

            let app = express();

            app.use(bodyParser.json());
            app.use(bodyParser.raw({ type: () => true }));

            app.use((req, res, next) => {
                console.log(`${req.url} - ${req.method} - ${JSON.stringify(req.body)}`);
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
                next();
              });
            
            const context = new DataContext(this.databasePath);
            const mainService = new MainService(context);

            app.post('/labels', async (req, res) => {
                const result = await mainService.ResetLabels(req.body);
                res.send(result);
            });
            app.post('/threads', async (req, res) => {
                const result = await mainService.AddThreads(req.body);
                res.send(result);
            });

            let server = app.listen(this.port, () => {
                let host = server.address().address;
                let port = server.address().port;
            
                resolve(`server http://${host}:${port}`);
            });
        });
    }
}
