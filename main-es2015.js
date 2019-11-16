(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--End of Preloader-->\n\n<div class=\"page-border\" data-wow-duration=\"0.7s\" data-wow-delay=\"0.2s\">\n    <div class=\"top-border wow fadeInDown animated\" style=\"visibility: visible; animation-name: fadeInDown;\"></div>\n    <div class=\"right-border wow fadeInRight animated\" style=\"visibility: visible; animation-name: fadeInRight;\"></div>\n    <div class=\"bottom-border wow fadeInUp animated\" style=\"visibility: visible; animation-name: fadeInUp;\"></div>\n    <div class=\"left-border wow fadeInLeft animated\" style=\"visibility: visible; animation-name: fadeInLeft;\"></div>\n</div>\n\n<div id=\"wrapper\">\n\n \n\n    <!--Main Content Area-->\n    <main id=\"content\">\n     \n         <app-navigation></app-navigation>\n        \n       <router-outlet></router-outlet>\n       <app-footer></app-footer>\n    </main>\n    <!--End Main Content Area-->\n\n    \n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <!--blog Tables-->\n        <section id=\"blog\" class=\"secondary-color text-center scrollto clearfix \">\n            <div class=\"row clearfix\" *ngIf=\"post\" >\n\n                \n                <div class=\"post-block col-1 wow fadeInUp\" data-wow-delay=\"0.4s\">\n              <app-post [post]=\"post\"></app-post>\n\n               </div>\n            <a (click) = \"getBack()\" class=\"button\">Back</a>\n            </div>\n        </section>\n        <!--End of blog Tables-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <!--blog Tables-->\n        <section id=\"blog\" class=\"secondary-color text-center scrollto clearfix \">\n            <div class=\"row clearfix\">\n\n                <div class=\"section-heading\">\n                    <h3>{{blog.tagline}}</h3>\n                    <h2 class=\"section-title\">{{blog.tittle | uppercase}}</h2>\n                </div>\n                <div *ngFor=\"let post of pages\" class=\"post-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\">\n              <app-post [post]=\"post\"></app-post>\n\n               </div>\n\n            </div>\n            <div class=\"row clearfix\"  >\n            <app-pagination [pager]=\"pager\" (setPage)=\"setPage($event)\"></app-pagination>\n\n          \n            </div>\n        </section>\n        <!--End of blog Tables-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <!--Clients-->\n        <section id=\"clients\" class=\"scrollto clearfix\">\n                <div class=\"row clearfix\">\n    \n                    <div class=\"col-3\">\n    \n                        <div class=\"section-heading\">\n                            <h3>{{clients.tagline}}</h3>\n                            <h2 class=\"section-title\">{{clients.tittle}}</h2>\n                            <p class=\"section-subtitle\">{{clients.description}}</p>\n                        </div>\n    \n                    </div>\n    \n                    <div class=\"col-2-3\">\n    \n                        <a href=\"{{company.weblink}}\" class=\"col-3\" *ngFor=\"let company of clients.companies\" >\n                            <img src=\"../assets/images/company-images/{{company.logo}}\" alt=\"{{company.name}}\"/>\n                            <div class=\"client-overlay\"><span>{{company.name}}</span></div>\n                        </a>\n                        \n    \n                    </div>\n    \n                </div>\n            </section>\n            <!--End of Clients-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n      <div class=\"container\">\n          <div class=\"center-form panel\">\n              <div class=\"panel-body\">\n                <h4 class=\"text-center\"><i class=\"ion-edit\"></i> Contact Us</h4>\n    \n                <form [formGroup]=\"contactusForm\" (ngSubmit)=\"sendMessage(contactusForm.value)\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control input-lg form-names\" formControlName=\"firstName\" name=\"lastname\" placeholder=\"First name\">\n                        <input type=\"text\" class=\"form-control input-lg form-names\" formControlName=\"lastName\" name=\"lastname\" placeholder=\"Last Name\">\n                        <span class=\"ion-person form-control-icon\"></span>                                          \n                      </div>                          \n\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control input-lg\" formControlName=\"email\" name=\"email\" placeholder=\"Email\">\n                    <span class=\"ion-at form-control-icon\"></span>\n                  </div>\n                  <div class=\"form-group\">\n                    <textarea rows=\"10\" cols=\"100\" class=\"form-control input-lg\" formControlName=\"password\" name=\"password\" placeholder=\"Password\">\n\n                    </textarea>\n                    <span class=\"ion-edit form-control-icon\"></span>\n                  </div>\n    \n                  <button type=\"submit\" [class.disabled]=\"!contactusForm.valid\" class=\"btn btn-block btn-success\">Send</button>\n                  <br/>\n    \n                  <p class=\"text-center\">\n                    <small> Leave us a message and we will contact you!<a routerLink=\"/home\"> Home</a></small> \n                  </p>\n    \n                </form>\n\n            </div>\n        </div>\n      </div>\n    </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <!--Content Section-->\n <div id=\"services\" class=\"scrollto clearfix\">\n\n        <div class=\"row no-padding-bottom clearfix\">\n\n\n            <!--Content Left Side-->\n            <div class=\"col-3\">\n                <!--User Testimonial-->\n                <blockquote class=\"testimonial text-right bigtest\">\n                    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n                        labore\n                        et dolore magna aliqua</q>\n                    <footer>— John Doe, Happy Customer</footer>\n                </blockquote>\n                <!-- End of Testimonial-->\n\n            </div>\n            <!--End Content Left Side-->\n\n            <!--Content of the Right Side-->\n            <div class=\"col-3\">\n                <div class=\"section-heading\">\n                    <h3>{{services.tagline}}</h3>\n                    <h2 class=\"section-title\">{{services.tittle}}</h2>\n                    <p class=\"section-subtitle\">{{services.description}}</p>\n                </div>\n                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae\n                    dicta sunt explicabo.\n                </p>\n                <p>\n                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\n                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\n                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!\n                </p>\n                <!-- Just replace the Video ID \"UYJ5IjBRlW8\" with the ID of your video on YouTube (Found within the URL) -->\n                <a href=\"#\" data-videoid=\"UYJ5IjBRlW8\" data-videosite=\"youtube\" class=\"button video link-lightbox\">\n                    WATCH VIDEO <i class=\"fa fa-play\" aria-hidden=\"true\"></i>\n                </a>\n            </div>\n            <!--End Content Right Side-->\n            <div class=\"col-3\">\n                    <img src=\"../assets/images/dancer.jpg\" alt=\"Dancer\"/>\n                </div>\n\n            </div>\n\n\n        </div>\n        <!--End of Content Section-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <!--Footer-->\n    <footer id=\"landing-footer\" class=\"clearfix\">\n            <div class=\"row clearfix\">\n    \n                <p id=\"copyright\" class=\"col-2\">{{footer.copyrightText}} <a href=\"{{footer.devoloperlink}}\">{{footer.developer}}</a></p>\n    \n                <!--Social Icons in Footer-->\n                <div class=\"col-2 social-icons\" id=\"footer-social\">\n                  <app-social></app-social>\n                </div>\n                <!--End of Social Icons in Footer-->\n            </div>\n        </footer>\n        <!--End of Footer-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Gallery-->\n<aside id=\"gallery\" class=\"row text-center scrollto clearfix\" data-featherlight-gallery\ndata-featherlight-filter=\"a\">\n<div *ngFor=\"let image of gallery.images\"> \n<a href=\"../assets/images/gallery-images/{{image}}\" data-featherlight=\"image\" class=\"col-3 wow fadeIn\"\n  data-wow-delay=\"0.1s\">\n  <img src=\"../assets/images/gallery-images/{{image}}\" alt=\"Landing Page\"/>\n</a>\n</div>\n\n</aside>\n<!--End of Gallery-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n       <header id=\"banner\" class=\"scrollto clearfix\" data-enllax-ratio=\".5\">\n\n        <!--Banner Content-->\n        <div id=\"banner-content\" class=\"row clearfix\">\n\n            <div class=\"col-38\">\n                \n\n                <div class=\"section-heading\">\n                    <h1>{{header.heading}}</h1>\n                    <h2>{{header.headingtext}}</h2>\n                </div>\n\n                <!--Call to Action-->\n                <a href=\"{{header.buttonlink}}\" class=\"button\">{{header.buttontext}}</a>\n                <!--End Call to Action-->\n\n            </div>\n\n        </div><!--End of Row-->\n    \n    </header> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--Introduction-->\n<section id=\"about\" class=\"introduction scrollto\">\n\n        <div class=\"row clearfix\">\n\n            <div class=\"col-3\">\n                <div class=\"section-heading\">\n                    <h3>{{intro.tagline}}</h3>\n                    <h4 class=\"section-title\">{{intro.tittle}}</h4>\n                    <p class=\"section-subtitle\">{{intro.description}}</p>\n                </div>\n\n            </div>\n\n            <div class=\"col-2-3\">\n\n                <!--Icon Block-->\n                <div class=\"col-2 icon-block icon-top wow fadeInUp\" data-wow-delay=\"0.1s\" *ngFor=\"let feature of intro.features\">\n                    <!--Icon-->\n                    <div class=\"icon\">\n                        <i class=\"fa fa-{{feature.icon}} fa-2x\"></i>\n                    </div>\n                    <!--Icon Block Description-->\n                    <div class=\"icon-block-description\">\n                        <h4>{{feature.tittle}}</h4>\n                        <p>{{feature.description}}</p>\n                    </div>\n                </div>\n                <!--End of Icon Block-->\n\n\n            </div>\n\n        </div>\n\n\n    </section>\n    <!--End of Introduction-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n\n      <div class=\"container\">\n          <div class=\"center-form panel\">\n              <div class=\"panel-body\">\n                <h4 class=\"text-center\"><i class=\"ion-log-in\"></i> Login</h4>\n\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control input-lg\" formControlName=\"email\" name=\"email\" placeholder=\"Email\">\n                    <span class=\"ion-at form-control-icon\"></span>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control input-lg\" formControlName=\"password\" name=\"password\" placeholder=\"Password\">\n                    <span class=\"ion-key form-control-icon\"></span>\n                  </div>\n\n                  <button type=\"submit\" [class.disabled]=\"!loginForm.valid\" class=\"btn btn-block btn-success\">Login</button>\n                  <br/>\n\n                  <p class=\"text-center\">\n                    <small> Don't have an account yet?<a routerLink=\"/signup\"> Sign up</a></small> \n                  </p>\n\n                </form>\n\n            </div>\n        </div>\n      </div>\n    </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"header\" class=\"nav-collapse\">\n    <div class=\"row clearfix\">\n        <div class=\"col-1\">\n\n            <!--Logo-->\n            <div id=\"logo\">\n\n                <!--Logo that is shown on the banner-->\n                <img src=\"../assets/images/logo.png\" id=\"banner-logo\" alt=\"Landing Page\"/>\n                <!--End of Banner Logo-->\n\n                <!--The Logo that is shown on the sticky Navigation Bar-->\n                <img src=\"../assets/images/logo-2.png\" id=\"navigation-logo\" alt=\"Landing Page\"/>\n                <!--End of Navigation Logo-->\n\n            </div>\n            <!--End of Logo-->\n            <aside>\n           <app-social></app-social>\n           </aside>\n            \n<!--Main Navigation-->\n<nav id=\"nav-main\">\n<ul>\n<li>\n    <a routerLink=\"/Home\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n</li>\n<li>\n    <a routerLink=\"/About\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">About</a>\n</li>\n<li>\n    <a routerLink=\"/Gallery\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Gallery</a>\n</li>\n<li>\n    <a routerLink=\"/Services\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Services</a>\n</li>\n<li>\n    <a routerLink=\"/Testimonials\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Testimonials</a>\n</li>\n<li>\n    <a routerLink=\"/Clients\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Clients</a>\n</li>\n<li>\n    <a routerLink=\"/Pricing\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Pricing</a>\n</li>\n<li>\n    <a routerLink=\"/Blog\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Blog</a>\n</li>\n<li>\n    <a (click)=\"logout()\" >Logout</a>\n</li>\n</ul>\n</nav>\n<!--End of Main Navigation-->\n\n            <div id=\"nav-trigger\"><span></span></div>\n            <nav id=\"nav-mobile\"></nav>\n\n        </div>\n    </div>\n</div><!--End of Header-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class = \"big-text\">404</h1>\n<h2>!!!Nothing found here!!! Try our <a routerLink=\"/Home\">Home page</a></h2>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagination/pagination.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagination/pagination.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul *ngIf=\"pager\" class=\"pagination\">\n    <li [class.disabled]=\"pager.currentPage == 1\">\n      <a (click)=\"setCurrentPage(1)\">First</a>\n    </li>\n    <li [class.disabled]=\"pager.currentPage == 1\">\n      <a (click)=\"setCurrentPage(pager.currentPage - 1)\">Previous</a>\n    </li>\n    <li *ngFor=\"let page of pager.pages\" [class.active]=\"pager.currentPage == page\">\n        <a (click)=\"setCurrentPage(page)\">{{page}}</a>\n    </li>\n    <li [class.disabled]=\"pager.currentPage == pager.totalPages\">\n      <a (click)=\"setCurrentPage(pager.currentPage + 1)\">Next</a>\n    </li>\n    <li [class.disabled]=\"pager.currentPage == pager.totalPages\">\n      <a (click)=\"setCurrentPage(pager.totalPages)\">Last</a>\n    </li>\n</ul> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!--post Block-->\n  \n    <div class=\"post-block-content\">\n        <h3>{{post.tittle}}</h3>\n        <p class=\"post-sub\">By {{post.author}} | {{post.publishdate | date:'dd/MMM/yyyy'}}</p>\n        <div class=\"post-featured-image\">\n            <img src=\"../../assets/images/gallery-images/{{post.image}}\">\n        </div>\n        <ul>\n           {{post.excert}} \n        </ul>\n        <a routerLink=\"/article/{{post.id}}\" class=\"\">Read More..</a>\n    </div>\n\n<!--End post Block-->\n\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <!--Pricing Tables-->\n        <section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n                <div class=\"row clearfix\">\n    \n                    <div class=\"section-heading\">\n                        <h3>{{pricing.tagline}}</h3>\n                        <h2 class=\"section-title\">{{pricing.tittle}}</h2>\n                    </div>\n    \n                    <!--Pricing Block-->\n                    <div class=\"pricing-block col-3 wow fadeInUp\" data-wow-delay=\"0.4s\" *ngFor=\"let plan of pricing.plans\" [class.featured]=\"plan.featured\">\n                        <div class=\"pricing-block-content\">\n                            <h3>{{plan.tittle2}}</h3>\n                            <p class=\"pricing-sub\">{{plan.subtittle}}</p>\n                            <div class=\"pricing\">\n                                <div class=\"price\"><span>{{plan.cuurency}}</span>{{plan.price}}</div>\n                                <p>{{plan.description}}</p>\n                            </div>\n                            <ul>\n                                <li>{{plan.downloads}}</li>\n                                <li>{{plan.extensions}}</li>\n                                <li>{{plan.tutorials}}</li>\n                                <li>{{plan.support}}</li>\n                                <li>{{plan.updates}}</li>\n                            </ul>\n                            <a href=\"{{plan.buttonlink}}\" class=\"button\">{{plan.buttontext}}</a>\n                        </div>\n                    </div>\n                    <!--End Pricing Block-->\n    \n                   \n    \n                </div>\n            </section>\n            <!--End of Pricing Tables-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"pricing\" class=\"secondary-color text-center scrollto clearfix \">\n    <div class=\"row clearfix\">\n  \n      <div class=\"container\">\n  \n        <div class=\"center-form panel\">\n          <div class=\"panel-body\">\n          <h4 class=\"text-center\"><i class=\"ion-person-add\"></i> Sign up</h4>\n  \n          <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\">\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"firstName\" name=\"firstName\" placeholder=\"First Name\">\n                <input type=\"text\" class=\"form-control form-names input-lg\" formControlName=\"lastName\" name=\"lastName\" placeholder=\"Last name\">\n                  <span class=\"ion-person form-control-icon\"></span> \n              </div>\n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control input-lg\" formControlName=\"email\" name=\"email\" placeholder=\"Email\">\n              <span class=\"ion-at form-control-icon\"></span> \n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control input-lg\" formControlName=\"password\" name=\"password\" placeholder=\"Password\">\n                <span class=\"ion-key form-control-icon\"></span> \n            </div>\n  \n            <button type=\"submit\" class=\"btn btn-block btn-success\"> Sign up</button>\n  \n            <p class=\"text-center\">\n              <small>Aleary have an account! <a routerLink=\"/login\"> Login</a></small>\n  \n            </p>\n  \n          </form>\n  \n        </div>\n        </div>\n  \n      </div>\n  \n    </div>\n  <section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/social/social.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/social/social.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aside>\n<aside>\n    <ul class=\"social-icons\"> \n    <li *ngFor=\"let website of socialsites\">\n        <a target=\"{{website.target}}\" title=\"{{website.tittle1}}\" href=\"{{website.link}}{{website.username}}\">\n            <i class=\"fa fa-{{website.icon}} fa-1x\"></i><span>{{website.tittle1}}</span>\n        </a>\n    </li>\n</ul>\n    <!--End of Social Icons in Header-->\n\n</aside>\n</aside>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonial/testimonial.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonial/testimonial.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n        <!--Testimonials-->\n        <aside id=\"testimonials\" class=\"scrollto text-center\" data-enllax-ratio=\".2\">\n\n                <div class=\"row clearfix\">\n    \n                    <div class=\"section-heading\">\n                        <h3>{{testimonials.tagline}}</h3>\n                        <h2 class=\"section-title\">{{testimonials.tittle}}</h2>\n                    </div>\n    \n                    <!--User Testimonial-->\n                    <blockquote class=\"col-3 testimonial classic\" *ngFor=\"let feedback of testimonials.feedbacks\" >\n                        <img src=\"../assets/images/user-images/{{feedback.userImage}}\" alt=\"User\"/>\n                        <q>{{feedback.comments}}</q>\n                        <footer>{{feedback.name}} - {{feedback.company}}</footer>\n                    </blockquote>\n                    <!-- End of Testimonial-->\n    \n                   \n                </div>\n    \n            </aside>\n            <!--End of Testimonials-->\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");

















const routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"] },
    { path: 'About', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ContactusComponent"] },
    { path: 'Gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"] },
    { path: 'Services', component: _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"] },
    { path: 'Testimonials', component: _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_6__["TestimonialComponent"] },
    { path: 'Clients', component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_7__["ClientsComponent"] },
    { path: 'Pricing', component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"] },
    { path: 'Blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_16__["GuardService"]] },
    { path: 'article/:id', component: _article_article_component__WEBPACK_IMPORTED_MODULE_11__["ArticleComponent"] },
    { path: '404', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_12__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'website';
    }
    ngOnInit() {
        /* Parallax Effects
          if (!!(<any>$).prototype.enllax) {
              (<any>$)(window).enllax();
        }*/
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testimonial/testimonial.component */ "./src/app/testimonial/testimonial.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/clients/clients.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pricing/pricing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./social/social.component */ "./src/app/social/social.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pager.service */ "./src/app/pager.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");






























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"],
            _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
            _testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_8__["TestimonialComponent"],
            _clients_clients_component__WEBPACK_IMPORTED_MODULE_9__["ClientsComponent"],
            _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_10__["PricingComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _social_social_component__WEBPACK_IMPORTED_MODULE_13__["SocialComponent"],
            _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_14__["NavigationComponent"],
            _blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"],
            _post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"],
            _article_article_component__WEBPACK_IMPORTED_MODULE_18__["ArticleComponent"],
            _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_19__["NotfoundComponent"],
            _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__["PaginationComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
            _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_23__["ContactusComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"],
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_26__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_27__["InMemoryDataService"], { dataEncapsulation: false })
        ],
        providers: [_config_service__WEBPACK_IMPORTED_MODULE_15__["ConfigService"], _pager_service__WEBPACK_IMPORTED_MODULE_21__["PagerService"], _authentication_service__WEBPACK_IMPORTED_MODULE_29__["AuthenticationService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/article/article.component.css":
/*!***********************************************!*\
  !*** ./src/app/article/article.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let ArticleComponent = class ArticleComponent {
    constructor(route, config, location) {
        this.route = route;
        this.config = config;
        this.location = location;
        this.post = {};
    }
    ngOnInit() {
        let id = +this.route.snapshot.paramMap.get('id');
        this.post = this.getPostByID(id);
    }
    getPostByID(id) {
        return this.config.getPostByID(id);
    }
    getBack() {
        this.location.back();
    }
};
ArticleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./article.component.css */ "./src/app/article/article.component.css")).default]
    })
], ArticleComponent);



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthenticationService = class AuthenticationService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = 'api/users';
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    signup(formData) {
        return this.http.post(`${this.apiUrl}/signup`, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(user => {
            console.log(user);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('signup', [])));
    }
    login(formData) {
        return this.http.post(`${this.apiUrl}/login`, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(user => {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('login', [])));
    }
    logout() {
        if (localStorage.getItem('currentUser')) {
            localStorage.removeItem('currentUser');
            this.router.navigate(['/home']);
        }
    }
    isloggedIn() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    }
    getUser() {
        if (this.isloggedIn) {
            return JSON.parse(localStorage.getItem('currentUser'));
        }
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _pager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pager.service */ "./src/app/pager.service.ts");




let BlogComponent = class BlogComponent {
    constructor(config, pagerService) {
        this.config = config;
        this.pagerService = pagerService;
        this.blog = {};
        this.pageSize = 3;
        this.pager = {};
    }
    ngOnInit() {
        this.blog = this.getBlog();
        this.allItems = this.blog.posts;
        this.setPage(1);
    }
    getBlog() {
        return this.config.getConFig().blog;
    }
    setPage(pageNumber) {
        //creating pager service using paging service
        this.pager = this.pagerService.getPager(this.allItems.length, pageNumber, this.pageSize);
        //current page posts
        this.pages = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        console.log(this.pager);
    }
};
BlogComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: _pager_service__WEBPACK_IMPORTED_MODULE_3__["PagerService"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/clients/clients.component.css":
/*!***********************************************!*\
  !*** ./src/app/clients/clients.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/clients/clients.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clients/clients.component.ts ***!
  \**********************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



let ClientsComponent = class ClientsComponent {
    constructor(config) {
        this.config = config;
        this.clients = {};
    }
    ngOnInit() {
        this.clients = this.getClients();
    }
    getClients() {
        return this.config.getConFig().clients;
    }
};
ClientsComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clients',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/clients.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clients.component.css */ "./src/app/clients/clients.component.css")).default]
    })
], ClientsComponent);



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/configuration.ts");



let ConfigService = class ConfigService {
    constructor() {
        this.config = _configuration__WEBPACK_IMPORTED_MODULE_2__["configuration"];
    }
    getConFig() {
        return this.config;
    }
    getPostByID(id) {
        return this.config.blog.posts[id - 1];
    }
};
ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfigService);



/***/ }),

/***/ "./src/app/configuration.ts":
/*!**********************************!*\
  !*** ./src/app/configuration.ts ***!
  \**********************************/
/*! exports provided: configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configuration", function() { return configuration; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const configuration = {
    header: {
        heading: 'My Web',
        headingtext: "Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!",
        buttontext: 'do some action!',
        buttonlink: '/home'
    },
    intro: {
        tagline: 'SUCCESS',
        link: '', tittle: 'How We Help You To Sell Your Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        features: [{ icon: 'html5', link: '', tittle: 'HTML5 and CSS3', description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choroneglegentur iudico' },
            { icon: 'bolt', link: '', tittle: 'Easy to Use', description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi' },
            { icon: 'tablet', link: '', tittle: 'Fully Responsive', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
            { icon: 'rocket', link: '', tittle: 'Parallax Effect', description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' }]
    },
    services: {
        tagline: 'BELIEVING',
        link: '', tittle: 'Focusing On What Matters Most',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    },
    testimonials: {
        tagline: 'FEEDBACK',
        link: '', tittle: 'What our customers are saying',
        description: '',
        feedbacks: [
            { name: 'John Doe ', userImage: 'user-3.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'Tree' },
            { name: 'Roslyn Doe', userImage: 'user-2.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'Goat' },
            { name: 'Thomas Doe', userImage: 'user-1.jpg', comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'The Man' },
        ]
    },
    clients: {
        tagline: 'TRUST',
        link: '', tittle: 'Companies who use our service',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!!',
        companies: [
            { name: 'TREE', weblink: 'company-logo1.png', logo: 'company-logo1.png' },
            { name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png' },
            { name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png' },
            { name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png' },
            { name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png' },
            { name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png' },
            { name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png' },
            { name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png' },
            { name: 'Hot', weblink: 'company-logo9.png', logo: 'company-logo9.png' }
        ]
    },
    priceing: {
        tagline: 'SUCCESS',
        link: '', tittle: 'How we help you to enjoy your product',
        description: '',
        plans: [
            { link: '', tittle: 'PERSONAL', sublink: '', tittle2: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '19', cuurency: '₹',
                downloads: '5 Downloads', extensions: '2 Extensions', tutorials: 'Tutorials', support: 'Forum Support', updates: '1 year free updates',
                buttontext: '!Buy Now!', buttonlink: '#', featured: true
            },
            { link: '', tittle: 'STUDENT', sublink: '', tittle2: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '29', cuurency: '₹',
                downloads: '15 Downloads', extensions: '5 Extensions', tutorials: 'Tutorials with Files', support: 'Forum Support', updates: '2 year free updates',
                buttontext: '!Buy Now!', buttonlink: '#', featured: true
            },
            { link: '', tittle: 'BUSINESS', sublink: '', tittle2: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '49', cuurency: '₹',
                downloads: 'Unlimited Downloads', extensions: 'Unlimited Extensions', tutorials: 'HD Vedio Tutorials', support: 'Chat Support', updates: 'Lifetime free updates',
                buttontext: '!Buy Now!', buttonlink: '#', featured: true
            },
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg'
        ]
    },
    footer: {
        active: true,
        copyrightText: 'Made with sheer hardwork by',
        developer: 'Adi & Tushar Studio',
        devoloperlink: 'https://www.shapingrain.com',
    },
    socialsites: [
        { link: 'https://www.facebook.com/', tittle1: 'Facebook', target: '_blank', username: 'AdiTushar', icon: 'facebook' },
        { link: 'http://google.com/+', tittle1: 'Google+', target: '_blank', username: 'AdiTushar', icon: 'google-plus' },
        { link: 'http://www.twitter.com/', tittle1: 'Twitter', target: '_blank', username: 'AdiTushar', icon: 'twitter' },
        { link: 'http://www.instagram.com/', tittle1: 'Instagram', target: '_blank', username: 'AdiTushar', icon: 'instagram' },
        { link: 'http://www.behance.net', tittle1: 'Behance', target: '_blank', username: '', icon: 'behance' },
    ],
    blog: {
        tagline: 'My Blog',
        tittle: 'Thoughts become things',
        posts: [
            { id: 1, tittle: 'The first Article', author: 'Adi', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 2, tittle: 'The second Article', author: 'Adi', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 3, tittle: 'The third Article', author: 'Adi', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 4, tittle: 'The fourth Article', author: 'Adi', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 5, tittle: 'The five Article', author: 'Adi', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 6, tittle: 'The six Article', author: 'Adi', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 7, tittle: 'The seven Article', author: 'Adi', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 8, tittle: 'The eight Article', author: 'Adi', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 9, tittle: 'The nine Article', author: 'Adi', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 10, tittle: 'The ten Article', author: 'Adi', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
            { id: 11, tittle: 'The eleven Article', author: 'Adi', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the Summary of our articles' },
        ]
    }
};


/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n    \n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 8px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-names{\n    /* padding-left: 42px; */\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: inline-block;\n    width: 50%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-primary {\n    color: #ffffff;\n    background-color: #2196f3;\n    border-color: transparent;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\n    /* padding: 0; */\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFdBQVc7SUFDWCxzRUFBc0U7QUFDMUU7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixzRUFBc0U7QUFDMUU7QUFFQSxtQkFBbUIsa0JBQWtCO0lBQ2pDLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIFxufVxuc2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuLnBhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5wYW5lbC1ib2R5e1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uY2VudGVyLWZvcm0ge1xuICAgIHdpZHRoOiAzMTVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMGVtO1xufVxuLmZvcm0tZ3JvdXB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZm9ybS1jb250cm9se1xuICAgIHBhZGRpbmctbGVmdDogNDJweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjZTUxYzIzO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbn1cblxuLmZvcm0tbmFtZXN7XG4gICAgLyogcGFkZGluZy1sZWZ0OiA0MnB4OyAqL1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwICNlNTFjMjM7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xufVxuXG4uZm9ybS1jb250cm9sLWljb257cG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA0NnB4O1xuICAgIGhlaWdodDogNDZweDtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg0NjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYnRuLWJsb2Nre1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uc2lnbnVwLW9yLXNlcGFyYXRvcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyOXB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uc2lnbnVwLW9yLXNlcGFyYXRvciAudGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNpZ251cC1vci1zZXBhcmF0b3IgaHIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAtMTZweCBhdXRvIDEwcHggYXV0bztcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZTBlMDtcbn1cblxuW3R5cGU9dGV4dF0uZm9ybS1jb250cm9sLCBbdHlwZT10ZXh0XS5mb3JtLW5hbWVzLCBbdHlwZT1wYXNzd29yZF0uZm9ybS1jb250cm9sIHtcbiAgICAvKiBwYWRkaW5nOiAwOyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICNkZGRkZGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5bY2xhc3NePSdpb24tJ10ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ContactusComponent = class ContactusComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.contactusForm = this.fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    sendMessage(formData) {
        console.log(formData);
    }
};
ContactusComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")).default]
    })
], ContactusComponent);



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



let ContentComponent = class ContentComponent {
    constructor(config) {
        this.config = config;
        this.services = {};
    }
    ngOnInit() {
        this.services = this.getServices();
    }
    getServices() {
        return this.config.getConFig().services;
    }
};
ContentComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-social{\n    float:right;\n    right:10px;\n    padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXNvY2lhbHtcbiAgICBmbG9hdDpyaWdodDtcbiAgICByaWdodDoxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



let FooterComponent = class FooterComponent {
    constructor(config) {
        this.config = config;
        this.footer = {};
    }
    ngOnInit() {
        this.footer = this.getfooter();
    }
    getfooter() {
        return this.config.getConFig().footer;
    }
};
FooterComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



let GalleryComponent = class GalleryComponent {
    constructor(config) {
        this.config = config;
        this.gallery = {};
    }
    ngOnInit() {
        this.gallery = this.getGallery();
    }
    getGallery() {
        return this.config.getConFig().gallery;
    }
};
GalleryComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/guard.service.ts":
/*!**********************************!*\
  !*** ./src/app/guard.service.ts ***!
  \**********************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let GuardService = class GuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        if (localStorage.getItem('currentUser')) {
            //logged in
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
GuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GuardService);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(config) {
        this.config = config;
        this.header = {};
    }
    ngOnInit() {
        this.header = this.getHeader();
    }
    getHeader() {
        return this.config.getConFig().header;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InMemoryDataService = class InMemoryDataService {
    constructor() { }
    createDb() {
        const users = [
            { id: 11, firstName: 'rahul', lastName: 'gupta', email: 'test123@gmail.com', password: 'welcome',
                bio: 'this is my bio', role: 'admin', image: 'user-1.jpg' },
            { id: 12, firstName: 'rohan', lastName: 'gupta', email: 'test345@gmail.com', password: 'welcome',
                bio: 'i am a subscriber', role: 'subscriber', image: 'user-2.jpg' }
        ];
        const pages = [
            { id: 'intro',
                tagline: 'SUCESS',
                title: 'How We Help You To Sell Your Product',
                description: 'This is introduction!',
            },
            { id: 'clients',
                tagline: 'TRUST',
                title: 'Companies who use our services',
                description: 'Our clients',
            },
            { id: 'services',
                tagline: 'BELIEVING',
                title: 'Focusing On What Matters Most',
                description: 'Service Section'
            },
            { id: 'testimonials',
                tagline: 'FEEDBACK',
                title: 'What our customers are saying',
                description: 'This is what our customer\'s feel about us',
            },
            { id: 'pricing',
                tagline: 'YOUR CHOICE',
                title: 'We have the right package for you',
                description: '',
            },
            { id: 'gallery',
                tagline: 'We ❤ Doing amazing things',
                title: 'AdMISTER STUDIO',
                description: 'We are and amazing company',
            },
            { id: 'footer',
                copyrighttext: 'Made with ❤ by',
                developer: 'AdMISTER STUDIO',
                developerlink: 'http://admister.in',
            },
            { id: 'blog',
                tagline: 'My thoughts',
                title: 'Thoughts become things',
                description: 'We are and amazing company',
            },
            { id: 'header',
                heading: 'AdMister Studios',
                headingtext: 'This website was created using Angular 6',
                buttontext: 'do some action!',
                buttonlink: '/home',
                image: 'banner-image-1.jpg'
            },
        ];
        const features = [
            { id: 1, icon: 'html5', title: 'HTML5 & CSS3',
                description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico' },
            { id: 2, icon: 'bolt', title: 'Easy to Use',
                description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi' },
            { id: 3, icon: 'tablet', title: 'Fully Responsive',
                description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
            { id: 4, icon: 'rocket', title: 'Parallax Effect',
                description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum' },
        ];
        const images = [
            { id: 1, name: 'gallery-image-1.jpg' },
            { id: 2, name: 'gallery-image-2.jpg' },
            { id: 3, name: 'gallery-image-3.jpg' },
            { id: 4, name: 'gallery-image-4.jpg' },
            { id: 5, name: 'gallery-image-5.jpg' },
            { id: 6, name: 'gallery-image-6.jpg' },
        ];
        const menu = [
            { id: 1, title: 'Home', link: '/home', outlet: '' },
            { id: 2, title: 'About', link: '/about', outlet: '' },
            { id: 3, title: 'Services', link: '/services', outlet: '' },
            { id: 4, title: 'Gallery', link: '/gallery', outlet: '' },
            { id: 5, title: 'Testimonials', link: '/testimonials', outlet: '' },
            { id: 6, title: 'Clients', link: '/clients', outlet: '' },
            { id: 7, title: 'Pricing', link: '/pricing', outlet: '' },
            { id: 8, title: 'Blog', link: '/blog', outlet: '' },
            { id: 9, title: 'Contact Us', link: 'contactus', outlet: 'popup' },
            { id: 10, title: 'Subscribe', link: 'subscribe', outlet: 'popup' },
        ];
        const posts = [
            { id: 1, title: 'The first Article',
                author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 2, title: 'The second Article',
                author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 3, title: 'The third Article',
                author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 4, title: 'The fourth Article',
                author: 'AD', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 5, title: 'The fifth Article',
                author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 6, title: 'The sixth Article',
                author: 'AD', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 7, title: 'The seven Article',
                author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 8, title: 'The eight Article',
                author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 9, title: 'The nine Article',
                author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 10, title: 'The ten Article',
                author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
            { id: 11, title: 'The eleven Article',
                author: 'AD', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...' },
        ];
        const companies = [
            { id: 1, name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png' },
            { id: 2, name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png' },
            { id: 3, name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png' },
            { id: 4, name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png' },
            { id: 5, name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png' },
            { id: 6, name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png' },
            { id: 7, name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png' },
            { id: 8, name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png' },
            { id: 9, name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png' },
        ];
        const feedbacks = [
            { id: 1, name: 'John Doe', userimage: 'user-1.jpg',
                comments: 'This compamny doing excellent Job',
                company: 'ABC' },
            { id: 2, name: 'Roslyn Doe', userimage: 'user-2.jpg',
                comments: 'People seem to love the work they have done',
                company: 'XYZ' },
            { id: 3, name: 'Thomas Doe', userimage: 'user-3.jpg',
                comments: 'This work is great, i reall loved working with them',
                company: 'PQR' },
        ];
        const plans = [
            { id: 1, title: 'PERSONAL', subtitle: 'The standard version',
                description: 'Best Plan to buy', price: '19', currency: '₹',
                downloads: '5 Downloads', extensions: '2 Extensions',
                tutorials: 'Tutorials', support: 'Forum Support', updates: '1 year free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: false
            },
            { id: 2, title: 'STUDENT', subtitle: 'Most popular choice',
                description: 'Best Plan for students', price: '29', currency: '₹',
                downloads: '15 Downloads', extensions: '5 Extensions',
                tutorials: 'Tutorials with files', support: 'Forum Support', updates: '2 year free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: true
            },
            { id: 3, title: 'BUSINESS', subtitle: 'For the whole team',
                description: 'Best plan for business', price: '49', currency: '₹',
                downloads: 'Unlimited Downloads', extensions: 'Unlimited Downloads',
                tutorials: 'HD Video Tutorials', support: 'Chat Support', updates: 'Lifetime free updates',
                buttontext: 'Buy Now', buttonlink: '#', featured: false
            }
        ];
        const websites = [
            { id: 1, link: 'https://facebook.com/', title: 'Facebook', target: '_blank', username: 'jagmohan', icon: 'facebook' },
            { id: 2, link: 'https://googleplus.com/', title: 'Google+', target: '_blank', username: '+jagmohan', icon: 'google-plus' },
            { id: 3, link: 'https://twitter.com/', title: 'Twitter', target: '_blank', username: 'jagmohan', icon: 'twitter' },
            { id: 4, link: 'https://instagram.com/', title: 'Instagram', target: '_blank', username: 'admister_in', icon: 'instagram' },
            { id: 5, link: 'https://behance.com/', title: 'Behance', target: '_blank', username: 'jagmohan', icon: 'behance' },
        ];
        return { users, posts, menu, pages, features, images, companies, feedbacks, plans, websites };
    }
    getToken(user) {
        return 'this is a token';
    }
    get(reqInfo) {
        if (reqInfo.collectionName === 'posts') {
            return this.getArticles(reqInfo);
        }
        return undefined;
    }
    getArticles(reqInfo) {
        return reqInfo.utils.createResponse$(() => {
            const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
            const collection = reqInfo.collection;
            const id = reqInfo.id;
            const data = id === undefined ? collection : reqInfo.utils.findById(collection, id);
            console.log(data);
            const options = data ?
                {
                    body: dataEncapsulation ? { data } : data,
                    status: 200
                } :
                {
                    body: { error: `Post not found` },
                    status: 404
                };
            options.statusText = options.status === 200 ? 'ok' : 'Not Found';
            options.headers = reqInfo.headers;
            options.url = reqInfo.url;
            return options;
        });
    }
    post(reqInfo) {
        if (reqInfo.id === 'login') {
            console.log('from login');
            return reqInfo.utils.createResponse$(() => {
                const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
                const users = reqInfo.collection.find(user => {
                    return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password;
                });
                let responseBody = {};
                if (users) {
                    responseBody = {
                        id: users.id,
                        firstName: users.firstName,
                        lastName: users.lastName,
                        bio: users.bio,
                        image: users.image,
                        email: users.email,
                        token: this.getToken(users)
                    };
                }
                const options = responseBody ?
                    {
                        body: dataEncapsulation ? { responseBody } : responseBody,
                        status: 200
                    } :
                    {
                        body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
                        status: 404
                    };
                options.statusText = options.status === 200 ? 'ok' : 'Not Found';
                options.headers = reqInfo.headers;
                options.url = reqInfo.url;
                return options;
            });
        }
        else if (reqInfo.id === 'signup') {
            reqInfo.id = null;
            console.log(' from signup');
        }
    }
};
InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InMemoryDataService);



/***/ }),

/***/ "./src/app/intro/intro.component.css":
/*!*******************************************!*\
  !*** ./src/app/intro/intro.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



let IntroComponent = class IntroComponent {
    constructor(config) {
        this.config = config;
        this.intro = {};
    }
    ngOnInit() {
        this.intro = this.getIntro();
    }
    getIntro() {
        return this.config.getConFig().intro;
    }
};
IntroComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./intro.component.css */ "./src/app/intro/intro.component.css")).default]
    })
], IntroComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n\n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 10%;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-success{\n    background-color: #4caf50;\n    color:#fff;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=password].form-control {\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsc0VBQXNFO0FBQzFFO0FBRUEsbUJBQW1CLGtCQUFrQjtJQUNqQyxNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXG59XG5zZWN0aW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4ucGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLnBhbmVsLWJvZHl7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5jZW50ZXItZm9ybSB7XG4gICAgd2lkdGg6IDMxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4udGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwZW07XG59XG4uZm9ybS1ncm91cHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtLWNvbnRyb2x7XG4gICAgcGFkZGluZy1sZWZ0OiA0MnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwICNlNTFjMjM7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xufVxuXG4uZm9ybS1jb250cm9sLWljb257cG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA0NnB4O1xuICAgIGhlaWdodDogNDZweDtcbiAgICBsaW5lLWhlaWdodDogNDZweDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG57XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZzogNnB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg0NjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4uYnRuLWJsb2Nre1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJ0bi1zdWNjZXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gICAgY29sb3I6I2ZmZjtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9ye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9yIC50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2lnbnVwLW9yLXNlcGFyYXRvciBociB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IC0xNnB4IGF1dG8gMTBweCBhdXRvO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlMGUwO1xufVxuXG5bdHlwZT10ZXh0XS5mb3JtLWNvbnRyb2wsIFt0eXBlPXBhc3N3b3JkXS5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwICNkZGRkZGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5bY2xhc3NePSdpb24tJ10ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59ICJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(fb, auth, route, router) {
        this.fb = fb;
        this.auth = auth;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    login(formData) {
        return this.auth.login(formData).subscribe((user) => {
            console.log(user);
            this.router.navigate([this.returnUrl]);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





let NavigationComponent = class NavigationComponent {
    // activetab :string;
    constructor(location, auth) {
        this.location = location;
        this.auth = auth;
    }
    ngOnInit() {
        /*this.activetab = this.location.path();
        console.log(`from ${this.activetab}`)*/
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            /*Responsive Navigation*/
            jquery__WEBPACK_IMPORTED_MODULE_4__('#nav-mobile').html(jquery__WEBPACK_IMPORTED_MODULE_4__('#nav-main').html());
            jquery__WEBPACK_IMPORTED_MODULE_4__('#nav-trigger span').on('click', function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_4__('nav#nav-mobile ul').hasClass('expanded')) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
                    jquery__WEBPACK_IMPORTED_MODULE_4__(this).removeClass('open');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('nav#nav-mobile ul').addClass('expanded').slideDown(250);
                    jquery__WEBPACK_IMPORTED_MODULE_4__(this).addClass('open');
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__('#nav-mobile').html(jquery__WEBPACK_IMPORTED_MODULE_4__('#nav-main').html());
            jquery__WEBPACK_IMPORTED_MODULE_4__('#nav-mobile ul a').on('click', function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_4__('nav#nav-mobile ul').hasClass('expanded')) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
                    jquery__WEBPACK_IMPORTED_MODULE_4__('#nav-trigger span').removeClass('open');
                }
            });
            /* Sticky Navigation
            if (!!(<any>$).prototype.stickyNavbar) {
                (<any>$)('#header').stickyNavbar();
            }
        
            (<any>$)('#content').waypoint(function (direction) {
                if (direction === 'down') {
                    (<any>$)('#header').addClass('nav-solid fadeInDown');
                }
                else {
                    (<any>$)('#header').removeClass('nav-solid fadeInDown');
                }
            });*/
        });
    }
    /*getActiveTab(tabname:string){
        this.activetab = tabname;
        console.log(tabname);
    }*/
    logout() {
        this.auth.logout();
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".big-text{\n    font-size: 25rem;\n    text-align: center;\n}\nh2{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlnLXRleHR7XG4gICAgZm9udC1zaXplOiAyNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")).default]
    })
], NotfoundComponent);



/***/ }),

/***/ "./src/app/pager.service.ts":
/*!**********************************!*\
  !*** ./src/app/pager.service.ts ***!
  \**********************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagerService = class PagerService {
    constructor() { }
    getPager(totalItems, currentPage = 1, pageSize = 10) {
        let totalPages = Math.ceil(totalItems / pageSize);
        // ensure that this do not fall out of bounds
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        let startPage;
        let endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // if more that 10 pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end indexitems
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min((startIndex + pageSize - 1), (totalItems - 1));
        // create and array of pages
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
};
PagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PagerService);



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination> li{\n    display: inline-block;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    margin-left: -1px;\n    padding-top:10px;\n    padding-left:15px;\n    padding-right:15px;\n    padding-bottom:10px;\n    cursor: pointer;\n}\n.pagination> li.active {    \n    background-color: #005575;\n}\n.pagination> li.disabled {    \n    background-color: #ddd;\n    cursor:default;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uPiBsaXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgIHBhZGRpbmctdG9wOjEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OjE1cHg7XG4gICAgcGFkZGluZy1yaWdodDoxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhZ2luYXRpb24+IGxpLmFjdGl2ZSB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU1NzU7XG59XG5cbi5wYWdpbmF0aW9uPiBsaS5kaXNhYmxlZCB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY3Vyc29yOmRlZmF1bHQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PaginationComponent = class PaginationComponent {
    constructor() {
        this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    setCurrentPage(pageNumber) {
        this.setPage.emit(pageNumber);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PaginationComponent.prototype, "pager", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginationComponent.prototype, "setPage", void 0);
PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagination',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagination/pagination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")).default]
    })
], PaginationComponent);



/***/ }),

/***/ "./src/app/post/post.component.css":
/*!*****************************************!*\
  !*** ./src/app/post/post.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-block-content:hover {\n    border-color:#d2b356;    \n}\n.primary-color, .featured .post {\n    background-color:#d2b356;    \n}\n.primary-color, .primary-color .section-title, .primary-color .section-subtitle, .featured .post, .featured .post p {\n    color:#fff;    \n}\n.post-block-content {\n  background: #fff;\n  padding: 25px 0 25px 0;\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.07);\n  transition: all 0.2s ease-in-out 0s;\n  position: relative;\n  border: 10px solid #fff;\n}\n.post-block ul {\n  list-style: none;\n  margin: 25px 0 25px 0;\n}\n.post-block li {\n  padding: 14px 0;\n  border-bottom: 1px dotted #e1e1e1;\n}\n.post-block li:last-of-type {\n  border:none;\n}\n.post-block h3 {\n  font-size:17px;\n  text-transform:uppercase;\n  padding-bottom:0;\n}\n.post-sub {\n  font-style: italic;\n  color:#ccc;\n  margin:0 0 25px 0;\n}\n.post {\n  background: #f5f5f5;\n  padding: 25px;\n  position: relative;\n}\n.post-featured-image {\n  display: inline-block;\n  font-size: 62px;\n  font-weight: 700;\n  position: relative;\n}\n.post-featured-image span {\n  position: absolute;\n  top: 0;\n  left: -20px;\n  font-size: 22px;\n}\n.post  p {\n  font-style:italic;\n  color:#b4b4b4;\n  line-height:auto;\n  margin:0;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJDQUEyQztFQUMzQyxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGlDQUFpQztBQUNuQztBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtYmxvY2stY29udGVudDpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiNkMmIzNTY7ICAgIFxufVxuLnByaW1hcnktY29sb3IsIC5mZWF0dXJlZCAucG9zdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZDJiMzU2OyAgICBcbn1cbi5wcmltYXJ5LWNvbG9yLCAucHJpbWFyeS1jb2xvciAuc2VjdGlvbi10aXRsZSwgLnByaW1hcnktY29sb3IgLnNlY3Rpb24tc3VidGl0bGUsIC5mZWF0dXJlZCAucG9zdCwgLmZlYXR1cmVkIC5wb3N0IHAge1xuICAgIGNvbG9yOiNmZmY7ICAgIFxufVxuLnBvc3QtYmxvY2stY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDI1cHggMCAyNXB4IDA7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0IDBzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xufVxuXG4ucG9zdC1ibG9jayB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMjVweCAwIDI1cHggMDtcbn1cblxuLnBvc3QtYmxvY2sgbGkge1xuICBwYWRkaW5nOiAxNHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2UxZTFlMTtcbn1cblxuLnBvc3QtYmxvY2sgbGk6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbi5wb3N0LWJsb2NrIGgzIHtcbiAgZm9udC1zaXplOjE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgcGFkZGluZy1ib3R0b206MDtcbn1cbi5wb3N0LXN1YiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6I2NjYztcbiAgbWFyZ2luOjAgMCAyNXB4IDA7XG59XG4ucG9zdCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBvc3QtZmVhdHVyZWQtaW1hZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogNjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucG9zdC1mZWF0dXJlZC1pbWFnZSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0yMHB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5wb3N0ICBwIHtcbiAgZm9udC1zdHlsZTppdGFsaWM7XG4gIGNvbG9yOiNiNGI0YjQ7XG4gIGxpbmUtaGVpZ2h0OmF1dG87XG4gIG1hcmdpbjowO1xufSAiXX0= */");

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostComponent = class PostComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostComponent.prototype, "post", void 0);
PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.component.css */ "./src/app/post/post.component.css")).default]
    })
], PostComponent);



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/*!***********************************************!*\
  !*** ./src/app/pricing/pricing.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNpbmcvcHJpY2luZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pricing/pricing.component.ts ***!
  \**********************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



let PricingComponent = class PricingComponent {
    constructor(config) {
        this.config = config;
        this.pricing = {};
    }
    ngOnInit() {
        this.pricing = this.getPricing();
    }
    getPricing() {
        return this.config.getConFig().priceing;
    }
};
PricingComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pricing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pricing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pricing/pricing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pricing.component.css */ "./src/app/pricing/pricing.component.css")).default]
    })
], PricingComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n    margin-right: auto;\n    margin-left: auto;\n    padding-left: 15px;\n    padding-right: 15px;\n\n}\nsection{\n    background-color: #ddd;\n}\n.panel {\n    background-color: #fff;\n    border: none;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);\n}\n.panel-body{\n    padding: 15px;\n}\n.center-form {\n    width: 315px;\n    margin-top: 8px;\n    margin-right: auto;\n    margin-bottom: 0px;\n    margin-left: auto;\n}\n.text-center{\n    text-align: center;\n}\nform {\n    display: block;\n    margin-top: 0em;\n}\n.form-group{\n    margin-bottom: 15px;\n    position: relative;\n}\n.form-control{\n    padding-left: 42px;\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: block;\n    width: 100%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-names{\n    /* padding-left: 42px; */\n    box-shadow: inset 0 -2px 0 #e51c23;\n    color: #666666;\n    background-color: transparent;\n    background-image: none;\n    display: inline-block;\n    width: 50%;\n    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control-icon{position: absolute;\n    top: 0;\n    left: 0;\n    width: 46px;\n    height: 46px;\n    line-height: 46px;\n    color: #555;\n    z-index: 2;\n    display: block;\n    text-align: center;\n}\n.btn{\n    text-transform: uppercase;\n    border-right: none;\n    border-bottom: none;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);\n    transition: all 0.2s;\n    margin-bottom: 0;\n    font-weight: normal;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border: 1px solid transparent;\n    white-space: nowrap;\n    padding: 6px 16px;\n    font-size: 13px;\n    line-height: 1.846;\n    border-radius: 3px;\n}\n.btn-block{\n    display: block;\n    width: 100%;\n}\n.btn-primary {\n    color: #ffffff;\n    background-color: #2196f3;\n    border-color: transparent;\n}\n.signup-or-separator{\n    position: relative;\n    height: 29px;\n    margin: 5px 0;\n    text-align: center;\n    background: none;\n}\n.signup-or-separator .text {\n    display: inline-block;\n    padding: 8px;\n    margin: 0;\n    background-color: #fff;\n}\n.signup-or-separator hr {\n    width: 90%;\n    margin: -16px auto 10px auto;\n    border-top: 1px solid #dce0e0;\n}\n[type=text].form-control, [type=text].form-names, [type=password].form-control {\n    /* padding: 0; */\n    border: none;\n    border-radius: 0;\n    box-shadow: inset 0 -1px 0 #dddddd;\n    font-size: 16px;\n}\n[class^='ion-'] {\n    font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFdBQVc7SUFDWCxzRUFBc0U7QUFDMUU7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixzRUFBc0U7QUFDMUU7QUFFQSxtQkFBbUIsa0JBQWtCO0lBQ2pDLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwwQ0FBMEM7SUFDMUMsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuXG59XG5zZWN0aW9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG4ucGFuZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLnBhbmVsLWJvZHl7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5jZW50ZXItZm9ybSB7XG4gICAgd2lkdGg6IDMxNXB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4udGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAwZW07XG59XG4uZm9ybS1ncm91cHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb3JtLWNvbnRyb2x7XG4gICAgcGFkZGluZy1sZWZ0OiA0MnB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwICNlNTFjMjM7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzO1xufVxuXG4uZm9ybS1uYW1lc3tcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDQycHg7ICovXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgI2U1MWMyMztcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IC4xNXM7XG59XG5cbi5mb3JtLWNvbnRyb2wtaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDQ2cHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bntcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuODQ2O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5idG4tYmxvY2t7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXByaW1hcnkge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9ye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDI5cHg7XG4gICAgbWFyZ2luOiA1cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9yIC50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2lnbnVwLW9yLXNlcGFyYXRvciBociB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IC0xNnB4IGF1dG8gMTBweCBhdXRvO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGNlMGUwO1xufVxuXG5bdHlwZT10ZXh0XS5mb3JtLWNvbnRyb2wsIFt0eXBlPXRleHRdLmZvcm0tbmFtZXMsIFt0eXBlPXBhc3N3b3JkXS5mb3JtLWNvbnRyb2wge1xuICAgIC8qIHBhZGRpbmc6IDA7ICovXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgI2RkZGRkZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbltjbGFzc149J2lvbi0nXSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignupComponent = class SignupComponent {
    constructor(fb, auth, router) {
        this.fb = fb;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.signupForm = this.fb.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'email': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    signup(formData) {
        return this.auth.signup(formData).subscribe((user) => {
            console.log(`added user ${JSON.stringify(user)}`);
            this.router.navigate(['login']);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/social/social.component.css":
/*!*********************************************!*\
  !*** ./src/app/social/social.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/social/social.component.ts":
/*!********************************************!*\
  !*** ./src/app/social/social.component.ts ***!
  \********************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



let SocialComponent = class SocialComponent {
    constructor(config) {
        this.config = config;
        this.socialsites = {};
    }
    ngOnInit() {
        this.socialsites = this.getSocialsites();
    }
    getSocialsites() {
        return this.config.getConFig().socialsites;
    }
};
SocialComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/social/social.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social.component.css */ "./src/app/social/social.component.css")).default]
    })
], SocialComponent);



/***/ }),

/***/ "./src/app/testimonial/testimonial.component.css":
/*!*******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFsL3Rlc3RpbW9uaWFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/testimonial/testimonial.component.ts":
/*!******************************************************!*\
  !*** ./src/app/testimonial/testimonial.component.ts ***!
  \******************************************************/
/*! exports provided: TestimonialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function() { return TestimonialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");



let TestimonialComponent = class TestimonialComponent {
    constructor(config) {
        this.config = config;
        this.testimonials = {};
    }
    ngOnInit() {
        this.testimonials = this.getTestimonial();
    }
    getTestimonial() {
        return this.config.getConFig().testimonials;
    }
};
TestimonialComponent.ctorParameters = () => [
    { type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }
];
TestimonialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testimonial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./testimonial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonial/testimonial.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./testimonial.component.css */ "./src/app/testimonial/testimonial.component.css")).default]
    })
], TestimonialComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/adihtya/Desktop/Angular4/DB/website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map