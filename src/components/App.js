import { useEffect, useState } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import Section from "./section/Section";

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("contacts")) || [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
  );

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onSubmit = (contact) => {
    contacts.some(
      (item) =>
        item.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
    )
      ? alert(`${contact.name} is already in contacts.`)
      : setContacts((prev) => [...prev, contact]);
  };

  const onDeleteContactById = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const onChangeFilter = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    
    <div className="App">
    
      <Section title="Phonebook">
        <ContactForm onSubmit={onSubmit} />
      </Section>

      <Section title="Contacts">
        <Filter onChangeFilter={onChangeFilter} filter={filter} />
        <ContactList
          getVisibleContacts={getVisibleContacts}
          contacts={contacts}
          onDeleteContactById={onDeleteContactById}
        />
      </Section>
    </div>
  );
};

export default App;

