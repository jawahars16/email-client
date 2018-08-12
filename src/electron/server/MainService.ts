import Repository from "./Repository";
import Label from "./Label";

export default class MainService {

    repository: Repository<Label>;

    constructor(repository){
        this.repository = repository;
    }

	public async ResetLabels(labels: Label[]) {
        console.log(labels);
        await this.repository.removeAll();
        await this.repository.addMultiple(labels);
    }
}
