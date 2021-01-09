import { getMessages } from "../static-data";
export default function user(state = getMessages(10), action) {
  return state;
}
