
const numbers = [5, 4, 3, 3, 2, 4];
const stars = numbers.map(n => "★".repeat(n));
console.log(stars);

const words = ["HTML", "CSS", "JavaScript", "TypeScript"];
const trimmed = words.map(w => w.length >= 6 ? w.slice(0, 5) + "…" : w);
console.log(trimmed);

const dollars = ["1000$", "500$", "100$", "50$"];
const rate = 87.4; 
const som = dollars.map(d => {
    const value = parseInt(d);
    return (value * rate) + "с";
});
console.log(som);


const names = ["Евгений", "Аркадий", "Федор", "Иван", "Василий"];
const filteredNames = names.filter(name => name.endsWith("ий"));
console.log(filteredNames);



const phones = ["0555252525", "07020002222", "0777225588", "1234678", "00000", "0707114477"];
const realPhones = phones.filter(phone => phone.startsWith("0") && phone.length === 10);
console.log(realPhones);