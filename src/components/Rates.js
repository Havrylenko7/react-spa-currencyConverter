import React from 'react';
import { ListGroup, Form} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Rates = () => {
  
  const [searchField, setSearchField] = React.useState("");
  const rates = useSelector(state => state.myFirstReducer.rates);

  const handleChange = e => {
    setSearchField(e.target.value);
  };  

  return (
    <div>
      <Form.Control size="lg" type="search" placeholder="Search" onChange = {handleChange}/>
      <br />
      <ListGroup>
        {[...Object.keys(rates.eur)]
          .filter((item) => {
            if (searchField === "") {
              return item
            } else if (item.includes(searchField.toLowerCase())){
              return item
            }
          })
          .map(item => (<ListGroup.Item key={item} style={{textTransform: "uppercase"}}>EUR / {item}</ListGroup.Item>))
        }
      </ListGroup>
    </div>
  );
}

export default Rates;