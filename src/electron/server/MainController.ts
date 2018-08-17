import MainService from "./MainService";

export default class MainController {

    readonly mainService: MainService;

    constructor(mainService: MainService, app: any){
        this.mainService = mainService;

        app.post('/labels/reset', this.ResetLabels);
        app.get('/labels', (req, res: Response) => console.log('test'));
    }

	public async ResetLabels(req: any, res: Response) {
        console.log(req.body);
        console.log(this);
        // this.mainService.ResetLabels(req.body);
    }
}
