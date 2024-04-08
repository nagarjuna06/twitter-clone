import { format } from "date-fns";

export const formattedDate = (date: any, formatString: string) => {
  return format(Number(date), formatString);
};
