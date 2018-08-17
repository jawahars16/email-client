import Repository from "./Repository";
import { Label, Thread } from "./Model";

export default class Service {

    labelRepository: Repository<Label>;
    threadRepository: Repository<Thread>;

    constructor(context){
        this.labelRepository = new Repository(context.labels);
        this.threadRepository = new Repository(context.threads);
    }

    public async getLabels(){
        return await this.labelRepository.get({});
    }

    public async getThreads(label) {

    }

	public async resetLabels(labels: Label[]) {
        const labelsRemoved = await this.labelRepository.removeAll();
        const result = await this.labelRepository.addMultiple(labels);
        return { labelsRemoved, result };
    }

    public async addThreads(threads: Thread[]) {
        return await this.threadRepository.addMultiple(threads);
    }
}
