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

interface ISignPage {}
const SignPage: React.FC<ISignPage> = () => {
  const { loggedIn } = useAuth();
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

  const handleSignUp = async () => {
    await auth.createUserWithEmailAndPassword(form.email, form.password).catch((e) => presentToast('top', e.message));
  };

  const presentToast = (position: 'top' | 'middle' | 'bottom', error: string) => {
    present({
      message: error,
      duration: 1500,
      position: position,
    });
  };

  if (loggedIn) {
    return <Redirect to={'/my/entries'} />;
  }

  return (
    <IonPage className={styles.login}>
      <IonHeader>
        <IonToolbar className={styles.toolbar}>
          <IonTitle>Sign Up</IonTitle>
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
        <IonButton id="open-toast" className={styles.loginBtn} expand="block" onClick={handleSignUp}>
          Sign Up
        </IonButton>
        <IonRouterLink className={styles.link} routerLink="/login">
          Login my account
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default SignPage;
