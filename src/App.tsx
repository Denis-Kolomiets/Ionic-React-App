import { IonApp, IonNav, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch, useLocation } from 'react-router';
import LoginPage from './pages/Login';
import { AuthContext } from './context/auth';
import { useState } from 'react';
import AppTabs from './AppTabs';
import MenuNav from './shared/menu-nav';
import NavMenuService from './services/nav-menu';

setupIonicReact({
  mode: 'ios',
});

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <IonNav
      ref={(nav) => NavMenuService.changeNavigator(nav)}
      root={() => (
        <IonApp>
          <AuthContext.Provider value={{ loggedIn }}>
            <IonReactRouter>
              <Switch>
                <Route exact path={'/login'}>
                  <LoginPage onLogin={() => setLoggedIn(true)} />
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
