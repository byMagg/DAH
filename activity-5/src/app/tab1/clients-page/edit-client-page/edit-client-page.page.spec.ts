import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditClientPagePage } from './edit-client-page.page';

describe('EditClientPagePage', () => {
  let component: EditClientPagePage;
  let fixture: ComponentFixture<EditClientPagePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(EditClientPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
