import React, { useContext, useEffect, useState, createContext } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  doc,
  Timestamp,
} from "firebase/firestore";

import { AuthContext } from "../AuthContext/AuthContext";
import { Days } from "../../constants/Days";

export const ScamDataContext = createContext({});

export const ScamDataProvider = ({ children }) => {
  const firestore = getFirestore();

  const { institute } = useContext(AuthContext);

  const [scamDataByType, setScamDataByType] = useState(null);

  const [isScamDataLoading, setIsScamDataLoading] = useState(false);
  const [scamDataError, setScamDataError] = useState(null);
  const [isScamDataError, setIsScamDataError] = useState(false);

  const getScamDataByType = async (type) => {
    setIsScamDataLoading(true);
    try {
      const q = query(
        collection(firestore, "reports"),
        where("type", "==", type.id)
      );
      const querySnapshot = await getDocs(q);
      const arr = [];
      const tableData = [];
      querySnapshot.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }));
      setScamDataByType(arr);
      setIsScamDataLoading(false);
      setIsScamDataError(false);
    } catch (e) {
      setIsScamDataLoading(false);
      setIsScamDataError(true);
      setScamDataError(e.message);
    }
  };

  const addScamData = async (dataObj) => {
    try {
      setIsScamDataLoading(true);
      const docRef = await addDoc(collection(firestore, "reports"), {
        ...dataObj,
        createdAt: Timestamp.fromDate(new Date()),
      });
      console.log("Document written with ID: ", docRef.id);
      setIsScamDataLoading(false);
      setIsScamDataError(false);
    } catch (e) {
      console.error("Error adding document: ", e);
      setIsScamDataLoading(false);
      setIsScamDataError(true);
      setScamDataError(e.message);
    }
  };

  const updateScamData = async (dataId, dataObj) => {
    try {
      setIsScamDataLoading(true);
      const dataDoc = doc(firestore, "reports", dataId);
      await updateDoc(dataDoc, dataObj);
      console.log("Document successfully updated!");
      setIsScamDataLoading(false);
      setIsScamDataError(false);
    } catch (e) {
      console.error("Error updating document: ", e);
      setIsScamDataLoading(false);
      setIsScamDataError(true);
      setScamDataError(e.message);
    }
  };

  const deleteScamData = async (dataId) => {
    try {
      setIsScamDataLoading(true);
      const dataDoc = doc(firestore, "reports", dataId);
      await deleteDoc(dataDoc);
      console.log("Document successfully deleted!");
      setIsScamDataLoading(false);
      setIsScamDataError(false);
    } catch (e) {
      console.error("Error deleting document: ", e);
      setIsScamDataLoading(false);
      setIsScamDataError(true);
      setScamDataError(e.message);
    }
  };

  return (
    <ScamDataContext.Provider
      value={{
        scamDataByType,
        setScamDataByType,
        getScamDataByType,
        isScamDataLoading,
        isScamDataError,
        scamDataError,
        addScamData,
        updateScamData,
        deleteScamData,
      }}
    >
      {children}
    </ScamDataContext.Provider>
  );
};
