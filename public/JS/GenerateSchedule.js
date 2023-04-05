let classes = [
    {name: "Math", start: "12:00", end: "12:30"}
]
// creates a <table> element and a <tbody> element
const tbl = document.getElementById("table");
const tblBody = document.getElementById("tbody");
console.log(classes[0].start);
// creating all cells
for (let i = 0; i < 29; i++) {
  // creates a table row
  const row = document.createElement("tr");
  const t1 = classes[0].start.split(":");// FIXME
  hour = t1[0]   //FIXME replace with actual iterator for class start times
  

  for (let j = 0; j < 6; j++) {
    var maker = false
    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    const cell = document.createElement("td");
    if (j == 0 ){
    cell.className = "headcol";
      if (i%2 == 0) {var cellText = document.createTextNode((i/2)+4 +':00')
      maker = true}
    }
    else if((i/2)+4 == hour){
      curr_height =timemath(classes[0].start,classes[0].end)
      cell.innerHTML = '<div class="event double" style ="height:'+curr_height+'%;"><input id="check" type="checkbox" class="checkbox" /><label for="check"></label>' + classes[0].start + '-'+ classes[0].end+ ' Class</div>'
      
    }
    
      
    
    if (maker){
      cell.appendChild(cellText);
    }
    row.appendChild(cell);
  }

  // add the row to the end of the table body
  tblBody.appendChild(row);
}

// put the <tbody> in the <table>
//tbl.appendChild(tblBody);
// appends <table> into <body>
//document.body.appendChild(tbl);  
function timemath(t1,t2){
  
  const t1_array = t1.split(":");
  const t2_array = t2.split(":");
  
  
  var hours = t2_array[0]-t1_array[0];
  var minutes = t2_array[1]-t1_array[1];
  
  console.log(hours);
  console.log(minutes);
  
  
  minutes = minutes+(hours*60);
  hours = 0;
  
  const height = 3.5*minutes;
  
  return(height)
  
}
function msg(){  
    

}

    