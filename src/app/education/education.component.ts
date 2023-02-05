import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  achievements1 = [
    "President's Lister 1st Semester (2022-2023)",
    'Cisco Networking Academy - Introduction to Packet Tracer Certificate',
    "President's Lister 1st & 2nd Semester (2021-2022)",
    "Dean's Lister 2nd Semester (2020-2021)",
    'Cisco Networking Academy - Introduction to Cybersecurity Certificate',
    "President's Lister 1st Semester (2020-2021)",
  ];

  achievements2 = [
    'With Honors (2017-2018)',
    'Journalist of the Year (2017-2018)',
    '1st Place Photojournalism CSPC (2017-2018)',
    '6th Place Photojournalism CSPC (2016-2017)',
    'With Honors (2016-2017)',
  ];
}
