const toggleSwitch = document.querySelector('input[type="checkbox"]');

//function theme switch
function switchTheme(event) {
    console.log(event.target.checked);
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

//Event listener
toggleSwitch.addEventListener('change', switchTheme);

