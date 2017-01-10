import {Component} from '@angular/core';
import { Loader } from '../../entities/loader.entity';

@Component({
  selector: 'loader',
  template: require('./loader.html')
})

export class LoaderComponent {
    loader = Loader;
}
