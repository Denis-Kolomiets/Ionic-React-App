import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect } from 'react-router';
import { useAuth } from '../context/auth';
import styles from './login.module.scss';

interface ILoginPage {
  onLogin: () => void;
}
const LoginPage: React.FC<ILoginPage> = ({ onLogin }) => {
 const { loggedIn } = useAuth();

  if (loggedIn) {
    return <Redirect to={'/my/entries'} />;
  }

  return (
    <IonPage className={styles.login}>
      <IonHeader>
        <IonToolbar className={styles.toolbar}>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonButton expand="block" onClick={onLogin}>
          Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
