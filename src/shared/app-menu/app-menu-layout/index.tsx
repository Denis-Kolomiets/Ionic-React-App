import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import NavMenuService from '../../../services/nav-menu';
import { ReactComponent as closeIcon } from '../../../assets/image/close-icon.svg';
import styles from './style.module.scss';

interface IAppMenuLayout {
  children?: JSX.Element;
  back?: boolean;
}

const AppMenuLayout: React.FC<IAppMenuLayout> = ({ children, back = true }) => {
  return (
    <>
      <IonHeader className={styles.menuHeader}>
        <IonToolbar className={styles.toolbar}>
          {back && (
            <IonButtons slot="start">
              <IonBackButton text="Back"></IonBackButton>
            </IonButtons>
          )}
          <IonButtons slot="end" onClick={() => NavMenuService.getNavigator().popToRoot()}></IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>{children}</IonContent>
    </>
  );
};

export default AppMenuLayout;
