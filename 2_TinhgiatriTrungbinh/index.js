function ex1(){
    let num = +document.getElementById("input-number").value    
    let total = num / 5

    let resultElement = document.getElementById('result');
    resultElement.innerText = 'Kết quả: ' + total;
}