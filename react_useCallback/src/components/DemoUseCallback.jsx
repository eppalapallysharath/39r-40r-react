import React, { useState, useCallback, useEffect } from "react";
import { Names } from "./Names";

export const DemoUseCallback = () => {
  const [number, setNumber] = useState(0);
  const [emails, setEmails] = useState("");
  console.log("parent component");

  function generate() {
    console.log("number function");
    const random = Math.random() * 100;
    setNumber(Math.ceil(random));
  }

  function separateEmails() {
    console.log("emails function");
    return emails.split(",");
  }

  
  const memoEmail =  useCallback(function(){
    return separateEmails
  },[emails])


  return (
    <div>
      <hr />
      <h4> without useCallback hook </h4>
      <p>random number {number}</p>
      <button onClick={generate}>generate random number</button>
      <hr />
      <input
        type="email"
        name="email"
        placeholder="enter emails id here"
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
      />
      <Names getEmails={memoEmail} />
    </div>
  );
};
