window.alert("hello");
function aadCourse(){
    let ctbable= document.getElementsByTagName("table")[0];
    let cCode=document.getElementsByTagName("input")[0];
    let di=document.getElementsByTagName("input")[1];
    let cR= document.createElement("tr");
    let codeCell= document.createElement("td");
    let cD= document.createElement("td");
    codeCell.innerHTML =cCode.value;
    cD.innerHTML=di.value;
    cR.appendChild(codeCell);
    cR.appendChild(di);
    ctbable.appendChild(cR);
    cCode.value="";
    di.value="";
}

let select = document.getElementsByTagName("select")[0];
let city = document.getElementsByTagName("input")[0];
let addToTopCheckBox = document.getElementById("addToTop");
      
function addCity() {
           let newCity = document.createElement("option");
           newCity.innerText = city.value;
           if(addToTopCheckBox.checked){
               select.insertBefore(newCity,select.firstChild);
           }else{
               select.appendChild(newCity);
           }
           city.value = "";
       }
      
function removeCity(){
           select.remove(select.selectedIndex);
       }