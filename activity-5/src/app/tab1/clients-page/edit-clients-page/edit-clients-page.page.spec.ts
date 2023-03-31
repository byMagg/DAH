import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditClientsPagePage } from './edit-clients-page.page';

describe('EditClientsPagePage', () => {
  let component: EditClientsPagePage;
  let fixture: ComponentFixture<EditClientsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditClientsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
