function App() {
  // function number_cardinality(my_number) {
  //   const length = my_number.toString().length;
  //   for (let i = 0; i <= my_number.toString().length; i++) {
  //     if (Number(my_number.toString()[length - 1]) === 0) {
  //       return 'zero';
  //     }
  //   }
  // }
  // console.log(number_cardinality(100));

  // var Alphabet = {
  //   BINARY: '01',
  //   OCTAL: '01234567',
  //   DECIMAL: '0123456789',
  //   HEXA_DECIMAL: '0123456789abcdef',
  //   ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  //   ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  //   ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  //   ALPHA_NUMERIC:
  //     '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  // };

  // function convert(input, source, target) {
  //   // TODO
  //   if (source.length === 10) {
  //     if (target[input]) {
  //       console.log(target[input]);
  //       return target[input];
  //     }
  //     console.log(Number(input).toString(Number(target.length)));
  //     const result = Number(input).toString(Number(target.length));
  //     return result;
  //   }

  //   if (source.length === 2) {
  //     if (target[parseInt(input, source.length)]) {
  //       console.log(target[parseInt(input, source.length)]);
  //       return target[parseInt(input, source.length)];
  //     }
  //     console.log(parseInt(input, source.length).toString());
  //     const result = parseInt(input, source.length).toString();
  //     return result;
  //   }
  // }

  // // convert between numeral systems
  // convert('15', Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
  // convert('15', Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
  // convert('1010', Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
  // convert('1010', Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"

  // // other bases
  // convert('0', Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
  // convert('27', Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
  // convert('hello', Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
  // convert('SAME', Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"
  ////////////////////////////////////////////////////////
  // function createChess(x, y) {
  //   for (let i = 0; i < y; i++)
  //     console.log(
  //       (i % 2 ? ' #' : '# ')
  //         .repeat(Math.floor(x / 2) + 1)
  //         .slice(0, (x % 2) - 2),
  //     );
  // }
  // createChess(8, 8);

  ////////////////////////////////////////////////////////
  // console.log(res());
  // FizzBuzz
  // const fizzbuzz = num => {
  //   for (let i = 1; i <= num; i++) {
  //     if (i % 3 === 0 && i % 5 === 0) {
  //       console.log('fizzbuzz');
  //     } else if (i % 3 === 0) {
  //       console.log('fizz');
  //     } else if (i % 5 === 0) {
  //       console.log('buzz');
  //     } else {
  //       console.log(i);
  //     }
  //   }
  // };
  // fizzbuzz(16);

  ////////////////////////////////////////////////////////
  // String repeat
  // const res = () => {
  //   let a = '#';
  //   let b = '';
  //   for (let i = 1; i <= 7; i++) {
  //     b += a;
  //     console.log(b);
  //     // console.log(a.repeat(i));
  //   }
  // };
  // res();
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######

  ////////////////////////////////////////////////////////

  // const obj = {
  //   viktor: ['apple', 'grape', 'orange', 'apple', 'banana'],
  //   kate: ['grape', 'orange', 'apple', 'grape', 'banana'],
  // };
  //result of calc method should be equal to
  // {
  //     viktor: {
  //         apple: 2,
  //         grape: 1,
  //         orange: 1,
  //         banana: 1,
  //     },
  //     kate: {
  //         apple: 1,
  //         grape: 2,
  //         orange: 1,
  //         banana: 1,
  //     },
  // }

  ////////////// 1st way //////////////

  // function calc(obj) {
  //   const keys = Object.keys(obj);
  //   const values = Object.values(obj);

  //   const result = keys.reduce((acc, name, index, array) => {
  //     acc[name] = {};

  //     values[index].forEach(fruit => {
  //       acc[name][fruit] = !acc[name][fruit] ? 1 : acc[name][fruit] + 1;
  //     });

  //     return acc;
  //   }, {});

  //   return result;
  // }

  ////////////// 2nd way //////////////

  // function calc(obj) {
  //   return Object.fromEntries(
  //     Object.entries(obj).map(([k, v]) => [
  //       k,
  //       v.reduce((a, c) => ((a[c] = a[c] ? ++a[c] : 1), a), {}),
  //     ]),
  //   );
  // }

  ////////////// 3rd way //////////////

  // const calc = obj =>
  //   Object.keys(obj).reduce(
  //     (a, b) => (
  //       (a[b] = obj[b].reduce((a, b) => ((a[b] = a[b] ? a[b] + 1 : 1), a), {})),
  //       a
  //     ),
  //     {},
  //   );

  ////////////// 4th way //////////////

  // function calc(obj) {
  //   let result = {};
  //   for (let [key, value] of Object.entries(obj)) {
  //     result[key] = {};
  //     for (let item of value) {
  //       result[key][item] = (result[key][item] || 0) + 1;
  //     }
  //   }
  //   return result;
  // }

  // console.log(calc(obj));

  ////////////////////////////////////////////////////////

  // const names = [
  //   'Ben',
  //   'Sam',
  //   'Ben',
  //   'Sam',
  //   'Sam',
  //   'Jack',
  //   'Tom',
  //   'Tom',
  //   'Tom',
  //   'Tom',
  // ]; // --> API

  // const uniqueNames = [...new Set(names)];

  // const totalObj = {};

  // for (let i = 0; i < names.length; i++) {
  //   if (totalObj[names[i]]) {
  //     totalObj[names[i]] = totalObj[names[i]] + 1;
  //   } else {
  //     totalObj[names[i]] = 1;
  //   }
  // }

  // const res = Object.keys(totalObj).sort((a, b) => totalObj[b] - totalObj[a]);

  // console.log(res);

  ////////////////////////////////////////////////////////
  // let users = [
  //   { id: 11, name: 'Adam', age: 23, group: 'editor' },
  //   { id: 47, name: 'John', age: 28, group: 'admin' },
  //   { id: 85, name: 'William', age: 34, group: 'editor' },
  //   { id: 97, name: 'Oliver', age: 28, group: 'admin' },
  // ];
  // let res = users.filter(it => new RegExp('oli', 'i').test(it.name));
  // console.log('res', res);

  // REDUCE

  // const a = [
  //   [1, 2, 3],
  //   [3, 4, 5],
  //   [5, 6, 7],
  // ];

  // const b = a.reduce((prev, item) => prev.concat(item));

  // console.log('b', b);

  ////////////////////////////////////////////////////////

  // forEach
  // let a = [1, 2, 3, 4, 5, 6, 7];
  // let b = [];
  // let sum = 0;

  // a.forEach(item => b.push(Math.pow(item, 2)));
  // a.forEach(item => (sum += item));

  // console.log(b);
  // console.log('sum', sum);

  ////////////////////////////////////////////////////////

  // MAP
  // let a = [1, 2, 3, 4, 5, 6, 7];

  // const b = a.map(item => Math.pow(item, 2));
  // console.log('b', b);

  ////////////////////////////////////////////////////////

  // let a = [1, 2, 3, 4, 5, 6, 7];

  //EVERY
  // console.log(
  //   'Not 0',
  //   a.every(item => item > 0),
  // );

  //SOME
  // console.log(
  //   'Is negative',
  //   a.some(item => item < 0),
  // );

  ////////////////////////////////////////////////////////

  //FILTER
  // let a = [1, 2, -3, -4, 5, 6, -7];

  // console.log(
  //   'Negative numbers',
  //   a.filter(item => item < 0),
  // );
  // console.log(
  //   'Even numbers',
  //   a.filter(item => item % 2 === 0),
  // );
  // console.log('Count negative numbers', a.filter(item => item < 0).length);

  // let b = ['lorem', 'loremi', 'lor', 'lore', 'Lorem ipsum'];
  // console.log(
  //   'Item length > 5',
  //   b.filter(item => item.length > 5),
  // );

  // let a = [1, 2, [3, 4], 5, [6, 7]];
  // console.log(
  //   'Inner arrays',
  //   a.filter(item => Array.isArray(item)),
  // );

  // REDUCE
  // let a = [1, 2, 3, 0, 5, 6, 7];

  // console.log(
  //   'Sum',
  //   a.reduce((prev, elem) => prev + elem),
  // );
  // console.log(
  //   'Sum before 0',
  //   a.reduce((sum, elem, index, arr) =>
  //     index > arr.indexOf(0) ? sum : sum + elem,
  //   ),
  // );
  // let summ = 0;
  // a.reduceRight((sum, elem, index, arr) =>
  //   elem === 0 ? (summ = sum) : sum + elem,
  // );
  // console.log('Sum after 0', summ);

  // let num = 1;
  // a.reduce((sum, elem) => {
  //   if (sum > 10) {
  //     return console.log('Count elems to sum > 10', num);
  //   } else {
  //     num++;
  //     return sum + elem;
  //   }
  // });
  // a.reduceRight((sum, elem) => {
  //   if (sum > 10) {
  //     return console.log('Count elems to sum > 10', num);
  //   } else {
  //     num++;
  //     return sum + elem;
  //   }
  // });

  ////////////////////////////////////////////////////////

  // let values = [3, 1, 3, 5, 2, 4, 4, 4];
  // let uniqueValues = [...new Set(values)];
  // console.log('uniqueValues', uniqueValues);

  ////////////////////////////////////////////////////////

  // const res = [5, 7, 9].slice(1);
  // res.pop();
  // res.push(4);
  // console.log('res', res);

  ////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////

  return <div>Hiiiiiiiiiiiii...iiiii!</div>;
}

export default App;
