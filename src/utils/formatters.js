/* Currency */

export const formatCurrency =
  (value = 0) => {

    return `₹${Number(
      value
    ).toLocaleString(
      "en-IN"
    )}`;
  };

/* Number */

export const formatNumber =
  (value = 0) => {

    return Number(
      value
    ).toLocaleString(
      "en-IN"
    );
  };

/* Date */

export const formatDate =
  (date) => {

    if (!date)
      return "-";

    return new Date(
      date
    ).toLocaleDateString(
      "en-IN",
      {

        day:
          "2-digit",

        month:
          "short",

        year:
          "numeric",
      }
    );
  };

/* Capitalize */

export const capitalize =
  (text = "") => {

    if (!text)
      return "";

    return (
      text.charAt(0).toUpperCase() +
      text.slice(1)
    );
  };