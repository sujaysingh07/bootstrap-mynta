import React from 'react'
import { Dropdown } from 'react-bootstrap'

const Kids = () => {
  return (
    <div><Dropdown>
      <Dropdown.Toggle variant="none">
        Kids
      </Dropdown.Toggle>
      <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Shirts</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Casual Wear</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Party Wear</Dropdown.Item>
  </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default Kids