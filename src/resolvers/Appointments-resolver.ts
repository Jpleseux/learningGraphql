import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { createAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";

@Resolver()
export class AppointmentsResolver{
    @Query(()=>String)
    async helloWord(){
        return "hello word"
    }
    @Mutation(()=>Appointment)
    async createAppointment(@Arg("data")data:createAppointmentInput){
        const appointment = new Appointment();
        appointment.startAt = data.startAt;
        appointment.endsAt = data.endsAt;
        return appointment
    }
}


