import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonToolbar } from '@ionic/react';
import NavMenuService from '../../../../services/nav-menu';
import closeIcon from '../../../../assets/image/close-icon.svg';
import styles from './style.module.scss';

interface IAppMenuLayout {
  children?: JSX.Element;
  back?: boolean;
}

const MenuLayout: React.FC<IAppMenuLayout> = ({ children, back = true }) => {
  const onPopToRoot = () => {
    const nav = NavMenuService.getNavigator();
    if (nav !== null) {
      nav.popToRoot();
    }
  };

  return (
    <>
      <IonHeader className={styles.menuHeader}>
        <IonToolbar className={styles.toolbar}>
          {back && (
            <IonButtons slot="start">
              <IonBackButton text="Back"></IonBackButton>
            </IonButtons>
          )}
          <IonButtons slot="end" onClick={onPopToRoot}>
            <IonIcon icon={closeIcon} className={styles.closeIcon} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className={'ion-padding'}>{children}</IonContent>
    </>
  );
};

export default MenuLayout;
