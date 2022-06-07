import { Field, InputType, ID } from 'type-graphql';
import { Snake } from './snake.model';

@InputType()
export class SnakeInput implements Partial<Snake> {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  score: number;
}