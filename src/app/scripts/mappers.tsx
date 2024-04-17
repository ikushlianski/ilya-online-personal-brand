import { WorksForUi, WorksFromBases } from "src/app/interfaces/interfaced";

class Mappers {
  wokersToDisplay = (wokersFromBases: [WorksFromBases]) => {
    wokersFromBases.map((item) => {
      let uiItem;
      if (item._id) {
        uiItem.id = item._id;
      } else {
        uiItem.id = item.name;
      }

      if (item.name) {
        uiItem.name = item.name;
      } else {
        uiItem.name = "No information";
      }

      if (item.date) {
        uiItem.date = new Date(item.date);
      } else {
        uiItem.data = "No in formation";
      }

      if (item.group) {
        uiItem.group = item.group;
      } else {
        uiItem.group = "No information";
      }

      if (item.goals) {
        uiItem.goals = item.goals;
      } else {
        uiItem.goals = "No information";
      }

      if (item.description) {
        uiItem.description = item.description;
      } else {
        uiItem.description = "No information";
      }

      if (item.level) {
        uiItem.level = item.level;
      } else {
        uiItem.level = "No information";
      }

      if (item.repos) {
        uiItem.repos = item.repos;
      } else {
        uiItem.repos = "No information";
      }

      if (item.techStack) {
        uiItem.techStack = item.techStack;
      } else {
        uiItem.techStack = "No information";
      }
    });
  };
}

export const mappers = new Mappers();
