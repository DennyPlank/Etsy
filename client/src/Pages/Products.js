import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import { Icon, Label, Menu, Table, Dropdown } from 'semantic-ui-react'


const Products = () => {
  const [seller, setSeller] = useState("none selected");
  useEffect(()=>{
    getProducts();
  }, [])

  const [products, setProducts] = useState([])
  
  const getProducts = async () => {
    let res = await axios.get("/api/products")
    setProducts(res.data)
  };
  const renderProducts = () => {
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

  const selectSeller = (e, data) => {
    e.preventDefault();
    // console.log(data.value)
      setSeller(data.value)
    }

  // This normalizes the array for the dropdown menu;
  const friendOptions = () => {
      let people = []
         products.map((p)=>{
         people.push(p.seller_name)
    }) 
      let uniquePeeps = [...new Set(people)]
      let normal =[]
      // console.log(uniquePeeps)
      uniquePeeps.map((p)=>{
        normal.push(
          {
            key: p,
            text: p,
            value: p
          })
        })
        return normal
  };
  
  const dropdown = () => (
    <Dropdown
      placeholder='Select Seller'
      fluid
      selection
      options={friendOptions()}
      onChange={selectSeller}
    />
  )

  return (
   <div>
     <h2> {`Current Seller: ${seller} `}</h2>
      <h1>Select a Seller Below </h1>
      {dropdown()}
      <h2> View All: </h2>
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
    {renderProducts()}
      </Table.Body>

        {/* <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
                <Menu.Item as='a'>4</Menu.Item>
                <Menu.Item as='a' icon>
                  <Icon name='chevron right' />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer> */}
      </Table>
   </div>
  )
};

export default Products;