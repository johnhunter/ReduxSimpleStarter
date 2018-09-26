import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

const average = arr => (
  arr.reduce((sum, v) => sum + Number(v), 0) / (arr.length || 1)
);

const Chart = (props) => {
  return (
    <div className="chart">
      <Sparklines height={80} width={180} data={props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <div>{Math.round(average(props.data))} {props.units}</div>
    </div>
  );
}

export default Chart;
