import {React, Component} from 'react'
import { Progress} from "semantic-ui-react"



const BarraProgreso = (result) => {
    return(
        <Progress indicating percent={result} size="small"/>
    )
}

export default BarraProgreso