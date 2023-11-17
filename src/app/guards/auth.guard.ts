import { CanActivateFn } from '@angular/router';
import { AuthService } from '../admin-module/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  return false;
};
