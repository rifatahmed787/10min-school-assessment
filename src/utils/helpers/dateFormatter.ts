import moment from "moment";

export const dateFormatter = (dateTime: string) => {
  return moment(dateTime).format("DD MMMM, YYYY") || "Not Found";
};
