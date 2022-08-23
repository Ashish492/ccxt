import  Axios  from "axios";
import { useEffect, useRef, useState } from "react";
import api from "../helper/api";


const useGetApi = (url,refresh) => {
  const [data, setData] = useState([]);
  const interval = useRef()
  useEffect(() => {
    let source = Axios.CancelToken.source();
    const loadData = async () => {
        console.log("reloaded");
      try {
        
        let result = await api.get(url);
        setData(result.data);
      } catch (error) {
        if (Axios.isCancel(error)) {
        }
      }
    };
   if(!refresh) loadData();
   else {
  
    interval.current=setInterval(loadData, refresh);
   }
   
    return () => {
      source.cancel();
      refresh && clearInterval(interval.current);
    };
  }, []);
  return [data,setData];
}
useGetApi.defaultProps = {
    refresh: false
};
export default useGetApi