export const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';

export const currencyFetch = () => (
  fetch(url).then(response => response.json())
);
