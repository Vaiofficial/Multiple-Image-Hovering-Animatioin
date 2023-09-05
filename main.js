var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {

        val.addEventListener("mouseenter" , function () {
            val.childNodes[3].style.opacity = 1;
            // val.style.backgroundColor = "red";
            // console.log(val.childNodes[3]);
        });

        val.addEventListener("mouseleave" , function () {
            val.childNodes[3].style.opacity = 0;
            // val.style.backgroundColor = "transparent";
        })

        val.addEventListener("mousemove" , function (dets) {
            val.childNodes[3].style.left = dets.x + "px";
            val.childNodes[3].style.top = dets.y + "px";
            // val.style.backgroundColor = "transparent";
        })
}) 

//ye bas ak hi element ko uthayega so hmko query selector all use karna hoga but vo as a node list utayga



// elem1.addEventListener("mousemove" , function (dets) {
    
//     elemimage.style.left = dets.x + "px"
//     elemimage.style.top = dets.y + "px"
// })

// elem1.addEventListener("mouseenter" , function (dets) {
    
//     elemimage.style.opacity = 1;
// })

// elem1.addEventListener("mouseleave" , function (dets) {
    
//     elemimage.style.opacity = 0;
// })