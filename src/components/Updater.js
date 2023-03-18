import React, { useState } from "react";
import Form from "./Form";
import Entries from "./Entries";

const Initialdata = [
  { name: "Aman", age: 19 },
  { name: "Ankit", age: 19 },
];

const Updater = () => {
  const [data, setData] = useState(Initialdata);

  const changeOfData = (newData) => {
    setData((prevData) => {
      const k = [...prevData, newData];
      return k;
    });
  };

  const deleteData=(userToDelete)=>{
    console.log(userToDelete)
    setData(data.filter(user=>{
        return user.name!==userToDelete[0] && user.age!==userToDelete[1]
    }))
  }

  return (
    <div>
      <Form changeOfData={changeOfData} />
      <Entries userData={data} deleteData={deleteData} />
    </div>
  );
};

export default Updater;