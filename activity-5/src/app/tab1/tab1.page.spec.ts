import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab1Page, IonicModule, ExploreContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('initialize the component with a specific title', () => {
    expect(component.title).toEqual('Clients');
    expect(component.buttonPath).toEqual('/tabs/tab1/clients-page');
  });

});
