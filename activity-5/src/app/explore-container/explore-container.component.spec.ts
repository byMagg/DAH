import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ExploreContainerComponent', () => {
  let component: ExploreContainerComponent;
  let fixture: ComponentFixture<ExploreContainerComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    expect(typeof component.name).toBe("string")
    expect(typeof component.buttonPath).toBe("string")
  });

  it('center buttons correctly', () => {
    const elMainContainer = fixture.debugElement.query(By.css('#main-container')).nativeElement;
    const elContainer = fixture.debugElement.query(By.css('#container')).nativeElement;

    expect(elMainContainer).toBeDefined();
    expect(getComputedStyle(elMainContainer).position).toEqual("relative");
    expect(getComputedStyle(elMainContainer).height).toEqual("100%");
    expect(getComputedStyle(elMainContainer).width).toEqual("100%");
    expect(getComputedStyle(elContainer).position).toEqual("absolute")
    expect(getComputedStyle(elContainer).left).toEqual("0px")
    expect(getComputedStyle(elContainer).top).toEqual("50%")
  });
});
