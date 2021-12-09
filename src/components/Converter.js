import React from 'react'; 
import { Form } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import { useSelector } from 'react-redux';
import { BootCard, Option } from '../styled/Converter';

const Converter = () => {

  const rates = useSelector(state => state.myFirstReducer.rates);
  const ratesEntries = [...Object.entries(rates.eur)];

  return (
    <BootCard>
      <Formik
        initialValues={{ entries: ratesEntries, firstSelected: '', secondSelected: '' }}
        render={({ values }) => (
          <div>
            <Field as={Form.Select} size="lg" name="firstSelected">
              <Option>Pick currency</Option>
              {values.entries.map((item) => (
                <option key={item} value={`${item[1]}`}>
                  {item[0]}
                </option>
              ))}
            </Field>
            <Field as={Form.Select}  size="lg" name="secondSelected">
              <Option>Convert into</Option>
              {values.entries.map((item) => (
                <option key={item} value={`${item[1]}`}>
                  {item[0]}
                </option>
              ))}        
            </Field>
            <br />
            <div>
              {values.firstSelected.length && values.secondSelected.length > 0 ? (
                <div>{(values.secondSelected/values.firstSelected).toFixed(2)}</div>
              ) : null}
            </div>
          </div>
        )}
      />
    </BootCard>
  );
}

export default Converter;
