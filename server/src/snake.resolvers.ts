import { Resolver, Mutation, Arg, Query, ID } from 'type-graphql';
import { Snake, SnakeModel } from './snake.model';
import { SnakeInput } from './snake.types';

@Resolver((_of) => Snake)
export class SnakeReSolvers {
  @Query(() => [Snake], { name: 'players', description: 'Get All Players' })
  async getAllNotes() {
    return await SnakeModel.find();
  }

  @Mutation(() => Snake, { name: 'addHighScore' })
  async createNotes(@Arg('newHighScore') { name, score }: SnakeInput): Promise<Snake> {
    const newScore = (
      await SnakeModel.create({
        name,
        score,
      })
    ).save();

    return newScore;
  }
}