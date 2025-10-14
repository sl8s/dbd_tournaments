import { BaseArrayModel } from "smvp_typescript";
import Example from "./example";

class ArrayExample<T extends Example> extends BaseArrayModel<T> {
    public constructor(arrayModel: Array<T>) {
        super(arrayModel);
    }

    public override clone(): ArrayExample<T> {
        const newArrayModel = new Array<T>();
        for(const itemModel of this.arrayModel) {
            newArrayModel.push(itemModel.clone() as T);
        }
        return new ArrayExample(newArrayModel);
    }

    public override toArrayMap(): Array<Record<string, any>> {
        const arrayMap = Array<Record<string,any>>();
        for(const itemModel of this.arrayModel) {
            arrayMap.push(itemModel.toMap());
        }
        return arrayMap; 
    }

    public override toString(): string {
        let str = "\n";
        for(const itemModel of this.arrayModel) {
            str += itemModel.toString() + ",\n";
        }
        return "ArrayExample(arrayModel: [" + str + "])";
    }
}

export default ArrayExample;