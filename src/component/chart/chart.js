import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip , ResponsiveContainer } from 'recharts';
import './chart.css'
import { useEffect , useState } from "react";

export default function Chart({title , grid , data , datakey}){
    let [spect , setSpect] = useState(4)
    let size = window.innerWidth 
    useEffect( ()=> {
       if(size <= 767){
        setSpect(2)
       }
    }, [size])
    
    return(
        <div className="chart">
            <h3 className="h3">{title}</h3>
            <ResponsiveContainer width="97%" aspect={spect}>
        <LineChart data={data} >
            { grid && <CartesianGrid stroke="#aaa" strokeDasharray="10 10" />}
    <Line type="monotone" dataKey={datakey} stroke="#5550bd" strokeWidth={1} name="sale" />
    <XAxis dataKey="name" stroke="#5550bd"/>
    
    <Legend align="right" />
    <Tooltip />
  </LineChart>
  </ResponsiveContainer>
  </div>
        
    )
}

// LineChart => margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
// YAxis => label={{ value: 'UV', position: 'insideLeft', angle: -90 }}