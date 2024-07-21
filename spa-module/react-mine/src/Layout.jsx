import React from "react";
import New from './New';
import Counter from './Counter';

const Layout = ({setCount, count}) => {
  return (
    <div className="layout">
        <h1>This is all mine</h1>
            <p>Can you see me?</p>
            <New setCount={setCount} count={count}/>
            <Counter count={count}/>
    </div>
  );
};

export default Layout;
