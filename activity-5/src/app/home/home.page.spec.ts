import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(), HomePage]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterEach(() => {
    fixture.destroy();
    // component = null;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initialize the component with a specific title', () => {
    expect(component['title']).toEqual('Home Page');
  });

  it('can set the title to a supplied value', () => {
    de = fixture.debugElement.query(By.css('ion-title'));
    el = de.nativeElement;

    component.changeTitle('New Title for Home Page');
    fixture.detectChanges();
    expect(component['title']).toEqual('New Title for Home Page');
    expect(el.textContent).toContain('New Title for Home Page');
  });

});