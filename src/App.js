import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import ItemList from './components/ItemList';

function App() {

  const [incidents, setIncidents] = useState(
    [
      {
        "id": 123061,
        "title": "Stolen 2011 Carrera bicycles Hardtail(black)",
        "description": "Cable cut, lock in bin",
        "address": "Epsom, KT19 8EU, GB",
        "occurred_at": 1596207600,
        "updated_at": 1596294038,
        "url": "https://bikewise.org/api/v1/incidents/123061",
        "source": {
          "name": "BikeIndex.org",
          "html_url": "https://bikeindex.org/bikes/828370",
          "api_url": "https://bikeindex.org/api/v1/bikes/828370"
        },
        "media": {
          "image_url": null,
          "image_url_thumb": null
        },
        "location_type": null,
        "location_description": null,
        "type": "Theft",
        "type_properties": null
      },
      {
        "id": 123096,
        "title": "Stolen 2014 Norco Bikes Sight 2(black)",
        "description": "",
        "address": "London, Se10, GB",
        "occurred_at": 1596132000,
        "updated_at": 1596294040,
        "url": "https://bikewise.org/api/v1/incidents/123096",
        "source": {
          "name": "BikeIndex.org",
          "html_url": "https://bikeindex.org/bikes/827857",
          "api_url": "https://bikeindex.org/api/v1/bikes/827857"
        },
        "media": {
          "image_url": "https://files.bikeindex.org/uploads/Pu/298534/large_138B636E-4D4B-4A5C-9A6A-605CFAB8ADEC.jpeg",
          "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/298534/small_138B636E-4D4B-4A5C-9A6A-605CFAB8ADEC.jpeg"
        },
        "location_type": null,
        "location_description": null,
        "type": "Theft",
        "type_properties": null
      },
      {
        "id": 123072,
        "title": "Stolen 2017 Benno Boost E 10D(black)",
        "description": "Bike was locked to bike rail and left cut up on the ground. Might be CCTV available. No other witnesses that I know of. \r\n",
        "address": "London, E17 9NJ, GB",
        "occurred_at": 1595970000,
        "updated_at": 1596294047,
        "url": "https://bikewise.org/api/v1/incidents/123072",
        "source": {
          "name": "BikeIndex.org",
          "html_url": "https://bikeindex.org/bikes/828049",
          "api_url": "https://bikeindex.org/api/v1/bikes/828049"
        },
        "media": {
          "image_url": "https://files.bikeindex.org/uploads/Pu/299482/large_bennobikr.jpg",
          "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/299482/small_bennobikr.jpg"
        },
        "location_type": null,
        "location_description": null,
        "type": "Theft",
        "type_properties": null
      },
      {
        "id": 122777,
        "title": "Stolen 2020 Tokyobike Sport TL96(black)",
        "description": "",
        "address": "London, N1 7LR, GB",
        "occurred_at": 1595876400,
        "updated_at": 1596294053,
        "url": "https://bikewise.org/api/v1/incidents/122777",
        "source": {
          "name": "BikeIndex.org",
          "html_url": "https://bikeindex.org/bikes/798164",
          "api_url": "https://bikeindex.org/api/v1/bikes/798164"
        },
        "media": {
          "image_url": "https://files.bikeindex.org/uploads/Pu/296430/large_image.png",
          "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/296430/small_image.png"
        },
        "location_type": null,
        "location_description": null,
        "type": "Theft",
        "type_properties": null
      },
      {
        "id": 122579,
        "title": "Stolen 2018 Canyon bicycles Endurace CF SL 8.0(green)",
        "description": null,
        "address": "London, SE22 9JH, GB",
        "occurred_at": 1595705794,
        "updated_at": 1596294063,
        "url": "https://bikewise.org/api/v1/incidents/122579",
        "source": {
          "name": "BikeIndex.org",
          "html_url": "https://bikeindex.org/bikes/796881",
          "api_url": "https://bikeindex.org/api/v1/bikes/796881"
        },
        "media": {
          "image_url": "https://files.bikeindex.org/uploads/Pu/294066/large_Screenshot_20200725-202831_Photos.jpg",
          "image_url_thumb": "https://files.bikeindex.org/uploads/Pu/294066/small_Screenshot_20200725-202831_Photos.jpg"
        },
        "location_type": null,
        "location_description": null,
        "type": "Theft",
        "type_properties": null
      }]
  );
  const [location, setLocation] = useState('');

  console.log(incidents);

  return (
    <>
      <Header />
      <Search location={location} setLocation={setLocation} setIncidents={setIncidents} />
      <ItemList incidents={incidents} location={location} />
    </>
  );
}

export default App;
