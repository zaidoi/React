const { useState, useMemo } = React;

export function CurrencyConverter() {
  const [num,setNum] = useState(1)
  const [startCurrency,setStartCurrency] = useState('USD')
  const [targetCurrency,setTargetCurrency] = useState('EUR')
 

  const goodMapping = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7
};

const calculation = useMemo(()=>{
  setResult('')
  const first = goodMapping[startCurrency]
  const second = goodMapping[targetCurrency]

  const valueUsd = num/first
  const convertedAmount = valueUsd * second
return convertedAmount.toFixed(2)

},[num,startCurrency])
 
  return (
    <div>
    <h1>Currency Converter</h1>
    <label> <h3>{startCurrency} to {targetCurrency} Conversion</h3>

    <input
    type='number'
    value={num}
    onChange={(e)=>setNum(e.target.value)}
    />
    </label>

    <br/>
    <label>Start Currency:
    <select value={startCurrency} onChange={(e)=>setStartCurrency(e.target.value)}>
    <option value='USD'>USD</option>
    <option value='EUR'>EUR</option>
    <option value='GBP'>GBP</option>
    <option value='JPY'>JPY</option>
    </select>
    </label>

    <br/>
    <label>Target Currency:
    <select value={targetCurrency} onChange={(e)=>setTargetCurrency(e.target.value)}>
    <option value='USD'>USD</option>
    <option value='EUR'>EUR</option>
    <option value='GBP'>GBP</option>
    <option value='JPY'>JPY</option>
    </select>
    </label>

<p>Converted Amount: {calculation} {targetCurrency}</p>
    
    </div>
   
  )

}