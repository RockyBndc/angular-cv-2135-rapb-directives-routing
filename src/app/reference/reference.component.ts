import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css'],
})
export class ReferenceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  addReference = [
    { name: 'Name', connection: 'Profession', email: 'E-mail' },
    {
      name: 'Kisses Reyes',
      connection: 'University Professor',
      email: 'ksgmail.com',
    },
    { name: 'Noie Manoy', connection: 'Web Developer', email: 'nmgmail.com' },
    {
      name: 'Jed Bartolome',
      connection: 'Web Developer',
      email: 'jbgmail.com',
    },
    {
      name: 'Adrian Sarabia',
      connection: 'University Professor',
      email: 'asgmail.com',
    },
    {
      name: 'Mark Laus',
      connection: 'University Professor',
      email: 'mlgmail.com',
    },
    {
      name: 'Dhana Bermudez',
      connection: 'UX/UI Designer',
      email: 'dbgmail.com',
    },
    {
      name: 'Quinny Lacsina',
      connection: 'University Professor',
      email: 'qlgmail.com',
    },
    {
      name: 'Almario Guzman',
      connection: 'Web Developer',
      email: 'aggmail.com',
    },
    {
      name: 'Kimberly Perez',
      connection: 'University Professor',
      email: 'kpgmail.com',
    },
    {
      name: 'Jane Magtanggol',
      connection: 'University Professor',
      email: 'hmgmail.com',
    },
  ];
}
