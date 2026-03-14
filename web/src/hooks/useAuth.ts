import jwt_decode from 'jwt-decode';

export function useAuth() {
  const token = localStorage.getItem('token');
  const user = token ? jwt_decode(token) : null;

  const login = (newToken) => {
    localStorage.setItem('token', newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
  };

  return { user, login, logout };
}