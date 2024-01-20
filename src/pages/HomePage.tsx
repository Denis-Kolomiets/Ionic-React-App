import { IonFab, IonFabButton, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import MainPageLayout from '../shared/components/main-page-layout';
import ModalWindowLayout from '../shared/components/modal-window-layout';
import { useEffect, useRef, useState } from 'react';
import { firestore } from '../firebase';
import { IEntry, toEntry } from '../shared/interface/models';
import { useAuth } from '../context/auth';
import { add } from 'ionicons/icons';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = () => {
  const { userId } = useAuth();
  const [entries, setEntries] = useState<Array<IEntry>>([]);

  const modalRef = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);
  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPresentingElement(page.current);
    const fetchCollection = firestore.collection('users').doc(userId).collection('entries');
    return fetchCollection.onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));
  }, [userId]);

  return (
    <MainPageLayout title="My Home Page" refPage={page}>
      <>
        <IonList>
          {entries.map((item) => (
            <IonItem button key={item.id} routerLink={`/my/entries/view/${item.id}`}>
              <IonLabel>{item.title}</IonLabel>
            </IonItem>
          ))}
          <IonItem id="open-modal-item">Open modal window</IonItem>
        </IonList>
        <IonFab vertical="bottom" horizontal="end">
          <IonFabButton routerLink="entries/add">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
        <ModalWindowLayout modalRef={modalRef} trigger={'open-modal-item'} presentingElement={presentingElement} />
      </>
    </MainPageLayout>
  );
};

export default HomePage;
