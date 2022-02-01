import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './App.module.scss';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  var Feature = (function () {
    let count = 23;

    function getCountVariable() {
      return count;
    }

    return {
      getCount: getCountVariable,
    };
  })();

  // 1 - ?
  Feature.getCount();

  // 2 - ?
  Feature.getCountVariable();

  // 3 - ?
  // Feature.count;

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
        <a className={s.GoogleBtn}>Google</a>
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
            <a className={s.SignInBtn}>войти</a>
          </li>
          <li>
            <a className={s.SignUpBtn}>регистрация</a>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
