import React from 'react';
import { ListGroup, Form} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { BootItem } from '../styled/Rates';

const Rates = () => {
  
  const [searchField, setSearchField] = React.useState('');
  const rates = useSelector(state => state.myFirstReducer.rates);
  const ratesEntries = [...Object.entries(rates.eur)];

  const handleChange = event => {
    setSearchField(event.target.value);
  };  

  return (
    <div>
      <Form.Control size="lg" type="search" placeholder="Search" onChange={handleChange}/>
      <br />
      <ListGroup>
        {ratesEntries
          .filter((item) => item[0].includes(searchField.toLowerCase()))
          .map((item) => 
            <BootItem key={item}>
              EUR to {item[0]} {item[1].toFixed(2)}
            </BootItem>
          )
        }
      </ListGroup>
    </div>
  );
}

export default Rates;
