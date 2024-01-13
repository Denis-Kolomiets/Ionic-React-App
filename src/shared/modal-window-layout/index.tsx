import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

interface IModalWindowLayout {
  modalRef: any;
  trigger: string;
}

const ModalWindowLayout: React.FC<IModalWindowLayout> = ({ modalRef, trigger }) => {
  function dismiss() {
    modalRef.current?.dismiss();
  }
  return (
    <IonModal ref={modalRef} trigger={trigger} initialBreakpoint={0.8}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos reprehenderit. Veniam,
          molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque, dicta.
        </p>
      </IonContent>
    </IonModal>
  );
};

export default ModalWindowLayout;
