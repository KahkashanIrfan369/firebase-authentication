import { getAuth} from "'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';";
import { createUserWithEmailAndPassword} from "'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';";

const auth = getAuth();

const register=()=>{

console.log(auth);

let getname = document.querySelector("#name").value;
let getemail = document.querySelector("#email").value; 
let getpassword =document.querySelector("#password").value;
console.log(getemail);
console.log(getpassword);
console.log(getname);
createUserWithEmailAndPassword(auth , getemail,getpassword)
.then(()=>{
    alert('new user is register');
})
.catch((err)=>{
    alert('error');
    console.log('error is =',err);
})
 }
  document.querySelector("#register").addEventListener("click",register);