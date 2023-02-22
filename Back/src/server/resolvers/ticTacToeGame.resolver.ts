import { Resolver, Query, Authorized} from "type-graphql";
import TicTacToeGame from "../../models/entity/TicTacToeGame";
import TicTacToeGameRepository from "../../repositories/ticTacToeGame.repository";

@Resolver(TicTacToeGame)
export default class TicTacToeGameResolver {
    private ticTacToeGameRepository: TicTacToeGameRepository;

    constructor() {
        this.ticTacToeGameRepository = new TicTacToeGameRepository('TicTacToeGame', '',);
    }

    @Query(returns => [TicTacToeGame])
    @Authorized()
    public async findAllGames(): Promise<TicTacToeGame[]> {
        return await this.ticTacToeGameRepository.findAllGames();
    }
}
