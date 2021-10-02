import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User_loginComponent } from './user_login.component';

describe('UserLoginComponent', () => {
  let component: User_loginComponent;
  let fixture: ComponentFixture<User_loginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User_loginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(User_loginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
