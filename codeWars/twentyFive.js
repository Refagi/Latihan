function solution (arr_val, arr_unit) {
  // you code goes here
  const G = 6.67e-11; // Konstanta gravitasi dalam N⋅kg⁻²⋅m²
  
  // Konversi satuan massa ke kg
  const massConversions = {
    "kg": 1,
    "g": 1e-3,
    "mg": 1e-6,
    "μg": 1e-9,
    "lb": 0.453592 //ketentuan dari soal 1lb = 0.453592 kg
  };
  
  // Konversi satuan jarak ke m
  const distanceConversions = {
    "m": 1,
    "cm": 1e-2,
    "mm": 1e-3,
    "μm": 1e-6,
    "ft": 0.3048 //ketentuan dari soal 1ft = 0.3048 m
  };
  
  // Ambil nilai massa dan jarak dari input
  let [mass1, mass2, distance] = arr_val;
  let [unit1, unit2, unit3] = arr_unit;
  
  // Konversi massa ke kg
  mass1 *= massConversions[unit1];
  mass2 *= massConversions[unit2];
  
  // Konversi jarak ke m
  distance *= distanceConversions[unit3];
  
  // Hitung gaya gravitasi
  const force = (G * mass1 * mass2) / (distance ** 2);
  
  return force;
};

console.log(solution([1000, 1000, 100], ["g", "kg", "m"])) // 6.67e-12
console.log(solution([1000, 1000, 100], ["kg", "kg", "m"])) //6.67e-9
console.log(solution([1000, 1000, 100], ["kg", "kg", "cm"])) // 0.0000667
  
