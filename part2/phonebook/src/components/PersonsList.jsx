import Person from "./Person";

const PersonsList = ({ persons, filterValue }) => (
  <ul>
    {persons
      .filter((person) => person.name.toLowerCase().includes(filterValue))
      .map((person) => (
        <Person key={person.id} name={person.name} phone={person.phone} />
      ))}
  </ul>
);

export default PersonsList;
