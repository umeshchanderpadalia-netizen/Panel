export function formatCurrency(
  value
) {

  return `₹${Number(
    value
  ).toLocaleString()}`;
}

export function capitalize(
  text
) {

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
}

export function formatDate(
  date
) {

  return new Date(
    date
  ).toLocaleDateString();
}