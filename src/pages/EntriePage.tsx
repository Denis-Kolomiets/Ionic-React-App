import { useParams } from 'react-router';
import SecondPageLayout from '../shared/components/second-page-layout';
import { firestore } from '../firebase';
import { useEffect, useState } from 'react';
import { IEntry, toEntry } from '../shared/interface/models';
import { useAuth } from '../context/auth';

interface IEntriesPage {}

interface RouteParams {
  id: string;
}
const EntriesPage: React.FC<IEntriesPage> = () => {
  const { id } = useParams<RouteParams>();
  const { userId } = useAuth();
  const [entry, setEntry] = useState<IEntry>();
  useEffect(() => {
    const entryRef = firestore.collection('users').doc(userId).collection('entries').doc(id);
    entryRef.get().then((item) => {
      setEntry(toEntry(item));
    });
  }, [id, userId]);

  return (
    <SecondPageLayout title={entry?.title}>
      <p>{entry?.description}</p>
    </SecondPageLayout>
  );
};

export default EntriesPage;
