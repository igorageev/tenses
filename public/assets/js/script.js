(function (window) {
    let classes = [];
    
    // Изменение каждого списка
    document.querySelectorAll('select').forEach(item => {
        let index = classes.push(item.value) - 1;
        item.addEventListener('change', event => {
            classes[index] = item.value;
            sentence.className = classes.join(' ');
            console.log(classes);
        })
    });

}(window));