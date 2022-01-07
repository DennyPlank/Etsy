import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import { Icon, Label, Menu, Table, Dropdown } from 'semantic-ui-react'


const Products = () => {
  const [seller, setSeller] = useState("none selected");
  const [toggle, setToggle] = useState(null)

  
  useEffect(()=>{
    getProducts();
  }, [])

  const [products, setProducts] = useState([])
  
  const getProducts = async () => {
    let res = await axios.get("/api/products")
    setProducts(res.data)
  };

  const renderAllProducts = () => {
    let count = 0
   return products.map((product)=>{
      count +=  1
      return (
        <Table.Row>
          <Table.Cell>{product.product_name}</Table.Cell>
          <Table.Cell>{product.description}</Table.Cell>
          <Table.Cell>{`$${product.price}`}</Table.Cell>
          <Table.Cell>{product.seller_name}</Table.Cell>
        </Table.Row>
      )
    });
  };
  const renderSellerProducts = () => {
    let sellersProds = products.filter(p => p.seller_name == seller)
    let count = 0
    return sellersProds.map((product)=>{
      count += 1
      return (
        <Table.Row>
          <Table.Cell>{product.product_name}</Table.Cell>
          <Table.Cell>{product.description}</Table.Cell>
          <Table.Cell>{`$${product.price}`}</Table.Cell>
          <Table.Cell>{product.seller_name}</Table.Cell>
        </Table.Row>
      )
    });
  };

  const handleSellerSelction= (e, data) => {
    e.preventDefault();
    setSeller(data.value)
    setToggle(null)
    }

  const friendOptions = () => {
      let people = []
         products.map((p)=>{
         people.push(p.seller_name)
    }) 
      let uniquePeeps = [...new Set(people)]
      let normal =[]
      let count = 0
      uniquePeeps.map((p)=>{
        count += 1
        normal.push(
          {
            key: p,
            text: `${count}) ${p}`,
            value: p
          });
        });
        return normal
  };
  
  const dropdown = () => (
    <Dropdown
      placeholder='Select Seller'
      fluid
      selection
      options={friendOptions()}
      onChange={handleSellerSelction}
    />
  );

  const toggler = () => {
    setToggle(!toggle);
    setSeller('None')
  }

  return (
   <div>
      <div>
        <h2> {`Current Seller: ${seller} `}</h2>
          <h1>Select a Seller Below or View All Products</h1>
          {dropdown()}
          <hr />
          <button onClick={toggler}>{toggle ? 'Back' : 'View All'}</button>  
      </div>
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Seller</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
    {seller ? renderSellerProducts() : ''}
    {toggle ? renderAllProducts() : ''}
      </Table.Body>

          <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
   </div>
  )
};

export default Products;


// import React from "react";
// import { Icon, Label, Menu, Table } from "semantic-ui-react";

// const Products = () => (
//   <Table celled>
//     <Table.Header>
//       <Table.Row>
//         <Table.HeaderCell>Header</Table.HeaderCell>
//         <Table.HeaderCell>Header</Table.HeaderCell>
//         <Table.HeaderCell>Header</Table.HeaderCell>
//         <Table.HeaderCell>Header</Table.HeaderCell>
//       </Table.Row>
//     </Table.Header>

//     <Table.Body>
//       <Table.Row>
//         <Table.Cell>
//           <Label ribbon>First</Label>
//         </Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//       </Table.Row>
//     </Table.Body>

//     <Table.Footer>
//       <Table.Row>
//         <Table.HeaderCell colSpan="4">
//           <Menu floated="right" pagination>
//             <Menu.Item as="a" icon>
//               <Icon name="chevron left" />
//             </Menu.Item>
//             <Menu.Item as="a">1</Menu.Item>
//             <Menu.Item as="a">2</Menu.Item>
//             <Menu.Item as="a">3</Menu.Item>
//             <Menu.Item as="a">4</Menu.Item>
//             <Menu.Item as="a" icon>
//               <Icon name="chevron right" />
//             </Menu.Item>
//           </Menu>
//         </Table.HeaderCell>
//       </Table.Row>
//     </Table.Footer>
//   </Table>
// );

// export default Products;