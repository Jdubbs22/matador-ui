import {Component, Input, OnInit} from '@angular/core';
import {Instructor} from '../../model/instructor';
import {RestApiService} from '../../services/rest-api.service';
import {Router} from '@angular/router';
import {routerNgProbeToken} from '@angular/router/src/router_module';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  @Input()
  instructor: Instructor;

  constructor(private restApi: RestApiService,
              private router: Router
  ) { }

  ngOnInit() {

  }

  getAvailbility() {

    this.router.navigate(['/sessions'], { queryParams: { instructorId: this.instructor.instrId } });

  }
}
