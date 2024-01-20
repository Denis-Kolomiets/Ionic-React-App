import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

interface IAuth {
  loggedIn?: boolean;
  userId?: string;
}

interface IAuthInit {
  loading: boolean;
  auth?: IAuth;
}

export const AuthContext = React.createContext<IAuth>({ loggedIn: false });

export const useAuth = (): IAuth => {
  return useContext(AuthContext);
};

export const useAuthInit = (): IAuthInit => {
  const [authState, setAuthState] = useState<IAuthInit>({ loading: true, auth: { loggedIn: false } });
  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      const auth = firebaseUser ? { loggedIn: true, userId: firebaseUser.uid } : { loggedIn: false };
      setAuthState({
        loading: false,
        auth,
      });
    });
  }, []);
  return authState;
};
