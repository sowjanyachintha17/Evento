import { Venue} from './Venue';
import { User } from './user';

export class Event {

    
    id:string;
    title: string;
    event_type:string;
    event_category: string;
    organizer_name: string;
    day: Date;
    end_date: Date;
    summary:string;
    text:string;
    ticket_type: string;
    number_of_tickets: number;
    ticket_price:number;
    register_start_Date: Date;
    register_end_date: Date;
    published: string;
    coordinates: Array<number> |Array<string>;
    tags: Array<string>;
    owner: User = new User();
    venue:  Venue = new Venue();
}
      
    
  
  
             
  
  