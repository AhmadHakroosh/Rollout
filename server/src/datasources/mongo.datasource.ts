import mongoose from "mongoose";

class DataSource {

    private connectionString: string;

    constructor(connector: string, host: string, port: string, database: string) {
        this.connectionString = `${connector}://${host}:${port}/${database}`;
    }

    public connect(): Promise<typeof mongoose> {
        return mongoose.connect(this.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    }

}

export default DataSource;
