import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewcheckPage } from './newcheck.page';

describe('NewcheckPage', () => {
  let component: NewcheckPage;
  let fixture: ComponentFixture<NewcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
