import React from 'react'
import { Dropdown } from 'react-bootstrap'

const Women = () => {
  return (
    <div><Dropdown>
      <Dropdown.Toggle variant="none">
        Women
      <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Shirts</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Casual Wear</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Party Wear</Dropdown.Item>
  </Dropdown.Menu>
      </Dropdown.Toggle>
    </Dropdown>
    </div>
  )
}

export default Women