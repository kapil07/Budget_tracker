import { toast } from "react-toastify";
import { deleteItem, getAllMatchingItems } from "../helper";
import { redirect } from "react-router-dom";

export function deleteBudget({ params }) {
  try {
    deleteItem({ key: "budgets", id: params.id });

    const associatedExpenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: "expenses",
        id: expense.id,
      });
    });

    toast.success("Budget Deleted Succesfully!");
  } catch (e) {
    throw new Error("There was a problem deleting your Budget");
  }
  return redirect("/");
}