import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly cv = CV;
}
