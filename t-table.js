window.onload = () => {
    tableadd();
  };
  
  
  let arr = [];
  let editText;
  let obj = {};
  function techback() {
  window.location.replace(`card.html`);

  }
  
  function techform(){
    window.location.replace(`tform.html`);
  }
  
  
  
  async function tableadd() {
  
  let url = "https://6509263cf6553137159b0028.mockapi.io/employee/teacher";
  await fetch(url, {
   method: "GET",
   headers: { "Content-Type": "application/json" },
  })
  .then((Result) => Result.json())
  .then((res) => {
   console.log(res);
   arr=res;
   console.log(arr);
  
  })
  .catch((errorMsg) => {
   console.log(errorMsg);
  });
  
  let l = "";
  for (let i = 0; i < arr.length; i++) {
    l += "<tr>";
    l += "<td>" + arr[i].name + "</td>";
    l += "<td>" + arr[i].email + "</td>";
    l += "<td>" + arr[i].phone + "</td>";
    l += "<td>" + arr[i].password + "</td>";
    l += "<td>" + arr[i].c_password + "</td>";
    l += "<td>" + arr[i].gender + "</td>";
    l += "<td>" + arr[i].language + "</td>";
    l += "<td>" + arr[i].date + "</td>";
    l +=
      '<td><button type="button" class="btn btn-success px-4 mt-0"  onclick="Edit(' + arr[i].id + 
      ')">Edit</button>  <button type="button" class="space btn btn-danger mt-0 mx-0" onclick="Delete(' + arr[i].id +
      ')">Delete</button></td>';
    l += "</tr>";
  }
  
  document.getElementById("dataTbl").innerHTML = l;
  }
  
  function Edit(id) {
    editText = id;
  window.location.href = "tform.html?id=" + id;
  
  }
  
  
  async function Delete(id) {
  let url = "https://6509263cf6553137159b0028.mockapi.io/employee/teacher";
  await fetch(url +"/"+id, {
  method: "DELETE",
  headers: { "Content-Type": "application/json" },
  })
  .then((Result) => Result.json())
  .then((string) => {
    console.log(string);
    console.log(`Title of our response :  ${string.name}`);
   
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });
  tableadd();
  }