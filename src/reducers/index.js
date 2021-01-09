import { combineReducers } from "redux";

import user from "./user";
import typing from "./typing";
import contacts from "./contacts";
import messages from "./messages";
import activeUserId from "./activeUserId";

export default combineReducers({
  user,
  typing,
  contacts,
  messages,
  activeUserId,
});
