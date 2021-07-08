const data = [];

const newCardData_deserialized = JSON.parse(localStorage.getItem(1));

data.push(newCardData_deserialized);

export { data };
