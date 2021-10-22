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
        {image: 'https://th.bing.com/th/id/OIP.PoXsHJWD_8NASQOvoYA2IgHaE8?pid=ImgDet&rs=1', 
        description:'Blueground Minimalist Apartment' ,
        rating:5,
        type: 'Studio',
        host: 'Super host',
        location: 'Mandaluyong City',
        guest: 5
        },
      
        {image: 'https://th.bing.com/th/id/OIP.qgNnQXlSVFUCfuwTz75SxAHaE8?pid=ImgDet&rs=1', 
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
        {image: 'https://th.bing.com/th/id/OIP.fuzkizYWO14tR5YxIcsfmQHaE7?pid=ImgDet&w=1200&h=799&rs=1', 
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
      
        {image: 'https://s3-us-west-2.amazonaws.com/avenuehq-listings/fvrebgv/000/262/442/661db988c1b11e6c4203faaab4ebb90e49fbbec4.jpg?lastModified=2019-11-21T17:53:29Z&fit=clip&w=1200&h=440', 
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
