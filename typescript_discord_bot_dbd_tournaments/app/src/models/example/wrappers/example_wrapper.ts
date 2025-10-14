import { BaseModelWrapper } from "smvp_typescript";
import Example from "../example";

class ExampleWrapper extends BaseModelWrapper {
    public constructor(map: Record<string,any>) {
        super(map);
    }

    public override fromMap(): Example {
        return new Example(this.map["id"]);
    }
}

export default ExampleWrapper;