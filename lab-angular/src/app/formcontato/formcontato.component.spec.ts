import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontatoComponent } from './formcontato.component';

describe('FormcontatoComponent', () => {
  let component: FormcontatoComponent;
  let fixture: ComponentFixture<FormcontatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcontatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
