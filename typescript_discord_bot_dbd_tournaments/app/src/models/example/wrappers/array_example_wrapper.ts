import Example from "../example";
import ArrayExample from "../array_example";
import ExampleWrapper from "./example_wrapper";
import { BaseArrayModelWrapper } from "smvp_typescript";

class ArrayExampleWrapper extends BaseArrayModelWrapper {
    public constructor(arrayMap: Array<Record<string,any>>) {
        super(arrayMap);
    }
    
    public override fromArrayMap(): ArrayExample<Example> {
        const arrayModel = new Array<Example>();
        for(const itemMap of this.arrayMap) {
            const modelWrapper = new ExampleWrapper(itemMap);
            arrayModel.push(modelWrapper.fromMap());
        }
        return new ArrayExample(arrayModel);
    }
}

export default ArrayExampleWrapper;