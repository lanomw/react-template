import React, { useState } from 'react';

import './global.less';

function say(name: string): string {
  return `hello, i'm ${name}`;
}

const App = () => {
  const [count, setCounts] = useState('');
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };

  return (
    <>
      <h1>{say('roli')}</h1>

      <h2>webpack5+react+ts</h2>
      <p>受控组件</p>
      <input onChange={onChange} type='text' value={count} />
      <br />
      <p>非受控组件</p>
      <input type='text' />
    </>
  );
};

export default App;
