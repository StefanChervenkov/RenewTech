import page from '../node_modules/page/page.mjs';
import { createRenderHandler } from './libs/renderer.js';
import { HomePage } from './pages/home/homePage.js';
import { homeTemplate } from './pages/home/homeTemplate.js';
import { NavElement } from './pages/nav/navElement.js';
import { navTemplate } from './pages/nav/navTemplate.js';

let mainElement = document.querySelector('#wrapper main');
let navDomElement = document.querySelector('#wrapper header nav');
let mainRenderHandler = createRenderHandler(mainElement);
let navRenderHandler = createRenderHandler(navDomElement);

let homePage = new HomePage(homeTemplate, mainRenderHandler);
let navElement = new NavElement(navTemplate, navRenderHandler, page.show); 

page('index.html', '/');
page(navElement.showView)
page('/', homePage.showView);

page.start();




