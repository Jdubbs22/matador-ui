import {Instructor} from './instructor';
import {Member} from './member';

export interface Session {

  id: String;
  member: Member;
  instructor: Instructor;
}
