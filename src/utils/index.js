export const tranformTime = (value) => {
  let s = 0;
  let m = 0;
  let h = 0;
  let result = "";

  if (value > 60) {
    m += 1;
    s = value - 60;

    if (m > 60) {
      h += 1;
      m = m - 60;
    }
  } else {
    s = value;
  }

  if (h > 0) {
    result = h + " hora(s) ";
  }
  if (m > 0) {
    result += m + " minuto(s) ";
  }
  if (s > 0) {
    result += s + " segundo(s)";
  }

  if (h === 0 && m === 0 && s === 0) {
    result += m + " minuto(s)";
  }
  return result;
};
