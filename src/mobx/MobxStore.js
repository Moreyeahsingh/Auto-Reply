import { makeObservable, observable, action, makeAutoObservable } from "mobx";

class botInfo {
  initialState = {
    bot: [
      {
        name: "Bot A",
        id: "jshjkafkgfg",
        MessageSet: [
          {
            MsgSetName: "Msg Set A",
            id: "jshjkafkgfg",
            messages: [{ msgText: "Msg  A", id: "jshjkafkgfg" }],
          },
        ],
      },
    ],
  };

  constructor(initialState) {
    makeAutoObservable(this, {
      setBotName: action,
    });
  }
  setBotName(data) {
    this.initialState.bot = data;
  }
}
export const Bot = new botInfo();
