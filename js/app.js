console.log('hello world!');
var i = 1;
document.getElementById('last').style.display = 'none';

function read(){
    if (i % 2 === 1){
        document.getElementById('last').style.display = 'block';
        document.getElementById('readmore').innerHTML = 'Show less ▲';
        i++;
    }else{
        document.getElementById('last').style.display = 'none';
        document.getElementById('readmore').innerHTML = 'Read More ▼';
        i++;
    }
}

document.getElementById('readmore').addEventListener('click', read);