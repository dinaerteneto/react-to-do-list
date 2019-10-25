import React from 'react'
import { List, Checkbox } from 'semantic-ui-react'

const CheckList = ({index, label, checked, onChange}) => {
  return (
    <List.Item>
      <Checkbox 
        key={index} 
        label={label} 
        checked={checked}
        onChange={onChange}
      />
    </List.Item>
  )
}

export default CheckList