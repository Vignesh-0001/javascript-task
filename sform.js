let arr = [];
let editText;
let obj = {};
window.onload = () => {
  Edit();
};

function cancel() {
  window.location.replace(`card.html`);
  }
function male() {
  let male= document.getElementById('male').checked
  if (male===true){
    document.getElementById('female').checked=false
  }
}
function female() {
  let female= document.getElementById('female').checked
  if (female===true){
    document.getElementById('male').checked=false
  }
}

function submit() {
    // console.log(submit)
    let name = document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let c_password = document.getElementById("c_password").value;
    let gender_value = document.querySelector('input[name="gender"]:checked');
    let gender;
    if(gender_value){
      gender=gender_value.value
    }
    // let gender = document.querySelector('input[name="gender"]:checked').value;
    let language = document.getElementById("language").value;
    let date = document.getElementById("date").value;
 
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(password);
    // console.log(c_password);
    // // console.log(gender);
    // console.log(language);
    // console.log(date);

    
  if (name.length<3) {
    document.getElementById("name1").innerHTML = "!Name required";
    document.getElementById("name").style.border = "2px solid red";
  } else {
    document.getElementById("name1").innerHTML = "";
    document.getElementById("name").style.border = "2px solid green";

  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    document.getElementById("name2").innerHTML = "";
    document.getElementById("email").style.border = "2px solid green";
   
  } else {
    document.getElementById("name2").innerHTML = "!Email required";
    document.getElementById("email").style.border = "2px solid red";

  }
    
  if (phone.length===10) {
    document.getElementById("name3").innerHTML = " ";
    document.getElementById("phone").style.border = "2px solid green";
  } else {
    document.getElementById("name3").innerHTML = "!Phonenumber required ";
    document.getElementById("phone").style.border = "2px solid red";
   
  }
  
  const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8,}$/;
  if (passwordRegex.test(password)) {
    document.getElementById("name4"). 
    innerHTML = "";
    document.getElementById("password").style.border = "2px solid green";
   
  } else {
    document.getElementById("name4").innerHTML = "!Password required";
    document.getElementById("password").style.border = "2px solid red";

  }
  if (password===c_password) {
    document.getElementById("name5").innerHTML = "";
    document.getElementById("c_password").style.border = "2px solid green";
   
  } else {
    document.getElementById("name5").innerHTML = "!Password not matching";
    document.getElementById("c_password").style.border = "2px solid red";

  }
if (language==="Select") {
  document.getElementById("name7").innerHTML = "language required!";
  document.getElementById("language").style.border = "2px solid red";
} else {
  document.getElementById("name7").innerHTML = "";
  document.getElementById("language").style.border = "2px solid green";
}
if (date==="") {
  document.getElementById("name8").innerHTML = "Date of birth required!";
  document.getElementById("date").style.border = "2px solid red";
} else {
  document.getElementById("name8").innerHTML = "";
  document.getElementById("date").style.border = "2px solid green";
}

if (gender===""||gender===undefined||gender===null) {
  document.getElementById("gender_err").innerHTML = "!Gender required";
} else {
  document.getElementById("gender_err").innerHTML = "";
}


if (name == "" ||
   email == "" || 
   phone == "" || 
   password == "" || 
   c_password == "" ||
   gender == "" || 
   language== "" || 
   date == "" ) {
  return false;
}

let obj = { name,email,phone, password, c_password,gender, language, date };
if (editText != undefined) {
  // console.log(editText);


let url =  "https://6509263cf6553137159b0028.mockapi.io/employee/student";

fetch(url + "/" + editText, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(obj),
})
  .then((Result) => Result.json())
  .then((string) => {
    console.log(string);
    window.location.replace(`stable.html`);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });


} else {
  let url ="https://6509263cf6553137159b0028.mockapi.io/employee/student";
  fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((Result) => Result.json())
      .then((string) => {
        console.log(string);
        window.location.replace(`stable.html`);
      })
      .catch((errorMsg) => {
        console.log(errorMsg);
      });

}
}


function Edit() {
    
  var url_string=window.location.href.toLocaleLowerCase();
  var url=new URL(url_string)
  var id=url.searchParams.get("id")
  editText = id;
  console.log(editText);

  if(id){
  let url = "https://6509263cf6553137159b0028.mockapi.io/employee/student";
  fetch(url +"/" + id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
  .then((Result) => Result.json())
  .then((string) => {
   arr=string;
   console.log(arr);
  document.getElementById("name").value = arr.name;
  document.getElementById("email").value = arr.email;
  document.getElementById("phone").value = arr.phone;
  document.getElementById("password").value = arr.password;
  document.getElementById("c_password").value = arr.c_password;
  if (arr.gender === "male") {
    document.getElementById("male").checked = true;
  } else if (arr.gender === "female") {
    document.getElementById("female").checked = true;
  } else {
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
  }
  document.getElementById("language").value = arr.language;
  document.getElementById("date").value = arr.date;
})
.catch((errorMsg) => {
  console.log(errorMsg);
});
}
}