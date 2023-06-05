//B1: TÍNH TIỀN LƯƠNG NHÂN VIÊN THEO GIỜ
function ex(){
    let day = +document.getElementById("input-day").value
    
    let totalSalary = day * 100000

    let resultElement = document.getElementById('result1');
    resultElement.innerText = 'Kết quả: ' + totalSalary;
}

//B2: Tính giá trị trung bình
function ex1(){
    let num = +document.getElementById("input-number").value    
    let total = num / 5

    let resultElement = document.getElementById('result2');
    resultElement.innerText = 'Kết quả: ' + total;
}
//B3: QUY ĐỔI USD
function ex2(){
    let usd = +document.getElementById("input-usd").value
    
    let VNĐ = usd * 23500

    let resultElement = document.getElementById('result3');
    resultElement.innerText = 'Đổi ra VNĐ = ' + VNĐ;
}
//B4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
function ex3(){
    let length = +document.getElementById("input-length").value
    let width = +document.getElementById("input-width").value
    
    let perimeter = (length + width)*2
    let acreage = length * width

    let resultElement = document.getElementById('chuvi');
    resultElement.innerText = 'Chu vi = ' + perimeter;

    let resultEL = document.getElementById('dientich');
    resultEL.innerText = 'Diện tích = ' + acreage;
}
//B5: TÍNH TỔNG 2 KÝ SỐ
function ex4(){
    let n = +document.getElementById("input-num").value

    let sum = 0

    sum += n % 10
    n = Math.floor(n / 10)

    sum += n
    let resultElement = document.getElementById('result4');
    resultElement.innerText = 'Tổng = ' + sum;
}