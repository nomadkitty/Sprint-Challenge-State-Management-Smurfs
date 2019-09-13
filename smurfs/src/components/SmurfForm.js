import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../store/actions'

const SmurfForm = props => {
  const { addSmurf, smurfs, isPosting, error } = props;
  const [smurf, setSmurf] = useState({name:'', age:'', height:''});

  const handleChange = event => {
    // console.log('change', event.target.value)
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
    // console.log('smurf', smurf)
  };

  const handleSubmit = (event) => {
    console.log('smurf', smurf)
    event.preventDefault();
    addSmurf(smurf);
    console.log('new',smurf)
    setSmurf({name:'', age:'', height:''});
  }

  if(isPosting) {
    return <h1>Adding Smurf...</h1>
  }

  return (
    <form onSubmit={handleSubmit} >
      <h2>Add New Smurf Here</h2>
      <label>Smurf Name</label>
      <input 
        type='text'
        name='name'
        placeholder='Papa Smurf'
        value={smurf.name}
        onChange={handleChange}
      />
      <input 
        type='number'
        name='age'
        placeholder='200'
        value={smurf.age}
        onChange={handleChange}
      />
      <input 
        type='text'
        name='height'
        placeholder='5cm'
        value={smurf.height}
        onChange={handleChange}
      />
      <button type='submit'>Add Smurf</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isPosting: state.isPosting,
    error: state.error   
  }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
