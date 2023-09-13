import { CanDeactivateFn } from '@angular/router';

//Components
import { LoginComponent } from '../pages/login/login.component';

export const loginGuard: CanDeactivateFn<LoginComponent> = (component, currentRoute, currentState, nextState) => {
 //verifica se o usuario deseja realmente sair 

  return true;
};
