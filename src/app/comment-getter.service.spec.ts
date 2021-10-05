import { TestBed } from '@angular/core/testing';

import { CommentGetterService } from './comment-getter.service';

describe('CommentGetterService', () => {
  let service: CommentGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
