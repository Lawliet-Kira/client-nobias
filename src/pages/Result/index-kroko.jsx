import "./style.scss";
import React from 'react'
import {Progress} from 'semantic-ui-react'
import 'semantic-ui-css'

function Result2 () {
  return (
    <Progress indicating percent={33} progress size="small"/>
  );
}

export default Result2