import React from 'react';

const New = ({setCount, count}) => {
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
        You may detect a little change by clicking this field
    </div>
  );
};

export default New;