import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/actions/messagesAction";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white border border-gray-300 shadow-sm rounded-lg p-4"
          > 
          
          <p className="text-sm text-gray-500">{contact.email}</p>

          
            <p className="text-lg font-semibold text-gray-800">
              {contact.subject || "No Subject"}
            </p>


            <p className="text-sm text-gray-700">
              {contact.message || "No Message"}
            </p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
