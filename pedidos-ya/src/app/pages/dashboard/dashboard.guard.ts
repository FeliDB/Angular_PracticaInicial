import { CanActivateFn } from '@angular/router';

export const dashboardGuard: CanActivateFn = (route, state) => {
  let user = sessionStorage.getItem('user');
  if (!user) {
    user = localStorage.getItem('user');
  }
  if (user) {
    try {
      const parsed = JSON.parse(user);
      if (parsed && parsed.email) {
        return true;
      }
    } catch {
      // Si el parseo falla, no dejar pasar
    }
  }
  // Si no hay usuario válido, redirigir a home
  window.location.href = '/home';
  return false;
}; 