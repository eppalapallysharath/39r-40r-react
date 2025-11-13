import { useEffect, useState } from "react";
import axios from "axios";

export const ExampleUnmounting = () => {
    const [data, setData] = useState([])
  const fetch = (signal) => {
    axios
      .get("https://dummyjson.com/users", {signal})
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const products = (signal) => {
    const url = "https://fakestoreapi.com/products"
     axios
      .get(url, {signal})
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const controler = new AbortController();
    const signal = controler.signal;
    // const t = setInterval(()=>{console.log("hi")  }, 2000)
    fetch(signal);
    products(signal)
    setData([])
    return () => {
      controler.abort();
      console.log("clean up");
      // clearInterval(t)
    };
  }, []);

  return (
    <div>
      {console.log("render")}
      example unmounting
    </div>
  );
};
