function ex(){
    let n = +document.getElementById("input-num").value

    let sum = 0

    sum += n % 10
    n = Math.floor(n / 10)

    sum += n
    let resultElement = document.getElementById('result');
    resultElement.innerText = 'Tính tổng = ' + sum;
}