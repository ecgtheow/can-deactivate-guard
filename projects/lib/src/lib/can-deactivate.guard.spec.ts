import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { CanDeactivateGuard, CanComponentDeactivate } from './can-deactivate.guard';

class CanComponentDeactivateNotImplemented {
}

class CanComponentDeactivateImplemented implements CanComponentDeactivate {
  constructor (private candeactivate: Observable<boolean> | Promise<boolean> | boolean) {}

  canDeactivate (): Observable<boolean> | Promise<boolean> | boolean {
    return this.candeactivate;
  }
}

describe('CanDeactivateGuard', () => {
  let service: CanDeactivateGuard;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(CanDeactivateGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Component does not implement CanComponentDeactivate', () => {
    let component: any;

    beforeEach(() => {
      component = new CanComponentDeactivateNotImplemented();
    });

    it('should return true if component does not implement CanComponentDeactivate', () => {
      expect(service.canDeactivate(component as any as CanComponentDeactivate)).toBeTruthy();
    });
  });

  describe('Component does implement CanComponentDeactivate', () => {
    describe('canDeactivate() returns boolean', () => {
      it('should return the value of component.canDeactivate()', () => {
        const booleanRet = false;
        const component = new CanComponentDeactivateImplemented(booleanRet);

        expect(service.canDeactivate(component)).toBe(booleanRet);
      });
    });

    describe('canDeactivate() returns Promise<boolean>', () => {
      it('should return the value of component.canDeactivate()', () => {
        const booleanPromiseRet: Promise<boolean> = Promise.resolve(false);
        const component = new CanComponentDeactivateImplemented(booleanPromiseRet);

        expect(service.canDeactivate(component)).toBe(booleanPromiseRet);
      });
    });

    describe('canDeactivate() returns Observable<boolean>', () => {
      it('should return the value of component.canDeactivate()', () => {
        const booleanObservableRet: Observable<boolean> = of(false);
        const component = new CanComponentDeactivateImplemented(booleanObservableRet);

        expect(service.canDeactivate(component)).toBe(booleanObservableRet);
      });
    });
  });
});
