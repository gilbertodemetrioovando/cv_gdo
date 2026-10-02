import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly cv = CV;
}
