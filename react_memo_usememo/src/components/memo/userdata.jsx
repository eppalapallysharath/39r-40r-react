import React from "react";

export const Userdata = React.memo((props) => {
  console.log("userdata", props.userdata);
  return <div>userdata</div>;
});
