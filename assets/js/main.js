const menuItems = document.querySelectorAll('nav li');
const pageItems = document.querySelectorAll('.chl');
const containers = document.querySelectorAll('.ctn');


function reportWindowSize() {
    pageItems.forEach(item => {
        if (window.width > 1024) {
            item.classList.add("child-active");
            item.classList.remove("child");
        } else {
            item.classList.remove("child-active");
            item.classList.add("child");
        }
    });
    containers.forEach(item => {
        if (window.width > 1024) {
            item.classList.add("container-active");
            item.classList.remove("container");
        } else {
            item.classList.remove("container-active");
            item.classList.add("container");
        }
    });
}


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

window.onresize = reportWindowSize;


// Slider Effect ==================================
if (screen.width > 1024) {
    const gra = function(min, max) {
        return Math.random() * (max - min) + min;
    };
    const init = function() {
        let items = document.querySelectorAll(".child-active");
        for (let i = 0; i < items.length; i++) {
            items[i].style.minHeight = "100" + "vh";
        }

    };
    init();
}

// =================================================