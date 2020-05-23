var d=document.querySelectorAll(".drum").length;

for (var i=0;i<d;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",cll);

function cll(){
var choice=this.innerHTML;
sound(choice);
animation(choice);
}
}   // loopends
// keypress
document.addEventListener("keydown",ky);
function ky(j){
var c=j.key.toLowerCase();
  sound(c);
  animation(c);

}

function sound(key){


  switch (key) {
    case "w":
    var au=new Audio("sounds/crash.mp3");
    au.play();
      break;
      case "a":
      var au=new Audio("sounds/kick-bass.mp3");
      au.play();
        break;
        case "s":
        var au=new Audio("sounds/snare.mp3");
        au.play();
          break;
          case "d":
          var au=new Audio("sounds/tom-1.mp3");
          au.play();
            break;
            case "j":
            var au=new Audio("sounds/tom-2.mp3");
            au.play();
              break;
              case "k":
              var au=new Audio("sounds/tom-3.mp3");
              au.play();
                break;
                case "l":
                var au=new Audio("sounds/tom-4.mp3");
                au.play();
                  break;
    default:console.log(choice+" is not defined");

  }
}
// animation panel
function animation(ani){
  document.querySelector("."+ani).classList.add("pressed");
  setTimeout(rmv,100);
  function rmv(){
    document.querySelector("."+ani).classList.remove("pressed");
  }
}
