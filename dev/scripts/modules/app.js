import Popper from 'popper.js';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tab';
import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';

class global {
    constructor() {
        this.myModal = document.getElementById('exampleModal');
        this.customSelect();
        this.headerNav();
        this.navSlider();
        this.bgOverlay();
        this.toggleHeader();
        this.hideDropDownOnScroll();
        this.dropDownNameUpdate();
    }

    // Header nav
    headerNav() {
        const navItem = document.querySelector('.navbar-slider');
        const navBtn = navItem.querySelector('.btn');
        if (window.innerWidth < 768) {
            navBtn.addEventListener('click', () => {
                navItem.classList.toggle('show');
            });
        }
    }

    // Toggle Header
    toggleHeader() {
        const body = document.body;
        const scrollUp = 'scroll-up';
        const scrollDown = 'scroll-down';
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                body.classList.remove(scrollUp);
                return;
            }

            if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
                // down
                body.classList.remove(scrollUp);
                body.classList.add(scrollDown);
            } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
                // up
                body.classList.remove(scrollDown);
                body.classList.add(scrollUp);
            }
            lastScroll = currentScroll;
        });
    }

    // Header nav
    bgOverlay() {
        const navItem = document.querySelector('.navbar');
        const navBtn = navItem.querySelector('.hamburger');
        navBtn.addEventListener('click', () => {
            navItem.classList.toggle('navbar--overlay');
        });
    }

    // Custom select
    customSelect() {
        var x, i, j, l, ll, selElmnt, a, b, c;
        /*look for any elements with the class "custom-select":*/
        x = document.getElementsByClassName('custom-select');
        l = x.length;
        for (i = 0; i < l; i++) {
            selElmnt = x[i].getElementsByTagName('select')[0];
            ll = selElmnt.length;
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement('DIV');
            a.setAttribute('class', 'select-selected');
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement('DIV');
            b.setAttribute('class', 'select-items select-items--is-hide');
            for (j = 1; j < ll; j++) {
                /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
                c = document.createElement('DIV');
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener('click', function (e) {
                    /*when an item is clicked, update the original select box,
        and the selected item:*/
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName('select')[0];
                    sl = s.length;
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName('same-as-selected');
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].removeAttribute('class');
                            }
                            this.setAttribute('class', 'same-as-selected');
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener('click', function (e) {
                /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle('select-items--is-hide');
                this.classList.toggle('select-selected--is-active');
            });
        }
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
  except the current select box:*/
            var x,
                y,
                i,
                xl,
                yl,
                arrNo = [];
            x = document.getElementsByClassName('select-items');
            y = document.getElementsByClassName('select-selected');
            xl = x.length;
            yl = y.length;
            for (i = 0; i < yl; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i);
                } else {
                    y[i].classList.remove('select-selected--is-active');
                }
            }
            for (i = 0; i < xl; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add('select-items--is-hide');
                }
            }
        }
        /*if the user clicks anywhere outside the select box,then close all select boxes:*/
        document.addEventListener('click', closeAllSelect);
    }

    //navbar-slider
    navSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            // console.log(document.querySelector('#slide-items').clientWidth)
            setTimeout(function(){
                if (window.innerWidth > 767) {
                    // Get the button and slide content id
                    var navbarTop = document.querySelector('.navbar-top');

                    var button = document.querySelector('#slide-button');
                    var buttonWidth = button.clientWidth;
    
                    var items = document.querySelector('#slide-items');
                    var itemsWidth = items.clientWidth;
                    
                    var slider = document.querySelector('.navbar-slider');
                    var sliderWidth = buttonWidth;
    
                    // console.log(buttonWidth, itemsWidth);
                    // console.log(button.getBoundingClientRect().width)
    
                    var width = itemsWidth + buttonWidth;
                    slider.style.setProperty('width', sliderWidth + 'px', 'important')
                    navbarTop.style.setProperty('visibility', 'visible');
                    slider.addEventListener('mouseover', () => {
                        slider.style.setProperty('width', width + 'px', 'important')
                        items.style.setProperty('visibility', 'visible', 'important')
                        slider.classList.add('bg-white');
                    })
    
                    slider.addEventListener('mouseleave', () => {
                        slider.style.setProperty('width', sliderWidth + 'px', 'important')
                    })
                }
            }, 200)
        })
    }
    
    //this method hides dropdown on scroll
    hideDropDownOnScroll(){
        window.addEventListener("scroll",() =>{
            var element = document.querySelectorAll(".navbar-main .dropdown-menu");
            if (element) {
                for (var i = 0; i < element.length; i++) {
                    element[i].classList.remove("show");
                }
            }
            var element1 = document.querySelectorAll(".navbar-main .dropdown-toggle");
            if (element1) {
                for (var i = 0; i < element1.length; i++) {
                    element1[i].classList.remove("show");
                    element1[i].setAttribute("aria-expanded", false);
                }
            }
                
        } )
    }

    dropDownNameUpdate(){
        const newsletterArchiveLinks = document.querySelectorAll('.newsletter-archive .dropdown-menu li a');
        newsletterArchiveLinks.forEach( link => {
            if(! link.classList.contains('is-passive')){
                link.addEventListener('click', function(){
                    const select = document.querySelector('.newsletter-archive .active #dropdownMenuLink');
                    var linkTitle = link.getAttribute('title');
                    select.innerHTML = linkTitle;
                });
            }
        })
    }
}

export default global;
new global();

