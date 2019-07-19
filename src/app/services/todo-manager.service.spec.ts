import { TestBed } from '@angular/core/testing';

import { TodoManagerService } from './todo-manager.service';

describe('TodoManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoManagerService = TestBed.get(TodoManagerService);
    expect(service).toBeTruthy();
  });
});
