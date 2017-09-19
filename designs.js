// Select color input
let colorInput;
let inputHeight
let inputWidth;
let first;
let last;
let pixelCanvas;

colorInput = $("#colorPicker");

console.log("HEX color" + colorInput.val());

// Select size input

$("form").submit(function (event){
    //if a table already exists, the rows and columns are removed.
    $("tr").remove();
    $("td").remove();
    inputHeight = $("#input_height").val();
    inputWidth = $("#input_width").val();
    //alert("Grid Height: "+inputHeight + "\nGrid Width: " + inputWidth);
    makeGrid(inputHeight,inputWidth);
    event.preventDefault();
});

// When size is submitted by the user, call makeGrid()
pixelCanvas = $("#pixel_canvas");

function makeGrid(row,column) {
    for (let i=0 ; i<row; i++){
        pixelCanvas.append("<tr></tr>");
    }
    for (let j=0 ; j < column ; j++){
        $("tr").append("<td></td>");
    }
}

//Changes the background color of each cell, with the color chosen by the user.
$( 'table' ).on( 'click', 'td', function( evt ) {
    $( evt.target ).css( 'background', colorInput.val() );
});
