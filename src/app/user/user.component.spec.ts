import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { User } from '../user';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let user: User;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;

    user = new User();
    user.id = Date.now();
    user.name = `User ${user.id}`;

    component.user = user;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user info', () => {
    const { debugElement } = fixture;
    const idEl = debugElement.query(By.css('.id')).nativeElement;
    const nameEl = debugElement.query(By.css('.name')).nativeElement;

    expect(idEl.textContent).toEqual(`${user.id}`);
    expect(nameEl.textContent).toEqual(user.name);
  });
});
