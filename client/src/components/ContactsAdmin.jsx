import React from 'react';

class ContactsAdmin extends React.Component {
  state = {
    products: [],
    contacts: []
  };
  componentDidMount = () => {
    this.fetchAllProducts();
    this.fetchAllContacts();
  }
  fetchAllProducts = async () => {
    const port = process.env.PORT || 25565;
    // Fetch all products
    const fetchData = await fetch(`http://localhost:${port}/api/products/`);
    const data = await fetchData.json();
    this.setState({ products: data })
  }

  fetchAllContacts = async () => {
    const port = process.env.PORT || 25565;
    // Fetch all contacts
    const fetchData = await fetch(`http://localhost:${port}/api/contacts/`);
    const data = await fetchData.json();
    this.setState({ contacts: data })
  }

  render() {
    const productsMap = this.state.products.map(product => (
      <tr>
        <td className='adminProductsTableProduct'>{product.product_id}</td>
        <td className='adminProductsTableProduct'>{product.product_name}</td>
        <td className='adminProductsTableProduct'>{product.product_price}</td>
        <td className='adminProductsTableProduct' id='adminProductsTableType'>{product.product_type}</td>
      </tr>
    ))
    return (
      <div className='container container-bg adminContainer'>
        <div className='adminProductDiv'>
        <h2>Products</h2>
          <div className='card adminProductsCard'>
            <table>
              <thead>
                <tr>
                <td className='adminProductsTableHead'>Product ID</td>
                <td className='adminProductsTableHead'>Product Name</td>
                <td className='adminProductsTableHead'>Product Price</td>
                <td className='adminProductsTableHead' id='adminProductsTableType'>Product Type</td>
                </tr>
                {productsMap}
              </thead>
              
            </table>
          </div>
        </div>
        <div className='adminContactsDiv'>
          <h2>Contacts</h2>
          <div className='card adminContactsCard' />
        </div>

      </div>

    )
  }
}

export default ContactsAdmin;