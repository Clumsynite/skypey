import React, { useMemo } from "react";
import _ from "lodash";

import Header from "./Header";
import Chats from "./Chats";

import store from "../store";
import "./ChatWindow.css";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = useMemo(() => state.messages[activeUserId], [
    state,
    activeUserId,
  ]);
  const messages = useMemo(() => _.values(activeMsgs), [activeMsgs]);

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={messages} />
    </div>
  );
};

export default ChatWindow;
