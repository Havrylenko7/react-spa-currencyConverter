import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { BootItem, BootControl, BootCard, BootButton } from '../styled/Rates';

const Rates = () => {  
  const [searchField, setSearchField] = React.useState('');
  const [prefered, setPrefered] = React.useState([]);
  const [base, setBase] = React.useState(['eur', 1]);

  const rates = useSelector(state => state.currencyReducer.rates);
  const ratesEntries = [...Object.entries(rates.eur)];

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };  

  return (
    <BootCard>
      <ListGroup>
        {prefered
          .map((item) => (
            <BootItem key={item}>
              {base[0]} to {item[0]} {(item[1]/base[1]).toFixed(2)}
            </BootItem>
          ))
        }
        <BootControl size="lg" type="search" placeholder="Search" onChange={handleChange}/>
        <BootItem as="select" value={base} onChange={event => setBase(event.target.value.split(',', 3))}>
          {ratesEntries
            .map((item) => (
              <BootItem as="option" key={item} value={item}>
                {item[0]}
              </BootItem>
            ))
          }
        </BootItem>
          {ratesEntries
            .filter((item) => (item[0].includes(searchField.toLowerCase())))
            .map((item) => (
              <BootItem key={item}>
                {base[0]} to {item[0]} {(item[1]/base[1]).toFixed(2)}
                <BootButton type="radio" onClick={() => setPrefered([...prefered, item])}>
                </BootButton>
              </BootItem>
            ))
          }
      </ListGroup>
    </BootCard>
  );
}

export default Rates;
