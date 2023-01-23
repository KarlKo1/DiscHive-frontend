export default function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  };
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }
  const formatter = Intl.NumberFormat("et-EE", options);
  if (amount > 100) {
    return formatter.format(amount / 100);
  } else {
    return formatter.format(amount / 1);
  }
}
