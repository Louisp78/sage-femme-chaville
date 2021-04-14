const menuItems = document.querySelectorAll('.navbar li');
const pageItems = document.querySelectorAll('.child');


pageItems.forEach(item => 
    {
        item.addEventListener('mouseenter', e => 
        {
            let name = item.id;

            menuItems.forEach(item => {
                let link = item.querySelector('a');
                let position = link.href.indexOf('#');
                let smallLink = link.href.substring(position);
                //alert(smallLink)

                if(smallLink == "#" + name && item.querySelector('.bouton-rdv') == null)
                    item.classList.add("active");
                else
                    item.classList.remove("active");

            });
            
        });
    });

menuItems.forEach(item => 
    {
        item.addEventListener('click', (e) => 
        {

            menuItems.forEach(item => {
                item.classList.remove("active");
            });


            item.classList.add("active");
        });
    });



// Slider Effect ==================================

const gra = function(min, max) {
    return Math.random() * (max - min) + min;
  };
  const init = function() {
    let items = document.querySelectorAll(".child");
    for (let i = 0; i < items.length; i++) {
      items[i].style.minHeight = "100" + "vh";
    }
  
  };
  init();

// =================================================
  
  