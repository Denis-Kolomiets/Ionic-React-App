import { IonApp, IonLoading, IonNav, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router';
import LoginPage from './pages/Login';
import { AuthContext, useAuthInit } from './context/auth';
import AppTabs from './AppTabs';
import MenuNav from './shared/components/menu-nav';
import NavMenuService from './services/nav-menu';
import SignPage from './pages/SignUp';

setupIonicReact({
  mode: 'ios',
});

const App: React.FC = () => {
  const { loading, auth } = useAuthInit();
  if (loading) {
    return <IonLoading isOpen />;
  }

  return (
    <IonNav
      ref={(nav) => NavMenuService.changeNavigator(nav)}
      root={() => (
        <IonApp>
          <AuthContext.Provider value={{ loggedIn: auth.loggedIn, userId: auth.userId }}>
            <IonReactRouter>
              <Switch>
                <Route exact path={'/login'}>
                  <LoginPage />
                </Route>
                <Route exact path={'/sign'}>
                  <SignPage />
                </Route>
                <Route path={'/my'}>
                  <AppTabs />
                </Route>
                <Redirect exact path="/" to={'/my/entries'} />
              </Switch>
              <MenuNav />
            </IonReactRouter>
          </AuthContext.Provider>
        </IonApp>
      )}
    />
  );
};

export default App;
