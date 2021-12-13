import React from 'react'; 
import { Formik, Field } from 'formik';
import { useSelector } from 'react-redux';

import { BootCard, CoverOption, BootField, BootForm, BootBody} from '../styled/Converter';

const Converter = () => {
  const rates = useSelector(state => state.currencyReducer.rates);
  const ratesEntries = [...Object.entries(rates.eur)];

  return (
    <BootCard>
      <Formik
        initialValues={{ entries: ratesEntries, firstSelected: '', secondSelected: '', amount: '0'}}
        render={({ values }) => (
          <div>
            <Field as={BootField} size="lg" name="firstSelected">
              <CoverOption>Pick currency</CoverOption>
              {values.entries.map((item) => (
                <option key={item} value={`${item[1]}`}>
                  {item[0]}
                </option>
              ))}
            </Field>
            <Field as={BootField}  size="lg" name="secondSelected">
              <CoverOption>Convert into</CoverOption>
              {values.entries.map((item) => (
                <option key={item} value={`${item[1]}`}>
                  {item[0]}
                </option>
              ))}        
            </Field>
            <Field as={BootForm} type="number" name="amount" min="1"></Field>
              {values.firstSelected.length && values.secondSelected.length && values.amount > 0 ? (
              <BootBody>{(values.secondSelected/values.firstSelected*values.amount).toFixed(2)}</BootBody>
              ) : null}
          </div>
        )}
      />
    </BootCard>
  );
}

export default Converter;
