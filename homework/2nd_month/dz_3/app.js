console.warn(" Банковские карты");

let bankCards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961",];
let visa = 0;

for (let card of bankCards) {
    if (card[0] === "4") {
        visa++;
    }

    // console.log("Карт VISA " + `${card}:${bankCards[card]}`);
}

console.log("В этом массиве карт VISA: " + visa + " из " + bankCards.length);




// for (let i = 0; i < bankCards.length; i++) {
//     if ( === 4) {
//         visa++;

//         break;
//     }
// console.log("Карт VISA " + visa + " из " + bankCards.length);
// console.log(visa);
// }
console.warn("ИНН");

let inn = ["01212201212345", "11212201212345", "21212201212345", "11212201212345", "11212201212345", "01212201212345", "21212201212345"];

let info = {
    "companies": 0,
    "women": 0,
    "men": 0
}


// [
//     ["companies"],
//     ["men"],
//     ["women"]
// ]


for (let i = 0; i < inn.length; i++) {
    if (inn[i][0] === "0") {
        info.companies = info.companies + 1;
    } else if (inn[i][0] === "1") {
        info.women = info.women + 1;
    } else if (inn[i][0] === "2") {
        info.men = info.men + 1;
    }
}

for (let x in info) {
    console.log("В этом массиве " + `${x}: ${info[x]}` + " из " + inn.length);
}

// console.log("В этом массиве " + info.companies + " companies");
// console.log("В этом массиве " + info.women + " women");
// console.log("В этом массиве " + info.men + " men");

// for (const num of inn) {
//     if (num === 0) {
//         info;
//     }
// }

// console.table(info);


console.warn("Оценки");

// let grades = [40, 55, 22, 89, 14, 78, 56, 47, 59];
// let total = [];
// if ()
// for (let grade of grades) {
//     if (grade === 0 || grade >= 20) {
//         total === 5;
//     } else if (grade === 21 || grade >= 40) { 
//         total === 4;
//     }
//}

// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] === 0 || grades[i] === 20) {
//         total === 5;
//     }
// }

// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= 0 && grades[i] <= 20) {
//         total.push(1);
//     } else if (grades[i] >= 21 && grades[i] <= 40) {
//         total.push(2);
//     } else if (grades[i] >= 41 && grades[i] <= 60) {
//         total.push(3);
//     } else if (grades[i] >= 61 && grades[i] <= 80) {
//         total.push(4);
//     } else if (grades[i] >= 81 && grades[i] <= 100) {
//         total.push(5);
//     }
// }


// console.log(grades);
// console.log(total);

// let count5 = 0;
// let count4 = 0;

// for (let i = 0; i < total.length; i++) {
//     if (total[i] === 5) {
//         count5++;
//     } else if (total[i]===4){
//         count4++;
//     }
// }

// console.log("В этом массиве оценок " + count5 + " из " + total.length);

let grades = [40, 55, 22, 89, 14, 78, 56, 47, 59];
let stats = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
};

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 0 && grades[i] <= 20) {
        stats["1"] = stats["1"] + 1;
    } else if (grades[i] >= 21 && grades[i] <= 40) {
        stats["2"] = stats["2"] + 1;
    } else if (grades[i] >= 41 && grades[i] <= 60) {
        stats["3"] = stats["3"] + 1;
    } else if (grades[i] >= 61 && grades[i] <= 80) {
        stats["4"] = stats["4"] + 1;
    } else if (grades[i] >= 81 && grades[i] <= 100) {
        stats["5"] = stats["5"] + 1;
    }
}

for (let x in stats) {
    console.log("В этом массиве оценок: " + stats[x] + " балл(а)" + " - " + x);
}