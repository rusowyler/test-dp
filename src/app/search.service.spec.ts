import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of users', (done) => {
    const users$ = service.search();

    users$.subscribe(users => {
      expect(users.length).toBeGreaterThan(0);
      done();
    });
  });
});
