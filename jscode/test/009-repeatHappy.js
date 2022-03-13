/*
 	input: 次数n
    output：重复输出n次happy
*/

function repeatHapp(n){
    var result = '';
    for(let i=0;i<n;i++){
        result = result + 'happy';
    }
    console.log(result);
}

repeatHapp(3);