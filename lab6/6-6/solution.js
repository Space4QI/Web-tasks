function attachEventsListeners() {
    var daysBtn = document.getElementById('daysBtn');
    var hoursBtn = document.getElementById('hoursBtn');
    var minutesBtn = document.getElementById('minutesBtn');
    var secondsBtn = document.getElementById('secondsBtn');
    daysBtn.addEventListener('click', function() {
        convertTime('days');
    });
    hoursBtn.addEventListener('click', function() {
        convertTime('hours');
    });
    minutesBtn.addEventListener('click', function() {
        convertTime('minutes');
    });
    secondsBtn.addEventListener('click', function() {
        convertTime('seconds');
    });
}

function convertTime(unit) {
    var inputValue = parseFloat(document.getElementById(unit).value);
    if (isNaN(inputValue)) {
        alert('Please enter a valid number.');
        return;
    }
    var days, hours, minutes, seconds;
    switch (unit) {
        case 'days':
            days = inputValue;
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
            break;
        case 'hours':
            hours = inputValue;
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;
            break;
        case 'minutes':
            minutes = inputValue;
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60;
            break;
        case 'seconds':
            seconds = inputValue;
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
            break;
    }
    document.getElementById('days').value = days.toFixed(2);
    document.getElementById('hours').value = hours.toFixed(2);
    document.getElementById('minutes').value = minutes.toFixed(2);
    document.getElementById('seconds').value = seconds.toFixed(2);
}
