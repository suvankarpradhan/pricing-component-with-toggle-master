const planType = document.getElementById('planType');
planType.onclick = ()=>{
    if(planType.checked == true){
        document.getElementById('price1').innerHTML = '<span>&dollar;</span>19.99';
        document.getElementById('price2').innerHTML = '<span>&dollar;</span>24.99';
        document.getElementById('price3').innerHTML = '<span>&dollar;</span>39.99';
    }else{
        document.getElementById('price1').innerHTML = '<span>&dollar;</span>199.99';
        document.getElementById('price2').innerHTML = '<span>&dollar;</span>249.99';
        document.getElementById('price3').innerHTML = '<span>&dollar;</span>399.99';
    }
}