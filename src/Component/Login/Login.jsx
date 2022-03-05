import React from 'react'
import { Card, Image, Row,Button} from 'react-bootstrap'

const Login = () => {
  return (
    <div className="login" style={{height:"100vh"}}>

    <Card style={{width:'400px',height:'500px',margin:"20px auto"}}  >
        <Image src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/12/29/e0f67808-f8b9-42b0-80ae-805fdf745cad1640802248099-Banner_Login-Landing-page--1-.jpg'/>
        <Row>
            <p className='h3'>Login Or Signup</p>
        </Row>
        <input type='text' style={{width:'300px'}} placeholder="+91"/>
       
        <p>By continuing, I agree to the <span><a href="">Terms of Use</a> &#38;  <a href="">Privacy Policy</a> </span></p>
        
        <Button>CONTINUE</Button>
        <p>Have trouble logging in? <span>Get help</span> </p>

    </Card>
    </div>
  )
}

export default Login