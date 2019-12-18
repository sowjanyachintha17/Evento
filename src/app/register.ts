import { User } from './user';
import { Event } from './event';

export class Register{
    
    id:string;
    course:string;
    branch:string;
    year:string;
    register_date:Date;
    amount_paid:DoubleRange;
    shortlist_status:string;
    comments:string;
    ticket_id:string;
    attendance: boolean;
    registration_type:string;
    event: Event= new Event();
    participant: User=new User();
}  