import categories from "./categories";

export const fakedata = [];
for (let i = 0; i < 1000; i++) {
  let types = ["income", "expense"];
  let type = types[Math.floor(Math.random() * types.length)];
  let values =
    type == "income"
      ? ["Deposit", "Salary", "Savings"]
      : ["Auto", "Bills", "Clothes", "Entertainment", "Food", "Fuel"];
  let value = values[Math.floor(Math.random() * values.length)];
  let date = new Date(
    2020,
    Math.floor(Math.random() * 12),
    Math.ceil(Math.random() * 31)
  );

  // let date = new Date(2020, 6, Math.ceil(Math.random() * 31));

  let amount = Math.round(Math.random() * 10000) / 100;
  let lorems = [
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit amet.",
    "Lorem, ipsum.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!",
    "",
    "",
    "",
    "",
    "",
  ];
  let lorem = lorems[Math.floor(Math.random() * lorems.length)];

  fakedata.push({
    type: type,
    description: value,
    value: value.toLowerCase(),
    note: lorem,
    date: date,
    amount: amount,
  });
}
