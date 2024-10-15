// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

console.log('Fizz Buzz')

for (let i = 0; i < 100; i++)  {
    
    const num = i + 1

    const numMulTre = num % 3
    const numMulCinque = num % 5

    if (numMulTre === 0 && numMulCinque === 0) {
        console.log('FizzBuzz')
        //console.log(num)
    }

    else if (numMulTre === 0) {
        console.log('Fizz')
        //console.log(num)
    }

    else if (numMulCinque === 0) {
        console.log('Buzz')
        //console.log(num)
    }

    else {
        console.log(num)
    }

}  
