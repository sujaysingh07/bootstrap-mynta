import React, { useEffect } from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Bag = () => {
   let navigate = useNavigate()
    useEffect(() => {
        if(window.location.pathname === '/bag'){
            document.getElementById('nav').style.display= 'none'
        }
    }, [])
    let home=()=>{
        navigate("/")
        window.location.reload()
      }
    let wishlist=()=>{
        navigate('/wishlist')
        document.getElementById('nav').style.display= 'block'
    }
      
  return (
          <div style={{height:"100vh"}}>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="./Myntra.png"
            title="Image from freepnglogos.com"
            alt="Myntra image"
            height="30px"
            // width="30px"
            onClick={home}
          />
        </a>
        </div>
    </nav>
    <Card style={{margin:"100px auto",width:'500px',border:'none'}}>
    <Row style={{textAlign:'center'}}>
        <div className="img" style={{width:'200px',margin:"0 auto"}}>
            <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="" width="100%" />
        </div>
            <h1>Hey, it feels so light!</h1>
            <p>There is nothing in your bag. Let's add some items.</p>

    </Row>
        <Button onClick={wishlist} style={{width:'400px',margin:"0 auto"}}>
            ADD ITEMS FROM WISHLIST
        </Button>
    </Card>
    </div>
  )
}

export default Bag