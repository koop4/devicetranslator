function decodethis() {
    document.getElementById('myinput').value = '4fc0e32025e3000400000000';
    var encodedString = document.getElementById('myinput').value
    var val1 = encodedString.split('').splice(0,4).join('');
    var val2 = encodedString.split('').splice(4,4).join('');
    var val3 = encodedString.split('').splice(8,4).join('');
    var val4 = encodedString.split('').splice(12,4).join('');

    val1 = parseInt(val1, 16);
    val2 = parseInt(val2, 16);
    val3 = parseInt(val3, 16);
    val4 = parseInt(val4, 16);

    val1 = (-46.85 + (175.72 * ( val1 / 65536 ))).toFixed(2);
    val2 = (-6 + (125 * ( val2 / 65536 ))).toFixed(2); 
    val3 = val3 * 10;

    console.log('Coded String', encodedString);
    console.log('Temperatura', val1);
    console.log('Umidità', val2);
    console.log('Pressione', val3);
    console.log('contatore', val4);

    var table = document.getElementById("mytable");
    var tr = document.createElement("tr");

    var cell0 = tr.insertCell(0);
    cell0.innerHTML = encodedString;
    tr.appendChild(cell0);
    
    var cell1 = tr.insertCell(1);
    cell1.innerHTML = val1;
    tr.appendChild(cell1);

    var cell2 = tr.insertCell(2);
    cell2.innerHTML = val2;   
    tr.appendChild(cell2);

    var cell3 = tr.insertCell(3);
    cell3.innerHTML = val3;
    tr.appendChild(cell3);

    var cell4 = tr.insertCell(4);
    cell4.innerHTML = val4;

    tr.appendChild(cell1);
    tr.appendChild(cell2);
    tr.appendChild(cell3);
    tr.appendChild(cell4);

    table.appendChild(tr);

}