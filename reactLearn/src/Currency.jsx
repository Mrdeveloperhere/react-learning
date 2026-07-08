import { Input } from "./components/Index.js";
import useCurrency from "./Hooks/userCurrency.js";
import { useState } from "react";


function Currency() {
const [amount, SetAmount] = useState(0);
const [convertedAmount, SetConvertedAmount] = useState(0);
const [form, SetForm] = useState( "usd");
const [to, SetTo] = useState( "inr");


const currencyInfo = useCurrency(form) || {};
 const option = Object.keys(currencyInfo).filter((key) => key !== "date");
 
 
 const swap = () => {
  SetForm(to);
  SetTo(form);
  SetConvertedAmount(0);
 }

const convert = () => { SetConvertedAmount(
  (amount * currencyInfo[to]).toFixed(2)
)};



    

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1645226880663-81561dcab0ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            <div className="w-full">
                            <h2 className="text-center text-3xl font-bold text-white mb-5">Currency Converter Date {currencyInfo.date}</h2>
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <Input
                                label="From"
                                amount={amount}
                                onAmountChange={SetAmount}
                                currencyOptions={option}
                                selectedCurrency={form}
                                onCurrencyChange={(amount) => {
                                    SetForm(amount);
                                    
                                }}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <Input
                                label="To"
                                amount={convertedAmount}
                                onAmountChange={SetConvertedAmount}
                                currencyOptions={option}
                                selectedCurrency={to}
                                onCurrencyChange={(amount) => {
                                    SetTo(amount);
                                 
                                }}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {form.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
  };


export default Currency