import { IonItem, IonLabel, IonList } from '@ionic/react';
import { entries } from '../data/data';
import MainPageLayout from '../shared/main-page-layout';
import ModalWindowLayout from '../shared/modal-window-layout';
import { useEffect, useRef, useState } from 'react';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
  const modalRef = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  return (
    <MainPageLayout title="My Home Page" refPage={page}>
      <>
        <IonList>
          {entries.map((item) => (
            <IonItem button key={item.id} routerLink={`/my/entries/${item.id}`}>
              <IonLabel>{item.title}</IonLabel>
            </IonItem>
          ))}
          <IonItem id="open-modal-item">Open modal window</IonItem>
        </IonList>
        <ModalWindowLayout modalRef={modalRef} trigger={'open-modal-item'} presentingElement={presentingElement} />
      </>
    </MainPageLayout>
  );
};

export default HomePage;
