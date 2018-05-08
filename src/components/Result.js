import React from 'react';
import '../styles/Result.css';

const Result = (props) => {
  const placeholder = <p className="result__info">{props.result}</p>;

  return (
    <div className="result">
      {!props.changed ?
        placeholder :
        <div>
          <p className="result__info"><strong>ID:</strong> {props.id}</p>
          <p className="result__info"><strong>Status:</strong> {props.result}</p>
        </div>}
    </div>
  );
}

export default Result;
