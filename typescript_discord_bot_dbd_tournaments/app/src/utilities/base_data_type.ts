import { Client } from "discord.js";

abstract class BaseDataType {
    public readonly client: Client;
    
    protected constructor(client: Client) {
        this.client = client;
    }
}

export default BaseDataType;