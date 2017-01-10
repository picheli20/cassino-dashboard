import {Component, Input, Injectable} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {LoaderComponent} from './loader';
import { Loader } from '../../entities/loader.entity';




describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoaderComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the loader', () => {
    const fixture = TestBed.createComponent(LoaderComponent);
  });
});
