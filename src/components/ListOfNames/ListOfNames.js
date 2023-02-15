import React from "react"

function ListOfNames() {
    const names = ["Anna", "Benni", "Lukas", "Maxi", "Karo", "Luisa"];
  return (
    <div>
        <ul>
            {names.map((name, i) => <li key={name + i}>{name}</li>)}
        </ul>
    </div>
  )
};

export default ListOfNames;
