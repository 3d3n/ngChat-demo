import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterChatterComponent } from './register-chatter.component';

describe('RegisterChatterComponent', () => {
  let component: RegisterChatterComponent;
  let fixture: ComponentFixture<RegisterChatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterChatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterChatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
