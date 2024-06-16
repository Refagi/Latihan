 
 function greet(language) {
  let obj = {
"english": "Welcome",
"czech": "Vitejte",
"danish": "Velkomst",
"dutch": "Welkom",
"estonian": "Tere tulemast",
"finnish": "Tervetuloa",
"flemish": "Welgekomen",
"french": "Bienvenue",
"german": "Willkommen",
"irish": "Failte",
"italian": "Benvenuto",
"latvian": "Gaidits",
"lithuanian": "Laukiamas",
"polish": "Witamy",
"spanish": "Bienvenido",
"swedish": "Valkommen",
"welsh": "Croeso",
}

for (const key in obj){
  if (language === key){
    return obj[key]
  }
}
return "Welcome"
}
console.log(greet("english"))
console.log(greet("dutch"))
console.log(greet("IP_ADDRESS_INVALID"))