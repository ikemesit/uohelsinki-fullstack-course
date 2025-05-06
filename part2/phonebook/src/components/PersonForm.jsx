const PersonForm = ({
  handleSubmit,
  newName,
  handleNameChange,
  newPhoneNumber,
  handlePhoneNumberChange,
}) => (
  <form onSubmit={handleSubmit}>
    <div>
      name: <input onChange={handleNameChange} value={newName} />
    </div>
    <div>
      phone: <input onChange={handlePhoneNumberChange} value={newPhoneNumber} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
