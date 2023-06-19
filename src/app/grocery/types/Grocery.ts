import {QuantityType} from '../enums/QuantityType';

export interface Grocery {
  _id: string;
  name: string;
  completed: false;
  quantity: number;
  quantityType: QuantityType;
}
