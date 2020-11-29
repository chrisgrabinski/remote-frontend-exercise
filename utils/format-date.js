import { format, parseISO } from "date-fns";

export default function formatDate(date) {
  const dateObject = parseISO(date);

  if (typeof dateObject !== "object") {
    throw new Error(
      "`formatDate` expects a date string in ISO format YYYY-MM-DD"
    );
  }

  const formattedDate = format(dateObject, "dd/MM/yyyy");

  return formattedDate;
}
