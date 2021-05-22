(function (window) {
    let classes = [];
    
    // Обновление классов блочного элемента #sentence
    // при изенении любого списка на странице
    document.querySelectorAll('select').forEach(item => {
        let index = classes.push(item.value) - 1;
        item.addEventListener('change', event => {
            classes[index] = item.value;
            sentence.className = classes.join(' ');
            console.log(classes);
        })
    });

}(window));