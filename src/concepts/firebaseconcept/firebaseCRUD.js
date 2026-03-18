import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";


export const createDocument=async (collectionName,data) => {
   try {
     const docRef=await addDoc(collection(db,collectionName),data)
     console.log("Document created sucessfully with Id : "+ docRef.id)
   } catch (error) {
    console.log("We are facing Error" + error)
   }
}

export const fetchDocuments=async (collectionName) => {
   try {
     const querySanpshot=await getDocs(collection(db,collectionName))
    const alldocs=[]
   querySanpshot.forEach((doc)=>{
    alldocs.push({id:doc.id,...doc.data()})
   })
   return alldocs
   } catch (error) {
    console.log(error)
   }
}

export const updateDocument=async (collectionName,docId,data) => {
    
}

export const deleteDocument=async (collectionName,docId) => {
    
}