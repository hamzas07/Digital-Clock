function showTime() {
  let ct=new Date();
  a=ct.getHours();
  b=ct.getMinutes();
  c=ct.getSeconds();
  d=ct.getDate();
  e=ct.getMonth();
  f=ct.getFullYear();
  if(c<10) {
    c='0'+c;
  }
  if(b<10) {
    b='0'+b;
  }
  if(a<10) {
    a='0'+a;
  }
  
  
  switch(e)
  {
    case 0: e='January'; break;
     case 1: e='February'; break;
      case 2: e='March'; break;
       case 3: e='April'; break;
        case 4: e='May'; break;
         case 5: e='June'; break;
          case 6: e='July'; break;
           case 7: e='August'; break;
            case 8: e='September'; break;
             case 9: e='October'; break;
              case 10: e='November'; break;
               case 11: e='December'; break;
  }
	document.getElementById('hr').innerHTML = a;
		document.getElementById('mt').innerHTML = b;
			document.getElementById('sec').innerHTML = c;
			document.getElementById('day').innerHTML = d;
			document.getElementById('mon').innerHTML = e;
			document.getElementById('yr').innerHTML = f;
}
showTime();
setInterval(function () {
	showTime();
}, 1000);