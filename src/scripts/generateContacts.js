import fs from "node:fs";
import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";


function readContacts() {
  if (!fs.existsSync(PATH_DB)) {
    return [];
  }
  const data = fs.readFileSync(PATH_DB, "utf-8");
  return JSON.parse(data);
}


function writeContacts(contacts) {
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
}


export function generateContacts(count) {
  const contacts = readContacts();

  for (let i = 0; i < count; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }

  writeContacts(contacts);
  console.log(`${count} new contacts added.`);
}


generateContacts(5);
