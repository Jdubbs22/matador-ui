import { Component, OnInit } from '@angular/core';
import {MembersService} from '../../services/members/members.service';
import {Member} from '../../model/member';



@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[] = [];
  constructor(private memberService: MembersService) { }

  ngOnInit() {
   //   this.getMembers();
  }

  getMembers() {
    this.memberService.getMembers().then(list => {
      this.members = list;
    });
  }
}
