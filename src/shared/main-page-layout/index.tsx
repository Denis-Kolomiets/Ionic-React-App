import { IonButton, IonContent, IonHeader, IonNavLink, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MenuApp from '../app-menu';

interface IMainMenu {
  children?: JSX.Element;
  title: string;
}

const MainPageLayout: React.FC<IMainMenu> = ({ children, title }) => {
  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonNavLink routerDirection="forward" component={() => <MenuApp />}>
              <IonButton>Menu</IonButton>
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
