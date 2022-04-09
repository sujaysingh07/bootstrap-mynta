
import { Button, Card} from "react-bootstrap";
const cardStyle = {
  margin: "10px 5px 15px 5px ",
};

const Carddesign = (props) => { 
  let addToCart =(item)=>{
  //  console.log(JSON.stringify(item))
  alert('item added')
  }
  return (
    <div className="row"
            style={{
              display: "inline-block",
              width: "250px",
              margin: "10px",
            }}
          >
            <Card style={{ height: "300px", cursor: "pointer" }}>
              <div
                className="img"
                style={{
                  display: "flex",
                  margin: "10px auto",
                  width: "100px",
                  height: "150px",
                  justifyContent: "center",
                }}
              >
                <img src={props.elem.image} alt="" width="100px" loading='lazy' />
              </div>
              <div
                className="desc"
                style={{
                  overflow: "hidden",
                  width:"100%",
                  wordWrap: "break-word",
                  textOverflow:"ellipsis",
                  padding: "5px",
                  whiteSpace: "nowrap",
                  textAlign:'center'
                }}
              >
               {props.elem.title}
               <div className="price">

               <span>${props.elem.price}</span>
               </div>
              <div style={{width:"100%",height:"50px"}}>
                <Button onClick={()=>addToCart(props.item)} style={cardStyle}>Add To cart</Button>
              </div>
              </div>
            </Card>
            <br />
          </div>
  )
}

export default Carddesign