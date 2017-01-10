import './slider.scss';

import { Component, Input } from '@angular/core';
import { iCategory } from '../../interfaces/category.interface';

@Component({
  selector: 'slider',
  template: require('./slider.html')
})
export class SliderComponent {
    @Input() data: iCategory;
}
