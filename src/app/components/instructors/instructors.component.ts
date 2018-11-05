import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../services/rest-api.service';


@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  instructors: any;
  constructor(private restApi: RestApiService) { }

  ngOnInit() {

    this.restApi.getInstructorList()
      .subscribe( data => {
        this.instructors = data;
      });
  }

}
