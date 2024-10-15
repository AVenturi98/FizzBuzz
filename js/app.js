// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

console.log('Fizz Buzz')

for (let i = 0; i < 100; i++)  {
    
    const num = i + 1

    const numMulTre = num % 3
    const numMulCinque = num % 5

    if (numMulTre === 0){ 
        console.log('Fizz')
    }

    else if (numMulCinque === 0) {
        console.log('Buzz')
    }

    // else () {
    //     console.log('FizzBuzz')
    // }
}



// //stampiamo i numeri pari da 1 a 100
//  for (let i = 0; i < 100; i++) {
//  	const num = i + 1 // number

//  	const resto = num % 3 // number [0,1]

//  	if (resto === 0) {
//  		// il numero num è pari
//  		console.log(num)
//  	}
//  }

