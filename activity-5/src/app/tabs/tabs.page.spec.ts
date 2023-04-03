import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsPage, IonicModule],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize titles correctly', () => {
    expect(typeof component.titleTab1).toBe("string")
    expect(typeof component.titleTab2).toBe("string")
    expect(typeof component.titleTab3).toBe("string")
    expect(component.titleTab1).toEqual('Clients');
    expect(component.titleTab2).toEqual('Reservations');
    expect(component.titleTab3).toEqual('Products');
  });

});
