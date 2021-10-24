import faker from 'faker'
import _ from 'lodash' 
import React from 'react'
import { Accordion, Progress, Segment } from 'semantic-ui-react'


const panels = [
  {
    key: "simulacion1",
    title: "Simulacion 1",
    content: {
      as: {Progress},
    },
  },
  {
    key: "simulacion2",
    title: "Simulacion 2",
    content: {
      as: {Progress},
    },
  },
  {
    key: "simulacion3",
    title: "Simulacion 3",
    content: {
      as: {Progress},
    },
  },
]




const AcordeonResultados = () => (
      <Accordion panels={panels}/>

)

export default AcordeonResultados