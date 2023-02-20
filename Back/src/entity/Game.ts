import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  player1: string;

  @Column()
    player2: string;

  @Column()
    playerOneMove: string[];

  @Column()
    playerTwoMove: string[];

}