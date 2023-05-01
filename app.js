console.log("hello");
(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click', function(e){
        let answer = eval(screen.value);
        screen.value = answer;
    });
    clear.addEventListener('click', function(e){
        screen.value = "";
    });
})();
