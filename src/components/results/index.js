import React from 'react';
import './result.scss'
function Results (props) {
  console.log(props)
    return (
      <section>
        <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      </section>
    );
  
}

export default Results;