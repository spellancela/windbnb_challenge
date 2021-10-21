/* eslint-disable no-unused-vars */
import { Component } from 'react';
import './App.css';
import ApartmentList from './components/ApartmentList';
import MainHeader from './components/Mainheader';
import NoList from './components/NoList';
import Layout from './components/Layout';


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      DUMMY_DATA :[
        {image: 'https://www.heartmilanapartments.com/wp-content/uploads/affitti-brevi-lusso-milano-scaled.jpg', 
        description:'Blueground Minimalist Apartment' ,
        rating:5,
        type: 'Studio',
        host: 'Super host',
        location: 'Mandaluyong City',
        guest: 5
        },
      
        {image: 'https://www.heartmilanapartments.com/wp-content/uploads/affitti-brevi-lusso-milano-scaled.jpg', 
        description:'Gray Themed Fully furnished Apartment' ,
        rating: 4.8,
        type: 'Converted Flex',
        host: 'Super Host',
        location: 'BGC',
        guest: 6
        },
      
        {image: 'https://www.heartmilanapartments.com/wp-content/uploads/affitti-brevi-lusso-milano-scaled.jpg', 
        description:'Gray Themed Fully furnished Apartment' ,
        rating: 3.8,
        type: 'Converted Flex',
        host: '',
        location: 'Makati City',
        guest: 6
        },
        {image: 'https://www.heartmilanapartments.com/wp-content/uploads/affitti-brevi-lusso-milano-scaled.jpg', 
        description:'Blueground Minimalist Apartment' ,
        rating: 4.40,
        type: 'Studio',
        host: '',
        location: 'Cebu City',
        guest: 5
        },
      
        {image: 'https://www.heartmilanapartments.com/wp-content/uploads/affitti-brevi-lusso-milano-scaled.jpg', 
        description:'Gray Themed Fully furnished Apartment' ,
        rating: 5,
        type: 'Converted Flex',
        host: 'Super Host',
        location: 'Quezon City',
        guest: 2
        },
      
        {image: 'https://www.heartmilanapartments.com/wp-content/uploads/affitti-brevi-lusso-milano-scaled.jpg', 
        description:'Gray Themed Fully furnished Apartment' ,
        rating: 4.6,
        type: 'Converted Flex',
        host: '',
        location: 'Siargao',
        guest: 6
        }  
      ], 
      searchText: '',
      filteredItem:[]
    }
  }
    searchTextHandler =(e)=>{
      this.setState({searchText: e.target.value});
    
  }



  render() {
  
     
        let filteredText = this.state.DUMMY_DATA.filter((data)=>{
        const filterData = this.state.searchText.toLowerCase();

        return   data.location.toString().toLowerCase().indexOf(filterData) >=0 ||
        data.guest.toString().toLowerCase().indexOf(filterData) >=0;  

      });
   
      if(this.state.searchText.length === 0 ){
            this.filteredItem ='[]'
            console.log('help');
      
      } else {
       this.filteredItem =JSON.stringify(filteredText);
      }
  
      let count = Object.keys(filteredText).length;
      

      return( 
        <div>  
          <Layout>   
           <MainHeader searchTextHandler={this.searchTextHandler} setLocation={this.filteredItem}/> 
            { count > 0 ?
            <ApartmentList data={filteredText}/> : <NoList/> }
          </Layout>
        </div>
    
      )
   }
}
export default App;
