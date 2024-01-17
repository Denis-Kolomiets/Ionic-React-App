import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

interface IAuth {
  loggedIn: boolean;
}

interface IAuthInit {
  loading: boolean;
  loggedIn: boolean;
  userId?: string;
}

export const AuthContext = React.createContext<IAuth>({ loggedIn: false });

export const useAuth = (): IAuth => {
  return useContext(AuthContext);
};

export const useAuthInit = (): IAuthInit => {
  const [authState, setAuthState] = useState<IAuthInit>({ loading: true, loggedIn: false });
  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      const auth = firebaseUser ? { loggedIn: true, userId: firebaseUser.uid } : { loggedIn: false };
      setAuthState({
        loading: false,
        ...auth,
      });
    });
  }, []);

  return authState;
};
