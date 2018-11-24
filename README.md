# CanDeactivateGuard

> A boilerplate CanDeactivate guard for Angular routing

## Install

```bash
$ yarn add @ecgtheowltd/can-deactivate-guard
```

## Usage

- In `src/app/app.module.ts` add:

``` typescript
import { CanDeactivateGuard } from
'@ecgtheowltd/can-deactivate-guard';
...
@NgModule({
  ...
  providers: [CanDeactivateGuard],
  ...
});
```

- In `src/app/app-routing.module.ts` add:

```typescript
import { CanDeactivateGuard } from
'@ecgtheowltd/can-deactivate-guard';

const routes: Routes = [{
  path: 'guarded-route,
  component: 'GuardedComponent',
  canDeactivate: [
    CanDeactivateGuard
  ]
}];

```

- In (for example) `src/app/guarded.component.ts` add:

``` typescript
import { CanComponentDeactivate } from
'@ecgtheowltd/can-deactivate-guard';

@Component({
  ...
})
export class GuardedComponent implements CanComponentDeactivate {
  ...
  canDeactivate (): boolean /* or Observable<boolean> or
    Promise<boolean> */ {
    if (/* Check if component should be deactivated */) {
      return true;
    } else {
      return false;
    }
  }
  ...
}

```

For more information, see
[The Angular Routing & Navigation guide](https://angular.io/guide/router#candeactivate-handling-unsaved-changes)

