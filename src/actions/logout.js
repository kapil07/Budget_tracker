import { redirect } from "react-router-dom";

//helpers
import { deleteItem } from "../helper";

//library
import { toast } from "react-toastify";

export async function logoutAction() {
  //delete the user
  deleteItem({ key: "userName" });

  //delete the budgets
  deleteItem({ key: "budgets" });

  //delte the expenses
  deleteItem({ key: "expenses" });

  //notify
  toast.success("You,ve Deleted your Account!");

  //return redirect
  return redirect("/");
}
