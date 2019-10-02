//Dependencies
import React from 'react';

class ContactsAdmin extends React.Component {
  state = {
    products: [],
    contacts: [],
    selectedContactId: null,
  };
  //Once component mounts fetch product and contact data
  componentDidMount = () => {
    this.fetchAllProducts();
    this.fetchAllContacts();
  }
  //Fetch all product data
  fetchAllProducts = async () => {
    const port = process.env.PORT || 25565;
    const fetchData = await fetch(`http://localhost:${port}/api/products/`);
    const data = await fetchData.json();
    this.setState({ products: data })
  }
  //Fetch all contact data
  fetchAllContacts = async () => {
    const port = process.env.PORT || 25565;
    const fetchData = await fetch(`http://localhost:${port}/api/contacts/`);
    const data = await fetchData.json();
    this.setState({ contacts: data })
  }

  render() {
    const deleteContactHandler = async () => {
      const requestBody = {
        contact_id: this.state.selectedContactId
      }
      const port = process.env.PORT || 25565
      const data = await fetch(`http://localhost:${port}/api/deletecontact`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify(requestBody)
      })
      const response = await data.json()
      console.log(response)
      this.setState({ deleteContactResponse: response.message, selectedContactId: null })
      this.fetchAllContacts()
    }
    const contactRowOnClick = (contact_id) => () => {
      this.setState({ selectedContactId: contact_id })
    }
    //Map over products array for displaying on the products table
    const productsMap = this.state.products.map(product => (
      <tr>
        <td className='adminProductsTableProduct'>{product.product_id}</td>
        <td className='adminProductsTableProduct'>{product.product_name}</td>
        <td className='adminProductsTableProduct'>{product.product_price}</td>
        <td className='adminProductsTableProduct' id='adminProductsTableType'>{product.product_type}</td>
      </tr>
    ))
    //Map over the contacts array for displaying on the contacts table
    const contactsMap = this.state.contacts.map(contact => {
      if (this.state.selectedContactId === contact.contact_id) {
        return (
          <tr className='contactsRow selectedRow' onClick={contactRowOnClick(contact.contact_id)}>
            <td className='adminContactsTableContact'>{contact.contact_id}</td>
            <td className='adminContactsTableContact'>{contact.contact_name}</td>
            <td className='adminContactsTableContact'>{contact.contact_email}</td>
            <td className='adminContactsTableContact'>{contact.subject}</td>
            <td className='adminContactsTableContact' id='adminContactsTableMessage'>{contact.message}</td>
          </tr>
        )
      }
      return (
        <tr className='contactsRow' onClick={contactRowOnClick(contact.contact_id)}>
          <td className='adminContactsTableContact'>{contact.contact_id}</td>
          <td className='adminContactsTableContact'>{contact.contact_name}</td>
          <td className='adminContactsTableContact'>{contact.contact_email}</td>
          <td className='adminContactsTableContact'>{contact.subject}</td>
          <td className='adminContactsTableContact' id='adminContactsTableMessage'>{contact.message}</td>
        </tr>
      )
    });
    return (
      <div className='container container-bg adminContainer'>
        <div className='adminProductDiv'>
          {/* Products table card */}
          <h2>Products</h2>
          <div className='card adminProductsCard'>
            <table className='productTable'>
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
          {/* Contacts table card */}
          <h2>Contacts</h2>
          <div className='card adminContactsCard'>
            <table className='contactsTable'>
              <thead>
                <tr>
                  <td className='adminContactsTableHead'>Contact ID</td>
                  <td className='adminContactsTableHead'>Name</td>
                  <td className='adminContactsTableHead'>Email</td>
                  <td className='adminContactsTableHead'>Subject</td>
                  <td className='adminContactsTableHead' id='adminContactsTableMessage'>Message</td>
                </tr>
              </thead>
              <tbody>
                {contactsMap}
              </tbody>
            </table>
            <button className='deleteContactBtn' onClick={deleteContactHandler}>Delete Contact</button>
            <p className='serverResponseMessage'>{this.state.deleteContactResponse}</p>
          </div>
        </div>

      </div>

    )
  }
}

//Export ContactsAdmin
export default ContactsAdmin;