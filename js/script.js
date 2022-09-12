class MobileNavbar {
    constructor(MobileMenu, navList, navLinks) {
        this.MobileMenu = document.querySelector(MobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animatedLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.MobileMenu.classList.toggle(this.activeClass);
        this.animatedLinks();
    }

    addClickEvent () {
        this.MobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if(this.MobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu",
    ".menu li",
);
mobileNavbar.init();