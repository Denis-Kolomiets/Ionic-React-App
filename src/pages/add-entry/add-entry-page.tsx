import { IonInput, IonItem, IonList, IonTextarea } from '@ionic/react';
import SecondPageLayout from '../../shared/components/second-page-layout';
import { useState } from 'react';
import PillButton from '../../shared/components/buttons/pill-button';
import { firestore } from '../../firebase';
import styles from './style.module.scss';
import { useAuth } from '../../context/auth';
import { useHistory } from 'react-router';

interface IAddEntryPage {}

const AddEntryPage: React.FC<IAddEntryPage> = () => {
  const history = useHistory();
  const { userId } = useAuth();
  const [form, setForm] = useState({
    title: '',
    description: '',
  });

  const onChangeForm = (key: string, value: string | number | null | undefined) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const onSave = async () => {
    const entriesRef = firestore.collection('users').doc(userId).collection('entries');
    await entriesRef.add(form);
    history.goBack();
  };

  return (
    <SecondPageLayout title={'Add New Entry'}>
      <div className={styles.main}>
        <IonList>
          <IonItem>
            <IonInput
              label="Title"
              labelPlacement="stacked"
              type="text"
              value={form.title}
              onIonInput={(value) => onChangeForm('title', value.target.value)}></IonInput>
          </IonItem>
          <IonItem>
            <IonTextarea
              label="Description"
              labelPlacement="stacked"
              value={form.description}
              onIonInput={(value) => onChangeForm('description', value.target.value)}></IonTextarea>
          </IonItem>
        </IonList>
        <PillButton text="SAVE" onPress={onSave} />
      </div>
    </SecondPageLayout>
  );
};

export default AddEntryPage;
