

document.querySelector("#form").addEventListener("submit",formSubmit)
var bozazArr = JSON.parse(localStorage.getItem("bozazData"))||[]
displayTable(bozazArr)


function filterCat(){
    var selected = document.querySelector("#filter").value
    //console.log(selected)
    var filterList = bozazArr.filter(function(elem){
         return elem.category == selected
    })
    console.log(filterList)
    displayTable(filterList)
}



function formSubmit(event){
    event.preventDefault()

    // var cat = document.querySelector("#cat").value
    // var title= document.querySelector("#title").value
    // var des = document.querySelector("#desc").value
    // var price = document.querySelector("#price").value

    //console.log(form.cat.value)

    //console.log(cat,title,des,price)
    // formid.inputId.value
    var bozazObj={
        category:form.cat.value,
        title:form.title.value,
        description:form.desc.value,
        price:form.price.value
    }

    bozazArr.push(bozazObj)
    displayTable(bozazArr)
    localStorage.setItem("bozazData",JSON.stringify(bozazArr))
}

function displayTable(bozazArr){
    var tbody = document.querySelector("tbody")
    tbody.textContent=""

    bozazArr.map(function(elem,index){
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("button")
        td5.addEventListener('click',function(){
            deleteRow(index)
        })

    
        td1.textContent=elem.category
        td2.textContent=elem.title
        td3.textContent=elem.description
        td4.textContent=elem.price
        td5.textContent="Delete"

        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
    })

    function deleteRow(index){
        bozazArr.splice(index,1)
        localStorage.setItem("bozazData",JSON.stringify(bozazArr))
        displayTable(bozazArr)
    }
    


}