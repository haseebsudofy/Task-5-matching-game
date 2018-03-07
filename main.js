

// window.onload = function () {
//     // var imgElement = document.createElement("img");
//     // imgElement.src = 'images/smiling.png';
//     // document.getElementById("placement").appendChild(imgElement);
//     for (var i = 0; i < 5; i++) {
//         // console.log('ONLOAD')
//         myFunction();
//     }
// }


function myFunction() {
    console.log('myFunction')
    var imgDestination = document.getElementById("placement");

    for (var i = 0; i < 4; i++) {
        var imgAdded = document.createElement("img");
        imgAdded.src = "images/smiling.png";
        var left = Math.floor((Math.random() * 400) + 1) + "px";
        var top = Math.floor((Math.random() * 400) + 1) + "px";
        var imagestyle = imgAdded.style;
        imagestyle.position = "absolute";
        imagestyle.top = top;
        imagestyle.left = left;
        imgDestination.appendChild(imgAdded);
    }
    rightFunction();

    // var item = "images/smiling.png";
    // var cln = item.cloneNode(true);
    // // imgDestination.appendChild(imgAdded.cloneNode(true));
    // document.getElementById("placement").appendChild(cln);
}

// window.onload = function (){
//     for(var i=0; i<2; i++){
//         rightFunction();
//     }
// }

// document.getElementById('static').innerHTML= rightFunction();

function rightFunction() {
    for (i = 0; i < 4; i++) {
        console.log('rightFunction')
        var imgDestination = document.getElementById("static");
        var imgAdded = document.createElement("img");
        imgAdded.src = "images/smiling.png";
        var left = Math.floor((Math.random() * 400) + 1) + "px";
        var top = Math.floor((Math.random() * 400) + 1) + "px";
        var imagestyle = imgAdded.style;
        imagestyle.position = "absolute";
        imagestyle.top = top;
        imagestyle.left = left;
        imgDestination.appendChild(imgAdded);
    }
}

function start() {
    myFunction();
    // rightFunction();
    // var leftNode = document.getElementById('placement');
    // var rightNode = document.getElementById('static');
    // var counter = 5;

    // for (var i = 0; i < counter; i++) {
    //     var imgAdded = document.createElement("img");
    //     imgAdded.src = "images/smiling.png";
    //     var left = Math.floor((Math.random() * 400) + 1) + "px";
    //     var top = Math.floor((Math.random() * 400) + 1) + "px";
    //     imgAdded.style.top = top;
    //     imgAdded.style.position = 'absolute';
    //     imgAdded.style.left = left;
    //     leftNode.appendChild(imgAdded);
    // }
    // var cloneLedtNode = leftNode.cloneNode()
}