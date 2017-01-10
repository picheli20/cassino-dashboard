import {Component, Input, Injectable} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {LoaderComponent} from './loader';
import { Loader } from '../../entities/loader.entity';




describe('Loader Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoaderComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should instantiate the LoaderComponent', () => {
    expect(TestBed.createComponent(LoaderComponent)).not.toBe(null);
  });

  it('should show and hide the loader', () => {
    const fixture = TestBed.createComponent(LoaderComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('.loader-container')).toBe(null);
    Loader.add();
    fixture.detectChanges();
    expect(main.querySelector('.loader-container')).not.toBe(null);
    Loader.remove();
    fixture.detectChanges();
    expect(main.querySelector('.loader-container')).toBe(null);
  });
});
