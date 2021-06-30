const l1 = document.querySelectorAll('#l1');
const l2 = document.querySelectorAll('#l2');

window.addEventListener('scroll', function(){
    const sc = window.pageYOffset * 2;
    const h = document.documentElement.scrollTop;
    if (h > 0 && h < 1000) {
        for(let i = 0; i < l1.length; i++){
            l1.item(i).style.marginBottom = sc + 'px';
        }
        for(let i = 0; i < l2.length; i++){
            l2.item(i).style.marginTop = sc + 'px';
        }
        console.log('表示');
    }
});