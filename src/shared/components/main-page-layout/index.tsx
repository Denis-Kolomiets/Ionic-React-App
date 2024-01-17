import { IonContent, IonHeader, IonIcon, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MenuApp from '../app-menu';

import { menuSharp } from 'ionicons/icons';
import styles from './style.module.scss';

interface IMainMenu {
  children?: JSX.Element;
  title: string;
  refPage?: any;
}

const MainPageLayout: React.FC<IMainMenu> = ({ children, title, refPage }) => {
  return (
    <>
      <IonPage id="main-content" className={styles.pageLayout} ref={refPage}>
        <IonHeader>
          <IonToolbar className={styles.toolbar}>
            <IonNavLink routerDirection="forward" component={() => <MenuApp />}>
              <IonIcon className={styles.menuIcon} icon={menuSharp} />
            </IonNavLink>
            <IonTitle>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">{children}</IonContent>
      </IonPage>
    </>
  );
};

export default MainPageLayout;
