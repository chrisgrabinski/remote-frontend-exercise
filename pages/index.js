import React, { useContext } from "react";
import { PeopleContext } from "../context/PeopleContext";

export default function IndexPage() {
  const { people } = useContext(PeopleContext);

  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}
