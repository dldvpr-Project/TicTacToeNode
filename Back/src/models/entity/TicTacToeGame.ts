import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {TicTacToeMoveEnum} from "../../types";

@Entity()
class TicTacToeGame {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    playerOne: string;

    @Column()
    playerTwo: string;

    @Column({
        type: 'enum',
        enum: TicTacToeMoveEnum,
    })
    playerOneMove: TicTacToeMoveEnum[];

    @Column({
        type: 'enum',
        enum: TicTacToeMoveEnum,
    })
    playerTwoMove: TicTacToeMoveEnum[];
}

export default TicTacToeGame;
