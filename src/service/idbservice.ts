import { openDB, deleteDB, wrap, unwrap } from 'idb';


async function  setDB(dbname:string,oldVersion:number,newVersion:number) {
    const db = await openDB(dbname, newVersion, {
        upgrade(dbname, oldVersion, newVersion, transaction, event) {
          // …
          
        }
        
      });
}

