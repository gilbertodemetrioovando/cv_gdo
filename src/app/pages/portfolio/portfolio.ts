import { Component } from '@angular/core';
import { Home } from '../home/home';
import { Profile } from '../profile/profile';
import { Experience } from '../experience/experience';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-portfolio',
  imports: [Home, Profile, Experience, Skills, Projects, Contact],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {}
