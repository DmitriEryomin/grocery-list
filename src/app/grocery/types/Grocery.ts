import {QuantityType} from '../enums/QuantityType';

export interface Grocery {
  _id: string;
  name: string;
  quantity: number;
  quantityType: QuantityType;
}
