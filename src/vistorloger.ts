import { useEffect } from "react";
import { ref, push } from "firebase/database";
import database from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const vsitorLogger = (pageName: string) => {


    useEffect(() => {
      // Generate a visitor ID (or fetch from user session, if available)

      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };

      fetch("https://api.ipgeolocation.io/ipgeo?apiKey=fbccb577872e478caf50ba7550c67df4", requestOptions as any)
        .then((response) => response.json())
        .then((result) => {
          
console.log(result.ip)
          const visitorId = `${result.ip}`;
          // Reference to the "visitors" node in Firebase
          const db = database;
          const visitorsRef = doc(db, visitorId);
          const docRef = setDoc(, visitorId);

          // Save visitor data
          push(visitorsRef, {
            visitorId,
            pageName,
            timestamp: new Date().toISOString(),
            result
          }).then(() => {
            console.log("Visitor data recorded successfully!");
          }).catch((error) => {
            console.error("Error recording visitor data:", error);
          });
        })
    }, [pageName]);

  };


