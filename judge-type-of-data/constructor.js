console.log('22'.constructor === String)             // true
console.log(true.constructor === Boolean)            // true
console.log([].constructor === Array)                // true
console.log(new Number(22).constructor === Number)   // true
console.log(new Function().constructor === Function) // true
console.log((new Date()).constructor === Date)       // true
console.log(new RegExp().constructor === RegExp)     // true
console.log(new Error().constructor === Error)       // true