export const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

export function orderByProps(object, [key1, key2]) {
  const array = [];
  array.push({ key: key1, value: object[key1] });
  array.push({ key: key2, value: object[key2] });
  const arrayOfKeys = [];
  Object.keys(object).forEach((entry) => {
    if (entry !== key1 && entry !== key2) {
      arrayOfKeys.push(entry);
    }
  });
  arrayOfKeys.sort();
  arrayOfKeys.forEach((entry) => {
    array.push({ key: entry, value: object[entry] });
  });
  return array;
}
// console.log(orderByProps(obj, ['name', 'level']));
