import {Component, Input, Injectable} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {MainComponent} from './main';

@Component({selector: 'slider', template: ''})
class MockSliderComponent {
  @Input() data: any;
}

class CategoryService {
  get () {
    return [];
  }
}

/*
describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockSliderComponent
      ],
      providers: [
        {provide: CategoryService, useValue: CategoryService }
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the slider', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('slider2')).toBeDefined();
  });
});*/
