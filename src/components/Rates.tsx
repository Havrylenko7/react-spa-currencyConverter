import React from 'react';

import { BootItem, BootControl, BootCard, BootButton, BootListGroup, BootSelect } from '../styled/Rates';
import { useTypedSelector } from '../redux/store';

const Rates: React.FC = () => {
  const rates: {date: number, eur: []} = useTypedSelector(state => state.currencyReducer.rates);

  const [searchField, setSearchField] = React.useState<string>('');
  const [preferred, setPreferred] = React.useState<[string, number] | undefined[]>([]);
  const [base, setBase] = React.useState<[string, number] | any[]>(['eur', 1]);

  const ratesEntries: [string, number][] = [...Object.entries(rates.eur)];

  const removeUselessAPI = (): void => {
    ratesEntries.splice(168, 2);
    ratesEntries.splice(163, 1);
    ratesEntries.splice(95, 1);
    ratesEntries.splice(38, 1);
    ratesEntries.splice(24, 1);
    ratesEntries.splice(18, 2);
    ratesEntries.splice(13, 1);
  };

  removeUselessAPI();

  const basePicker = (event: React.FormEvent<HTMLInputElement>): void => {
    setBase(event.currentTarget.value.split(',', 3));
  };

  const search = (event: React.FormEvent<HTMLInputElement>): void => {
    setSearchField(event.currentTarget.value);
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
          .filter((item: [string, number]) => (item[0].includes(searchField.toLowerCase())))
          .map((item: any) => (
            <BootItem key={item}>
              {base[0]} to {item[0]} {(item[1]/base[1]).toFixed(2)}
              <BootButton type="radio" onClick={() => setPreferred([...preferred, item])}/>
            </BootItem>
          ))
        }
      </BootListGroup>
    </BootCard>
  );
};

export default Rates;
