export enum ActionType {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART",
  GET_ALL_ITEMS = "GET_ALL_ITEMS",
}


export interface DataList {
    id: string,
    image: string,
    title: string,
    amount: number,
}

// export type DataList = {
//     data: {
//         id: string
//         image: string
//         title: string
//         amount: number
//     }[]
// }

interface actionAdd {
  type: ActionType.ADD_ITEM;
  payload: DataList;
}

interface actionRemove {
  type: ActionType.REMOVE_ITEM;
  payload: DataList;
}

interface actionGetAllItems {
    type: ActionType.GET_ALL_ITEMS;
    payload: DataList[];
  }
  

interface actionClear {
  type: ActionType.CLEAR_ITEM_FROM_CART;
  payload: string;
}

export type Action = actionAdd | actionRemove | actionClear | actionGetAllItems;

