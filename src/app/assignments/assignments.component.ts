import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  title = 'My Assignments Application';
  enabled = false;

  assignments = [
      {
      name: 'One',
      dueDate: '2018-01-01',
      submitted: true
    },
    {
      name: 'Two',
      dueDate: '2019-01-02',
      submitted: false
    },
    {
      name: 'Three',
      dueDate: '2019-01-03',
      submitted: false
    },
    {
      name: 'Four',
      dueDate: '2019-01-04',
      submitted: false
    },
    {
      name: 'Five',
      dueDate: '2019-01-05',
      submitted: true
    }
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.enabled = true;
    }, 2000);
  }

}
