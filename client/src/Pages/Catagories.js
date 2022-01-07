import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import { Icon, Label, Menu, Table, Dropdown } from 'semantic-ui-react'


const Categories = () => {
  const [category, setCategory] = useState("none selected");
  const [toggle, setToggle] = useState(null)

  
  useEffect(()=>{
    getProducts();
  }, [])

  const [products, setProducts] = useState([])
  
  const getProducts = async () => {
    let res = await axios.get("/api/categories")
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
          <Table.Cell>{product.category}</Table.Cell>
        </Table.Row>
      )
    });
  };
  const renderCategoryProducts = () => {
    console.log(category)
    let sellersProds = products.filter(p => p.category == category)
    let count = 0
    return sellersProds.map((product)=>{
      count += 1
      return (
          <Table.Row >
            <Table.Cell>{product.product_name}</Table.Cell>
            <Table.Cell>{product.description}</Table.Cell>
            <Table.Cell>{`$${product.price}`}</Table.Cell>
            <Table.Cell>{product.category}</Table.Cell>
          </Table.Row>
      )
    });
  };

  const handleCategorySelection= (e, data) => {
    e.preventDefault();
    setCategory(data.value)
    setToggle(null)
    }

  // This normalizes the array for the dropdown menu;
  const categoryOptions = () => {
      let categoryArray = []
         products.map((product)=>{
          categoryArray.push(product.category)
    }) 

      let uniqueCats = [...new Set(categoryArray)]
      let normal =[]
      uniqueCats.map((c)=>{
        normal.push(
          {
            key: c,
            text: c,
            value: c
          })
        })
        return normal
  };
  
  const dropdown = () => (
    <Dropdown
      placeholder='Select Category'
      fluid
      selection
      options={categoryOptions()}
      onChange={handleCategorySelection}
    />
  );

  const toggler = () => {
    setToggle(!toggle);
    setCategory('None')
  }

  return (
   <div>
     <h2> {`Current Category: ${category} `}</h2>
      <h1>Select a Category Below or View All Products</h1>
      {dropdown()}
      <hr />

      <button onClick={toggler}>View All Available Products</button>
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Product Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Catagory</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
    {category ? renderCategoryProducts() : ''}
    {toggle ? renderAllProducts() : ''}
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

export default Categories;