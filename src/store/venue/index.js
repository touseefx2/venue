import { observable, makeObservable, action } from "mobx";
import database from "../../database/index";

class venue {
  constructor() {
    makeObservable(this);
  }

  @observable page = 1;
  @observable loader = false;
  @observable venueData = [];

  @action setPage = (obj) => {
    this.page = obj;
  };

  @action setLoader = (obj) => {
    this.loader = obj;
  };

  @action setVenueData = (obj) => {
    this.venueData = obj;
  };

  @action.bound
  attemptToGetVenueList() {
    this.setLoader(true);
    database
      .hitApi(database.apis.GET_NEW_LISTING + this.page, "get", null, "")
      ?.then((resp) => {
        this.setLoader(false);
        const data = resp.data || [];
        this.setVenueData([...this.venueData, ...data.results]);
        this.setPage(this.page + 1);
      })
      .catch((err) => {
        this.setLoader(false);
        const msg = err.response.data.message || err.response.status;
        console.log(
          `Error in ${db.apis.database.apis.GET_NEW_LISTING} : `,
          msg
        );
      });
  }
}

export const Venue = new venue();
