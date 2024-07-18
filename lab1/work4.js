function vacation(group, day, quantity){
    switch(true){
        case quantity >= 30 && group == "Студенты":
            if (day == "Пятница") {
                return (quantity * 8.45 - quantity * 8.45 * 0.15).toFixed(2);
            } else if (day == "Суббота") {
                return (quantity * 9.8 - quantity * 9.8 * 0.15).toFixed(2);
            } else {
                return (quantity * 10.46 - quantity * 10.46 * 0.15).toFixed(2);
            }
        case quantity < 30 && group == "Студенты":
            if(day == "Пятница"){
                return (quantity * 8.45).toFixed(2);
            }
            else if(day == "Суббота"){
                return (quantity * 9.8).toFixed(2);
            }
            else{
                return (quantity * 10.46).toFixed(2);
            }
        case quantity >= 100 && group == "Корпоративная":
            if(day == "Пятница"){
                return ((quantity - 10) * 10.90).toFixed(2);
            }
            else if(day == "Суббота"){
                return ((quantity - 10) * 15.60).toFixed(2);
            }
            else{
                return ((quantity - 10) * 16).toFixed(2);
            }
        case quantity < 100 && group == "Корпоративная":
            if(day == "Пятница"){
                return (quantity * 10.90 - quantity * 10.90 * 0.15).toFixed(2);
            }
            else if(day == "Суббота"){
                return (quantity * 15.60 - quantity * 15.60 * 0.15).toFixed(2);
            }
            else{
                return (quantity * 16 - quantity * 16 * 0.15).toFixed(2);
            }
        case quantity >= 10 && quantity <= 20 && group == "Обычная":
            if(day == "Пятница"){
                return ((quantity - 10) * 15).toFixed(2);
            }
            else if(day == "Суббота"){
                return ((quantity - 10) * 20).toFixed(2);
            }
            else{
                return ((quantity - 10) * 22.5).toFixed(2);
            }
        case quantity < 10 || quantity > 20 && group == "Обычная":
            if(day == "Пятница"){
                return (quantity * 15).toFixed(2);
            }
            else if(day == "Суббота"){
                return (quantity * 20).toFixed(2);
            }
            else{
                return (quantity * 22.50).toFixed(2);
            }
    }
}

console.log(vacation("Студенты", "Пятница", 25));
console.log(vacation("Студенты", "Суббота", 30));
console.log(vacation("Студенты", "Воскресенье", 32));
