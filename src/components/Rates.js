import React from 'react';
import { ListGroup, Form} from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { BootItem } from '../styled/Rates';

const Rates = () => {
  
  const [searchField, setSearchField] = React.useState('');
  const rates = useSelector(state => state.myFirstReducer.rates);
  const ratesEntries = [...Object.entries(rates.eur)];

  const [prefered, setPrefered] = React.useState([]);
  const [base, setBase] = React.useState(['eur', 1])

  const handleChange = event => {
    setSearchField(event.target.value);
  };  

  return (
    <div>
      <ListGroup>
        {prefered
          .map((item) =>
            <BootItem
              key={item}
            >
              {base[0]} to {item[0]} {(item[1]/base[1]).toFixed(2)}
            </BootItem>
          )
        }
        <br />
        <Form.Control size="lg" type="search" placeholder="Search" onChange={handleChange}/>
        <br />
        <ListGroup.Item as="select" value={base} onChange={event => setBase(event.target.value.split(',', 3))}>
          {ratesEntries
            .map((item) => 
              <BootItem
                as="option"
                key={item}
                value={item}         
              >
                {item[0]}
              </BootItem>
            )
          }
        </ListGroup.Item>
        <br />
          {ratesEntries
            .filter((item) => item[0].includes(searchField.toLowerCase()))
            .map((item) => 
              <BootItem
                key={item}
                onClick={() => setPrefered([...prefered, item])}
              >
                {base[0]} to {item[0]} {(item[1]/base[1]).toFixed(2)}
              </BootItem>
            )
          }
      </ListGroup>
    </div>
  );
}

export default Rates;
