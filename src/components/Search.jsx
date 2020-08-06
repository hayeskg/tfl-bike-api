import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
const axios = require('axios').default;

const url = 'https://bikewise.org/api/v2/incidents?proximity='

const Search = ({ location, setLocation, setIncidents }) => {

  const [tempLocation, setTempLocation] = useState('')

  const handleSubmit = () => {
    axios.get(url + location)
      .then(({ data: { incidents } }) => {
        // handle success
        setLocation(tempLocation);
        setIncidents(incidents);
      })
      .catch(err => {
        // handle error
        console.log(err);
      })
  }


  const handleInputChange = ({ target: { value } }) => {
    setTempLocation(value);
  };

  return (
    <div className="search">
      <Typography variant="h5">
        Incidents near me:
      </Typography>
      <br />
      <TextField label="Where?" variant="outlined" onChange={handleInputChange} />
      <br />
      <Button variant='contained' onClick={handleSubmit}>
        Go
      </Button>
    </div>
  );
};

export default Search;