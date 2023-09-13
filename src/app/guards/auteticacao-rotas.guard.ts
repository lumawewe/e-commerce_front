import { CanActivateFn } from '@angular/router';

export const auteticacaoRotasGuard: CanActivateFn = (route, state) => {
  //O GUARD PODE FAZER A VALIDAO SE A ROTA SERA PERMITIDA OU NAO PARA O USUARIO

  //validacao de login tambem
  
  return true;
};
