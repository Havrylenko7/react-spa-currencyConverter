import React from 'react'; 
import { Formik, Field } from 'formik';

import { BootCard, CoverOption, BootField, BootForm, BootBody } from '../styled/Converter';
import { useTypedSelector } from '../redux/store';

const Converter: React.FC = () => {
  const rates: {date: number, eur: []} = useTypedSelector(state => state.currencyReducer.rates);

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
  
  return (
    <BootCard>
      <Formik
        initialValues={{ entries: ratesEntries, firstSelected: 0, secondSelected: 0, amount: 0}}
        onSubmit={() => {}}
        render={({ values }) => (
          <div>
            <Field as={BootField} name="firstSelected">
              <CoverOption>Pick currency</CoverOption>
              {values.entries.map((item: [string, number]) => (
                <option key={item[0]} value={`${item[1]}`}>
                  {item[0]}
                </option>
              ))}
            </Field>
            <Field as={BootField} name="secondSelected">
              <CoverOption>Convert into</CoverOption>
              {values.entries.map((item: [string, number]) => (
                <option key={item[0]} value={`${item[1]}`}>
                  {item[0]}
                </option>
              ))}        
            </Field>
            <Field as={BootForm} type="number" name="amount" min="1"/>
              {(values.firstSelected && values.secondSelected && values.amount) > 0 && (
                <BootBody>{(values.secondSelected/values.firstSelected*values.amount).toFixed(2)}</BootBody>
              )}
          </div>
        )}
      />
    </BootCard>
  );
};

export default Converter;
