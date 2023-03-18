import "./Entries.css";
import IndividualEntry from "./IndividualEntry";

const Entries = (props) => {
  const deleteuser = (userToDelete) => {
    props.deleteData(userToDelete);
  };

  return (
    <div className="data_div">
      {props.userData.map((data) => {
        return (
          <IndividualEntry
            name={data.name}
            age={data.age}
            delete={deleteuser}
          />
        );
      })}
    </div>
  );
};

export default Entries;
