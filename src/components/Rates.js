import React from 'react';
import { useSelector } from 'react-redux';

import { BootItem, BootControl, BootCard, BootButton, BootListGroup, BootSelect } from '../styled/Rates';

const Rates = () => {  
  const [searchField, setSearchField] = React.useState('');
  const [preferred, setPreferred] = React.useState([]);
  const [base, setBase] = React.useState(['eur', 1]);

  const rates = useSelector(state => state.currencyReducer.rates);
  const ratesEntries = [...Object.entries(rates.eur)];

  ratesEntries.splice(18, 1);
  ratesEntries.splice(37, 1);

  const handleChange = (event) => {
    setSearchField(event.target.value)
  };  

  return (
    <BootCard>
      {preferred
        .map((item) => (
          <BootItem key={item}>
            {base[0]} to {item[0]} {(item[1]/base[1]).toFixed(2)}
          </BootItem>
        ))
      }
      <BootSelect value={base} onChange={event => setBase(event.target.value.split(',', 3))}>
        {ratesEntries
          .map((item) => (
            <BootItem as="option" key={item} value={item}>
              {item[0]}
            </BootItem>
          ))
        }
      </BootSelect>
      <BootControl size="lg" type="search" placeholder="Search" onChange={handleChange}/>
      <BootListGroup>
        {ratesEntries
          .filter((item) => (item[0].includes(searchField.toLowerCase())))
          .map((item) => (
            <BootItem key={item}>
              {base[0]} to {item[0]} {(item[1]/base[1]).toFixed(2)}
              <BootButton type="radio" onClick={() => setPreferred([...preferred, item])}>
              </BootButton>
            </BootItem>
          ))
        }
      </BootListGroup>
    </BootCard>
  );
};

export default Rates;
