import { useContext, useEffect, useState, createContext } from "react";
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
  onSnapshot,
} from "firebase/firestore";

// import moment from "moment";

export const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [searchResultsLoading, setSearchResultsLoading] = useState(false);
  const [searchResultsError, setSearchResultsError] = useState(null);
  const [isSearchResultsError, setIsSearchResultsError] = useState(false);

  // Initialize Firebase
  const firestore = getFirestore();

  const getSearchResults = () => {
    setCourseLoading(true);
    const q = query(collection(firestore, "reports"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((doc) => arr.push({ id: doc.id, ...doc.data() }));
        setSearchResults(arr);
        setSearchResultsLoading(false);
        setIsSearchResultsError(false);
      },
      (e) => {
        console.log(e.message);
        setSearchResultsLoading(false);
        setIsSearchResultsError(true);
        setSearchResultsError(e.message);
      }
    );
    return () => unsubscribe();
  };

  return (
    <SearchContext.Provider
      value={{
        searchResults,
        setSearchResults,
        searchResultsError,
        searchResultsLoading,
        isSearchResultsError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
