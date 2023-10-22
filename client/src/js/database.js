import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('put to indexdb');
  //est connection to database jate. Version 1
  const connectionToDB = await openDB('jate', 1);
  //allow readwrite privilages for the connection to jate
  const tx = connectionToDB.transaction('jate', 'readwrite');
  //open the object store
  const objectStore = tx.objectStore('jate');
  //store and pass content from client to db
  const req = objectStore.put({ id: 1, value: content });
  const res = await req;
  console.log('data saved to teh database', res)
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('get to indexdb');
  //est connection to database jate. Version 1
  const connectionToDB = await openDB('jate', 1);
  //allow readwrite privilages for the connection to jate
  const tx = connectionToDB.transaction('jate', 'readonly');
  //open the object store
  const objectStore = tx.objectStore('jate');
  //get all content from client to db
  const req = objectStore.getAll({ id: 1, value: content });
  const res = await req;
  console.log('get from data values', res)
};

initdb();
