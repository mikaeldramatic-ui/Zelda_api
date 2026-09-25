import { useEffect } from "react";
import { getData } from "../api.js";
import { useDispatch, useSelector } from "react-redux";
import { setItems, setLoading, setError } from "../store/zeldaSlice.js";


export function useZeldaData() {
    const dispatch = useDispatch();

    const items = useSelector ((state) => state.zelda.items);
    const loading = useSelector ((state) => state.zelda.loading);
    const error = useSelector ((state) => state.zelda.error);

    useEffect(() => {
    async function loadData() {

      try {
     const data = await getData();
     dispatch(setItems(data.data));
      } catch (error) {
        dispatch(setError("Kunde inte hämta data från API:t."));
      } finally {
        dispatch(setLoading(false));
      }
    }
    
    loadData();
  }, []);

  return {
    items,
    loading,
    error
  };


}