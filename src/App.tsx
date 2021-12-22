import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getCurrencyFetch } from './redux/ducks/currency';
import { Navigation, Converter, Rates } from './components';
import Grid from './styled/App';
import { useTypedSelector } from './redux/store';

const App: React.FC = () => {
  const rates: {date: number, eur: []} = useTypedSelector(state => state.currencyReducer.rates);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCurrencyFetch())
  }, []);
  
  if (rates === undefined) {
    return <div className="loading">Loading...</div>
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