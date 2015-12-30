var fs = require('fs')

//show nodejs async attr
fs.readFile('js_async_test.txt','utf8',function(err,data){
    if(!err && data){
        console.log('read done 1');
    }
});

fs.readFile('js_async_test.txt','utf8',function(err,data){
    if(!err && data){
        console.log('read done 2');
    }
});

fs.readFile('js_async_test.txt','utf8',function(err,data){
    if(!err && data){
        console.log('read done 3');
    }
});

fs.readFile('js_async_test.txt','utf8',function(err,data){
    if(!err && data){
        console.log('read done 4');
    }
});

console.log('end...');