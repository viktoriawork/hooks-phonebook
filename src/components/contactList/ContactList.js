import React from "react";
import PropTypes from "prop-types";
import { ContactListStyled } from "./ContactListStyled";

const ContactList = ({ getVisibleContacts, onDeleteContactById }) => {
  const deleteContact = (e) => onDeleteContactById(e.target.id);

  return (
    <ContactListStyled>
      {getVisibleContacts().map(({ name, number, id }) => (
        <li className="item" key={id}>
          <div className="name">
            <p className="number">
              {name} {number}
            </p>
            <button className="delBtn" type="button" id={id} onClick={deleteContact}>
              delete
            </button>
          </div>
        </li>
      ))}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func,
  onDeleteContactById: PropTypes.func,
};

export default ContactList;
