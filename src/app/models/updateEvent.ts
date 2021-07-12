import {BudgetItem} from './budget_item';

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
