import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  readonly cv = CV;
}
