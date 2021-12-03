import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Converter from './components/Converter';
import Rates from './components/Rates';
import Grid from './styled/Grid';

import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyFetch } from './store/actions';


function App() {
  
  const dispatch = useDispatch();
  const rates = useSelector(state => state.myFirstReducer.rates);

  React.useEffect(() => {
    dispatch(getCurrencyFetch())
  }, [])

  // console.log(rates.eur)

  if (rates.eur === undefined) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <Grid>
        <Navigation />
          <Routes>  
              <Route path="/rates" element={<Rates />}/>
              <Route path="/converter" element={<Converter />}/>
          </Routes> 
        {/* <div>{console.log(rates.eur[Object.keys(rates.eur)[0]])}</div> */}
      </Grid>
    );
  }
}

export default App;