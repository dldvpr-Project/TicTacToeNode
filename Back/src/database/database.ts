import {DataSource} from "typeorm";

export default new DataSource({
    type: "postgres",
    host: "127.0.0.1",
    port: 5433,
    username: "root",
    password: "root",
    database: "tictactoe",
    synchronize: true,
    entities: [__dirname + "/models/entity/*.ts"],
    logging: ["query", "error"],
});
