import fs from "node:fs";
import { PATH_DB } from "../constants/contacts.js";


export function removeAllContacts() {
  fs.writeFileSync(PATH_DB, JSON.stringify([]));
  console.log("All contacts have been removed.");
}


removeAllContacts();
