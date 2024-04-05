      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth',
               block: 'start',
               inline: 'nearest',
               duration: 2000
            });
         });
      });
        const sun = document.querySelector("#sunIcon");
        const bgcolor = document.body.style;
        const navbar =  document.querySelector("#home");

         sun.addEventListener('click', function () {
            if (sun.style.color === "darksalmon") {
               bgcolor.backgroundImage = "none";
               navbar.style.backgroundImage = "none";
               bgcolor.backgroundColor = "rgb(37, 35, 35)";
               navbar.style.backgroundColor = "rgb(10,10,10)";
               sun.style.color = "white";
            } else if (sun.style.color == "white") {
               bgcolor.backgroundImage = "url(./image/one.jpg)";
               navbar.style.backgroundImage = "url(./image/one.jpg)";
               sun.style.color = "darksalmon";
            }
         });
         const menuIcon = document.querySelector("#menuIcon");
         const mymenu = document.querySelector(".myMenu");
         
         menuIcon.addEventListener("click", function(){
            if (mymenu.style.display === "block") {
               mymenu.style.display = "none"; 
            } else {
                mymenu.style.display = "block"; 
            }
          });

         const menuLinks = document.querySelectorAll(".myMenuIcon a");

         menuLinks.forEach(function (menu) {
            console.log(menu);
            menu.addEventListener("click", function () {
            mymenu.style.display = "none";
            });
         });


