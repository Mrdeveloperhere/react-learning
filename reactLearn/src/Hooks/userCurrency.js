import { useState, useEffect } from "react";

function useCurrency(currency) {

  const [currencyRates, setCurrencyRates] = useState({});


    useEffect(() => {

        fetch (`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((data) => {
          setCurrencyRates({
            date: data.date,
            ...(data[currency] || {}),
          });
        })
    }, [currency]);

       return currencyRates;
}
export default useCurrency;