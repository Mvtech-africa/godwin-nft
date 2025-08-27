const menuToggle = document.getElementById("menu-toggle");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const popupMenu = document.getElementById("menu");



menuToggle.addEventListener("click", () => {
    toggleMenu();
})

function toggleMenu() {
    if (popupMenu.classList.contains("open")) {

        popupMenu.classList.remove("open");
        openIcon.classList.add("visible");
        closeIcon.classList.remove("visible");
    } else {

        popupMenu.classList.add("open");
        openIcon.classList.remove("visible");
        closeIcon.classList.add("visible"); 
    }
}

// ========================DIRECTIONAL ANIMATION================================




const revealFrom = document.querySelectorAll('.reveal-from');  

const revealElements = () => {  
    const windowHeight = window.innerHeight;  
    const windowBottom = window.scrollY + windowHeight;  

    revealFrom.forEach((reveal) => {  
        const revealTop = reveal.getBoundingClientRect().top + window.scrollY;  

        if (windowBottom > revealTop) {  
            const delay = reveal.dataset.delay;  
            setTimeout(() => {  
                reveal.classList.add('visible');  
            }, delay);  
        }  
    });  
};  

window.addEventListener('scroll', revealElements);  
window.addEventListener('load', revealElements);










// ========================OPACITY ANIMATION================================




const revealOpacity = document.querySelectorAll('.reveal-opacity');  

const revealOpacity1 = () => {  
    const windowHeight = window.innerHeight;  
    const windowBottom = window.scrollY + windowHeight;  

    revealOpacity.forEach((reveal) => {  
        const revealTop = reveal.getBoundingClientRect().top + window.scrollY;  

        if (windowBottom > revealTop) {  
            const delay = reveal.dataset.delay; // Get delay from data attribute  
            const opacityDuration = reveal.dataset.opacityDuration; // Get opacity duration from data attribute  

            // Apply opacity transition duration and set the visibility state  
            reveal.style.transition = `opacity ${opacityDuration}s ease`;   
            setTimeout(() => {  
                reveal.classList.add('visible'); // Add the `visible` class after the specified delay  
            }, delay);  
        }  
    });  
};  

window.addEventListener('scroll', revealOpacity1);  
window.addEventListener('load', revealOpacity1);



















// ========================ROTATION ANIMATION================================





const rotate = document.querySelectorAll('.rotate');  

const rotate1 = () => {  
    const windowHeight = window.innerHeight;  
    const windowBottom = window.scrollY + windowHeight;  

    rotate.forEach((reveal) => {  
        const revealTop = reveal.getBoundingClientRect().top + window.scrollY;  

        if (windowBottom > revealTop) {  
            const delay = reveal.dataset.delay; // Get delay from data attribute  
            setTimeout(() => {  
                reveal.classList.add('visible'); // Add `visible` class after delay  
            }, delay);  
        }  
    });  
};  

window.addEventListener('scroll', rotate1);  
window.addEventListener('load', rotate1);


// const output = document.getElementById("output");

//         function getLocation() {
//             if (navigator.geolocation) {
//                 navigator.geolocation.getCurrentPosition(showPosition, showError);
//             } else {
//                 output.innerHTML = "Geolocation is not supported by this browser.";
//             }
//         }

//         function showPosition(position) {
//             const lat = position.coords.latitude;
//             const lon = position.coords.longitude;
//             const accuracy = position.coords.accuracy;
//             const mapUrl = `https://www.google.com/maps?q=${lat},${lon}`;

//             output.innerHTML = `
//                 ✅ Latitude: ${lat} <br>
//                 ✅ Longitude: ${lon} <br>
//                 📍 Accuracy: ${accuracy} meters <br><br>
//                 🌍 <a href="${mapUrl}" target="_blank">View on Google Maps</a>
//             `;
//         }

//         function showError(error) {
//             switch(error.code) {
//                 case error.PERMISSION_DENIED:
//                     output.innerHTML = "❌ User denied the request for Geolocation.";
//                     break;
//                 case error.POSITION_UNAVAILABLE:
//                     output.innerHTML = "⚠️ Location information is unavailable.";
//                     break;
//                 case error.TIMEOUT:
//                     output.innerHTML = "⏳ The request to get user location timed out.";
//                     break;
//                 case error.UNKNOWN_ERROR:
//                     output.innerHTML = "❓ An unknown error occurred.";
//                     break;
//             }
//         }




(function () {
      const card = document.querySelector('.card');
      const imgBtn = card.querySelector('.img-btn');
      const panel = card.querySelector('.panel');

      function setOpen(open) {
        card.classList.toggle('open', open);
        imgBtn.setAttribute('aria-expanded', String(open));
      }

      // Toggle on image click/tap
      imgBtn.addEventListener('click', () => {
        setOpen(!card.classList.contains('open'));
      });

      // Close if clicking outside the card
      document.addEventListener('click', (e) => {
        if (!card.contains(e.target)) setOpen(false);
      });

      // Close with Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setOpen(false);
      });

      // Optional: close after navigating via action buttons
      panel.addEventListener('click', (e) => {
        if (e.target.closest('.btn')) setOpen(false);
      });
})();

