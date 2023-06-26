const inputEl = document.getElementById("input-el")
const inputBtn= document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let myLeads= []

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
   renderLeads()
})

function renderLeads()
{
let listItems=""
for(let i =0;i<myLeads.length;++i)
{
  // listItems += "<li><a href='" +myLeads[i]+"' target='_blank'>" + myLeads[i] + "</a></li> "
   // const li = document.createElement("li")
    //li.textContent=myLeads[i]
    //ulEl.append(li)
    
    listItems += 
    ` <li>
          <a href='${myLeads[i]}' target='_blank'> 
            ${myLeads[i] }  
          </a>
       </li> `
    console.log(listItems)

}
ulEl.innerHTML =listItems
}
//edge://extensions/