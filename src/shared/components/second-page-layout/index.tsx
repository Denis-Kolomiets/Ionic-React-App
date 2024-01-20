import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import styles from './style.module.scss';

interface ISecondPageLayout {
  children?: JSX.Element;
  title?: string;
}

const SecondPageLayout: React.FC<ISecondPageLayout> = ({ children, title }) => {
  const router = useIonRouter();
  const navigateBack = () => {
    if (router.canGoBack()) {
      router.goBack();
    }
  };

  return (
    <IonPage className={styles.pageLayout}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={navigateBack}>
            <IonBackButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">{children}</IonContent>
    </IonPage>
  );
};

export default SecondPageLayout;
