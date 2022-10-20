AFRAME.registerComponent("marker",{

init:async function(){
this.el.addEventListener("markerFound",()=>{
console.log("marker is found")
this.handlemarkerfound()

})
this.el.addEventListener("markerLost",()=>{
    console.log("marker is lost")
    this.handlemarkerlost()
    
    })
    



},
handlemarkerfound:function(){
var butdiv=document.getElementById("button-div")
butdiv.style.display="flex"
var ratingbutton=document.getElementById("rating-button")
var orderbutton=document.getElementById("order-button")
ratingbutton.addEventListener("click",function(){
    swal({
        icon:"warning",
        title:"ratedish",
        text:"workinprogress"
    })
})
orderbutton.addEventListener("click",()=>{
    swal({
        icon:"https://i.imgur.com/4NZ6uLY.jpg",
        title:"thanksforthedish",
        text:"soonattable"
    })
})



},
handlemarkerlost:function(){
 var butdiv=document.getElementById("button-div")
 butdiv.style.display="none"

}
}
);
