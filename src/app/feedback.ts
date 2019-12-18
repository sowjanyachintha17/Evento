import { Session } from './session';
import { Logistic} from './Logistic';

export class Feedback{
    event_feedback:string;
    sessions: Session = new Session();
    comments:string;
    suggestions:string;
    helpfull:string;
    key_learned:string;
    feedback_logistics:string;
    logistics: Logistic = new Logistic();



}