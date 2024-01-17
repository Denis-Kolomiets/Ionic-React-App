import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react';

interface IModalWindowLayout {
  modalRef: any;
  trigger: string;
  presentingElement?: HTMLElement | null;
}

const ModalWindowLayout: React.FC<IModalWindowLayout> = ({ modalRef, trigger, presentingElement }) => {
  const dismiss = () => {
    modalRef.current?.dismiss();
  };

  async function canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  return (
    <IonModal ref={modalRef} trigger={trigger} presentingElement={presentingElement!} canDismiss={canDismiss}>
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
