export const filterYearMonth = (dato, year, month) => {
  return dato.filter((e) => {
    return (
      new Date(e.date).getFullYear() == year &&
      new Date(e.date).getMonth() == month
    );
  });
};

export const selectMaxFour = (data) => {
  const objeto = {};
  data.map((e) => {
    if (objeto[e.value]) {
      objeto[e.value].push(e.amount);
    } else {
      objeto[e.value] = [];
      objeto[e.value].push(e.amount);
    }
  });

  const sortable = [];
  for (let i in objeto) {
    sortable.push([
      i,
      Math.round(objeto[i].reduce((a, b) => a + b, 0) * 100) / 100,
    ]);
  }

  const numbers = sortable.map((e) => e[1]);
  const totalSum = numbers.reduce((a, b) => {
    return a + b;
  }, 0);

  const sorted = sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  const final = sorted.slice(0, 4).map((e) => {
    return [e, Math.round((e[1] / totalSum) * 100)];
  });

  return final;
};

export const standarize = (data) => {
  return data.map((e) => {
    return Math.round((e[1] / data[0][1]) * 100) / 100;
  });
};

export const filterType = (dato, type) => {
  return dato.filter((e) => {
    return e.type == type;
  });
};

export const summaryByMonth = (dato, type, year, month) => {
  const typeFiltered = filterType(dato, type);
  const yearMonthFiltered = filterYearMonth(typeFiltered, year, month);
  const fourMax = selectMaxFour(yearMonthFiltered);
  const standard = standarize(fourMax);

  return [fourMax, standard];
};
