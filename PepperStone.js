function Invert(obj) {
    //obj = {};
    // obj.a = '0';
    // obj.b = '1';
    // obj.c = '2';
    // console.log(obj);

    //let myMap = new Map();
    //obj.forEach()
    console.log(obj)

    let objNew = []
    for (var i = 0; i < obj.length; i++) {
        if (obj[i] == 'a'){
            //obj = obj.slice(1);
            obj = obj.filter(item => item)
            obj.a = '0';
        }
        if (obj[i] == 'b'){
            obj = obj.slice(1);
            obj.b = 1;
        }
        if (obj[i] == 'c'){
            obj = obj.slice(1);
            obj.c = 2;
        }
    }

    console.log(obj);

    return obj;
};


let obj = ['a','b','c' ];
//{'a':'0','b':'1','c':'2'}
//const obj = {'a':'0','b':'1','c':'2'};


Invert(obj);

console.log(obj.a == '0');
console.log(obj.b == '1');
console.log(obj.c == '2');

//code wars
//code eula

