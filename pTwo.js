function tString( str = "Cristhian" ){
    let name = str;
    console.log(`Hello, ${ str }!`);
    console.log(`Your name lowercased is "${ str.toLowerCase() }".`);
}

tString( process.argv[2]);