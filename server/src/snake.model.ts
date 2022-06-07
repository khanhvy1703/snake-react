import { prop as Property, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType({description: 'The Snake Model'})
@modelOptions({schemaOptions: {collection: 'snake'}})
export class Snake {
  @Field(() => ID)
  id: string;

  @Field()
  @Property({type: () => String, required: true})
  name: string;

  @Field()
  @Property({type: () => Number, required: true})
  score: number;
}

export const SnakeModel = getModelForClass(Snake);