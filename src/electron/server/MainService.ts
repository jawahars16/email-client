import Repository from "./Repository";
import { Label, Thread } from "./Model";

export default class MainService {

    labelRepository: Repository<Label>;
    threadRepository: Repository<Thread>;

    constructor(context){
        this.labelRepository = new Repository(context.labels);
        this.threadRepository = new Repository(context.threads);
    }

	public async ResetLabels(labels: Label[]) {
        const labelsRemoved = await this.labelRepository.removeAll();
        const result = await this.labelRepository.addMultiple(labels);
        return { labelsRemoved, result };
    }

    public async AddThreads(threads: Thread[]) {
        return await this.threadRepository.addMultiple(threads);
    }
}
