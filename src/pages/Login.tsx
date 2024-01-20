import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  useIonToast,
} from '@ionic/react';
import { Redirect } from 'react-router';
import { useAuth } from '../context/auth';
import { auth } from '../firebase';

import styles from './login.module.scss';
import { useState } from 'react';

interface ILoginPage {}
const LoginPage: React.FC<ILoginPage> = () => {
  const authStage = useAuth();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [present] = useIonToast();

  const onChangeForm = (key: string, value: string | number | null | undefined) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleLogin = async () => {
    await auth.signInWithEmailAndPassword(form.email, form.password).catch((e) => presentToast('top', 'Invalid email or password'));
  };

  const presentToast = (position: 'top' | 'middle' | 'bottom', error: string) => {
    present({
      message: error,
      duration: 1500,
      position: position,
    });
  };

  if (authStage.loggedIn) {
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
        <IonList>
          <IonItem>
            <IonInput
              label="Email"
              labelPlacement="stacked"
              type="email"
              value={form.email}
              onIonInput={(value) => onChangeForm('email', value.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Password"
              labelPlacement="stacked"
              type="password"
              value={form.password}
              onIonInput={(value) => onChangeForm('password', value.target.value)}></IonInput>
          </IonItem>
        </IonList>
        <IonButton id="open-toast" className={styles.loginBtn} expand="block" onClick={handleLogin}>
          Login
        </IonButton>
        <IonRouterLink routerLink="/sign" className={styles.link}>
          Sign Up account
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
