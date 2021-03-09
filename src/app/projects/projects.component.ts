import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  idperson = 2;
  constructor(private rout: Router) { }

  ngOnInit() {
  }

  NavHome()
  {

this.rout.navigate(['/profile'],{queryParams: {id: this.idperson}});
  }

}
