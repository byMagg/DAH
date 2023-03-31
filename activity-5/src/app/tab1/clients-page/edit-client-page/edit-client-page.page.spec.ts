import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditClientPagePage } from './edit-client-page.page';

describe('EditClientsPagePage', () => {
  let component: EditClientPagePage;
  let fixture: ComponentFixture<EditClientPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditClientPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
