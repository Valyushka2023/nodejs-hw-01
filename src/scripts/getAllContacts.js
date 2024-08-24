import fs from "node:fs";
import { PATH_DB } from "../constants/contacts.js";


export function getAllContacts() {
  if (!fs.existsSync(PATH_DB)) {
    console.log("No contacts found.");
    return [];
  }
  const data = fs.readFileSync(PATH_DB, "utf-8");
  const contacts = JSON.parse(data);
  console.log(contacts);
  return contacts;
}


getAllContacts();
