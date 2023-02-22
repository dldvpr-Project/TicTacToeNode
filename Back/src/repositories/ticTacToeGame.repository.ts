import TicTacToeGame from "../models/entity/TicTacToeGame";
import {Repository, EntityRepository, FindOneOptions} from "typeorm";
import {TicTacToeMoveEnum} from "../types";

@EntityRepository(TicTacToeGame)
export default class TicTacToeGameRepository extends Repository<TicTacToeGame> {

    public async findGameById(id: number): Promise<TicTacToeGame | null> {
        const options: FindOneOptions<TicTacToeGame> = {
            where: { id: id }
        };
        return await this.findOne(options);
    }
    public async findAllGames(): Promise<TicTacToeGame[]> {
        return await this.find();
    }

    public async createTicTacToeGame(playerOne: string, playerTwo: string): Promise<TicTacToeGame> {
        const game = new TicTacToeGame();
        game.playerOne = playerOne;
        game.playerTwo = playerTwo;
        game.playerOneMove = new Array<TicTacToeMoveEnum>(5);
        game.playerTwoMove = new Array<TicTacToeMoveEnum>(5);
        return await this.save(game);
    }
}