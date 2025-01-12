import { doc,  setDoc } from "firebase/firestore";


import db from "./firebase";

  
export async function addData(data:any){
    try {
        const docRef = await doc(db.db, 'pays', data.id!);
        const ref = await setDoc(docRef, data)
  
        console.log("Document written with ID: ", docRef.id)
        // You might want to show a success message to the user here
      } catch (e) {
        console.error("Error adding document: ", e)
        // You might want to show an error message to the user here
      }
}
