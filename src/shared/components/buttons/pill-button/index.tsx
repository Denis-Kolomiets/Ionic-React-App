import { IonButton } from '@ionic/react';
import styles from './style.module.scss';

interface IPillButton {
  onPress: () => void;
  text: string;
}

const PillButton: React.FC<IPillButton> = ({ onPress, text }) => {
  return (
    <IonButton className={styles.button} expand="block" onClick={onPress}>
      {text}
    </IonButton>
  );
};

export default PillButton;
