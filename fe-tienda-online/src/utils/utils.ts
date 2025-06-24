export const formattedDate = (date: Date) =>
  new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
    .format(date)
    .replace(/ de /g, " ");

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "PEN",
  style: "currency",
});

export const formatCurrency = (number: number) => {
  return CURRENCY_FORMATTER.format(number);
};
