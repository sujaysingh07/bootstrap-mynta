import { useEffect } from "react"

const Products = () => {
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

  })
  return (
    <div className='product' style={{display:"flex"}}>
            Products
    </div>
  )
}

export default Products