const menuItems = document.querySelectorAll('nav li');
const pageItems = document.querySelectorAll('section');


// Select item inside menu ===================
pageItems.forEach(item => {
    item.addEventListener('mouseenter', e => {
        let name = item.id;

        menuItems.forEach(item => {
            let link = item.querySelector('a');
            let position = link.href.indexOf('#');
            let smallLink = link.href.substring(position);
            //alert(smallLink)

            if (smallLink == "#" + name && item.querySelector('.bouton-rdv') == null)
                item.classList.add("active");
            else
                item.classList.remove("active");

        });

    });
});

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {

        menuItems.forEach(item => {
            item.classList.remove("active");
        });


        item.classList.add("active");
    });
});