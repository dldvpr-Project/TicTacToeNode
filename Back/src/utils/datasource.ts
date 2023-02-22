import TicTacToeGame from "../models/entity/TicTacToeGame";
import { DataSource } from "typeorm";

export default new DataSource({
    type: "postgres",
    // host: "db",
    host: "host.docker.internal",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "tictactoe",
    synchronize: true,
    entities: [TicTacToeGame],
    logging: ["query", "error"],
});