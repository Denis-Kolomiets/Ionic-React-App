import { IonButton } from '@ionic/react';
import MainPageLayout from '../shared/components/main-page-layout';

import { auth } from '../firebase';

interface ISettingsPage {}

const SettingsPage: React.FC<ISettingsPage> = () => {
  const onLogout = () => {
    auth.signOut();
  };
  return (
    <MainPageLayout title="My Settings Page">
      <IonButton color="medium" expand="block" onClick={onLogout}>
        Logout
      </IonButton>
    </MainPageLayout>
  );
};

export default SettingsPage;
