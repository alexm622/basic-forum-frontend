import { TestBed } from '@angular/core/testing';

import { PostGetterService } from './post-getter.service';

describe('PostGetterService', () => {
  let service: PostGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
