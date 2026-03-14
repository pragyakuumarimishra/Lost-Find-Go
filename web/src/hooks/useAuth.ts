import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  sub?: string;
  email?: string;
  name?: string;
  exp?: number;
}

export function useAuth() {
  const token = localStorage.getItem('token');
  const user: DecodedToken | null = token ? jwtDecode<DecodedToken>(token) : null;

  const login = (newToken: string): void => {
    localStorage.setItem('token', newToken);
  };

  const logout = (): void => {
    localStorage.removeItem('token');
  };

  return { user, login, logout };
}