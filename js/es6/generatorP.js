// (function(){

    function* one(){
        yield 'a'
        yield a
        yield b
    }

    let o = one()
    o.next()
    console.log(o.next('a'));
    console.log(o.next('b'));
    console.log(o.next('c'));

// })()