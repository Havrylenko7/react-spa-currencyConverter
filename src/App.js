import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrencyFetch } from './redux/ducks/currency';
import { Navigation, Converter, Rates } from './components';
import Grid from './styled/App';

const App = () => {  
  const dispatch = useDispatch();
  const rates = useSelector(state => state.currencyReducer.rates);

  React.useEffect(() => {
    dispatch(getCurrencyFetch())
  }, [])

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
      </Grid>
    );
  }
}

export default App;
