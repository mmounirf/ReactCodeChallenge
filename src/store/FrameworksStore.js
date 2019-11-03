import { observable, computed } from "mobx";
import items from "../pages/items";

const search = (data, query) => {
  return data.filter(entry => {
    return (
      entry.title.toLowerCase().includes(query.toLowerCase()) ||
      entry.description.toLowerCase().includes(query.toLowerCase())
    );
  });
};

class FrameworksStore {
  @observable data = items;
  @observable query = "";
  @computed get filteredData() {
    return search(this.data, this.query);
  }
}

export default FrameworksStore;
