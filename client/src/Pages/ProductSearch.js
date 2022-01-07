import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown, Menu, Table } from 'semantic-ui-react'

const ProductSearch = () => {
  const [products, setProducts] =useState([])

useEffect(()=>{
  getProducts();
}, [])

const getProducts = async() => {
  let res = await axios.get('/api/products')
  setProducts(res.data)
}

const Catagories1 = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const dropdown1 = () => (
  <Menu compact>
    <Dropdown text='Buyer' options={Catagories1} simple item />
  </Menu>
)

const Catagories2 = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const dropdown2 = () => (
  <Menu compact>
    <Dropdown text='Category' options={Catagories2} simple item />
  </Menu>
)

  return (
    <div> 
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