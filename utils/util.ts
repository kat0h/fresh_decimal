export function parseDecimal(
  val: string | number | undefined | null,
): number | undefined {
  if (val === undefined || val === null) {
    return undefined;
  }
  let v = 0;
  if (typeof val === "string") {
    const parsed = parseInt(val);
    if (isNaN(parsed)) {
      return undefined;
    }
    v = parsed;
  } else {
    v = val;
  }
  if (v > 9007199254740991 || v < -9007199254740991) {
    return undefined;
  }
  return v;
}
