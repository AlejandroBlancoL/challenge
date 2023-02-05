import React, { useState } from 'react';
import imagen1 from '../assets/beds.png'
import imagen2 from '../assets/refri1.png'
import imagen22 from '../assets/refri2.png'
import imagen3 from '../assets/furniture.png'
import imagen4 from '../assets/oven.png'
import imagen5 from '../assets/sofa.png'
import imagen6 from '../assets/tv.png'
import imagen7 from '../assets/washer-dryer.png'
import imagen8 from '../assets/dining.png'
import imagen9 from '../assets/desk.png'
import imagen10 from '../assets/wardrobe.png'
import '../css/Cards.css'


function incremento(num, operation) {
  if (operation === 'increment') {
    return ++num;
  } else if (operation === 'decrement' && num > 0) {
    return --num;
  } else {
    return num;
  }
}


function Cards() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);
  const [count9, setCount9] = useState(0);
  const [count10, setCount10] = useState(0);
  const [value, setValue] = useState(0);

  function sumar(count, count2, count3, count4, count5, count6, count7, count8, count9, count10){
  return count*1.2 + count2*1 + count3*0.5 + count4*0.6 + count5*1.5 + count6*0.25 + count7*0.5 + count8*2 + count9*0.75 + count10*3.2;
  }

  function clear() {
    setCount(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
    setCount5(0);
    setCount6(0);
    setCount7(0);
    setCount8(0);
    setCount9(0);
    setCount10(0);
    setValue(0);
  }

  let subtotal = Math.floor(value*200)
  let tax = (value*200)*16/100
  let total = (value*200)*16/100 + value*200
  let descuento = (value*200*16/100 + value*200)/2

// <p className='masB'></p><p className='masB2'></p>
  return (
    <div>
    <div className='contenedorCarta'>
    <img id='imagen1' src={imagen1} alt=''></img>
    <h1 className='titu'>Beds</h1>
    </div>
    <div>
      <div className='menos'><button className='menosB' onClick={() => setCount(incremento(count, 'decrement'))}>-</button></div>
      <div className='rec'><p className='num'>{count}</p></div>
      <div className='mas'><button className='masB' onClick={() => setCount(incremento(count, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
    </div>
    {/* ***************************************************************************************************************************************************************** */}
    <div>
      <div className='contenedorCarta2'>
        <img className='imagen2' src={imagen2} alt=''></img>
        <img className='imagen22' src={imagen22} alt=''></img>
        <h1 className='refri'>Refrigerador</h1>    
      </div>
        <div>
          <div className='menos2'><button className='menosB' onClick={() => setCount2(incremento(count2, 'decrement'))}>-</button></div>
          <div className='count2'><p className='num'>{count2}</p></div>
          <div className='mas2'><button className='masB' onClick={() => setCount2(incremento(count2, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
        </div>
    </div>
    {/* ********************************************************************************************************************** */}
    <div>
      <div className='contenedorCarta3'>
        <img className='imagen3' src={imagen3} alt=''></img>
        <h1 className='furni'>Furniture</h1>    
      </div>
        <div>
          <div className='menos3'><button className='menosB' onClick={() => setCount3(incremento(count3, 'decrement'))}>-</button></div>
          <div className='count3'><p className='num'>{count3}</p></div>
          <div className='mas3'><button className='masB' onClick={() => setCount3(incremento(count3, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
        </div>
    </div>
    {/* ********************************************************************************************************************** */}
    <div>
      <div className='contenedorCarta4'>
        <img className='imagen4' src={imagen4} alt=''></img>
        <h1 className='oven'>Oven</h1>    
      </div>
        <div>
          <div className='menos4'><button className='menosB' onClick={() => setCount4(incremento(count4, 'decrement'))}>-</button></div>
          <div className='count4'><p className='num'>{count4}</p></div>
          <div className='mas4'><button className='masB' onClick={() => setCount4(incremento(count4, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
        </div>
    </div>
    {/* ********************************************************************************************************************** */}
    <div>
      <div className='contenedorCarta5'>
        <img className='imagen5' src={imagen5} alt=''></img>
        <h1 className='sofa'>Sofa</h1>    
      </div>
        <div>
          <div className='menos5'><button className='menosB' onClick={() => setCount5(incremento(count5, 'decrement'))}>-</button></div>
          <div className='count5'><p className='num'>{count5}</p></div>
          <div className='mas5'><button className='masB' onClick={() => setCount5(incremento(count5, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
        </div>
    </div>
    {/* ********************************************************************************************************************** */}
    <div>
      <div className='contenedorCarta6'>
        <img className='imagen6' src={imagen6} alt=''></img>
        <h1 className='tv'>TV</h1>    
      </div>
        <div>
          <div className='menos6'><button className='menosB' onClick={() => setCount6(incremento(count6, 'decrement'))}>-</button></div>
          <div className='count6'><p className='num'>{count6}</p></div>
          <div className='mas6'><button className='masB' onClick={() => setCount6(incremento(count6, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
        </div>
    </div>
    {/* ********************************************************************************************************************** */}
    <div>
      <div className='contenedorCarta7'>
        <img className='imagen7' src={imagen7} alt=''></img>
        <h1 className='wash'>Washer-dryer</h1>    
      </div>
        <div>
          <div className='menos7'><button className='menosB' onClick={() => setCount7(incremento(count7, 'decrement'))}>-</button></div>
          <div className='count7'><p className='num'>{count7}</p></div>
          <div className='mas7'><button className='masB' onClick={() => setCount7(incremento(count7, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
        </div>
    </div>
    {/* ********************************************************************************************************************** */}
    <div>
      <div className='contenedorCarta8'>
        <img className='imagen8' src={imagen8} alt=''></img>
        <h1 className='dinin'>Dining</h1>    
      </div>
        <div>
          <div className='menos8'><button className='menosB' onClick={() => setCount8(incremento(count8, 'decrement'))}>-</button></div>
          <div className='count8'><p className='num'>{count8}</p></div>
          <div className='mas8'><button className='masB' onClick={() => setCount8(incremento(count8, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
        </div>
    </div>
    {/* ********************************************************************************************************************** */}
    <div>
      <div className='contenedorCarta9'>
        <img className='imagen9' src={imagen9} alt=''></img>
        <h1 className='desk'>Desk</h1>    
      </div>
        <div>
          <div className='menos9'><button className='menosB' onClick={() => setCount9(incremento(count9, 'decrement'))}>-</button></div>
          <div className='count9'><p className='num'>{count9}</p></div>
          <div className='mas9'><button className='masB' onClick={() => setCount9(incremento(count9, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
        </div>
    </div>
    {/* ********************************************************************************************************************** */}
    <div>
      <div className='contenedorCarta10'>
        <img className='imagen10' src={imagen10} alt=''></img>
        <h1 className='war'>Wardrobe</h1>    
      </div>
        <div>
          <div className='menos10'><button className='menosB' onClick={() => setCount10(incremento(count10, 'decrement'))}>-</button></div>
          <div className='count10'><p className='num'>{count10}</p></div>
          <div className='mas10'><button className='masB' onClick={() => setCount10(incremento(count10, 'increment'))}><p className='masB1'></p><p className='masB2'></p>+</button></div>
        </div>
    </div>
    {/* ********************************************************************************************************************** */}     
        <div className='clear'><button className='clearB' onClick={clear}>Clear</button></div>
        <div className='sumar'><button className='sumarB' onClick={() => setValue(sumar(count, count2, count3, count4, count5, count6, count7, count8, count9, count10))}>Calculate</button></div>
        <h1 className='summ'>Summary</h1>
        <div className='final'>
          <div><p className='totalI'>Total Items</p><h3 className='totalIR'>{count + count2 + count3 + count4 + count5 + count6 + count7 + count8 + count9 + count10}</h3></div>
          <div><p className='totalM'>Total m²</p><h3 className='totalM2'>{value}</h3></div>
          <div><p className='subTotal'>Subtotal</p><h3 className='subTotalV'>${subtotal.toFixed(1)}</h3></div>
          <div><p className='tax'>Tax</p><h3 className='taxV'>${tax.toFixed(1)}</h3></div>
          <div><p className='total2'>Total</p><h3 className='total2V'>${total.toFixed(1)}</h3></div>
          <div><p className='descuento'>Due Today 50%</p><h3 className='descuentoV'>${descuento.toFixed(1)}</h3></div>
      </div>
    </div>
    
  );
}

export default Cards;