import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './App.module.scss';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  ////////////////////////////////////////////////////////

  // FizzBuzz
  // const fizzbuzz = num => {
  //   for (let i = 1; i < num; i++) {
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

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  return (
    <div className={s.FormContainer}>
      <form className={s.SignForm}>
        <p>Вы можете авторизоваться с помощью Google Account:</p>
        <button className={s.GoogleBtn}>Google</button>
        <p>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <label>Электронная почта:</label>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          onChange={handleChange}
          className={s.SignInput}
        ></input>
        <label>Пароль:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className={s.SignInput}
        ></input>
        <ul className={s.SignBtnsWrap}>
          <li>
            <button className={s.SignInBtn}>войти</button>
          </li>
          <li>
            <button className={s.SignUpBtn}>регистрация</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
