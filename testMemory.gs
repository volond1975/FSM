

function myFunction() {
var store = MemoryStorage('123456'); // will default to a globally shared storage object.
var global =MemoryStorage('global');  
console.log(store.id); // alerts 'my-store'
console.log(global.id); // alerts 'global'

store.setItem('myString', 'Hello MemoryStorage!');
store.myObject = JSON.stringify({my: 'object'});
console.log(store.getItem('My string')); // alerts 'Hello MemoryStorage!'
console.log(store['My string']); // alerts 'Hello MemoryStorage!'

//console.log(store.length); // alerts '2'
//console.log(store.key(1)); // alerts 'My object'
//store.removeItem('My string');
//console.log(store.length); // alerts '1'
//store.clear();
//console.log(store.length); // alerts '0'

//Первое знакомство с прокси-объектами
const wrap = obj => {
  return new Proxy(obj, {
    get(target, propKey) {
        console.log(`Reading property "${propKey}"`)
        return target[propKey]
    }
  })
}
const object = { message: 'hello world' }
const wrapped = wrap(object)
console.log(wrapped.message)
}
