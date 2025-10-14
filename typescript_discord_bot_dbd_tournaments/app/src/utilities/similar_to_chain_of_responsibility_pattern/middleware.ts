import BaseDataType from "../base_data_type";

class Middleware {
    private readonly dataType: BaseDataType;
    private readonly callback: (event: BaseDataType) => Promise<boolean>;

    public constructor(dataType: BaseDataType, callback: (event: BaseDataType) => Promise<boolean>) {
        this.dataType = dataType;
        this.callback = callback;
    }

    public async hasSuccess(): Promise<boolean> {
        return await this.callback(this.dataType);
    }
}

export default Middleware;