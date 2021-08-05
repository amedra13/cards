import React from 'react'
import { Bar } from 'react-chartjs-2';
import {PSA, BGS, HGA} from '../data/grades'

const GradingBars = () => {
    
const data = {
  labels: ['Grade 10', 'Grade 9.5', 'Grade 9', 'Other'],
  datasets: [{
    label: 'PSA',
    data: [PSA.ten, PSA.nineFive, PSA.nine, PSA.other],
    backgroundColor: [
      'green',
    ],

    borderWidth: 1
  },
  {
    label: 'BGS',
    data: [BGS.ten, BGS.nineFive, BGS.nine, BGS.other],
    backgroundColor: [
      'lightgreen',
    ],

    borderWidth: 1
  },
  {
    label: 'HGA',
    data: [HGA.ten, HGA.nineFive, HGA.nine, HGA.other],
    backgroundColor: [
      'lightblue',
    ],

    borderWidth: 1
  }
]
};
    return (
        <Bar data={data}/>
    )
}

export default GradingBars
