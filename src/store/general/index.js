import { observable, makeObservable, action } from "mobx";
import { AppState } from "react-native";

class general {
  constructor() {
    makeObservable(this);
  }

  @observable appName = "Venue";
  @observable isInternet = false;
  @observable appState = AppState.currentState;

  @action setAppName = (str) => {
    this.appName = str;
  };

  @action setIsInternet = (obj) => {
    this.isInternet = obj;
  };

  @action setAppState = (obj) => {
    this.appState = obj;
  };
}
export const General = new general();
