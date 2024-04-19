import { CanActivateFn } from '@angular/router';

export const yourGuardGuard: CanActivateFn = (route, state) => {
  if (window.localStorage.getItem('authed')) {
    return true;
  }
  else{
    return false;
  }
};


