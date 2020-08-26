import items from "../mockData/items.json";

class ItemService {
  static getItems(rootItemId) {
    if (!rootItemId) {
      return items;
    }
  }
}

export default ItemService;
