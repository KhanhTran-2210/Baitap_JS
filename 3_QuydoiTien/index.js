function ex(){
    let usd = +document.getElementById("input-usd").value
    
    let VNĐ = usd * 23500

    let resultElement = document.getElementById('result');
    resultElement.innerText = 'Đổi ra VNĐ = ' + VNĐ;
}