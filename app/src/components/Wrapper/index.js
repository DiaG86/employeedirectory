import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function Wrapper () {

const [users, setUsers] = useState([]);
const [filteredUsers, setFilteredUsers] = useState([]);
const [order, setOrder] = useState("descend");

useEffect(() => {
  API.fetchUsers().then(results => {
    //console.log("Result Obj: "+JSON.stringify(results.data.results));
    setUsers(results.data.results);
    setFilteredUsers(results.data.results);
    console.log("Emp Data: ", results);
  });

const comp = (a,b)=>{
  return a.first.localCompare(b.first);
}

const sortUsers = filteredUsers.sort(comp);
setFilteredUsers(sortUsers);
console.log(setFilteredUsers);
  
}, []);

    return (
      <div>
      {users.map(user=>(
        <h1>{user.name.first}</h1>
      )
      )}

</div>
    )

}

export default Wrapper

