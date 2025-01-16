console.log('Week 1 - Buffer example');

console.log(`File name: ${__filename}`);
console.log(`Directory name: ${__dirname}`);

//create buffer from a string
let buf1=Buffer.from('A Hello')
//template literals
console.log(`buf1: ${buf1}`);

//accessing buffer elements with index
console.log(`buf1[0]: ${buf1[0]}`);
console.log(`buf1[2]: ${buf1[2]}`);
console.log(`buf1[4]: ${buf1[4]}`);

console.log(buf1);
console.log(buf1.toString());

console.log('\nBuffer value changed to COMP3133');

buf1=Buffer.from('Welcome to COMP3133')
console.log(buf1);
console.log(`buf1: ${buf1}`);
console.log(`Number of elements in buf1: ${buf1.length}`);

//Task - write a loop to go through each element in buf1 and display the consolw
for (element of buf1){
    console.log(element+ " --- "+element.toString());
    //console.log(element.toString('hex'));
    //console.log(element.toString('utf-16le'));
}

buf1=Buffer.from('🦼🚀🥒🍁')
console.log(`buf1.toString(): ${buf1.toString()}`);
console.log(`buf1.toString('hex'): ${buf1.toString('hex')}`);
console.log(`buf1.toString('utf-8'): ${buf1.toString('utf-8')}`);
console.log(`buf1.toString('utf-16le'): ${buf1.toString('utf-16le')}`);

//Buffer.alloc() - creates buffer with specified size
let buf2=Buffer.alloc(7)
console.log(buf2);
console.log(`buf2: ${buf2}`);

//created buffer with size 4 ; all elements will have default value 'P'
buf2=Buffer.alloc(4,'P')
console.log(buf2);
console.log(`buf2: ${buf2}`);

//created buffer with size 4 ; all elements will have default value 'A'
buf2=Buffer.alloc(7,65)
console.log(buf2);
console.log(`buf2: ${buf2}`);

buf2.write('NodeJS')
console.log(`buf2: ${buf2}`);

//write '@' at index 3
buf2.write('@',3)
console.log(`buf2: ${buf2}`);

//write 'jk' at index 2
buf2.write('jk',2)
console.log(`buf2: ${buf2}`);

console.log(`\nBuffer in JSON format`);
console.log(buf2.JSON());

//copy a buffer into another
buf2.copy(buf1)

console.log(`\nBuffer.copy()`);
console.log(`buf1: ${buf1}`);
console.log(`buf2: ${buf2}`);

buf2=Buffer.from('🦼🚀🥒🍁')
//concat the buffers
let buf3=Buffer.concat([buf1.buf2])

console.log(`\nBuffer.concat()`);
console.log(`buf1: ${buf1} --- length: ${buf1.length} --- byteLength: ${buf1.bytelength}`);
console.log(`buf2: ${buf2} --- length: ${buf2.length} --- byteLength: ${buf2.bytelength}`);
console.log(`buf3: ${buf3} --- length: ${buf3.length} --- byteLength: ${buf3.bytelength}`);