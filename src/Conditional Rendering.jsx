
function ColorForTheDay (props) {
    let color;
    Switch (props.day) {
    case "Sunday":
    color="#ff5733";
    break;
    case "Monday":
    color="#f7dc6f";
    break;
    case "Tuesday":
    color="#af7ac5";
    break;
    case "Wednesday":
    color="#76d7c4";
    break;
    case "Thursday":
    color="#82e0aa";
    break;
    case "Friday":
    color="#5dade2";
    break;
    case "Saturday":
    color="#800080";
    break;

    }
    return (
    <>
   
      <span>{props.day}</span>  
    <input type='color' value={color}/> 

    </>
    )
    }
    export default ColorForTheDay
    