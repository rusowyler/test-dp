import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchService } from '../search.service';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { By } from '@angular/platform-browser';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let searchServiceStub: Partial<SearchService>;

  beforeEach(async () => {
    searchServiceStub = {
      search (): Observable<User[]> {
        return of([
          {
            id: 1,
            name: 'User 1',
          },
          {
            id: 2,
            name: 'User 2',
          }
        ]);
      }
    };

    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [{ provide: SearchService, useValue: searchServiceStub }],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a list of users', () => {
    const { debugElement } = fixture;
    const users = debugElement.queryAll(By.css('app-user'));
    expect(users.length).toBeGreaterThan(0);
  });
});
