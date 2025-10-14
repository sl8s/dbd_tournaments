import { BaseModelIterator } from "smvp_typescript";
import Example from "../example";

class ExampleOrderByDescIdIterator<T extends Example> extends BaseModelIterator<T> {
    public override next(): T {
        throw new Error("Method not implemented.");
    }

    public override hasNext(): boolean {
        throw new Error("Method not implemented.");
    }
}

export default ExampleOrderByDescIdIterator;