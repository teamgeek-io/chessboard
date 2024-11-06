const OFFSET = -4;

const letterMap = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};

export function boardLocationToPosition(
  location: `${"a" | "b" | "c" | "d" | "e" | "f" | "g" | "h"}${"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"}`,
): [number, number, number] {
  const x = letterMap[location[0] as keyof typeof letterMap];
  const z = 8 - parseInt(location[1]);

  return [x + OFFSET, 0.001, z + OFFSET];
}
