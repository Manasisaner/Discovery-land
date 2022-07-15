window.addEventListener('DOMContentLoaded',function(){
    console.log("hello is linked==============");
    let detailsArray = [{title:"Rio San Juan, Dominican Republic",desc:"Playa Grande"},
{title:"Cabo San Lucas, Mexico",desc:"Chileno Bay"},{title:"Las Vegas, Nevada",desc:"The Summit"}]
let count=0;
let prev= document.getElementById('previous');
let nxt= document.getElementById('next');
let _title=document.querySelector('.title');
let _desc=document.querySelector('.desc');
_title.innerHTML = detailsArray[count].title;
_desc.innerHTML = detailsArray[count].desc;
console.log(count);

nxt.addEventListener('click', function(){
    console.log("nxt",count);
    if(count>=0){
        count++
    }
    console.log("count",count , detailsArray[count].title);
    _title.innerHTML = detailsArray[count].title;
    _desc.innerHTML = detailsArray[count].desc
})
prev.addEventListener('click',function(){
    console.log("prev",count);
    if(count<3){
        count--
    }
    console.log("count",count,detailsArray[count].title);
    _title.innerHTML = detailsArray[count].title;
    _desc.innerHTML = detailsArray[count].desc;
    
})

})