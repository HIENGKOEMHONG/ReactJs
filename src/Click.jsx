
function Click() {
  function buttonClick() {
  document.getElementById("btn").textContent=" Button Clicked! ";
  }
  return (
  <>
  <h2>Click event</h2>
  <button id="btn" onClick={buttonClick}>Click me!</button>
  </>
  )
  }
  export default Click