
import React, { memo } from 'react';




export const Smalli =  memo(
 ({value}) => {

    console.log(' Me volví a renddreizar');

  return (
    <small>{value}</small>
  )
  }
)

  