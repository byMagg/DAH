import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditClientPagePage } from './edit-client-page.page';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from "@angular/router/testing";

describe('EditClientPagePage', () => {
  let component: EditClientPagePage;
  let fixture: ComponentFixture<EditClientPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditClientPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
