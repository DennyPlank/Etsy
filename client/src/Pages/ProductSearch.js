import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown, Menu, Table } from 'semantic-ui-react'

const ProductSearch = () => {
  const [products, setProducts] =useState([])
  const [dd1, setDd1] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(()=>{
  getProducts();
}, []);

useEffect(()=>{
 populateDropdown1();
  // populateDropdown2();
},[products]);

const getProducts = async() => {
  let res = await axios.get('/api/productSearch')
  setProducts(res.data)
  console.log('axios done')
}

const populateDropdown1 = () => {
  console.log(products.length)
  let newArr = []
  products.map((p)=>{
    newArr.push(p.category)
  })
  let uniqueCats = [...new Set(newArr)]
  let normalized = []
  let aKey = 0
  uniqueCats.map((c)=>{
    aKey += 1
    normalized.push({key: aKey, text: c, value: aKey})
  })
  setDd1(normalized)
  {uniqueCats.length > 0 && setLoading(false)}
}

const Catagories1 = dd1
const dropdown1 = () => (
  <Menu compact>
    <Dropdown text='Categories'
     options={Catagories1}
     simple
     item />
  </Menu>
)

const Catagories2 = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const dropdown2 = () => (
  <Menu compact>
    <Dropdown text='Category'
     options={Catagories2}
      simple 
      item />
  </Menu>
)

  return (
    <div> 
      <h1>{loading ? "Loading" : "Done Loading"}</h1>
      <p> 2 drop downs, and custom sql back </p>
      {dropdown1()}
      {dropdown2()}
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
    {/* {seller ? renderSellerProducts() : ''}
    {toggle ? renderAllProducts() : ''} */}
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

export default ProductSearch;