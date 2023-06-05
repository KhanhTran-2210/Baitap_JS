function ex(){
    let length = +document.getElementById("input-length").value
    let width = +document.getElementById("input-width").value
    
    let perimeter = (length + width)*2
    let acreage = length * width

    let resultElement = document.getElementById('chuvi');
    resultElement.innerText = 'Chu vi = ' + perimeter;

    let resultEL = document.getElementById('dientich');
    resultEL.innerText = 'Diện tích = ' + acreage;
}