import { ActivityContext } from "../context/ActivityContext";
import { useContext } from "react";

export const useActivity = () => {
  const context = useContext(ActivityContext);
  if (!context) {
    throw new Error(
      "el hook useActivity debe ser utilizado en un ActivityProvider"
    );
  }
  return context;
};
