function ex(){
    let day = +document.getElementById("input-day").value
    
    let totalSalary = day * 100000

    let resultElement = document.getElementById('result');
    resultElement.innerText = 'Kết quả: ' + totalSalary;
}