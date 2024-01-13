import { IonButton, IonItem, IonLabel, IonList, IonRouterLink } from '@ionic/react';
import { entries } from '../data/data';
import MainPageLayout from '../shared/main-page-layout';
import ModalWindowLayout from '../shared/modal-window-layout';
import { useRef } from 'react';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
  const modalRef = useRef<HTMLIonModalElement>(null);
  return (
    <MainPageLayout title="My Home Page">
      <>
        <IonList>
          {entries.map((item) => (
            <IonItem button key={item.id} routerLink={`/my/entries/${item.id}`}>
              <IonLabel>{item.title}</IonLabel>
            </IonItem>
          ))}
          <IonItem id="open-modal-item">Open modal window</IonItem>
        </IonList>
        <ModalWindowLayout modalRef={modalRef} trigger={'open-modal-item'} />
      </>
    </MainPageLayout>
  );
};

export default HomePage;
