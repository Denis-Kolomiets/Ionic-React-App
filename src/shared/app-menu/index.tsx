import { IonNavLink } from '@ionic/react';
import AppMenuLayout from './app-menu-layout';

const AppMenu = () => {
  return (
    <AppMenuLayout back={false}>
      <IonNavLink routerDirection="forward" component={() => <PageTwo />}>
        Go to second menu item
      </IonNavLink>
    </AppMenuLayout>
  );
};

export default AppMenu;

const PageTwo = () => {
  return (
    <AppMenuLayout>
      <div>Second Page Menu</div>
    </AppMenuLayout>
  );
};
