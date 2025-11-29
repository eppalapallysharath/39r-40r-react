import React, { useEffect, useState } from "react";

export const Names = React.memo( (props) => {
  const [data, setData] = useState([]);
  const { getEmails } = props;
  console.log("child component");
  useEffect(() => {
      console.log("child function calling");
    setData(getEmails());
  }, [getEmails]);
  return (
    <div>
      <h4>Emails</h4>
      {data.map((v,i) => (
        <p key={i}>{v}</p>
      ))}
    </div>
  );
});
