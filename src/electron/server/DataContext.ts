import Label from "./Label";
import Repository from './Repository';

class DataContext {
    labels: Repository<Label>;

    constructor(){
        this.labels = new Repository('labels');
    }
}

let context = new DataContext();

export default context;