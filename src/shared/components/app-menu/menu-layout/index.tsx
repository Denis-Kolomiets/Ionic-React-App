import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonToolbar } from '@ionic/react';
import NavMenuService from '../../../../services/nav-menu';
import closeIcon from '../../../../assets/image/close-icon.svg';
import styles from './style.module.scss';

interface IAppMenuLayout {
  children?: JSX.Element;
  back?: boolean;
}

const MenuLayout: React.FC<IAppMenuLayout> = ({ children, back = true }) => {
  return (
    <>
      <IonHeader className={styles.menuHeader}>
        <IonToolbar className={styles.toolbar}>
          {back && (
            <IonButtons slot="start">
              <IonBackButton text="Back"></IonBackButton>
            </IonButtons>
          )}
          <IonButtons slot="end" onClick={() => NavMenuService.getNavigator().popToRoot()}>
            <IonIcon icon={closeIcon} className={styles.closeIcon} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className={'ion-padding'}>{children}</IonContent>
    </>
  );
};

export default MenuLayout;
