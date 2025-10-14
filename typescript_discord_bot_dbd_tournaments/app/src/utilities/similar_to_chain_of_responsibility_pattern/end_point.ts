import BaseDataType from "../base_data_type";

class EndPoint {
    private readonly dataType: BaseDataType;
    private readonly callback: (event: BaseDataType) => Promise<void>;

    public constructor(dataType: BaseDataType, callback: (event: BaseDataType) => Promise<void>) {
        this.dataType = dataType;
        this.callback = callback;
    }

    public async call(): Promise<void> {
        await this.callback(this.dataType);
    }
}

export default EndPoint;