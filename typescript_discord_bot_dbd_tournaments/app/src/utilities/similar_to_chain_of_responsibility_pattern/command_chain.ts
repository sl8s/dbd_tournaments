import EndPoint from "./end_point";
import Middleware from "./middleware";

class CommandChain {
    private readonly arrayMiddleware: Array<Middleware>;
    private readonly endPoint: EndPoint;

    public constructor(arrayMiddleware: Array<Middleware>, endPoint: EndPoint) {
        this.arrayMiddleware = arrayMiddleware;
        this.endPoint = endPoint;
    }

    public async execute(): Promise<void> {
        if(this.arrayMiddleware.length === 0) {
            await this.endPoint.call();
            return;
        }
        let iteration = 0;
        for(const itemMiddleware of this.arrayMiddleware) {
            const hasException = !(await itemMiddleware.hasSuccess());
            if(hasException) {
                break;
            }
            iteration++;
        }
        if(this.arrayMiddleware.length !== iteration) {
            return;
        }
        await this.endPoint.call();
    }
}

export default CommandChain;