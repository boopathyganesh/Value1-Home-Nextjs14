'use client'

import Link from 'next/link';
import MobileMenu from '@/components/ui/mobile-menu';
import xicon from '@/public/images/exchange-icon.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';

interface RateCardProps {
  goldRate: string;
  silverRate: string;
}

export default function RateCard({ goldRate, silverRate }: RateCardProps): JSX.Element {
  const [activeInput, setActiveInput] = useState<'rupees' | 'grams'>('rupees');
  const [chooseMetal, setChooseMetal] = useState<string>('gold');
  const [chooseOption, setChooseOption] = useState<string>('buy');
  const [rupeesValue, setRupeesValue] = useState<string>('1000');
  const [gramsValue, setGramsValue] = useState<string>('10');

  const handleMetalClick = (metal: string): void => {
    setChooseMetal(metal);
  };

  const handleOptionClick = (option: string): void => {
    setChooseOption(option);
  };

  const calculateFinalRate = (): string => {
    let rate = chooseMetal === 'gold' ? goldRate : silverRate;

    if (chooseOption === 'buy') {
      const rateWithGST = parseFloat(rate) * 1.03; // Adding 3% GST for Buy option
      return rateWithGST.toFixed(2);
    }

    return rate;
  };

  const handleExchangeClick = (): void => {
    if (activeInput === 'rupees') {
      let convertedGrams;
      if (chooseMetal === 'gold') {
        convertedGrams = parseFloat(rupeesValue) / parseFloat(goldRate);
      } else {
        convertedGrams = parseFloat(rupeesValue) / parseFloat(silverRate);
      }
      if (!isNaN(convertedGrams)) {
        setGramsValue(convertedGrams.toFixed(2));
        setActiveInput('grams');
      }
    } else if (activeInput === 'grams') {
      let convertedRupees;
      if (chooseMetal === 'gold') {
        convertedRupees = parseFloat(gramsValue) * parseFloat(goldRate);
      } else {
        convertedRupees = parseFloat(gramsValue) * parseFloat(silverRate);
      }
      if (!isNaN(convertedRupees)) {
        setRupeesValue(convertedRupees.toFixed(2));
        setActiveInput('rupees');
      }
    }
  };

  // useEffect(() => {
  //   // Set initial values based on default selections
  //   if (chooseMetal === 'gold') {
  //     if ( activeInput === 'rupees'){
  //       let gramsVal = parseFloat(rupeesValue) / parseFloat(goldRate);
  //       if (!isNaN(gramsVal)) {
  //         setGramsValue(gramsVal.toFixed(2));
  //       }
  //     } else {
  //       let rupeesVal = parseFloat(gramsValue) * parseFloat(goldRate);
  //       if (!isNaN(rupeesVal)) {
  //         setRupeesValue(rupeesVal.toFixed(2));
  //       }
  //     }
  //   } else if (chooseMetal === 'silver') {
  //     if (activeInput === 'rupees'){
  //       let gramsVal = parseFloat(rupeesValue) / parseFloat(silverRate);
  //       if (!isNaN(gramsVal)) {
  //         setGramsValue(gramsVal.toFixed(2));
  //       }
  //     } else {
  //       let rupeesVal = parseFloat(gramsValue) * parseFloat(silverRate);
  //       if (!isNaN(rupeesVal)) {
  //         setRupeesValue(rupeesVal.toFixed(2));
  //       }
  //     }
  //   }
  // }, [chooseMetal, gramsValue, rupeesValue, goldRate, silverRate, activeInput]);


  useEffect(() => {
    // Set initial values based on default selections
    if (chooseMetal === 'gold') {
      if (activeInput === 'rupees') {
        let convertedValue;
        if (chooseOption === 'buy') {
          convertedValue = parseFloat(rupeesValue) / parseFloat(gstConversion());
        } else {
          convertedValue = parseFloat(rupeesValue) / parseFloat(goldRate);
        }
        if (!isNaN(convertedValue)) {
          setGramsValue(convertedValue.toFixed(2));
        }
      } else {
        let convertedValue;
        if (chooseOption === 'buy') {
          convertedValue = parseFloat(gramsValue) * parseFloat(gstConversion());
        } else {
          convertedValue = parseFloat(gramsValue) * parseFloat(goldRate);
        }
        if (!isNaN(convertedValue)) {
          setRupeesValue(convertedValue.toFixed(2));
        }
      }
    } else if (chooseMetal === 'silver') {
      if (activeInput === 'rupees') {
        let convertedValue;
        if (chooseOption === 'buy') {
          convertedValue = parseFloat(rupeesValue) / parseFloat(gstConversion());
        } else {
          convertedValue = parseFloat(rupeesValue) / parseFloat(silverRate);
        }
        if (!isNaN(convertedValue)) {
          setGramsValue(convertedValue.toFixed(2));
        }
      } else {
        let convertedValue;
        if (chooseOption === 'buy') {
          convertedValue = parseFloat(gramsValue) * parseFloat(gstConversion());
        } else {
          convertedValue = parseFloat(gramsValue) * parseFloat(silverRate);
        }
        if (!isNaN(convertedValue)) {
          setRupeesValue(convertedValue.toFixed(2));
        }
      }
    }
  }, [chooseMetal, gramsValue, rupeesValue, goldRate, silverRate, activeInput, chooseOption]);
  



  // const handleCommonButtonClick = (value: number): void => {          //adds the common value to existing value
  //   if (activeInput === 'rupees') {
  //     setRupeesValue((parseFloat(rupeesValue) + value).toFixed(2));
  //   } else if (activeInput === 'grams') {
  //     setGramsValue((parseFloat(gramsValue) + value).toFixed(2));
  //   }
  // };

  const handleCommonButtonClick = (value: number): void => {
    if (activeInput === 'rupees') {
      setRupeesValue(Math.floor(value).toString());
    } else if (activeInput === 'grams') {
      setGramsValue(Math.floor(value).toString());
    }
  };

  const gstConversion = (): string => {
    let rate = chooseMetal === 'gold' ? goldRate : silverRate;
  
    const rateWithGST = parseFloat(rate) * 1.03; // Adding 3% GST for Buy option
    return rateWithGST.toFixed(2);
  };


  return (
    <div className='w-5/6 h-full bg-white rounded-3xl mt-32 overflow-hidden border-4 border-white'>
      <div className='flex flex-col justify-center items-center py-4 bg-gold-600'>{/* live price section */}
        <div className='flex items-center justify-around text-black-800 gap-4'>
          <div className={`px-4 font-semibold cursor-pointer ${chooseMetal === 'gold' ? 'text-white border-b-4 rounded border-white' : ''}`} onClick={() => handleMetalClick('gold')}>
            <div className='mb-2 text-2xl font-bold'>Gold</div>
          </div>
          <div className={`px-4 font-semibold cursor-pointer ${chooseMetal === 'silver' ? 'text-white border-b-4 rounded border-white' : ''}`} onClick={() => handleMetalClick('silver')}>
            <div className='mb-2 text-2xl font-bold'>Silver</div>
          </div>
        </div>
        <div className='font-medium text-white text-5xl py-5'>&#8377;{calculateFinalRate()}/g</div>
        <div className='flex items-center justify-center gap-3 pb-3 text-black-700'> {/* live rate animation */}
          <div className='bg-red-600 rounded-full animate-pulse w-2 h-2'></div>
          <div>Live Rates</div>
        </div>
        {chooseOption === 'buy' && <div className='font-light text-white text-sm'>* Additional 3% GST applicable</div>}
      </div>

      {/* Buy/Sell section and other components remain unchanged */}
      <div className='flex flex-col items-center justify-center pb-4'>{/* Buy/Sell section */}
        <div className='w-full flex items-center justify-between text-white mb-4 bg-gold-800'>
          <div className={`w-full px-4 font-semibold cursor-pointer ${chooseOption === 'buy' ? 'text-gold-500 bg-black-500': ''}`} onClick={() => handleOptionClick('buy')}>
            <div className='py-3 text-2xl font-bold'>Buy</div>
          </div>
          <div className={`w-full px-4 font-semibold cursor-pointer ${chooseOption === 'sell' ? 'text-gold-500 bg-black-500' : ''}`} onClick={() => handleOptionClick('sell')}>
            <div className='py-3 text-2xl font-bold'>Sell</div>
          </div>
        </div>
        <div className='text-black-700 font-semibold text-3xl '>Enter the amount</div>
        {/* <form action="#" method="post" className='flex flex-row justify-between gap-4 items-center'> */}
        <form id="exchangeForm" action="#" method="post" className={`flex ${activeInput === 'rupees' ? 'flex-row' : 'flex-row-reverse'} justify-between gap-4 items-center`}>
          <div className="coolinput">
            <label htmlFor="rupeesInput" className="text font-normal text-black-500">Rupees</label>
            <CurrencyInput
              id="rupeesInput"
              className='input form-input text-black-700 text-md focus:outline-none w-40'
              name="rupees"
              placeholder="₹"
              value={rupeesValue || ''}
              onValueChange={(value) => setRupeesValue(value || '')}
              disabled={activeInput === 'grams'}
            />

            {/* <input type="text" id="rupeesInput" value={rupeesValue} onChange={(e) => setRupeesValue(e.target.value)} className="input form-input text-black-700 text-md focus:outline-none w-40" /> */}
          </div>

          <Image src={xicon} width={100} height={100} alt='exchange icon' onClick={handleExchangeClick} className='w-8 h-auto mt-4 cursor-pointer' />

          <div className="coolinput">
            <label htmlFor="gramsInput" className="text font-normal text-black-500">Grams</label>
            <CurrencyInput
              id="gramsInput"
              className='input form-input text-black-700 text-md focus:outline-none w-40'
              name="grams"
              placeholder="g"
              value={gramsValue || ''}
              onValueChange={(value) => setGramsValue(value || '')}
              disabled={activeInput === 'rupees'}
            />
            {/* <input type="text" id="gramsInput" value={gramsValue} onChange={(e) => setGramsValue(e.target.value)} className="input form-input text-black-700 text-md focus:outline-none w-40" /> */}
          </div>
        </form>
        <div className='flex flex-row gap-8 my-5 items-center justify-between'>
          <div className='w-max font-bold text-black-400 rounded-lg bg-gold-200 px-4 py-2 active:bg-gold-400 cursor-pointer' onClick={() => handleCommonButtonClick(activeInput === 'rupees' ? 100 : 1)}>
            {activeInput === 'rupees' ? '₹100' : '1g'}
          </div>
          <div className='w-max font-bold text-black-400 rounded-lg bg-gold-200 px-4 py-2 active:bg-gold-400 cursor-pointer' onClick={() => handleCommonButtonClick(activeInput === 'rupees' ? 500 : 10)}>
            {activeInput === 'rupees' ? '₹500' : '10g'}
          </div>
          <div className='w-max font-bold text-black-400 rounded-lg bg-gold-200 px-4 py-2 active:bg-gold-400 cursor-pointer' onClick={() => handleCommonButtonClick(activeInput === 'rupees' ? 1000 : 50)}>
            {activeInput === 'rupees' ? '₹1000' : '50g'}
          </div>
          <div className='w-max font-bold text-black-400 rounded-lg bg-gold-200 px-4 py-2 active:bg-gold-400 cursor-pointer' onClick={() => handleCommonButtonClick(activeInput === 'rupees' ? 5000 : 100)}>
            {activeInput === 'rupees' ? '₹5000' : '100g'}
          </div>
        </div>
        <button className='w-32 px-6 py-3 bg-gold-500 text-black-700 font-bold text-xl rounded-xl active:bg-gold-600'>
        {chooseOption === 'buy' ? 'Buy' : 'Sell'}
      </button>
      </div>
    </div>
  );
}