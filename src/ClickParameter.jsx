function ClickParameter() {
  function buttonClick(yearth,classname ) {
  /* សមា􀆀ល់ ស􀅍􀂚􀂼 ` គឺេ􀅡􀂼􀄧􀂼ងេឆ􀂭ងប៊ូតុងេលខ១េលើ keyboard។ សូមកុំ􀂫ចលំ􀅂􀂼􀄶􀂼􀄭􀂼ស􀅍􀂚􀂼 ' */
  document.getElementById('btn2').textContent= `Year: ${yearth}, Class: ${classname}`;
  }
  return(
  <>
  <h2>Click Event with Parameter</h2>
  <button id='btn2' onClick={() => buttonClick('Year 4', 'MAE')}>Click Me</button>
  </>
  )
  }
  export default ClickParameter