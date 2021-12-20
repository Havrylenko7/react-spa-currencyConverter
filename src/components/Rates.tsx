import React from 'react';

import { BootItem, BootControl, BootCard, BootButton, BootListGroup, BootSelect } from '../styled/Rates';
import { useTypedSelector } from '../redux/store';

const Rates: React.FC = () => {
  const [searchField, setSearchField]: any = React.useState('');
  const [preferred, setPreferred]: any = React.useState([]);
  const [base, setBase]: any = React.useState(['eur', 1]);

  const rates: any = useTypedSelector(state => state.currencyReducer.rates);
  const ratesEntries: any = [...Object.entries(rates.eur)];

  ratesEntries.splice(18, 1);
  ratesEntries.splice(37, 1);

  const basePicker = (event: React.FormEvent<HTMLInputElement>) => {
    setBase(event.currentTarget.value.split(',', 3))
  }

  const search = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchField(event.currentTarget.value)
  };

  return (
    <BootCard>
      {preferred
        .map((item: any) => (
          <BootItem key={item}>
            {base[0]} to {item[0]} {(item[1]/base[1]).toFixed(2)}
          </BootItem>
        ))
      }
      <BootSelect value={base} onChange={basePicker}>
        {ratesEntries
          .map((item: any) => (
            <BootItem as="option" key={item} value={item}>
              {item[0]}
            </BootItem>
          ))
        }
      </BootSelect>
      <BootControl size="lg" type="search" placeholder="Search" onChange={search}/>
      <BootListGroup>
        {ratesEntries
          .filter((item: any) => (item[0].includes(searchField.toLowerCase())))
          .map((item: any) => (
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
