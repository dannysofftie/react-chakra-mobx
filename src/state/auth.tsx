import { makeAutoObservable } from 'mobx';
import { createContext, useContext } from 'react';
interface IUser {
  id: string;
  name: string;
}
export interface IUserAuth {
  user: IUser;
  token: string;
  authenticated: boolean;
}

const initialState: Partial<IUserAuth> = {
  user: null,
  token: null,
  authenticated: false,
};

export class UserAuthStore {
  state: Partial<IUserAuth> = initialState;
  constructor() {
    makeAutoObservable(this);
  }
  authenticateUser(user: IUserAuth) {
    this.state = user;
  }
  revokeAuth() {
    this.state = initialState;
  }
}

const userAuth = new UserAuthStore();

const UserAuthContext = createContext<UserAuthStore>(userAuth);
export const UserAuthContextProvider = ({ children }) => {
  return (
    <UserAuthContext.Provider value={userAuth}>
      {/* line break */}
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuthStore = () => useContext(UserAuthContext);
