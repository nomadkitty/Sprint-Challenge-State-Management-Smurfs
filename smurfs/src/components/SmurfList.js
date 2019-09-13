import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SmurfCard from './SmurfCard';

import { getSmurf } from '../store/actions'

const SmurfList = props => {
  const { getSmurf, smurfs, isFetching, error } = props;

  useEffect(()=> {
    getSmurf()
  },[getSmurf])

  if(isFetching) {
    return <h1>Smurfs are coming</h1>
  }

  return (
    <div>
      {smurfs.map(item => 
        <SmurfCard 
          key={item.id}
          item={item}
        />  
      )}
    </div>
  )
}

const mapStateToProps = state => {
  console.log('initial', state)
  return {
    smurfs: state.smurfs,
    isFetching: state.ifFetching,
    error: state.error    
  }
}

export default connect(mapStateToProps, { getSmurf })(SmurfList)