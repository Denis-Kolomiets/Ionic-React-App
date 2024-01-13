import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  RouterDirection,
  useIonRouter,
} from '@ionic/react';

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={navigateBack}>
            <IonBackButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>{children}</IonContent>
    </IonPage>
  );
};

export default SecondPageLayout;
