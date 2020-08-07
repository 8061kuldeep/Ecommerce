import { TestBed } from '@angular/core/testing';

import { GosafeGuard } from './gosafe.guard';

describe('GosafeGuard', () => {
  let guard: GosafeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GosafeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
