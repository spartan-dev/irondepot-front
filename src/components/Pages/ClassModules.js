import React from "react";
import { useParams } from "react-router-dom";
const ClassModules = () => {
  let { classId } = useParams();
  console.log(classId, "numero de paramsa");
  return (
    <div>
      <h1>si somos en class modules numero:{classId}</h1>
    </div>
  );
};

export default ClassModules;
