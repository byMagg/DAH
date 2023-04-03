import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientsPagePage } from './clients-page.page';

describe('ClientsPagePage', () => {
  let component: ClientsPagePage;
  let fixture: ComponentFixture<ClientsPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    expect(typeof component.buttonPath).toBe("string")
    expect(component.buttonPath).toEqual('/tabs/tab1/clients-page/edit-client-page');
  });

});
