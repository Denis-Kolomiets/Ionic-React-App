import { IonItem, IonLabel, IonList } from '@ionic/react';
import MainPageLayout from '../shared/components/main-page-layout';
import ModalWindowLayout from '../shared/components/modal-window-layout';
import { useEffect, useRef, useState } from 'react';
import { firestore } from '../firebase';
import { IEntry, toEntry } from '../shared/interface/models';
import { useAuth } from '../context/auth';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
  const { userId } = useAuth();
  const [entries, setEntries] = useState<Array<IEntry>>([]);

  const modalRef = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const fetchCollection = firestore.collection('users').doc(userId).collection('entries');
    fetchCollection.get().then(({ docs }) => {
      setEntries(docs.map(toEntry));
    });

    setPresentingElement(page.current);
  }, [userId]);

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
