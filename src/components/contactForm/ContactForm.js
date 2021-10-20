import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ContactFormStyled } from "./ContactFormStyled";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, number, id: uuidv4() });
    setName("");
    setNumber("");
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <ContactFormStyled onSubmit={onHandleSubmit} method="post">
      <label className="form-label">
        Name
        <br />
        <input className="form-input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
          value={name}
        />
      </label>
      <label className="form-label">
        Number
        <br />
        <input className="form-input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
          value={number}
        />
      </label>
      {name && (
        <button type="submit" className="addBtn" onClick={onHandleSubmit}>
          Add contact
        </button>
      )}
    </ContactFormStyled>
  );
};

export default ContactForm;
