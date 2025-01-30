// import { Currency } from 'lucide-react';
import React, { useState, useEffect } from 'react';


function FinancialCalc({ Carprice }) {
    const [downpay, setDownPay] = useState(0);
    const [monthpay, setMonthPay] = useState(0);
    const [time, setTime] = useState();
    const [monthInt, setMonthInt] = useState(null);
    const [low, setlow] = useState(false);

    // console.log(downpay);


    const financialCalc = (Carprice, time, downpay) => {

        if (downpay < (Carprice * 0.4)) {
            setlow(true);
        } else {
            setlow(false);
        }
        const remain = Carprice - downpay;
        const monthloan = remain / time;
        const monthp = (monthloan * 0.04) + monthloan;
        setMonthPay(monthp);
    }

    //Formating Currency to USD     

    const moneyFormat = (amount) => {
        const output = amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })

        return output;
    }

    return (
        <div className=' m-3 w-[80vw]  sm:w-full md:w-[89%] '>
            <h1 className=' text-sm sm:text-lg font-bold'>DownPayment Should Start At <span className='text-lg  text-green-800 font-black'>{`${moneyFormat(Carprice * 0.4)}`}</span> </h1>
            <div className='flex justify-center gap-2 my-2'>
                <div className='  text-center '>
                    <div>
                        <label htmlFor="">DownPayment</label>
                    </div>
                    <div className=''>
                        <input type="number" placeholder='Enter downpayment' onChange={(event) => setDownPay(event.target.value)} className='border w-full border-green-700 mx-3 p-1 rounded-lg' />

                    </div>
                </div>
                <div className='text-center'>
                    <div>
                        <label htmlFor="">Loan Term </label>
                    </div>
                    <div>
                        <input type="number" placeholder='Enter Months number' onChange={(event) => setTime(event.target.value)} className='border w-full border-green-700  mx-3 p-1 rounded-lg' />

                    </div>
                </div>

            </div>


            <button onClick={() => financialCalc(Carprice, time, downpay)} className='bg-green-600 p-2 rounded-xl hover:scale-105 duration-500 w-[90%] m-3' >
                Calculate
            </button>

            {low? (<h1 className='text-red-600 text-center '>{monthpay?"Low Downpayment":null}</h1>) :
           
                <h1 className='text-center font-bold'>{monthpay ?  `You will Pay ${moneyFormat(monthpay)}  Monthly` :null}</h1>
            }






        </div>
    )
}

export default FinancialCalc