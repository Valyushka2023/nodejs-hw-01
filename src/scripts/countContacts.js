import fs from "node:fs";
import { PATH_DB } from "../constants/contacts.js";


export function countContacts() {
  if (!fs.existsSync(PATH_DB)) {
    console.log("No contacts found.");
    return 0;
  }
  const data = fs.readFileSync(PATH_DB, "utf-8");
  const contacts = JSON.parse(data);
  console.log(`Total contacts: ${contacts.length}`);
  return contacts.length;
}


countContacts();
