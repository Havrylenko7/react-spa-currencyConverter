import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCurrencyFetch } from './redux/ducks/currency';
import { Navigation, Converter, Rates } from './components';
import { Grid, Loader } from './styled/App';
import { useTypedSelector } from './redux/store';

const App: React.FC = () => {
  const rates: {date: number, eur: []} = useTypedSelector(state => state.currencyReducer.rates);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCurrencyFetch());
  }, []);
  
  if (Object.keys(rates)[0] !== 'date') {
    return <Loader>Loading...</Loader>
  } else {
    return (
      <Grid>
        <Navigation />
        <Routes>  
          <Route path="/rates" element={<Rates />}/>
          <Route path="/converter" element={<Converter />}/>
        </Routes> 
      </Grid>
    )
  };
};

export default App;
