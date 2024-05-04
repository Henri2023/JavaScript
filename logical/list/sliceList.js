function sliceList(list, quantity, byEnd = false) {
  if (!Array.isArray(list)) {
    throw new Error('sliceList() - Primeiro argumento deve ser um array!');
  };
  if (typeof quantity !== 'number' || quantity < 0) {
    throw new Error('sliceList() - Segundo argumento deve ser um número positivo!');
  };
  if (typeof byEnd !== 'boolean') {
    throw new Error('sliceList() - Terceiro argumento deve ser verdadeiro ou falso!');
  };

  if (byEnd) {
    return list.slice(-quantity);
  } else {
    return list.slice(0, quantity);
  };
};

const list = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
const quantity = 3;

const result = sliceList(list, quantity, false);
console.log(result); // [{id: 1}, {id: 2}, {id: 3}]
const result2 = sliceList(list, quantity, true);
console.log(result2); // [{id: 3}, {id: 4}, {id: 5}]