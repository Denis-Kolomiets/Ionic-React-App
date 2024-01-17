import { IonNavLink } from '@ionic/react';
import MenuLayout from './menu-layout';
import SecondPage from '../../components/sidebar/second-page';

const AppMenu = () => {
  return (
    <MenuLayout back={false}>
      <IonNavLink routerDirection="forward" component={() => <SecondPage />}>
        Go to second menu item
      </IonNavLink>
    </MenuLayout>
  );
};

export default AppMenu;
