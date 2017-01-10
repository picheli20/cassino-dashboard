import {Component, Input, Injectable} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {SliderComponent} from './slider';
import { Loader } from '../../entities/loader.entity';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from '../../pipes/filter';


@Component({selector: 'game-wrapper', template: '<div class="game-mocked"></div>'})
class MockGameWrapperComponent {
  @Input() game: any;
}


describe('Loader Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        SliderComponent,
        FilterPipe,
        MockGameWrapperComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should instantiate the SliderComponent', () => {
    expect(TestBed.createComponent(SliderComponent)).not.toBe(null);
  });

  it('should be clickable the view all', () => {
    const fixture = TestBed.createComponent(SliderComponent);
    let comp: SliderComponent = fixture.componentInstance;
    comp.data = {
      'name': 'Popular Games',
      'order': 0,
      'slug': 'popular-games',
      '_embedded': {
        'games': [{
          'name' : 'Test',
          'background' : '',
          'id' : 'test'
        }, {
          'name' : 'Test 2',
          'background' : '',
          'id' : 'test2'
        }]
      }
    };
    fixture.detectChanges();
    const main = fixture.nativeElement;
    const viewAll = main.querySelector('.view-all');
    expect(main.querySelector('.fa.fa-angle-up')).toBe(null);
    expect(main.querySelector('.fa.fa-angle-down')).not.toBe(null);
    expect(viewAll).toBeDefined();
    expect(comp.viewAll).toBeFalsy();
    viewAll.click()
    fixture.detectChanges();
    expect(main.querySelector('.view-all-text').innerHTML).toBe('Less');
    expect(main.querySelector('.fa.fa-angle-up')).not.toBe(null);
    expect(main.querySelector('.fa.fa-angle-down')).toBe(null);
    expect(comp.viewAll).toBeTruthy();
  });

  it('should render the game-wrapper', () => {
    const fixture = TestBed.createComponent(SliderComponent);
    let comp: SliderComponent = fixture.componentInstance;
    comp.data = {
      'name': 'Popular Games',
      'order': 0,
      'slug': 'popular-games',
      '_embedded': {
        'games': [{
          'name' : 'Test',
          'background' : '',
          'id' : 'test'
        }, {
          'name' : 'Test 2',
          'background' : '',
          'id' : 'test2'
        }]
      }
    };
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelectorAll('.game-mocked').length).toBe(2);
  });

  it('should filter the game-wrapper', () => {
    const fixture = TestBed.createComponent(SliderComponent);
    let comp: SliderComponent = fixture.componentInstance;
    comp.data = {
      'name': 'Popular Games',
      'order': 0,
      'slug': 'popular-games',
      '_embedded': {
        'games': [{
          'name' : 'Test',
          'background' : '',
          'id' : 'test'
        }, {
          'name' : 'Test 2',
          'background' : '',
          'id' : 'test2'
        }]
      }
    };
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelectorAll('.game-mocked').length).toBe(2);
    comp.searchModel = '2'
    fixture.detectChanges();
    expect(main.querySelectorAll('.game-mocked').length).toBe(1);
    comp.searchModel = 'Test'
    fixture.detectChanges();
    expect(main.querySelectorAll('.game-mocked').length).toBe(2);
    comp.searchModel = 'Test 3'
    fixture.detectChanges();
    expect(main.querySelectorAll('.game-mocked').length).toBe(0);
  });
});
