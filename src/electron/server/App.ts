import MainService from './MainService';
import context from './DataContext';
import MainController from './MainController';
const bodyParser = require('body-parser');

 export default class App {

    port: Number;

     constructor(port: Number) {
        this.port = port;
    }

     public initiaize() {
        return new Promise((resolve, reject) => {
            let express = require('express');

            let app = express();
            app.use(bodyParser.json());
            app.use(bodyParser.raw({ type: () => true }));
            
            let mainService = new MainService(context.labels);
            let controller = new MainController(mainService);

            app.post('/labels/reset', controller.ResetLabels);
            app.get('/labels', (req, res: Response) => console.log('test'));

            let server = app.listen(this.port, () => {
                let host = server.address().address;
                let port = server.address().port;
            
                resolve(`server http://${host}:${port}`);
            });
        });
    }
}
