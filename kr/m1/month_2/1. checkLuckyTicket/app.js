let ticket = Number(prompt("Введите номер билета."));

function checkLuckyTicket(ticket) {
    let str = String(ticket);
    // console.log(str);

    if (str.length !== 6) {
        return false;
    }


    // let sum1 = (str[0],[1],[2]);

    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);

    if (sum1 === sum2) {
        return true;
    } else {
        return false;
    }
}

// console.log(ticket.length);

// console.log((385916).length)
console.log(checkLuckyTicket(ticket));
