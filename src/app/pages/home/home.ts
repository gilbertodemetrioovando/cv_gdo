import { Component } from '@angular/core';
import { CV } from '../../data/cv.data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly cv = CV;
}
