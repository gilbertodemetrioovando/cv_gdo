import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly cv = CV;
}
