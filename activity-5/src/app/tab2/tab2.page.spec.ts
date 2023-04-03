import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab2Page, IonicModule, ExploreContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initialize properties correctly', () => {
    expect(typeof component.title).toBe("string")
    expect(typeof component.buttonPath).toBe("string")
    expect(component.title).toEqual('Reservations');
    expect(component.buttonPath).toEqual('/tabs/tab2/reservations-page');
  });

});
