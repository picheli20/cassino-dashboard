import { Component, Input, ElementRef, ViewChild, trigger, transition, style, animate } from '@angular/core';
import { ICategory } from '../../interfaces/category.interface';
import { IGame } from '../../interfaces/game.interface';

@Component({
  selector: 'slider',
  template: require('./slider.html'),
  animations: [
    trigger(
      'hideInput', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({ 'opacity': 1}),
          animate('500ms', style({opacity: 0}))
        ])
      ]
    )
  ],
})
export class SliderComponent {
	@ViewChild('sliderContainer')
	sliderContainer: ElementRef;
	@Input() data: ICategory;
	games : IGame[];

	searchModel : any;
	containerHeightDefault : number = 260;
	viewAll : boolean = false;

	constructor (private element : ElementRef) {}

	ngOnInit () {
		this.games = this.data._embedded.games;
	}

	expandedValue () {
		if (!this.viewAll) {
			return this.containerHeightDefault;
		}
		return this.sliderContainer.nativeElement.offsetHeight + 60;
	}
	toggle() {
		this.viewAll = !this.viewAll;
		this.searchModel = '';
	}
}
