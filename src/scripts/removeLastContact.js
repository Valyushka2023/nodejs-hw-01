import fs from "node:fs";
import { PATH_DB } from "../constants/contacts.js";


export function removeLastContact() {
  if (!fs.existsSync(PATH_DB)) {
    console.log("No contacts found.");
    return;
  }
  const data = fs.readFileSync(PATH_DB, "utf-8");
  const contacts = JSON.parse(data);

  if (contacts.length === 0) {
    console.log("No contacts to remove.");
    return;
  }

  const removedContact = contacts.pop();
  writeContacts(contacts);
  console.log(`Last contact removed: ${removedContact.name}`);
}


function writeContacts(contacts) {
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
}


removeLastContact();
