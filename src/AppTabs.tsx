import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { home, settings } from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import EntriesPage from './pages/EntriePage';
import { useAuth } from './context/auth';

interface IAppTabs {}

const AppTabs: React.FC<IAppTabs> = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Redirect to={'/login'} />;
  }
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path={'/my/entries'}>
          <HomePage />
        </Route>
        <Route exact path={'/my/settings'} component={SettingsPage} />
        <Route exact path={'/my/entries/:id'} component={EntriesPage} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/my/entries">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="radio" href="/my/settings">
          <IonIcon icon={settings} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
