(function () {
    'use strict';

    const TEMPLATE = `
        <header>
            <nav class="blue lighten-3">
                <div class="nav-wrapper">
                    <a class="brand-logo">
                        <img src="images/logo-transparent-50x50.png"/>
                        Sklep internetowy
                    </a>

                    <cart-dropdown></cart-dropdown>
                </div>
            </nav>

            <product-search></product-search>
        </header>
    `;

    class PageHeader {
        constructor() {
            this.template = TEMPLATE;
        }
    }

    angular.module('shop')
        .component('pageHeader', new PageHeader);
}());
