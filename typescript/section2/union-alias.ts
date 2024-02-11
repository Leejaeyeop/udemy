type Combineable = number | string;

function combine(
  i1: Combineable,
  i2: Combineable,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof i1 === "number" && typeof i2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +i1 + +i2;
  } else {
    result = i1.toString() + i2.toString();
  }

  return result;
}
