const data = [];

for (let i = 0; i < localStorage.length; i++) {
  const newCardData_deserialized = JSON.parse(localStorage.getItem(i));
  data.push(newCardData_deserialized);
}
console.log(data);
export { data };
