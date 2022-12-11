function fncName(params) {
    return (
        params
    );
}


function tinhtong(a, b) {
    return a + b;
}

function getmax(a,b,c,d,e,f,g,h) {
    return Math.max(a,b,c,d,e,f,g,h)
}

const maxValue = getmax(1,2,3,4,5,6,7,8)
console.log(maxValue)

const Value = tinhtong(2,3)
console.log(Value)



const getmax2 = (a,b,c,d,e,f,g,h) =>{
    return Math.max(a,b,c,d,e,f,g,h)
}

console.log(getmax2(1,2,3,4,5,6,7,8))



const getAverage = (...params) => {
    console.log(params.length)


let sum = 0;
for(let i = 0; i < params.length; i++){
    sum += params[i]
}
console.log(sum)

let avg = 0
avg = sum / params.length
return console.log(avg)
}


getAverage(1,2,3,4,5)


const checkParams = (a,b, ...params)=> {
    console.log(a, 'đây là tham số a truyền vào')
    console.log(b, 'dây là tham số b truyền vào')
    console.log(params, 'đây là tất cả các tham số còn lại truyền vào')
}

checkParams('a', 1, 'b', 2, 'c', 3)




//copy mảng
const arr1 = [1,2,3,4,5,6,7,8,9,10]
const arr1clone = [...arr1]

console.log(arr1clone)


//nối mảng
//C1
const a = [1,2,3]
const b = [4,5,6]
const random = ['a', 'b', 'c']

const c = a.concat(b, random)
console.log(c)

//C2
const d = [...a, ...b, ...random]
console.log(d)

const multiple = (...params) => {
    let sum = 1
    for(let i = 0; i < params.length; i++){
        sum *= params[i]
    }
    return console.log(sum)
}

    const listParams = [1,2,3,4,5]
    multiple(...params)
    
    const stringConcat = (...params) =>{ 
        let str = ''
        for(let i = 0; i < params.length; i++ ){
            str += params[i]
        }
        return console.log(str)
    }
    

