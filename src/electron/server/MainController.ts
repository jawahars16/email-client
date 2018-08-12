import MainService from "./MainService";

export default class MainController {

    mainService: MainService;

    constructor(mainService: MainService){
        this.mainService = mainService;
    }

	public async ResetLabels(req: Request, res: Response) {
        console.log(req);
    }
}
