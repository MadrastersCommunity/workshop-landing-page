/**
 * IMPORT SCSS
 */
import '../scss/styles.scss';


/**
 * Actions after DOM Loaded
 */
document.addEventListener('DOMContentLoaded', () => {

    /**
     * For Navbar Collapse
     */

    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
  
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }

    //const $workshop = Array.prototype.slice.call(document.querySelectorAll('.workshop'), 0);
    const $sidebar = Array.prototype.slice.call(document.querySelectorAll('.workshop .sidebar'), 0);
    if ($sidebar.length > 0) {
  
      $sidebar.forEach( el => {
        el.addEventListener('click', () => {
  
          const target = el.parentElement.dataset.target;
          const $target = document.getElementById(target);
  
          el.parentElement.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }



  });