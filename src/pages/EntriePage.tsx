import { useParams } from 'react-router';
import { entries } from '../data/data';
import SecondPageLayout from '../shared/second-page-layout';
interface ISettingsPage {}
interface RouteParams {
  id: string;
}
const EntriesPage: React.FC<ISettingsPage> = () => {
  const { id } = useParams<RouteParams>();
  const entry = entries.find((item) => item.id === id);
  if (!entry) {
    throw new Error('No find id entry');
  }
  return <SecondPageLayout title={entry.title}></SecondPageLayout>;
};

export default EntriesPage;
