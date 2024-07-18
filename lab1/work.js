function ageInput(age){
    if (typeof age !== 'number' || isNaN(age)) {
        return "Ошибка ввода";
    }

    if (age >= 0 && age <= 2) {
        return "Младенец";
    } else if (age >= 3 && age <= 13) {
        return "Ребёнок";
    } else if (age >= 14 && age <= 19) {
        return "Подросток";
    } else if (age >= 20 && age <= 65) {
        return "Взрослый";
    } else if (age > 65) {
        return "Пожилой";
    } else {
        return "Возраст не может быть отрицательным";
    }
}

console.log(ageInput(20));
console.log(ageInput(1));
console.log(ageInput(100));
console.log(ageInput(-1));

