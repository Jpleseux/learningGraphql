import { Field, InputType } from "type-graphql";

@InputType()
export class createAppointmentInput{
    @Field()
    customerId:string;

    @Field()
    startAt:Date;

    @Field()
    endsAt:Date;
}