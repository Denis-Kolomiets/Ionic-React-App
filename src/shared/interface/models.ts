import firebase from 'firebase';

export interface IEntry {
  id: string;
  title: string;
  description: string;
}

export const toEntry = (doc: firebase.firestore.DocumentSnapshot): IEntry => {
  return {
    id: doc.id,
    ...doc.data(),
  } as IEntry;
};
