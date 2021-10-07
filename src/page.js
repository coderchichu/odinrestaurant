const app = (function () {

    var menu = {

        init: function () {
            this.cacheDom();
            this.bindEvents();

        },

        cacheDom: function () {
            this.content = document.getElementById('content');
            this.h1 = document.createElement('h1');
            this.h2 = document.createElement('h2');
            this.p1 = document.createElement('p1');
            this.p2 = document.createElement('p2');
            this.p3 = document.createElement('p3');
            this.p4 = document.createElement('p4');
            this.p5 = document.createElement('p5');
            this.p6 = document.createElement('p6');
        },

        bindEvents: function () {
            /*for (let a of this.content) {
                a.addEventListener('click', e => {
                    console.log('working');
                })
            }*/

            this.content.addEventListener('click', e => {
                console.log('working')
            })
        },

        home: function () {

            this.h1.textContent = 'Pizza Time!';
            this.h2.textContent = "Uncle Ben's Fried Rice Bar";

            this.p1.textContent = "Wow! I did not expect the fried rice to be so good! 10/10. Ah Mc'Cain, you've done it again!";
            this.p2.textContent = "Georgy Peorgy"

            this.content.appendChild(this.h1);
            this.content.appendChild(this.h2);
            this.content.appendChild(this.p1);
            this.content.appendChild(this.p2);
        }


    }
    
    menu.init();
    menu.home();

    console.log('app loaded')


})();


export { app };