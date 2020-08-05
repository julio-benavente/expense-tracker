/* DATA AND BYMONTH FILTER


const data = [
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: 'Lorem, ipsum.',
      date: '2020-07-01T05:00:00.000Z',
      amount: 2.71,
    },
    {
      type: 'expense',
      description: 'Entertainment',
      value: 'entertainment',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-20T05:00:00.000Z',
      amount: 34.26,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-07T05:00:00.000Z',
      amount: 30.62,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: '',
      date: '2020-07-24T05:00:00.000Z',
      amount: 28.32,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: '',
      date: '2020-07-18T05:00:00.000Z',
      amount: 56.13,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-23T05:00:00.000Z',
      amount: 31.16,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: '',
      date: '2020-07-17T05:00:00.000Z',
      amount: 82.41,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-06T05:00:00.000Z',
      amount: 41.83,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note: '',
      date: '2020-07-02T05:00:00.000Z',
      amount: 96.46,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: '',
      date: '2020-07-04T05:00:00.000Z',
      amount: 95.24,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: '',
      date: '2020-07-13T05:00:00.000Z',
      amount: 31.44,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-11T05:00:00.000Z',
      amount: 80.99,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-22T05:00:00.000Z',
      amount: 20.42,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-05T05:00:00.000Z',
      amount: 98.05,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: '',
      date: '2020-07-01T05:00:00.000Z',
      amount: 66.6,
    },
    {
      type: 'expense',
      description: 'Food',
      value: 'food',
      note: '',
      date: '2020-07-01T05:00:00.000Z',
      amount: 22.88,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-02T05:00:00.000Z',
      amount: 28.34,
    },
    {
      type: 'expense',
      description: 'Entertainment',
      value: 'entertainment',
      note: '',
      date: '2020-07-14T05:00:00.000Z',
      amount: 92.74,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-01T05:00:00.000Z',
      amount: 57.63,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-30T05:00:00.000Z',
      amount: 72.06,
    },
    {
      type: 'expense',
      description: 'Food',
      value: 'food',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-06T05:00:00.000Z',
      amount: 19.39,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note: 'Lorem, ipsum.',
      date: '2020-07-10T05:00:00.000Z',
      amount: 46.49,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note: '',
      date: '2020-07-21T05:00:00.000Z',
      amount: 92.77,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: '',
      date: '2020-07-25T05:00:00.000Z',
      amount: 19.07,
    },
    {
      type: 'expense',
      description: 'Food',
      value: 'food',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-05T05:00:00.000Z',
      amount: 13.12,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: 'Lorem, ipsum.',
      date: '2020-07-01T05:00:00.000Z',
      amount: 12.54,
    },
    {
      type: 'expense',
      description: 'Bills',
      value: 'bills',
      note: '',
      date: '2020-07-12T05:00:00.000Z',
      amount: 47.12,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: '',
      date: '2020-07-11T05:00:00.000Z',
      amount: 25.9,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: '',
      date: '2020-07-26T05:00:00.000Z',
      amount: 27.97,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: '',
      date: '2020-07-22T05:00:00.000Z',
      amount: 24.49,
    },
    {
      type: 'expense',
      description: 'Food',
      value: 'food',
      note: '',
      date: '2020-07-17T05:00:00.000Z',
      amount: 71.24,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-05T05:00:00.000Z',
      amount: 16.25,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-02T05:00:00.000Z',
      amount: 89.69,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: 'Lorem, ipsum.',
      date: '2020-07-08T05:00:00.000Z',
      amount: 96.96,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-09T05:00:00.000Z',
      amount: 80.49,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: '',
      date: '2020-07-24T05:00:00.000Z',
      amount: 73.25,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: '',
      date: '2020-07-02T05:00:00.000Z',
      amount: 34.06,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: 'Lorem, ipsum.',
      date: '2020-07-02T05:00:00.000Z',
      amount: 73.8,
    },
    {
      type: 'expense',
      description: 'Food',
      value: 'food',
      note: '',
      date: '2020-07-08T05:00:00.000Z',
      amount: 17.84,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: '',
      date: '2020-07-13T05:00:00.000Z',
      amount: 0.6,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: 'Lorem, ipsum.',
      date: '2020-07-02T05:00:00.000Z',
      amount: 19.55,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-16T05:00:00.000Z',
      amount: 92.8,
    },
    {
      type: 'expense',
      description: 'Food',
      value: 'food',
      note: '',
      date: '2020-07-11T05:00:00.000Z',
      amount: 55.18,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-04T05:00:00.000Z',
      amount: 69.62,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: '',
      date: '2020-07-14T05:00:00.000Z',
      amount: 66.22,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: '',
      date: '2020-07-27T05:00:00.000Z',
      amount: 68.89,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: 'Lorem, ipsum.',
      date: '2020-07-20T05:00:00.000Z',
      amount: 63.32,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: '',
      date: '2020-07-10T05:00:00.000Z',
      amount: 58.05,
    },
    {
      type: 'expense',
      description: 'Bills',
      value: 'bills',
      note: '',
      date: '2020-07-26T05:00:00.000Z',
      amount: 11.65,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-26T05:00:00.000Z',
      amount: 80.14,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note: 'Lorem, ipsum.',
      date: '2020-07-09T05:00:00.000Z',
      amount: 19.33,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-26T05:00:00.000Z',
      amount: 0.06,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: '',
      date: '2020-07-13T05:00:00.000Z',
      amount: 18.21,
    },
    {
      type: 'expense',
      description: 'Bills',
      value: 'bills',
      note: 'Lorem, ipsum.',
      date: '2020-07-19T05:00:00.000Z',
      amount: 90.47,
    },
    {
      type: 'expense',
      description: 'Bills',
      value: 'bills',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-20T05:00:00.000Z',
      amount: 23.57,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: '',
      date: '2020-07-18T05:00:00.000Z',
      amount: 76.14,
    },
    {
      type: 'expense',
      description: 'Bills',
      value: 'bills',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-20T05:00:00.000Z',
      amount: 95.72,
    },
    {
      type: 'expense',
      description: 'Entertainment',
      value: 'entertainment',
      note: 'Lorem, ipsum.',
      date: '2020-07-18T05:00:00.000Z',
      amount: 96.37,
    },
    {
      type: 'expense',
      description: 'Entertainment',
      value: 'entertainment',
      note: '',
      date: '2020-07-18T05:00:00.000Z',
      amount: 8.61,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-01T05:00:00.000Z',
      amount: 65.55,
    },
    {
      type: 'expense',
      description: 'Bills',
      value: 'bills',
      note: '',
      date: '2020-07-22T05:00:00.000Z',
      amount: 37.92,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-25T05:00:00.000Z',
      amount: 52.28,
    },
    {
      type: 'expense',
      description: 'Entertainment',
      value: 'entertainment',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-20T05:00:00.000Z',
      amount: 83.63,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: '',
      date: '2020-07-21T05:00:00.000Z',
      amount: 54.54,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-21T05:00:00.000Z',
      amount: 50.81,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-05T05:00:00.000Z',
      amount: 43.52,
    },
    {
      type: 'expense',
      description: 'Food',
      value: 'food',
      note: '',
      date: '2020-07-28T05:00:00.000Z',
      amount: 85.96,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-30T05:00:00.000Z',
      amount: 2.23,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-05T05:00:00.000Z',
      amount: 25.59,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-30T05:00:00.000Z',
      amount: 65.34,
    },
    {
      type: 'expense',
      description: 'Entertainment',
      value: 'entertainment',
      note: '',
      date: '2020-07-22T05:00:00.000Z',
      amount: 76.44,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-05T05:00:00.000Z',
      amount: 32.01,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: '',
      date: '2020-07-08T05:00:00.000Z',
      amount: 18.78,
    },
    {
      type: 'expense',
      description: 'Entertainment',
      value: 'entertainment',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-22T05:00:00.000Z',
      amount: 74.62,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-28T05:00:00.000Z',
      amount: 4.79,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-18T05:00:00.000Z',
      amount: 84.76,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note: '',
      date: '2020-07-25T05:00:00.000Z',
      amount: 35.49,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-01T05:00:00.000Z',
      amount: 5.24,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-12T05:00:00.000Z',
      amount: 68.95,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: 'Lorem, ipsum.',
      date: '2020-07-23T05:00:00.000Z',
      amount: 94.14,
    },
    {
      type: 'expense',
      description: 'Bills',
      value: 'bills',
      note: '',
      date: '2020-07-04T05:00:00.000Z',
      amount: 88.33,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-14T05:00:00.000Z',
      amount: 84.22,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-25T05:00:00.000Z',
      amount: 56.91,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-22T05:00:00.000Z',
      amount: 78.46,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: '',
      date: '2020-07-11T05:00:00.000Z',
      amount: 26.83,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-22T05:00:00.000Z',
      amount: 54.6,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: '',
      date: '2020-07-20T05:00:00.000Z',
      amount: 82.52,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: '',
      date: '2020-07-18T05:00:00.000Z',
      amount: 79.05,
    },
    {
      type: 'expense',
      description: 'Fuel',
      value: 'fuel',
      note:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic!',
      date: '2020-07-01T05:00:00.000Z',
      amount: 59.36,
    },
    {
      type: 'expense',
      description: 'Entertainment',
      value: 'entertainment',
      note: '',
      date: '2020-07-24T05:00:00.000Z',
      amount: 46.48,
    },
    {
      type: 'expense',
      description: 'Food',
      value: 'food',
      note: 'Lorem ipsum dolor sit amet.',
      date: '2020-07-16T05:00:00.000Z',
      amount: 48,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-22T05:00:00.000Z',
      amount: 81.71,
    },
    {
      type: 'expense',
      description: 'Food',
      value: 'food',
      note: '',
      date: '2020-07-02T05:00:00.000Z',
      amount: 36.54,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: '',
      date: '2020-07-24T05:00:00.000Z',
      amount: 1.62,
    },
    {
      type: 'income',
      description: 'Salary',
      value: 'salary',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-03T05:00:00.000Z',
      amount: 57.4,
    },
    {
      type: 'income',
      description: 'Deposit',
      value: 'deposit',
      note: '',
      date: '2020-07-27T05:00:00.000Z',
      amount: 60.4,
    },
    {
      type: 'expense',
      description: 'Bills',
      value: 'bills',
      note: '',
      date: '2020-07-27T05:00:00.000Z',
      amount: 34.5,
    },
    {
      type: 'expense',
      description: 'Clothes',
      value: 'clothes',
      note: '',
      date: '2020-07-12T05:00:00.000Z',
      amount: 11.52,
    },
    {
      type: 'expense',
      description: 'Auto',
      value: 'auto',
      note: '',
      date: '2020-07-17T05:00:00.000Z',
      amount: 41.2,
    },
    {
      type: 'income',
      description: 'Savings',
      value: 'savings',
      note: 'Lorem ipsum dolor sit.',
      date: '2020-07-23T05:00:00.000Z',
      amount: 48.19,
    },
  ];
  
  const log = e => console.log(e)
  
  const listByMonth = (dato, type, year, month) => {
  
    const filterType = (dato, type) => {
      return dato.filter(e => {
        return e.type == type
      });
    };
  
    const filterYearMonth = (dato, year, month) => {
      return dato.filter(e => {
        return new Date(e.date).getFullYear() == year && new Date(e.date).getMonth();
      });
    };
  
    const selectMaxFour = (data) => {
      const objeto = {};
  
      data.map(e => (
        objeto[e.value])
        ? objeto[e.value].push(e.amount)
        : objeto[e.value] = []
      );
  
      const sortable = [];
  
      for (let i in objeto) {
        sortable.push([i, Math.round(objeto[i].reduce((a, b) => a + b) * 100) / 100]);
      }
  
      const sorted = sortable.sort(function (a, b) {
        return b[1] - a[1];
      });
  
      const final = sorted.slice(0, 4)
  
      return final
    }
  
    const typeFiltered = filterType(dato, type)
    const yearMonthFiltered = filterYearMonth(typeFiltered, year, month)
    const display = selectMaxFour(yearMonthFiltered)
  
    return display
  };
  
  
  const list = listByMonth(data, "expense", 2020, 6)
  
  console.log(list);
*/
