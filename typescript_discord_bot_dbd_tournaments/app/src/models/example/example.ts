import { BaseModel } from "smvp_typescript";

class Example extends BaseModel {
    public constructor(id: string) {
        super(id);
    }

    public override clone(): Example {
        return new Example(this.id);
    }

    public override toMap(): Record<string, any> {
        return {"id": this.id };
    }
    
    public override toString(): string {
        return "Example(id: " + this.id + ")";
    }
}

export default Example;