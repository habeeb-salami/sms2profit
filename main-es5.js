function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bills/bills.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bills/bills.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBillsBillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bills/buy-airtime/buy-airtime.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bills/buy-airtime/buy-airtime.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBillsBuyAirtimeBuyAirtimeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n  <app-navbar></app-navbar>\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <div id=\"content\">\n      <app-dashbar></app-dashbar>\n      <div class=\"container-fluid\">\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n          <h1 class=\"h3 mb-0 text-gray-800\">Buy Airtime</h1>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"airtimeForm\" (ngSubmit)=\"buyAirtime()\">\n              <div class=\"form-group\">\n                <label for=\"isAirtime\">Select Option:</label>\n                <select formControlName=\"buy_option\" class=\"form-control\" id=\"buy_option\" (change)=\"dataOrAirtime($event)\">\n                  <option value=\"\" selected>Select Purchase Option</option>\n                  <option value=\"buy-airtime\">Buy Airtime</option>\n                  <option value=\"buy-data\">Buy Data</option>\n                </select>\n              </div>\n              <div class=\"form-group\" *ngIf=\"showPhone\">\n                <label for=\"phone_number\">Phone Number:</label>\n                <input\n                  type=\"text\"\n                  (blur)=\"phoneBlur($event)\"\n                  formControlName=\"phone_number\"\n                  class=\"form-control\"\n                  id=\"phone_number\"\n                  placeholder=\"Phone Number\"\n                />\n                <div *ngIf=\"submitted && airtimeForm.controls.phone_number.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"airtimeForm.controls.phone_number.errors.required\">Enter Phone Number</div>\n                </div>\n              </div>\n              <div class=\"form-group\" *ngIf=\"networkList\">\n                <label for=\"amount\">Amount:</label>\n                <input type=\"text\" formControlName=\"amount\" class=\"form-control\" id=\"amount\" placeholder=\"Enter Amount\" />\n                <div *ngIf=\"submitted && airtimeForm.controls.amount.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"airtimeForm.controls.amount.errors.required\">Enter Amount</div>\n                </div>\n              </div>\n              <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n              <button [disabled]=\"this.airtimeForm.invalid\" type=\"submit\" class=\"btn btn-warning btn-user btn-block\">\n                Proceed <i class=\"fas fas-send\"></i>\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bills/pay-bills/pay-bills.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bills/pay-bills/pay-bills.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBillsPayBillsPayBillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n  <app-navbar></app-navbar>\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <div id=\"content\">\n      <app-dashbar></app-dashbar>\n      <div class=\"container-fluid\">\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n          <h1 class=\"h3 mb-0 text-gray-800\">Pay Bills </h1>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"airtimeForm\" (ngSubmit)=\"buyAirtime()\">\n              <div class=\"form-group\">\n                <label for=\"isAirtime\">Select Option:</label>\n                <select formControlName=\"buy_option\" class=\"form-control\" id=\"buy_option\"\n                  (change)=\"dataOrAirtime($event)\">\n                  <option value=\"\" selected>Select Purchase Option</option>\n                  <option value=\"tv\">TV Subscription</option>\n                  <option value=\"internet\">Internet Subscription</option>\n                  <option value=\"electricity\">Electricity</option>\n                  <option value=\"waec\" selected>WAEC</option>\n                </select>\n              </div>\n              <div class=\"form-group\" *ngIf=\"showPhone\">\n                <label for=\"phone_number\">Phone Number:</label>\n                <input type=\"text\" (blur)=\"phoneBlur($e)\" formControlName=\"phone_number\" class=\"form-control\"\n                  id=\"phone_number\" placeholder=\"Phone Number\" />\n                <div *ngIf=\"submitted && airtimeForm.controls.phone_number.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"airtimeForm.controls.phone_number.errors.required\">Enter Phone Number</div>\n                </div>\n              </div>\n              <div class=\"form-group\" *ngIf=\"networkList\">\n                <label for=\"amount\">Amount:</label>\n                <input type=\"text\" formControlName=\"amount\" class=\"form-control\" id=\"amount\"\n                  placeholder=\"Enter Amount\" />\n                <div *ngIf=\"submitted && airtimeForm.controls.amount.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"airtimeForm.controls.amount.errors.required\">Enter Amount</div>\n                </div>\n              </div>\n              <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n              <button [disabled]=\"this.airtimeForm.invalid\" type=\"submit\" class=\"btn btn-warning btn-user btn-block\">\n                Proceed <i class=\"fas fas-send\"></i>\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\r\n  <app-navbar></app-navbar>\r\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n    <div id=\"content\">\r\n      <app-dashbar></app-dashbar>\r\n      <div class=\"container-fluid\">\r\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n          <h1 class=\"h3 mb-0 text-gray-800\">Dashboard</h1>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xl-6 col-md-6 mb-4\">\r\n            <div class=\"card border-left-primary shadow h-100 py-2\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                  <div class=\"col mr-2\">\r\n                    <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Credit Balance</div>\r\n                    <div class=\"h5 mb-0 font-weight-bold text-gray-800\">&#8358; {{formatedBalance}}</div>\r\n                  </div>\r\n                  <div class=\"col-auto\">\r\n                    <i class=\"fas fa-wallet fa-2x text-green-300\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xl-6 col-md-6 mb-4\">\r\n            <div class=\"card border-left-info shadow h-100 py-2\">\r\n              <div class=\"card-body\">\r\n                <div class=\"row no-gutters align-items-center\">\r\n                  <div class=\"col mr-2\">\r\n                    <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">Contact</div>\r\n                    <div class=\"row no-gutters align-items-center\">\r\n                      <div class=\"col-auto\">\r\n                        <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">{{profile.phone}}</div>\r\n                      </div>\r\n                      <!-- <div class=\"col\">\r\n                          <div class=\"progress progress-sm mr-2\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\"\r\n                              aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </div> -->\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-auto\">\r\n                    <i class=\"fas fa-envelope fa-2x text-gray-300\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8 col-md-offset-2\">\r\n            <table class=\"table table-bordered table-stripe\">\r\n              <tr>\r\n                <th>Name: </th>\r\n                <td>{{profile.firstName}} {{profile.lastName}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Email: </th>\r\n                <td>{{profile.email}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Phone: </th>\r\n                <td>{{profile.phone}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>Signup Date: </th>\r\n                <td>{{profile.createdAt}}</td>\r\n              </tr>\r\n              <tr>\r\n                <th colspan=\"2\"><button class=\"btn btn-success\">Update Profile</button> </th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/include/dashbar/dashbar.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/dashbar/dashbar.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIncludeDashbarDashbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\r\n  \r\n  <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\r\n    <i class=\"fa fa-bars\"></i>\r\n  </button>\r\n  <ul class=\"navbar-nav ml-auto\">\r\n    <div class=\"topbar-divider d-none d-sm-block\"></div>\r\n  \r\n    <li class=\"nav-item dropdown no-arrow\">\r\n      <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n        aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Hi, {{name}}</span>\r\n      </a>\r\n     \r\n      <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\r\n        <a class=\"dropdown-item\" routerLink=\"/profile\">\r\n          <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n          Profile\r\n        </a>\r\n        <a class=\"dropdown-item\" routerLink=\"/profile\">\r\n          <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n          Settings\r\n        </a>\r\n\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" routerLink=\"/logout\">\r\n          <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n          Logout\r\n        </a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/include/footer/footer.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/footer/footer.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIncludeFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"sticky-footer bg-white\">\r\n  <div class=\"container my-auto\">\r\n    <div class=\"copyright text-center my-auto\">\r\n      <span>Copyright &copy; 2020 SMS2Profit</span>\r\n    </div>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/include/navbar/navbar.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/include/navbar/navbar.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIncludeNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\r\n   <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" routerLink=\"/\">\r\n     <div class=\"sidebar-brand-icon rotate-n-15\">\r\n       <i class=\"fas fa-envelope\"></i>\r\n     </div>\r\n     <div class=\"sidebar-brand-text mx-3\">SMS2Profit</div>\r\n   </a>\r\n   <hr class=\"sidebar-divider my-0\" />\r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/dashboard\">\r\n       <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n       <span>Dashboard</span></a>\r\n   </li>\r\n   <hr class=\"sidebar-divider\" />\r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/compose-message\">\r\n       <i class=\"fas fa-fw fa-pen\"></i>\r\n       <span>Compose SMS</span></a>\r\n   </li>\r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/sent-messages\">\r\n       <i class=\"fas fa-fw fa-briefcase\"></i>\r\n       <span>Sent Messages</span></a>\r\n   </li>\r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/fund-wallet\">\r\n       <i class=\"fas fa-fw fa-wallet\"></i>\r\n       <span>Fund Wallet</span></a>\r\n   </li>\r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/pay-bills\">\r\n       <i class=\"fas fa-fw fa-shopping-cart\"></i>\r\n       <span>Bills Payment</span>\r\n\t   </a>\r\n   </li>\r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/buy-airtime\">\r\n       <i class=\"fas fa-fw fa-mobile\"></i>\r\n       <span>Buy Airtime/Data</span></a>\r\n   </li>\r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/\">\r\n       <i class=\"fas fa-fw fa-inbox\"></i>\r\n       <span>Inbox Messages</span></a>\r\n   </li>\r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/contacts\">\r\n       <i class=\"fas fa-fw fa-address-book\"></i>\r\n       <span>Phonebook</span></a>\r\n   </li>\r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/transactions\">\r\n       <i class=\"fas fa-fw fa-briefcase\"></i>\r\n       <span>Transactions History</span></a>\r\n   </li> \r\n   <li class=\"nav-item active\">\r\n     <a class=\"nav-link\" routerLink=\"/\">\r\n       <i class=\"fas fa-fw fa-cog\"></i>\r\n       <span>My Settings</span></a>\r\n   </li>\r\n </ul>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/compose-messages/compose-messages.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/compose-messages/compose-messages.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesComposeMessagesComposeMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n  <app-navbar></app-navbar>\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <div id=\"content\">\n      <app-dashbar></app-dashbar>\n      <div class=\"container-fluid\">\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n          <h1 class=\"h3 mb-0 text-gray-800\">Compose SMS</h1>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"smsForm\" (ngSubmit)=\" sendMessage()\">\n              <div class=\"form-group\">\n                <label for=\"send_name\">Sender:</label>\n                <input type=\"text\" formControlName=\"send_name\" class=\"form-control\" id=\"send_name\"\n                  placeholder=\"Sender\" />\n                <div *ngIf=\"submitted && smsForm.controls.send_name.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"smsForm.controls.send_name.errors.required\">Sender is required</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"recipients\">Recipient:<br />\n                  Multiple numbers should be separated with comma.e.g. (2348064620491, 234818234444444)\n                </label>\n                <textarea formControlName=\"recipients\" class=\"form-control\" id=\"recipients\"\n                  placeholder=\"Message Recipients\"></textarea>\n                <div *ngIf=\"submitted && smsForm.controls.recipients.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"smsForm.controls.recipients.errors.required\">Message Recipients is required</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"message_body\">Message:</label>\n                <span id=\"counter\"></span>\n                <textarea formControlName=\"message_body\" class=\"form-control\" id=\"message_body\"\n                  (keyup)=\"countMessage($event)\" placeholder=\"Compose Message Here\"></textarea>\n                <label class=\"form-control\" editable=\"false\">{{messageCounter}}</label>\n                <div *ngIf=\"submitted && smsForm.controls.message_body.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"smsForm.controls.message_body.errors.required\">You Can't Send Empty Message</div>\n                </div>\n              </div>\n              <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n              <button [disabled]=\"this.smsForm.invalid\" type=\"submit\" class=\"btn btn-primary btn-user btn-block\">\n                Send Message <i class=\"fas fa-paper-plane\"></i>\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/sent-messages/sent-messages.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/sent-messages/sent-messages.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesSentMessagesSentMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n  <app-navbar></app-navbar>\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <div id=\"content\">\n      <app-dashbar></app-dashbar>\n      <div class=\"container-fluid\">\n        <h1 class=\"h3 mb-2 text-gray-800\">Sent Messages</h1>\n        <div class=\"card shadow mb-4\">\n          <div class=\"card-header py-3\">\n            <h6 class=\"m-0 font-weight-bold text-primary\">Messages</h6>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                <thead>\n                  <tr>\n                    <th>Sender</th>\n                    <th>Status</th>\n                    <th>Recipients</th>\n                    <th>Message</th>\n                    <th>Sent Date</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>Sender</th>\n                    <th>Status</th>\n                    <th>Recipients</th>\n                    <th>Message</th>\n                    <th>Sent Date</th>\n                    <th>Action</th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n                  <tr *ngFor=\"let message of Messages\">\n                    <td>{{message.sendname}}</td>\n                    <td *ngIf=message.sent_status>Sent</td>\n                    <td *ngIf=!message.sent_status>Not Sent</td>\n                    <td>\n                      <p>{{message.recipients}}</p>\n                    </td>\n                    <td>\n                      <p>{{message.message_body}}</p>\n                    </td>\n                    <td>{{message.sent_date}}</td>\n                    <td>\n                      <a [routerLink]=\"['/messages/view/', message.id]\" class=\"btn btn-primary\">\n                        <i class=\"fas fa-eye\"></i>\n                      </a>\n                      <a class=\"btn btn-warning\" routerLink=\"\"><i class=\"fas fa-pen\"></i></a>\n                      <a class=\"btn btn-danger\" routerLink=\"\"><i class=\"fas fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageNotFoundPageNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\r\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n    <div id=\"content\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"text-center\">\r\n          <div class=\"error mx-auto\" data-text=\"404\">404</div>\r\n          <p class=\"lead text-gray-800 mb-5\">Page Not Found</p>\r\n          <p class=\"text-gray-500 mb-0\">It looks like you found a glitch in the matrix...</p>\r\n          <a routerLink=\"/dashboard\">&larr; Back to Dashboard</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/all-contact/all-contact.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/all-contact/all-contact.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhonebookAllContactAllContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n  <app-navbar></app-navbar>\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <div id=\"content\">\n      <app-dashbar></app-dashbar>\n      <div class=\"container-fluid\">\n        <h1 class=\"h3 mb-2 text-gray-800\">My Contacts</h1>\n        <div class=\"card shadow mb-4\">\n          <div class=\"card-header py-3\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Contact Records</h6>\n              </div>\n              <div class=\"col-md-6\">\n                <a routerLink='/groups' class=\"btn btn-primary btn-icon-split\">\n                  <span class=\"icon text-white-50\">\n                    <i class=\"fas fa-plus\"></i>\n                  </span>\n                  <span class=\"text\">All Group</span>\n                </a>\n                <button href=\"#\" class=\"btn btn-warning btn-icon-split\" data-toggle=\"modal\" data-target=\"#contactModal\">\n                  <span class=\"icon text-white-50\">\n                    <i class=\"fas fa-plus\"></i>\n                  </span>\n                  <span class=\"text\">New Contacts</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                <thead>\n                  <tr>\n                    <th>Group</th>\n                    <th>Name</th>\n                    <th>Phone Number</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>Group</th>\n                    <th>Name</th>\n                    <th>Phone Number</th>\n                    <th>Action</th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n                  <tr *ngFor=\"let phonebook of Phonebooks\">\n                    <td>{{phonebook.id}}</td>\n                    <td>\n                      <p>{{phonebook.name}}</p>\n                    </td>\n                    <td>\n                      <p>{{phonebook.phone_number}}</p>\n                    </td>\n                    <td>\n                      <a [routerLink]=\"['/phonebooks/view/', phonebook.id]\" class=\"btn btn-primary\">\n                        <i class=\"fas fa-eye\"></i>\n                      </a>\n                      <a class=\"btn btn-warning\" routerLink=\"\"><i class=\"fas fa-pen\"></i></a>\n                      <a class=\"btn btn-danger\" routerLink=\"\"><i class=\"fas fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"contactModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form [formGroup]=\"contactForm\" (ngSubmit)=\"newContact()\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">× </button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\"> New Contact</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n            <label for=\"name\">Contact Name:</label>\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Contact Name\" />\n            <div *ngIf=\"submitted && contactForm.controls.name.errors\" class=\"alert alert-danger\">\n              <div *ngIf=\"contactForm.controls.name.errors.required\">Contact Name</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n            <label for=\"name\">Phone Number:</label>\n            <input type=\"text\" formControlName=\"phone_number\" class=\"form-control\" id=\"phone_number\"\n              placeholder=\"Phone Number\" />\n            <div *ngIf=\"submitted && contactForm.controls.phone_number.errors\" class=\"alert alert-danger\">\n              <div *ngIf=\"contactForm.controls.phone_number.errors.required\">Contact Phone Number</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n            <label for=\"name\">Select a Group:</label>\n            <select formControlName=\"group_id\" class=\" form-control\" id=\"group_id\">\n              <option value=\"{{group.id}}\" *ngFor=\"let group of Groups\">{{group.group_name}}</option>\n            </select>\n            <div *ngIf=\"submitted && contactForm.controls.group_id.errors\" class=\"alert alert-danger\">\n              <div *ngIf=\"contactForm.controls.group_id.errors.required\">Select a Group</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"> Close </button>\n          <button type=\"submit\" class=\"btn btn-primary\"> Create </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/all-group/all-group.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/all-group/all-group.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhonebookAllGroupAllGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n\n  <app-navbar></app-navbar>\n\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n\n    <div id=\"content\">\n\n      <app-dashbar></app-dashbar>\n\n      <div class=\"container-fluid\">\n\n        <h1 class=\"h3 mb-2 text-gray-800\">My Contacts Group</h1>\n        <div class=\"card shadow mb-4\">\n          <div class=\"card-header py-3\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h6 class=\"m-0 font-weight-bold text-primary\">Contact Group Records</h6>\n              </div>\n              <div class=\"col-md-6\">\n                <button href=\"#\" class=\"btn btn-primary btn-icon-split\" data-toggle=\"modal\" data-target=\"#groupModal\">\n                  <span class=\"icon text-white-50\">\n                    <i class=\"fas fa-plus\"></i>\n                  </span>\n                  <span class=\"text\">New Group</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                <thead>\n                  <tr>\n                    <th>Group</th>\n                    <th>Name</th>\n                    <th>Created Date</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>Group</th>\n                    <th>Name</th>\n                    <th>Created Date</th>\n                    <th>Action</th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n                  <tr *ngFor=\"let group of Groups\">\n                    <td>{{ group.id }}</td>\n                    <td>{{ group.group_name }}</td>\n                    <td>{{ group.createdAt }}</td>\n                    <td>\n                      <a [routerLink]=\"['/groups/view/', group.id]\" class=\"btn btn-primary btn-circle\">\n                        <i class=\"fas fa-eye\"></i>\n                      </a>\n                      <a class=\"btn btn-warning btn-circle\" routerLink=\"\"><i class=\"fas fa-pen\"></i></a>\n                      <a class=\"btn btn-danger btn-circle\" routerLink=\"\"><i class=\"fas fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <app-footer></app-footer>\n\n  </div>\n\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"groupModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form [formGroup]=\"groupForm\" (ngSubmit)=\"createGroup()\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">× </button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\"> New Group</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n            <label for=\"group_name\">Group:</label>\n            <input type=\"text\" formControlName=\"group_name\" class=\"form-control\" id=\"group_name\"\n              placeholder=\"Enter Group Name\" />\n            <div *ngIf=\"submitted && groupForm.controls.group_name.errors\" class=\"alert alert-danger\">\n              <div *ngIf=\"groupForm.controls.group_name.errors.required\">Enter Group Name</div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"> Close </button>\n          <button type=\"submit\" class=\"btn btn-primary\"> Create </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/new-contact/new-contact.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/new-contact/new-contact.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhonebookNewContactNewContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>new-contact works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/new-group/new-group.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/new-group/new-group.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhonebookNewGroupNewGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>new-group works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/phonebook.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/phonebook.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhonebookPhonebookComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-view/transaction-view.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-view/transaction-view.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransactionViewTransactionViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n  <app-navbar></app-navbar>\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <div id=\"content\">\n      <app-dashbar></app-dashbar>\n      <div class=\"container-fluid\">\n        <h1 class=\"h3 mb-2 text-gray-800\">Transactions</h1>\n        <div class=\"card shadow mb-4\">\n          <div class=\"card-header py-3\">\n            <h6 class=\"m-0 font-weight-bold text-primary\">All Transactions</h6>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"table-responsive\">\n              <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\n                <thead>\n                  <tr>\n                    <th>Transaction I</th>\n                    <th>User</th>\n                    <th>Status</th>\n                    <th>Amount</th>\n                    <th>Date</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tfoot>\n                  <tr>\n                    <th>Transaction I</th>\n                    <th>User</th>\n                    <th>Status</th>\n                    <th>Amount</th>\n                    <th>Date</th>\n                    <th>Action</th>\n                  </tr>\n                </tfoot>\n                <tbody>\n                  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n                  <tr *ngIf=\"Transaction\">\n                    <td>{{Transaction.transaction_id}}</td>\n                    <td>{{Transaction.user.affinity_email}}</td>\n                    <td>{{Transaction.status}}</td>\n                    <td>{{Transaction.amount}}</td>\n                    <td>{{Transaction.created_at}}</td>\n                    <td>\n                      <a [routerLink]=\"['/transactions/view/', Transaction.transaction_id]\" class=\"btn btn-primary\">\n                        <i class=\"fas fa-eye\"></i>\n                      </a>\n                      <a class=\"btn btn-warning\" routerLink=\"\"><i class=\"fas fa-pen\"></i></a>\n                      <a class=\"btn btn-danger\" routerLink=\"\"><i class=\"fas fa-trash\"></i></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/fund-wallet/fund-wallet.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/fund-wallet/fund-wallet.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransactionsFundWalletFundWalletComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <div id=\"wrapper\">\n   <app-navbar></app-navbar>\n   <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n     <div id=\"content\">\n       <app-dashbar></app-dashbar>\n       <div class=\"container-fluid\">\n         <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n           <h1 class=\"h3 mb-0 text-gray-800\">Fund My Wallet</h1>\n         </div>\n         <div class=\"row\">\n           <div class=\"col-md-8 col-md-offset-2\">\n             <table class=\"table table-bordered table-striped\" style=\"box-shadow:0 0 15px rgba(0, 0, 0, .21)\"\n               *ngIf=\"paynow\">\n              \n               <thead>\n                 <tr>\n                   <th>Transaction Id</th>\n                   <th>Description</th>\n                   <th>Amount</th>\n                 </tr>\n               </thead>\n               <tbody>\n                 <tr>\n                   <td>{{options.ref}}</td>\n                   <td>Funding Wallet with: &#8358;{{formatedAmount}}</td>\n                   <td>&#8358;{{formatedAmount}}</td>\n                 </tr>\n                 <tr>\n                   <td colspan=\"2\"><strong>Total:</strong></td>\n                   <td>&#8358; {{formatedAmount}}</td>\n                 </tr>\n               </tbody>\n               <tfoot>\n                 <button class=\"btn btn-block btn-success\" angular4-paystack\n                   [key]=\"pk_test_62e65601e9e5df85272c1585f6a67479ded1eb17\" [email]=\"options.email\"\n                   [amount]=\"options.amount\" [ref]=\"options.ref\" [class]=\"'btn btn-primary'\"\n                   (paymentInit)=\"paymentInit()\" (close)=\"paymentCancel()\" (callback)=\"paymentDone($event)\">\n                   Fund Now\n                 </button>\n               </tfoot>\n             </table>\n\n             <form [formGroup]=\"fundWalletForm\" (ngSubmit)=\"generateInvoice()\" *ngIf=\"!paynow\">\n               <div class=\"form-group\">\n                 <label for=\"amount\">Amount:</label>\n                 <input type=\"text\" formControlName=\"amount\" class=\"form-control\" id=\"amount\"\n                   placeholder=\"Enter Amount\" />\n                 <div *ngIf=\"submitted && fundWalletForm.controls.amount.errors\" class=\"alert alert-danger\">\n                   <div *ngIf=\"fundWalletForm.controls.amount.errors.required\">Enter Amount</div>\n                 </div>\n               </div>\n               <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n               <button type=\"submit\" class=\"btn btn-warning btn-user btn-block\">\n                 Proceed <i class=\"fas fas-send\"></i>\n               </button>\n             </form>\n           </div>\n         </div>\n       </div>\n     </div>\n     <app-footer></app-footer>\n   </div>\n </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transactions.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transactions.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTransactionsTransactionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\r\n  <app-navbar></app-navbar>\r\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n    <div id=\"content\">\r\n      <app-dashbar></app-dashbar>\r\n      <div class=\"container-fluid\">\r\n        <h1 class=\"h3 mb-2 text-gray-800\">Transactions</h1>\r\n        <div class=\"card shadow mb-4\">\r\n          <div class=\"card-header py-3\">\r\n            <h6 class=\"m-0 font-weight-bold text-primary\">All Transactions</h6>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Transaction Id</th>\r\n                    <th>Status</th>\r\n                    <th>Amount</th>\r\n                    <th>Date</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tfoot>\r\n                  <tr>\r\n                    <th>Transaction Id</th>\r\n                    <th>Status</th>\r\n                    <th>Amount</th>\r\n                    <th>Date</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </tfoot>\r\n                <tbody>\r\n                  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\r\n                  <tr *ngFor=\"let transaction of Transactions\">\r\n                    <td>{{transaction.id}}</td>\r\n                    <td *ngIf=\"transaction.status==1\">Successfull</td>\r\n                    <td *ngIf=\"transaction.status==0\">Failed</td>\r\n                    <td>{{transaction.amount}}</td>\r\n                    <td>{{transaction.created_at}}</td>\r\n                    <td>\r\n                      <a [routerLink]=\"['/transactions/view/', transaction.transaction_id]\" class=\"btn btn-primary\">\r\n                        <i class=\"fas fa-eye\"></i>\r\n                      </a>\r\n                      <a class=\"btn btn-warning\" routerLink=\"\"><i class=\"fas fa-pen\"></i></a>\r\n                      <a class=\"btn btn-danger\" routerLink=\"\"><i class=\"fas fa-trash\"></i></a>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/create/create.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/create/create.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersCreateCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\r\n        <div class=\"card-body p-0\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-10\">\r\n              <div class=\"p-5\">\r\n                <div class=\"text-center\">\r\n                  <h1 class=\"h4 text-gray-900 mb-4\">Sign Up!</h1>\r\n                </div>\r\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup()\" class=\"user\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"firstName\">First Name:</label>\r\n                    <input type=\"text\" formControlName=\"firstName\" class=\"form-control form-control-user\" id=\"firstName\"\r\n                      placeholder=\"Enter First Name\" />\r\n                    <div *ngIf=\"submitted && registerForm.controls.firstName.errors\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"registerForm.controls.firstName.errors.required\">First Name is required</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"lastName\">Last Name:</label>\r\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control form-control-user\" id=\"lastName\"\r\n                      placeholder=\"Enter Last Name\" />\r\n                    <div *ngIf=\"submitted && registerForm.controls.lastName.errors\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"registerForm.controls.lastName.errors.required\">Last Name is required</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"email\">Email:</label>\r\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control form-control-user\" id=\"email\"\r\n                      placeholder=\"Enter Email Address...\" />\r\n                    <div *ngIf=\"submitted && registerForm.controls.email.errors\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"registerForm.controls.email.errors.required\">Email is required</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"phone\">Phone Number:</label>\r\n                    <input type=\"text\" formControlName=\"phone\" class=\"form-control form-control-user\" id=\"phone\"\r\n                      placeholder=\"Enter Phone Number\" />\r\n                    <div *ngIf=\"submitted && registerForm.controls.phone.errors\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"registerForm.controls.phone.errors.required\">Phone Number is required</div>\r\n                      <div *ngIf=\"registerForm.controls.phone.errors.minlength\">Password must be at least 11\r\n                        characters</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"password\">Password:</label>\r\n                    <input type=\"password\" formControlName=\"password\" id=\"password\"\r\n                      class=\"form-control form-control-user\" placeholder=\"Password\" minlength=\"8\" />\r\n                    <div *ngIf=\"submitted && registerForm.controls.password.errors\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"registerForm.controls.password.required\">Password is required</div>\r\n                      <div *ngIf=\"registerForm.controls.password.errors.minlength\">Password must be at least 8\r\n                        characters</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\r\n                  <button [disabled]=\"this.registerForm.invalid\" type=\"submit\"\r\n                    class=\"btn btn-warning btn-user btn-block\">\r\n                    Create My Account\r\n                  </button>\r\n                  <a routerLink=\"/login\" class=\"btn btn-link\">Already have an Account Login</a>\r\n                </form>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <!-- Outer Row -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\r\n        <div class=\"card-body p-0\">\r\n          <!-- Nested Row within Card Body -->\r\n          <div class=\"row\">\r\n            <!-- <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div> -->\r\n            <div class=\"col-md-10\">\r\n              <div class=\"p-5\">\r\n                <div class=\"text-center\">\r\n                  <h1 class=\"h4 text-gray-900 mb-4\">Login!</h1>\r\n                </div>\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class=\"user\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control form-control-user\"\r\n                      id=\"exampleInputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email Address...\">\r\n                    <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"loginForm.controls.email.errors.required\">Email is required</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control form-control-user\"\r\n                      placeholder=\"Password\" />\r\n                    <div *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"loginForm.controls.password.errors.required\">Password is required</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"custom-control custom-checkbox small\">\r\n                      <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"rememberMe\" id=\"rememberMe\">\r\n                      <label class=\"custom-control-label\" for=\"rememberMe\">Remember Me</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\r\n                  <button [disabled]=\"this.loginForm.invalid\" type=\"submit\" class=\"btn btn-primary btn-user btn-block\">\r\n                    Login\r\n                  </button>\r\n                  <hr />\r\n                  <a routerLink=\"/register\" class=\"btn btn-link\">Sigup</a>|\r\n                  <a routerLink=\"/forgot-password\" class=\"btn btn-link\">Forgot Password?</a>\r\n                  <hr />\r\n                  <a href=\"#\" class=\"btn btn-google btn-user btn-block\">\r\n                    <i class=\"fab fa-google fa-fw\"></i> Login with Google\r\n                  </a>\r\n                  <a href=\"#\" class=\"btn btn-facebook btn-user btn-block\">\r\n                    <i class=\"fab fa-facebook-f fa-fw\"></i> Login with Facebook\r\n                  </a>\r\n                </form>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/logout/logout.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/logout/logout.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <div class=\"loader\">Please Wait...</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"wrapper\">\n  <app-navbar></app-navbar>\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\n    <div id=\"content\">\n      <app-dashbar></app-dashbar>\n      <div class=\"container-fluid\">\n        <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\n          <h1 class=\"h3 mb-0 text-gray-800\">My Profile</h1>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n            <table class=\"table table-bordered table-stripe\">\n              <tr>\n                <th>Name: </th>\n                <td>{{profile.firstName}} {{profile.lastName}}</td>\n              </tr>\n              <tr>\n                <th>Email: </th>\n                <td>{{profile.email}}</td>\n              </tr>\n              <tr>\n                <th>Phone: </th>\n                <td>{{profile.phone}}</td>\n              </tr>\n              <tr>\n                <th>Signup Date: </th>\n                <td>{{profile.createdAt}}</td>\n              </tr>\n              <tr>\n                <th colspan=\"2\"><button class=\"btn btn-success\">Update Profile</button> </th>\n              </tr>\n            </table>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateProfile()\">\n              <table class=\"table table-stripe\">\n                <tr>\n                  <th><label for=\"firstName\">First Name:</label></th>\n                  <td>\n                    <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" id=\"firstName\"\n                      placeholder=\"Enter First Name\" />\n                    <div *ngIf=\"submitted && profileForm.controls.firstName.errors\" class=\"alert alert-danger\">\n                      <div *ngIf=\"profileForm.controls.firstName.errors.required\">First Name is required</div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th> <label for=\"lastName\">Last Name:</label></th>\n                  <td>\n                    <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" id=\"lastName\"\n                      placeholder=\"Enter Last Name\" />\n                    <div *ngIf=\"submitted && profileForm.controls.lastName.errors\" class=\"alert alert-danger\">\n                      <div *ngIf=\"profileForm.controls.lastName.errors.required\">Last Name is required</div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th> <label for=\"email\">Email:</label></th>\n                  <td>\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\"\n                      placeholder=\"Enter Email Address...\" />\n                    <div *ngIf=\"submitted && profileForm.controls.email.errors\" class=\"alert alert-danger\">\n                      <div *ngIf=\"profileForm.controls.email.errors.required\">Email is required</div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th> <label for=\"phone\">Phone Number:</label></th>\n                  <td> <input type=\"text\" formControlName=\"phone\" class=\"form-control\" id=\"phone\"\n                      placeholder=\"Enter Phone Number\" />\n                    <div *ngIf=\"submitted && profileForm.controls.phone.errors\" class=\"alert alert-danger\">\n                      <div *ngIf=\"profileForm.controls.phone.errors.required\">Phone Number is required</div>\n                      <div *ngIf=\"profileForm.controls.phone.errors.minlength\">Password must be at least 11\n                        characters</div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <th> <label for=\"password\">Password:</label></th>\n                  <td>\n                    <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\"\n                      placeholder=\"Password\" minlength=\"8\" />\n                    <div *ngIf=\"submitted && profileForm.controls.password.errors\" class=\"alert alert-danger\">\n                      <div *ngIf=\"profileForm.controls.password.required\">Password is required</div>\n                      <div *ngIf=\"profileForm.controls.password.errors.minlength\">Password must be at least 8\n                        characters</div>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td colspan=\"2\">\n                    <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n                    <button [disabled]=\"this.profileForm.invalid\" type=\"submit\" class=\"btn btn-success btn-block\">\n                      Update Profile\n                    </button>\n                  </td>\n                </tr>\n              </table>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/reset-password/reset-password.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/reset-password/reset-password.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <!-- Outer Row -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-md-6\">\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\n        <div class=\"card-body p-0\">\n          <!-- Nested Row within Card Body -->\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <div class=\"p-5\">\n                <div class=\"text-center\">\n                  <h1 class=\"h4 text-gray-900 mb-4\">Recorver Password!</h1>\n                </div>\n                <form [formGroup]=\"passwordForm\" (ngSubmit)=\"resetPassword()\" class=\"user\">\n                  <div class=\"form-group\">\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control form-control-user\"\n                      aria-describedby=\"emailHelp\" placeholder=\"Enter Email Address...\">\n                    <div *ngIf=\"submitted && passwordForm.controls.email.errors\" class=\"alert alert-danger\">\n                      <div *ngIf=\"passwordForm.controls.email.errors.required\">Email is required</div>\n                    </div>\n                  </div>\n                  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\n                  <button [disabled]=\"this.passwordForm.invalid\" type=\"submit\"\n                    class=\"btn btn-primary btn-user btn-block\">\n                    Proceed\n                  </button>\n                  <hr />\n                  <a routerLink=\"/login\" class=\"btn btn-link\">I Already Have Account </a>\n                </form>\n                <hr>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/view/view.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/view/view.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersViewViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Page Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n  <!-- Sidebar -->\r\n  <app-navbar></app-navbar>\r\n  <!-- End of Sidebar -->\r\n\r\n  <!-- Content Wrapper -->\r\n  <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n\r\n    <!-- Main Content -->\r\n    <div id=\"content\">\r\n\r\n      <!-- Topbar -->\r\n      <app-dashbar></app-dashbar>\r\n      <!-- End of Topbar -->\r\n\r\n      <!-- Begin Page Content -->\r\n      <div class=\"container-fluid\">\r\n\r\n        <!-- Page Heading -->\r\n        <h1 class=\"h3 mb-2 text-gray-800\">Affinity Users</h1>\r\n\r\n        <!-- DataTales Example -->\r\n        <div class=\"card shadow mb-4\">\r\n          <div class=\"card-header py-3\">\r\n            <h6 class=\"m-0 font-weight-bold text-primary\">Users</h6>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered\" width=\"100%\" cellspacing=\"0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Name</th>\r\n                    <th>Username/Affinity Email</th>\r\n                    <th>Status</th>\r\n                    <th>Email</th>\r\n                    <th>Signup date</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tfoot>\r\n                  <tr>\r\n                    <th>Name</th>\r\n                    <th>Username/Affinity Email</th>\r\n                    <th>Status</th>\r\n                    <th>Email</th>\r\n                    <th>Signup date</th>\r\n                    <th>Salary</th>\r\n                  </tr>\r\n                </tfoot>\r\n                <tbody>\r\n                  <div class=\"loader\" *ngIf=\"loading\">Loading...</div>\r\n                  <tr *ngIf=\"user\">\r\n                    <td>{{user.name}}</td>\r\n                    <td>{{user.affinity_email}}</td>\r\n                    <td>{{user.status}}</td>\r\n                    <td>{{user.email}}</td>\r\n                    <td>{{user.created_at}}</td>\r\n                    <td>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- /.container-fluid -->\r\n    </div>\r\n    <!-- End of Main Content -->\r\n    <!-- Footer -->\r\n    <app-footer></app-footer>\r\n    <!-- End of Footer -->\r\n  </div>\r\n  <!-- End of Content Wrapper -->\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/api/api.service.ts":
  /*!************************************!*\
    !*** ./src/app/api/api.service.ts ***!
    \************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppApiApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
        var liveUrl = 'https://sms2profit.herokuapp.com/api/v1';
        var localUrl = 'http://127.0.0.1:3000/api/v1';
        var heroku = 'https://sms2profit.herokuapp.com/api/v1';
        this.url = heroku;

        if (localStorage.getItem('token')) {
          this.token = localStorage.getItem('token');
        }
      }

      _createClass(ApiService, [{
        key: "dashboardStats",
        value: function dashboardStats() {
          return this.getRequest('/dashboard/stats');
        }
        /**
         * this method is for getting users login details
         */

      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.getRequest('/auth/user-detail/' + id);
        }
      }, {
        key: "postMessages",
        value: function postMessages(payload) {
          return this.postRequest('/messages', payload);
        }
        /**
         * get all sent Messages for the login in user
         */

      }, {
        key: "getMessages",
        value: function getMessages() {
          return this.getRequest('/messages');
        }
        /**
         * get a message with id
        */

      }, {
        key: "getMessage",
        value: function getMessage(id) {
          return this.getRequest('/messages/' + id);
        }
        /**
         * Get All Contacts from the backend
         * @returns Promise Object
         */

      }, {
        key: "getContacts",
        value: function getContacts() {
          return this.getRequest('/phonebooks');
        }
        /**
         * Get a Single Contact
         * @param id string the contact id to get
         * @returns Promise Object
         */

      }, {
        key: "getContact",
        value: function getContact(id) {
          return this.getRequest('/phonebooks/' + id);
        }
        /**
         *
         * @param payload object the payload to be delivered to the endpoint
         * @returns Promise Object of a promise
         */

      }, {
        key: "postContact",
        value: function postContact(payload) {
          return this.postRequest('/phonebooks', payload);
        }
        /**
         * Get All Group REcords
         * @returns Promise
         */

      }, {
        key: "getGroups",
        value: function getGroups() {
          return this.getRequest('/groups');
        }
        /**
         * @return a Promise
         * @param id string the group id to get
         */

      }, {
        key: "getGroup",
        value: function getGroup(id) {
          return this.getRequest('/groups/' + id);
        }
        /**
         * @returns Promise
         * @param payload object the payload to be delivered to the endpoint
         */

      }, {
        key: "postGroup",
        value: function postGroup(payload) {
          return this.postRequest('/groups', payload);
        }
        /**
         *
         * @param payload any this the transactions payload
         * @returns Promise
         */

      }, {
        key: "postTransactions",
        value: function postTransactions(payload) {
          return this.postRequest('/transactions', payload);
        }
        /**
         *@method this get all transactions on the backend
         *@returns objsect of type
         */

      }, {
        key: "getTransactions",
        value: function getTransactions() {
          return this.getRequest('/transactions');
        }
        /**
         *
         * @param slug the transaction id/reference
         */

      }, {
        key: "getTransaction",
        value: function getTransaction(slug) {
          return this.getRequest('/transactions/verify-transaction/' + slug);
        }
        /**
         *
         * @param slug the transaction reference/id
         */

      }, {
        key: "getVerifyTransaction",
        value: function getVerifyTransaction(slug) {
          return this.getRequest('/transactions/verify-transaction/' + slug);
        }
        /**
         *
         * @param payload phone number to be used to network airtime services
         */

      }, {
        key: "postAirtimeServices",
        value: function postAirtimeServices(payload) {
          return this.postRequest('/services/airtime-services', payload);
        }
        /**
         *
         * @param payload object transaction payload to request
         */

      }, {
        key: "postBuyAirtime",
        value: function postBuyAirtime(payload) {
          return this.postRequest('/services/buy-airtime', payload);
        }
        /**
         *
         * @param payload object payload
         */

      }, {
        key: "postDataServices",
        value: function postDataServices(payload) {
          return this.postRequest('/services/data-services', payload);
        }
        /**
         *
         * @param payload object
         */

      }, {
        key: "postBuyData",
        value: function postBuyData(payload) {
          return this.postRequest('/services/buy-data', payload);
        }
        /**
         * @method createUser for creating new users on the admin backend
         * @param payload any this is the post payload to be sent to the backend
         * @returns response
        */

      }, {
        key: "createUser",
        value: function createUser(payload) {
          return this.postRequest('/users', payload);
        }
        /**
         * tslint:disable-next-line:jsdoc-format
         *@method getUsers for creating new user
         *@return object
        */

      }, {
        key: "getUsers",
        value: function getUsers() {
          return this.getRequest('/users');
        }
        /**
         *
         * @param slug
         */

      }, {
        key: "viewUser",
        value: function viewUser(slug) {
          return this.getRequest('/users/' + slug);
        }
        /**
         *
         * @param payload
         */

      }, {
        key: "postUsers",
        value: function postUsers(payload) {
          return this.postRequest('/users', payload);
        }
        /**
         * Reset Password
         */

      }, {
        key: "logout",
        value: function logout() {
          return this.getRequest('/auth/logout');
        }
        /**
         *
         * @param payload the delivery payload
         */

      }, {
        key: "postResetPassword",
        value: function postResetPassword(payload) {
          return this.postRequest('/auth/reset-password', payload);
        }
      }, {
        key: "postProfileUpdate",
        value: function postProfileUpdate(payload) {
          return this.postRequest('/auth/update-profile', payload);
        }
        /**
         * This method handles users login posting
         * param payload object
         */

      }, {
        key: "postLogin",
        value: function postLogin(payload) {
          var _this = this;

          // return this.postRequest(, payload);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          return new Promise(function (resolve, reject) {
            _this.http.post(_this.url + '/auth/sign-in', JSON.stringify(payload), {
              headers: headers
            }).subscribe(function (responseData) {
              resolve(responseData); // console.log(responseData);
            }, function (err) {
              reject(err); // console.log(err);
            });
          });
        }
        /**
         * This method handles users login posting
         * @param payload any
         */

      }, {
        key: "postSignup",
        value: function postSignup(payload) {
          var _this2 = this;

          // return this.postRequest(, payload);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          return new Promise(function (resolve, reject) {
            _this2.http.post(_this2.url + '/auth/sign-up', JSON.stringify(payload), {
              headers: headers
            }).subscribe(function (responseData) {
              resolve(responseData); // console.log(responseData);
            }, function (err) {
              reject(err); // console.log(err);
            });
          });
        }
        /**
         * This Method handles get request
         * @param endPoint  string this is the called endpoint
         */

      }, {
        key: "getRequest",
        value: function getRequest() {
          var _this3 = this;

          var endPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var headers = this.getHeaders();
          return new Promise(function (resolve, reject) {
            _this3.http.get(_this3.url + endPoint, {
              headers: headers
            }).subscribe(function (data) {
              resolve(data);
            }, function (err) {
              reject(err);
            });
          });
        }
        /**
         * @param endPoint string this is the endpoint it points to
         * @param payload this the endpoint expected payload
         */

      }, {
        key: "postRequest",
        value: function postRequest() {
          var _this4 = this;

          var endPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.url;
          var payload = arguments.length > 1 ? arguments[1] : undefined;
          var headers = this.getHeaders();
          return new Promise(function (resolve, reject) {
            _this4.http.post(_this4.url + endPoint, JSON.stringify(payload), {
              headers: headers
            }).subscribe(function (responseData) {
              resolve(responseData);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "getHeaders",
        value: function getHeaders() {
          this.token = localStorage.getItem('token'); // console.log(this.token);

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Authorization', 'Bearer ' + this.token);
          return headers;
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], ApiService);
    /***/
  },

  /***/
  "./src/app/api/utility.service.ts":
  /*!****************************************!*\
    !*** ./src/app/api/utility.service.ts ***!
    \****************************************/

  /*! exports provided: UtilityService */

  /***/
  function srcAppApiUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return UtilityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var UtilityService =
    /*#__PURE__*/
    function () {
      function UtilityService(toastr) {
        _classCallCheck(this, UtilityService);

        this.toastr = toastr;
      }

      _createClass(UtilityService, [{
        key: "successToast",
        value: function successToast(message) {
          this.toastr.success(message, 'Successful');
        }
      }, {
        key: "errorToast",
        value: function errorToast(errorMessage) {
          this.toastr.error(errorMessage, 'Error!');
        }
      }, {
        key: "warningToast",
        value: function warningToast(warningMessage) {
          this.toastr.warning(warningMessage);
        }
        /**
         *
         * @param amount number The amount to be formatted
         * @param decimalCount string the decimal place of the number default to 2 decimal place
         * @param decimal string The decimal symbol to use default to .
         * @param thousands string the thousand maker to use default to ', comma'
         */

      }, {
        key: "currencyFormat",
        value: function currencyFormat(amount) {
          var decimalCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
          var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ".";
          var thousands = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ",";
        } // try {
        //   decimalCount = Math.abs(decimalCount);
        //   decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
        //   const negativeSign = amount < 0 ? "-" : "";
        //   const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        //   const j = (i.length > 3) ? i.length % 3 : 0;
        //   return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        // } catch (e) {
        //   console.log(e);
        // }

        /**
         *
         * @param amount any the amount to format
         * @returns string returns a formated currency e.g 1523 returns 1,523.00
         */

      }, {
        key: "formatCurrency",
        value: function formatCurrency(amount) {
          return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
      }]);

      return UtilityService;
    }();

    UtilityService.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])], UtilityService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _users_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./users/login/login.component */
    "./src/app/users/login/login.component.ts");
    /* harmony import */


    var _users_create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users/create/create.component */
    "./src/app/users/create/create.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _users_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./users/logout/logout.component */
    "./src/app/users/logout/logout.component.ts");
    /* harmony import */


    var _mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./mai-guard/aboki.guard */
    "./src/app/mai-guard/aboki.guard.ts");
    /* harmony import */


    var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./transactions/transactions.component */
    "./src/app/transactions/transactions.component.ts");
    /* harmony import */


    var _transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./transaction-view/transaction-view.component */
    "./src/app/transaction-view/transaction-view.component.ts");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");
    /* harmony import */


    var _messages_compose_messages_compose_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./messages/compose-messages/compose-messages.component */
    "./src/app/messages/compose-messages/compose-messages.component.ts");
    /* harmony import */


    var _messages_sent_messages_sent_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./messages/sent-messages/sent-messages.component */
    "./src/app/messages/sent-messages/sent-messages.component.ts");
    /* harmony import */


    var _phonebook_phonebook_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./phonebook/phonebook.component */
    "./src/app/phonebook/phonebook.component.ts");
    /* harmony import */


    var _phonebook_all_contact_all_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./phonebook/all-contact/all-contact.component */
    "./src/app/phonebook/all-contact/all-contact.component.ts");
    /* harmony import */


    var _phonebook_new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./phonebook/new-contact/new-contact.component */
    "./src/app/phonebook/new-contact/new-contact.component.ts");
    /* harmony import */


    var _phonebook_all_group_all_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./phonebook/all-group/all-group.component */
    "./src/app/phonebook/all-group/all-group.component.ts");
    /* harmony import */


    var _phonebook_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./phonebook/new-group/new-group.component */
    "./src/app/phonebook/new-group/new-group.component.ts");
    /* harmony import */


    var _transactions_fund_wallet_fund_wallet_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./transactions/fund-wallet/fund-wallet.component */
    "./src/app/transactions/fund-wallet/fund-wallet.component.ts");
    /* harmony import */


    var _bills_bills_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./bills/bills.component */
    "./src/app/bills/bills.component.ts");
    /* harmony import */


    var _bills_buy_airtime_buy_airtime_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./bills/buy-airtime/buy-airtime.component */
    "./src/app/bills/buy-airtime/buy-airtime.component.ts");
    /* harmony import */


    var _bills_pay_bills_pay_bills_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./bills/pay-bills/pay-bills.component */
    "./src/app/bills/pay-bills/pay-bills.component.ts");
    /* harmony import */


    var _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./users/reset-password/reset-password.component */
    "./src/app/users/reset-password/reset-password.component.ts");
    /* harmony import */


    var _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./users/profile/profile.component */
    "./src/app/users/profile/profile.component.ts"); // components


    var routes = [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]]
    }, {
      path: 'fund-wallet',
      component: _transactions_fund_wallet_fund_wallet_component__WEBPACK_IMPORTED_MODULE_20__["FundWalletComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]]
    }, {
      path: 'pay-bills',
      component: _bills_bills_component__WEBPACK_IMPORTED_MODULE_21__["BillsComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _bills_pay_bills_pay_bills_component__WEBPACK_IMPORTED_MODULE_23__["PayBillsComponent"]
      }]
    }, {
      path: 'buy-airtime',
      component: _bills_bills_component__WEBPACK_IMPORTED_MODULE_21__["BillsComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _bills_buy_airtime_buy_airtime_component__WEBPACK_IMPORTED_MODULE_22__["BuyAirtimeComponent"]
      }]
    }, {
      path: 'groups',
      component: _phonebook_phonebook_component__WEBPACK_IMPORTED_MODULE_15__["PhonebookComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _phonebook_all_group_all_group_component__WEBPACK_IMPORTED_MODULE_18__["AllGroupComponent"]
      }]
    }, {
      path: 'new-groups',
      component: _phonebook_phonebook_component__WEBPACK_IMPORTED_MODULE_15__["PhonebookComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _phonebook_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_19__["NewGroupComponent"]
      }]
    }, {
      path: 'new-contacts',
      component: _phonebook_phonebook_component__WEBPACK_IMPORTED_MODULE_15__["PhonebookComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _phonebook_new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_17__["NewContactComponent"]
      }]
    }, {
      path: 'contacts',
      component: _phonebook_phonebook_component__WEBPACK_IMPORTED_MODULE_15__["PhonebookComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _phonebook_all_contact_all_contact_component__WEBPACK_IMPORTED_MODULE_16__["AllContactComponent"]
      }]
    }, {
      path: 'sent-messages',
      component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _messages_sent_messages_sent_messages_component__WEBPACK_IMPORTED_MODULE_14__["SentMessagesComponent"]
      }]
    }, {
      path: 'compose-message',
      component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _messages_compose_messages_compose_messages_component__WEBPACK_IMPORTED_MODULE_13__["ComposeMessagesComponent"]
      }]
    }, {
      path: 'transactions',
      component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_10__["TransactionsComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]]
    }, {
      path: 'transactions/view/:transaction_id',
      component: _transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_11__["TransactionViewComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]]
    }, {
      path: 'profile',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"]
      }]
    }, {
      path: 'login',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
      children: [{
        path: '',
        component: _users_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }]
    }, {
      path: 'forgot-password',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
      children: [{
        path: '',
        component: _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_24__["ResetPasswordComponent"]
      }]
    }, {
      path: 'register',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
      children: [{
        path: '',
        component: _users_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]
      }]
    }, {
      path: 'logout',
      component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
      canActivate: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_9__["AbokiGuard"]],
      children: [{
        path: '',
        component: _users_logout_logout_component__WEBPACK_IMPORTED_MODULE_8__["LogoutComponent"]
      }]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var angular4_paystack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular4-paystack */
    "./node_modules/angular4-paystack/fesm2015/angular4-paystack.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _users_users_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./users/users.component */
    "./src/app/users/users.component.ts");
    /* harmony import */


    var _users_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./users/login/login.component */
    "./src/app/users/login/login.component.ts");
    /* harmony import */


    var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./transactions/transactions.component */
    "./src/app/transactions/transactions.component.ts");
    /* harmony import */


    var _users_create_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./users/create/create.component */
    "./src/app/users/create/create.component.ts");
    /* harmony import */


    var _users_view_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./users/view/view.component */
    "./src/app/users/view/view.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./mai-guard/aboki.guard */
    "./src/app/mai-guard/aboki.guard.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _users_logout_logout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./users/logout/logout.component */
    "./src/app/users/logout/logout.component.ts");
    /* harmony import */


    var _include_dashbar_dashbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./include/dashbar/dashbar.component */
    "./src/app/include/dashbar/dashbar.component.ts");
    /* harmony import */


    var _include_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./include/footer/footer.component */
    "./src/app/include/footer/footer.component.ts");
    /* harmony import */


    var _include_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./include/navbar/navbar.component */
    "./src/app/include/navbar/navbar.component.ts");
    /* harmony import */


    var _transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./transaction-view/transaction-view.component */
    "./src/app/transaction-view/transaction-view.component.ts");
    /* harmony import */


    var _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./messages/messages.component */
    "./src/app/messages/messages.component.ts");
    /* harmony import */


    var _messages_compose_messages_compose_messages_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./messages/compose-messages/compose-messages.component */
    "./src/app/messages/compose-messages/compose-messages.component.ts");
    /* harmony import */


    var _messages_sent_messages_sent_messages_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./messages/sent-messages/sent-messages.component */
    "./src/app/messages/sent-messages/sent-messages.component.ts");
    /* harmony import */


    var _phonebook_phonebook_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./phonebook/phonebook.component */
    "./src/app/phonebook/phonebook.component.ts");
    /* harmony import */


    var _phonebook_new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./phonebook/new-contact/new-contact.component */
    "./src/app/phonebook/new-contact/new-contact.component.ts");
    /* harmony import */


    var _phonebook_all_contact_all_contact_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./phonebook/all-contact/all-contact.component */
    "./src/app/phonebook/all-contact/all-contact.component.ts");
    /* harmony import */


    var _phonebook_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./phonebook/new-group/new-group.component */
    "./src/app/phonebook/new-group/new-group.component.ts");
    /* harmony import */


    var _phonebook_all_group_all_group_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./phonebook/all-group/all-group.component */
    "./src/app/phonebook/all-group/all-group.component.ts");
    /* harmony import */


    var _transactions_fund_wallet_fund_wallet_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./transactions/fund-wallet/fund-wallet.component */
    "./src/app/transactions/fund-wallet/fund-wallet.component.ts");
    /* harmony import */


    var _bills_bills_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./bills/bills.component */
    "./src/app/bills/bills.component.ts");
    /* harmony import */


    var _bills_buy_airtime_buy_airtime_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./bills/buy-airtime/buy-airtime.component */
    "./src/app/bills/buy-airtime/buy-airtime.component.ts");
    /* harmony import */


    var _bills_pay_bills_pay_bills_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./bills/pay-bills/pay-bills.component */
    "./src/app/bills/pay-bills/pay-bills.component.ts");
    /* harmony import */


    var _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./users/profile/profile.component */
    "./src/app/users/profile/profile.component.ts");
    /* harmony import */


    var _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./users/reset-password/reset-password.component */
    "./src/app/users/reset-password/reset-password.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_10__["UsersComponent"], _users_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_12__["TransactionsComponent"], _users_create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponent"], _users_view_view_component__WEBPACK_IMPORTED_MODULE_14__["ViewComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], _include_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"], _users_logout_logout_component__WEBPACK_IMPORTED_MODULE_18__["LogoutComponent"], _include_dashbar_dashbar_component__WEBPACK_IMPORTED_MODULE_19__["DashbarComponent"], _include_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"], _transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_22__["TransactionViewComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_23__["MessagesComponent"], _messages_compose_messages_compose_messages_component__WEBPACK_IMPORTED_MODULE_24__["ComposeMessagesComponent"], _messages_sent_messages_sent_messages_component__WEBPACK_IMPORTED_MODULE_25__["SentMessagesComponent"], _phonebook_phonebook_component__WEBPACK_IMPORTED_MODULE_26__["PhonebookComponent"], _phonebook_new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_27__["NewContactComponent"], _phonebook_all_contact_all_contact_component__WEBPACK_IMPORTED_MODULE_28__["AllContactComponent"], _phonebook_new_group_new_group_component__WEBPACK_IMPORTED_MODULE_29__["NewGroupComponent"], _phonebook_all_group_all_group_component__WEBPACK_IMPORTED_MODULE_30__["AllGroupComponent"], _transactions_fund_wallet_fund_wallet_component__WEBPACK_IMPORTED_MODULE_31__["FundWalletComponent"], _bills_bills_component__WEBPACK_IMPORTED_MODULE_32__["BillsComponent"], _bills_buy_airtime_buy_airtime_component__WEBPACK_IMPORTED_MODULE_33__["BuyAirtimeComponent"], _bills_pay_bills_pay_bills_component__WEBPACK_IMPORTED_MODULE_34__["PayBillsComponent"], _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"], _users_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_36__["ResetPasswordComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], angular4_paystack__WEBPACK_IMPORTED_MODULE_5__["Angular4PaystackModule"].forRoot('pk_test_62e65601e9e5df85272c1585f6a67479ded1eb17'), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_37__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_38__["environment"].production
      })],
      providers: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_16__["AbokiGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/bills/bills.component.css":
  /*!*******************************************!*\
    !*** ./src/app/bills/bills.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppBillsBillsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGxzL2JpbGxzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/bills/bills.component.ts":
  /*!******************************************!*\
    !*** ./src/app/bills/bills.component.ts ***!
    \******************************************/

  /*! exports provided: BillsComponent */

  /***/
  function srcAppBillsBillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BillsComponent", function () {
      return BillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BillsComponent =
    /*#__PURE__*/
    function () {
      function BillsComponent() {
        _classCallCheck(this, BillsComponent);
      }

      _createClass(BillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BillsComponent;
    }();

    BillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bills/bills.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bills.component.css */
      "./src/app/bills/bills.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], BillsComponent);
    /***/
  },

  /***/
  "./src/app/bills/buy-airtime/buy-airtime.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/bills/buy-airtime/buy-airtime.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBillsBuyAirtimeBuyAirtimeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGxzL2J1eS1haXJ0aW1lL2J1eS1haXJ0aW1lLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/bills/buy-airtime/buy-airtime.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/bills/buy-airtime/buy-airtime.component.ts ***!
    \************************************************************/

  /*! exports provided: BuyAirtimeComponent */

  /***/
  function srcAppBillsBuyAirtimeBuyAirtimeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuyAirtimeComponent", function () {
      return BuyAirtimeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");

    var BuyAirtimeComponent =
    /*#__PURE__*/
    function () {
      function BuyAirtimeComponent(api, util, formBuilder) {
        _classCallCheck(this, BuyAirtimeComponent);

        this.api = api;
        this.util = util;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.networkList = false;
        this.showPhone = false;
        this.airtimeForm = this.formBuilder.group({
          phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)]],
          network: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          buy_option: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          ref: ['' + Date.now() + '']
        });
      }

      _createClass(BuyAirtimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// ;
        }
      }, {
        key: "loadNetwork",
        value: function loadNetwork() {}
      }, {
        key: "buyAirtime",
        value: function buyAirtime() {
          var _this5 = this;

          this.submitted = true;

          if (this.airtimeForm.invalid) {
            return;
          }

          this.loading = true; // console.log(this.airtimeForm.value);

          this.api.postMessages(this.airtimeForm.value).then(function (result) {
            console.log(result);

            _this5.util.successToast('Message Sent');

            _this5.loading = false;
            _this5.airtimeForm = _this5.formBuilder.group({
              send_name: null,
              recipients: null,
              message_body: null
            });
          }, function (err) {
            console.log(err);

            _this5.util.errorToast('Invalid Credentials');

            _this5.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "dataOrAirtime",
        value: function dataOrAirtime(e) {
          this.showPhone = true;
        }
      }, {
        key: "phoneBlur",
        value: function phoneBlur(e) {
          var _this6 = this;

          var buyoption = this.airtimeForm.value.buy_option;
          this.loading = true;

          if (buyoption === 'buy-airtime') {
            // console.log('Getting Airtime List Service');
            this.api.postAirtimeServices({
              phone: this.airtimeForm.value.phone_number
            }).then(function (result) {
              console.log(result);

              _this6.util.successToast('Network Service Ready');

              _this6.loading = false;
              console.log(result); // remove the airtime service from here
            }, function (err) {
              console.log(err);

              _this6.util.errorToast('Error Getting Network Services');

              _this6.loading = false;
              console.log(err);
            });
          }

          if (buyoption === 'buy-data') {
            // console.log('Getting Data List Service');
            this.api.postDataServices({
              phone: this.airtimeForm.value.phone_number
            }).then(function (result) {
              console.log(result);

              _this6.util.successToast('Network Service Ready');

              _this6.loading = false;
              console.log(result); // remove the airtime service from here
            }, function (err) {
              console.log(err);

              _this6.util.errorToast('Error Getting Network Services');

              _this6.loading = false;
              console.log(err);
            });
          }
        }
      }]);

      return BuyAirtimeComponent;
    }();

    BuyAirtimeComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    BuyAirtimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buy-airtime',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./buy-airtime.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bills/buy-airtime/buy-airtime.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./buy-airtime.component.css */
      "./src/app/bills/buy-airtime/buy-airtime.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], BuyAirtimeComponent);
    /***/
  },

  /***/
  "./src/app/bills/pay-bills/pay-bills.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/bills/pay-bills/pay-bills.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBillsPayBillsPayBillsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGxzL3BheS1iaWxscy9wYXktYmlsbHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/bills/pay-bills/pay-bills.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/bills/pay-bills/pay-bills.component.ts ***!
    \********************************************************/

  /*! exports provided: PayBillsComponent */

  /***/
  function srcAppBillsPayBillsPayBillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayBillsComponent", function () {
      return PayBillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");

    var PayBillsComponent =
    /*#__PURE__*/
    function () {
      function PayBillsComponent(api, util, formBuilder) {
        _classCallCheck(this, PayBillsComponent);

        this.api = api;
        this.util = util;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.networkList = false;
        this.showPhone = false;
        this.airtimeForm = this.formBuilder.group({
          phone_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)]],
          network: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          buy_option: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          ref: ['' + Date.now() + '']
        });
      }

      _createClass(PayBillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// ;
        }
      }, {
        key: "loadNetwork",
        value: function loadNetwork() {}
      }, {
        key: "buyAirtime",
        value: function buyAirtime() {
          var _this7 = this;

          this.submitted = true;

          if (this.airtimeForm.invalid) {
            return;
          }

          this.loading = true; // console.log(this.airtimeForm.value);

          this.api.postMessages(this.airtimeForm.value).then(function (result) {
            console.log(result);

            _this7.util.successToast('Message Sent');

            _this7.loading = false;
            _this7.airtimeForm = _this7.formBuilder.group({
              send_name: null,
              recipients: null,
              message_body: null
            });
          }, function (err) {
            console.log(err);

            _this7.util.errorToast('Invalid Credentials');

            _this7.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "dataOrAirtime",
        value: function dataOrAirtime(e) {
          this.showPhone = true;
        }
      }, {
        key: "phoneBlur",
        value: function phoneBlur(e) {
          var _this8 = this;

          var buyoption = this.airtimeForm.value.buy_option;
          this.loading = true;

          if (buyoption === 'buy-airtime') {
            // console.log('Getting Airtime List Service');
            this.api.postAirtimeServices({
              phone: this.airtimeForm.value.phone_number
            }).then(function (result) {
              console.log(result);

              _this8.util.successToast('Network Service Ready');

              _this8.loading = false;
              console.log(result); // remove the airtime service from here
            }, function (err) {
              console.log(err);

              _this8.util.errorToast('Error Getting Network Services');

              _this8.loading = false;
              console.log(err);
            });
          }

          if (buyoption === 'buy-data') {
            // console.log('Getting Data List Service');
            this.api.postDataServices({
              phone: this.airtimeForm.value.phone_number
            }).then(function (result) {
              console.log(result);

              _this8.util.successToast('Network Service Ready');

              _this8.loading = false;
              console.log(result); // remove the airtime serice from here
            }, function (err) {
              console.log(err);

              _this8.util.errorToast('Error Getting Network Services');

              _this8.loading = false;
              console.log(err);
            });
          }
        }
      }]);

      return PayBillsComponent;
    }();

    PayBillsComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    PayBillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pay-bills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pay-bills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bills/pay-bills/pay-bills.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pay-bills.component.css */
      "./src/app/bills/pay-bills/pay-bills.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], PayBillsComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _api_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/utility.service */
    "./src/app/api/utility.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(api, util) {
        _classCallCheck(this, DashboardComponent);

        this.api = api;
        this.util = util;
        this.loading = true;
        this.formatedBalance = "0.00";
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.loadStats();
          this.getProfile();
        }
      }, {
        key: "loadStats",
        value: function loadStats() {
          var _this9 = this;

          // get the dashboard details
          this.api.dashboardStats().then(function (result) {
            _this9.loading = false;
            _this9.stats = {
              balance: 1005.45,
              sent_messages: 7644
            };
          }, function (err) {
            console.log(err);

            _this9.util.errorToast('Could Not Load Page Properly');

            _this9.loading = false;
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          this.profile = JSON.parse(localStorage.getItem('user'));
          this.formatedBalance = this.util.formatCurrency(this.profile.balance);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/include/dashbar/dashbar.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/include/dashbar/dashbar.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIncludeDashbarDashbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGUvZGFzaGJhci9kYXNoYmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/include/dashbar/dashbar.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/include/dashbar/dashbar.component.ts ***!
    \******************************************************/

  /*! exports provided: DashbarComponent */

  /***/
  function srcAppIncludeDashbarDashbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashbarComponent", function () {
      return DashbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DashbarComponent =
    /*#__PURE__*/
    function () {
      function DashbarComponent(api, router, formBuilder) {
        _classCallCheck(this, DashbarComponent);

        this.api = api;
        this.router = router;
        this.formBuilder = formBuilder;
      }

      _createClass(DashbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getName();
        }
      }, {
        key: "getName",
        value: function getName() {
          var user = JSON.parse(localStorage.getItem('user'));
          this.name = user.firstName + ' ' + user.lastName;
        }
      }]);

      return DashbarComponent;
    }();

    DashbarComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    DashbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/include/dashbar/dashbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashbar.component.css */
      "./src/app/include/dashbar/dashbar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], DashbarComponent);
    /***/
  },

  /***/
  "./src/app/include/footer/footer.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/include/footer/footer.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIncludeFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/include/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/include/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppIncludeFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/include/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/include/footer/footer.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/include/navbar/navbar.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/include/navbar/navbar.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppIncludeNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luY2x1ZGUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/include/navbar/navbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/include/navbar/navbar.component.ts ***!
    \****************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppIncludeNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/include/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/include/navbar/navbar.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/mai-guard/aboki.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/mai-guard/aboki.guard.ts ***!
    \******************************************/

  /*! exports provided: AbokiGuard */

  /***/
  function srcAppMaiGuardAbokiGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbokiGuard", function () {
      return AbokiGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AbokiGuard =
    /*#__PURE__*/
    function () {
      function AbokiGuard(router) {
        _classCallCheck(this, AbokiGuard);

        this.router = router;
      }

      _createClass(AbokiGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem("token") != null) return true;
          this.router.navigate(["/login"]);
          return false;
        }
      }]);

      return AbokiGuard;
    }();

    AbokiGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AbokiGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AbokiGuard);
    /***/
  },

  /***/
  "./src/app/messages/compose-messages/compose-messages.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/messages/compose-messages/compose-messages.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesComposeMessagesComposeMessagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL2NvbXBvc2UtbWVzc2FnZXMvY29tcG9zZS1tZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/messages/compose-messages/compose-messages.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/messages/compose-messages/compose-messages.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ComposeMessagesComponent */

  /***/
  function srcAppMessagesComposeMessagesComposeMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComposeMessagesComponent", function () {
      return ComposeMessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");

    var ComposeMessagesComponent =
    /*#__PURE__*/
    function () {
      function ComposeMessagesComponent(api, util, formBuilder) {
        _classCallCheck(this, ComposeMessagesComponent);

        this.api = api;
        this.util = util;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.messageCounter = '0';
        this.smsForm = this.formBuilder.group({
          send_name: ['SMS2Profit', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
          recipients: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11)]],
          message_body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]]
        });
      }

      _createClass(ComposeMessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "countMessage",
        value: function countMessage(e) {
          var mssgLength = this.smsForm.value.message_body.length;
          this.messageCounter = 'Page(s): ' + Math.ceil(mssgLength / 160) + ' {Message Lenght: ' + mssgLength + ' } ';
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this10 = this;

          this.submitted = true;

          if (this.smsForm.invalid) {
            return;
          }

          this.loading = true; // console.log(this.smsForm.value);

          this.api.postMessages(this.smsForm.value).then(function (result) {
            console.log(result);

            _this10.util.successToast('Message Sent');

            _this10.loading = false;
            _this10.smsForm = _this10.formBuilder.group({
              send_name: null,
              recipients: null,
              message_body: null
            });
          }, function (err) {
            console.log(err);

            _this10.util.errorToast('Invalid Credentials');

            _this10.loading = false;
            console.log(err);
          });
        }
      }]);

      return ComposeMessagesComponent;
    }();

    ComposeMessagesComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    ComposeMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-compose-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./compose-messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/compose-messages/compose-messages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./compose-messages.component.css */
      "./src/app/messages/compose-messages/compose-messages.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], ComposeMessagesComponent);
    /***/
  },

  /***/
  "./src/app/messages/messages.component.css":
  /*!*************************************************!*\
    !*** ./src/app/messages/messages.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesMessagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/messages/messages.component.ts":
  /*!************************************************!*\
    !*** ./src/app/messages/messages.component.ts ***!
    \************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MessagesComponent =
    /*#__PURE__*/
    function () {
      function MessagesComponent() {
        _classCallCheck(this, MessagesComponent);
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MessagesComponent;
    }();

    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.component.css */
      "./src/app/messages/messages.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/messages/sent-messages/sent-messages.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/messages/sent-messages/sent-messages.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesSentMessagesSentMessagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL3NlbnQtbWVzc2FnZXMvc2VudC1tZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/messages/sent-messages/sent-messages.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/messages/sent-messages/sent-messages.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SentMessagesComponent */

  /***/
  function srcAppMessagesSentMessagesSentMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SentMessagesComponent", function () {
      return SentMessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");

    var SentMessagesComponent =
    /*#__PURE__*/
    function () {
      function SentMessagesComponent(apiService, util) {
        _classCallCheck(this, SentMessagesComponent);

        this.apiService = apiService;
        this.util = util;
        this.loading = true;
      }

      _createClass(SentMessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSentMessages();
        }
      }, {
        key: "getSentMessages",
        value: function getSentMessages() {
          var _this11 = this;

          this.apiService.getMessages().then(function (result) {
            _this11.Messages = result.messages;
            _this11.loading = false;
          }, function (err) {
            _this11.util.errorToast('Could Not Fetch Record from the server');

            console.log(err);
          });
        }
      }]);

      return SentMessagesComponent;
    }();

    SentMessagesComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }];
    };

    SentMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sent-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sent-messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/sent-messages/sent-messages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sent-messages.component.css */
      "./src/app/messages/sent-messages/sent-messages.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])], SentMessagesComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-not-found.component.css */
      "./src/app/page-not-found/page-not-found.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/phonebook/all-contact/all-contact.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/phonebook/all-contact/all-contact.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhonebookAllContactAllContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob25lYm9vay9hbGwtY29udGFjdC9hbGwtY29udGFjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/phonebook/all-contact/all-contact.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/phonebook/all-contact/all-contact.component.ts ***!
    \****************************************************************/

  /*! exports provided: AllContactComponent */

  /***/
  function srcAppPhonebookAllContactAllContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllContactComponent", function () {
      return AllContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AllContactComponent =
    /*#__PURE__*/
    function () {
      function AllContactComponent(api, router, util, formBuilder) {
        _classCallCheck(this, AllContactComponent);

        this.api = api;
        this.router = router;
        this.util = util;
        this.formBuilder = formBuilder;
        this.loading = true;
        this.submitted = false;
        this.success = false;
        this.contactForm = this.formBuilder.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          group_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(AllContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllContacts();
        }
      }, {
        key: "getAllContacts",
        value: function getAllContacts() {
          var _this12 = this;

          this.api.getContacts().then(function (result) {
            _this12.Phonebooks = result.data;

            _this12.getAllGroups();
          }, function (err) {
            _this12.util.errorToast('Could Not Fetch Contacts from the server');

            console.log(err);
          });
        }
      }, {
        key: "getAllGroups",
        value: function getAllGroups() {
          var _this13 = this;

          this.api.getGroups().then(function (result) {
            _this13.Groups = result.groups;
            _this13.loading = false;
          }, function (err) {
            _this13.util.errorToast('Could Not Fetch Group from the server');

            console.log(err);
          });
        }
      }, {
        key: "newContact",
        value: function newContact() {
          var _this14 = this;

          // console.log(this.contactForm.value);
          this.submitted = true;

          if (this.contactForm.invalid) {
            return;
          }

          this.loading = true;
          this.api.postContact(this.contactForm.value).then(function (result) {
            console.log(result);

            _this14.util.successToast('New Contact Created');

            _this14.loading = false;

            _this14.router.navigate(['/contacts']);

            _this14.contactForm = _this14.formBuilder.group({
              group_id: null,
              name: null,
              phone_number: null
            });
          }, function (err) {
            console.log(err);

            _this14.util.errorToast('Invalid Credentials');

            _this14.loading = false;
            console.log(err);
          });
        }
      }]);

      return AllContactComponent;
    }();

    AllContactComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    AllContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/all-contact/all-contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-contact.component.css */
      "./src/app/phonebook/all-contact/all-contact.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], AllContactComponent);
    /***/
  },

  /***/
  "./src/app/phonebook/all-group/all-group.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/phonebook/all-group/all-group.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhonebookAllGroupAllGroupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob25lYm9vay9hbGwtZ3JvdXAvYWxsLWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/phonebook/all-group/all-group.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/phonebook/all-group/all-group.component.ts ***!
    \************************************************************/

  /*! exports provided: AllGroupComponent */

  /***/
  function srcAppPhonebookAllGroupAllGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllGroupComponent", function () {
      return AllGroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AllGroupComponent =
    /*#__PURE__*/
    function () {
      function AllGroupComponent(api, router, util, formBuilder) {
        _classCallCheck(this, AllGroupComponent);

        this.api = api;
        this.router = router;
        this.util = util;
        this.formBuilder = formBuilder;
        this.loading = true;
        this.submitted = false;
        this.success = false;
        this.groupForm = this.formBuilder.group({
          group_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(AllGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllGroups();
        }
      }, {
        key: "getAllGroups",
        value: function getAllGroups() {
          var _this15 = this;

          this.api.getGroups().then(function (result) {
            _this15.Groups = result.groups;
            _this15.loading = false;
          }, function (err) {
            _this15.util.errorToast('Could Not Fetch Record from the server');

            console.log(err);
          });
        }
      }, {
        key: "createGroup",
        value: function createGroup() {
          var _this16 = this;

          this.submitted = true;

          if (this.groupForm.invalid) {
            return;
          }

          this.loading = true;
          this.api.postGroup(this.groupForm.value).then(function (result) {
            console.log(result);

            _this16.util.successToast('New Group Created');

            _this16.loading = false;
            _this16.groupForm = _this16.formBuilder.group({
              group_name: null
            });

            _this16.router.navigate(['/groups']);
          }, function (err) {
            console.log(err);

            _this16.util.errorToast('Invalid Credentials');

            _this16.loading = false;
            console.log(err);
          });
        }
      }]);

      return AllGroupComponent;
    }();

    AllGroupComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    AllGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-all-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/all-group/all-group.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-group.component.css */
      "./src/app/phonebook/all-group/all-group.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], AllGroupComponent);
    /***/
  },

  /***/
  "./src/app/phonebook/new-contact/new-contact.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/phonebook/new-contact/new-contact.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhonebookNewContactNewContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob25lYm9vay9uZXctY29udGFjdC9uZXctY29udGFjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/phonebook/new-contact/new-contact.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/phonebook/new-contact/new-contact.component.ts ***!
    \****************************************************************/

  /*! exports provided: NewContactComponent */

  /***/
  function srcAppPhonebookNewContactNewContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewContactComponent", function () {
      return NewContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewContactComponent =
    /*#__PURE__*/
    function () {
      function NewContactComponent() {
        _classCallCheck(this, NewContactComponent);
      }

      _createClass(NewContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewContactComponent;
    }();

    NewContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/new-contact/new-contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-contact.component.css */
      "./src/app/phonebook/new-contact/new-contact.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NewContactComponent);
    /***/
  },

  /***/
  "./src/app/phonebook/new-group/new-group.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/phonebook/new-group/new-group.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhonebookNewGroupNewGroupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob25lYm9vay9uZXctZ3JvdXAvbmV3LWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/phonebook/new-group/new-group.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/phonebook/new-group/new-group.component.ts ***!
    \************************************************************/

  /*! exports provided: NewGroupComponent */

  /***/
  function srcAppPhonebookNewGroupNewGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGroupComponent", function () {
      return NewGroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewGroupComponent =
    /*#__PURE__*/
    function () {
      function NewGroupComponent() {
        _classCallCheck(this, NewGroupComponent);
      }

      _createClass(NewGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewGroupComponent;
    }();

    NewGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/new-group/new-group.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-group.component.css */
      "./src/app/phonebook/new-group/new-group.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NewGroupComponent);
    /***/
  },

  /***/
  "./src/app/phonebook/phonebook.component.css":
  /*!***************************************************!*\
    !*** ./src/app/phonebook/phonebook.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhonebookPhonebookComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob25lYm9vay9waG9uZWJvb2suY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/phonebook/phonebook.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/phonebook/phonebook.component.ts ***!
    \**************************************************/

  /*! exports provided: PhonebookComponent */

  /***/
  function srcAppPhonebookPhonebookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhonebookComponent", function () {
      return PhonebookComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PhonebookComponent =
    /*#__PURE__*/
    function () {
      function PhonebookComponent() {
        _classCallCheck(this, PhonebookComponent);
      }

      _createClass(PhonebookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PhonebookComponent;
    }();

    PhonebookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-phonebook',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./phonebook.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/phonebook/phonebook.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./phonebook.component.css */
      "./src/app/phonebook/phonebook.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PhonebookComponent);
    /***/
  },

  /***/
  "./src/app/transaction-view/transaction-view.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/transaction-view/transaction-view.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransactionViewTransactionViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uLXZpZXcvdHJhbnNhY3Rpb24tdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/transaction-view/transaction-view.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/transaction-view/transaction-view.component.ts ***!
    \****************************************************************/

  /*! exports provided: TransactionViewComponent */

  /***/
  function srcAppTransactionViewTransactionViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionViewComponent", function () {
      return TransactionViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _api_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api/utility.service */
    "./src/app/api/utility.service.ts");

    var TransactionViewComponent =
    /*#__PURE__*/
    function () {
      function TransactionViewComponent(router, route, api, util) {
        _classCallCheck(this, TransactionViewComponent);

        this.router = router;
        this.route = route;
        this.api = api;
        this.util = util;
        this.loading = true;
      }

      _createClass(TransactionViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.viewTransaction(this.route.snapshot.params.transaction_id);
        }
      }, {
        key: "viewTransaction",
        value: function viewTransaction(slug) {
          var _this17 = this;

          this.api.getTransaction(slug).then(function (result) {
            _this17.loading = false;
            _this17.Transaction = result.data;
          }, function (err) {
            console.log(err);

            _this17.util.errorToast('Could Not Load Page Properly');

            _this17.loading = false;
          });
        }
      }]);

      return TransactionViewComponent;
    }();

    TransactionViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }];
    };

    TransactionViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transaction-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transaction-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction-view/transaction-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transaction-view.component.css */
      "./src/app/transaction-view/transaction-view.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])], TransactionViewComponent);
    /***/
  },

  /***/
  "./src/app/transactions/fund-wallet/fund-wallet.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/transactions/fund-wallet/fund-wallet.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransactionsFundWalletFundWalletComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy9mdW5kLXdhbGxldC9mdW5kLXdhbGxldC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/transactions/fund-wallet/fund-wallet.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/transactions/fund-wallet/fund-wallet.component.ts ***!
    \*******************************************************************/

  /*! exports provided: FundWalletComponent */

  /***/
  function srcAppTransactionsFundWalletFundWalletComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FundWalletComponent", function () {
      return FundWalletComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var FundWalletComponent =
    /*#__PURE__*/
    function () {
      function FundWalletComponent(api, router, util, formBuilder) {
        _classCallCheck(this, FundWalletComponent);

        this.api = api;
        this.router = router;
        this.util = util;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.formatedAmount = "0.00";
        this.options = {
          amount: null,
          email: null,
          ref: null
        };
        this.paynow = false;
        this.fundWalletForm = this.formBuilder.group({
          amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
      }

      _createClass(FundWalletComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.usersDetails = JSON.parse(localStorage.getItem('user'));
        }
      }, {
        key: "generateInvoice",
        value: function generateInvoice() {
          var _this18 = this;

          this.submitted = true;

          if (this.fundWalletForm.invalid) {
            return;
          }

          this.loading = true;
          this.api.postTransactions(this.fundWalletForm.value).then(function (result) {
            _this18.options.amount = result.amount * 100;
            _this18.options.ref = result.transactionId;
            _this18.options.email = _this18.usersDetails.email;
            _this18.formatedAmount = _this18.util.formatCurrency(result.amount);

            _this18.util.successToast('Proceed To Payment');

            _this18.loading = false;
            _this18.fundWalletForm = _this18.formBuilder.group({
              amount: null
            });
            _this18.paynow = true;
          }, function (err) {
            _this18.util.errorToast('Request Failed');

            _this18.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "paymentInit",
        value: function paymentInit() {
          console.log('Payment initialized');
        }
      }, {
        key: "paymentDone",
        value: function paymentDone(ref) {
          var _this19 = this;

          // confirm payment
          this.api.getVerifyTransaction(ref.reference).then(function (result) {
            _this19.util.successToast(result.data);

            _this19.getUser(_this19.usersDetails.id);
          }, function (err) {
            _this19.util.errorToast('Your Transaction Failed');
          });
        }
      }, {
        key: "paymentCancel",
        value: function paymentCancel() {
          this.util.errorToast('Transaction Canceled');
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          var _this20 = this;

          this.api.getUser(id).then(function (result) {
            localStorage.setItem('user', JSON.stringify(result.user));

            _this20.router.navigate(['/dashboard']);
          }, function (err) {
            console.log(err);

            _this20.util.errorToast('Could not Get users Details');

            _this20.loading = false;
            localStorage.removeItem('token');
          });
        }
      }]);

      return FundWalletComponent;
    }();

    FundWalletComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    FundWalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fund-wallet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fund-wallet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/fund-wallet/fund-wallet.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fund-wallet.component.css */
      "./src/app/transactions/fund-wallet/fund-wallet.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], FundWalletComponent);
    /***/
  },

  /***/
  "./src/app/transactions/transactions.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/transactions/transactions.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTransactionsTransactionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/transactions/transactions.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/transactions/transactions.component.ts ***!
    \********************************************************/

  /*! exports provided: TransactionsComponent */

  /***/
  function srcAppTransactionsTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function () {
      return TransactionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _api_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api/utility.service */
    "./src/app/api/utility.service.ts");

    var TransactionsComponent =
    /*#__PURE__*/
    function () {
      function TransactionsComponent(api, util) {
        _classCallCheck(this, TransactionsComponent);

        this.api = api;
        this.util = util;
        this.loading = true;
      }

      _createClass(TransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllTransactions();
        }
      }, {
        key: "getAllTransactions",
        value: function getAllTransactions() {
          var _this21 = this;

          this.api.getTransactions().then(function (result) {
            _this21.loading = false;
            _this21.Transactions = result.transactions;
          }, function (err) {
            console.log(err);

            _this21.util.errorToast('Could Not Load Page Properly');

            _this21.loading = false;
          });
        }
      }]);

      return TransactionsComponent;
    }();

    TransactionsComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }];
    };

    TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transactions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transactions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transactions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transactions.component.css */
      "./src/app/transactions/transactions.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])], TransactionsComponent);
    /***/
  },

  /***/
  "./src/app/users/create/create.component.css":
  /*!***************************************************!*\
    !*** ./src/app/users/create/create.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersCreateCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/users/create/create.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/users/create/create.component.ts ***!
    \**************************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppUsersCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");

    var CreateComponent =
    /*#__PURE__*/
    function () {
      function CreateComponent(api, util, formBuilder) {
        _classCallCheck(this, CreateComponent);

        this.api = api;
        this.util = util;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.registerForm = this.formBuilder.group({
          firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11)]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(CreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "signup",
        value: function signup() {
          var _this22 = this;

          this.submitted = true;

          if (this.registerForm.invalid) {
            return;
          }

          this.loading = true;
          this.api.postSignup(this.registerForm.value).then(function (result) {
            _this22.util.successToast('Your Registration Was Successful');

            _this22.loading = false;
            _this22.registerForm = _this22.formBuilder.group({
              email: null,
              password: null,
              firstName: null,
              lastName: null,
              phone: null
            });
          }, function (err) {
            _this22.util.errorToast(err.error.error);

            _this22.loading = false;
            console.log(err.error.error);
          });
        }
      }]);

      return CreateComponent;
    }();

    CreateComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/create/create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create.component.css */
      "./src/app/users/create/create.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], CreateComponent);
    /***/
  },

  /***/
  "./src/app/users/login/login.component.css":
  /*!*************************************************!*\
    !*** ./src/app/users/login/login.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/users/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUsersLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(api, util, router, formBuilder) {
        _classCallCheck(this, LoginComponent);

        this.api = api;
        this.util = util;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.loginForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          rememberMe: ['true', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          localStorage.removeItem('token');
          localStorage.removeItem('user');

          if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this23 = this;

          this.submitted = true;

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.api.postLogin(this.loginForm.value).then(function (result) {
            var token = result.token;
            var id = result.userId;
            localStorage.setItem('token', token);

            if (localStorage.getItem('token')) {
              _this23.util.successToast('Your Login Was Successful');

              _this23.getUser(id);
            } else {
              localStorage.setItem('token', token);

              _this23.getUser(id);
            }
          }, function (err) {
            _this23.util.errorToast('Invalid Login Credentials');

            _this23.loading = false;
            console.log(err);
          });
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          var _this24 = this;

          this.api.getUser(id).then(function (result) {
            localStorage.setItem('user', JSON.stringify(result.user));

            _this24.router.navigate(['/dashboard']);
          }, function (err) {
            console.log(err);

            _this24.util.errorToast('Could not Get users Details');

            _this24.loading = false;
            localStorage.removeItem('token');
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/users/login/login.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/users/logout/logout.component.css":
  /*!***************************************************!*\
    !*** ./src/app/users/logout/logout.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersLogoutLogoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/users/logout/logout.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/users/logout/logout.component.ts ***!
    \**************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppUsersLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/api.service */
    "./src/app/api/api.service.ts");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(router, api) {
        _classCallCheck(this, LogoutComponent);

        this.router = router;
        this.api = api;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logout();
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this25 = this;

          this.api.logout().then(function (result) {
            // console.log(result);
            localStorage.removeItem('user');
            localStorage.removeItem('token');

            if (localStorage.getItem('token') == null) {
              _this25.router.navigate(['/login']);
            } else {
              localStorage.removeItem('user');
              localStorage.removeItem('token');

              _this25.router.navigate(['/login']);
            }
          }, function (err) {// console.log(err);
          });
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/logout/logout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./logout.component.css */
      "./src/app/users/logout/logout.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/users/profile/profile.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/users/profile/profile.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/users/profile/profile.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/users/profile/profile.component.ts ***!
    \****************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppUsersProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _api_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../api/utility.service */
    "./src/app/api/utility.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(api, util, formBuilder) {
        _classCallCheck(this, ProfileComponent);

        this.api = api;
        this.util = util;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.submitted = false;
        this.success = false;
        this.profileForm = this.formBuilder.group({
          firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11)]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getProfile();
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          this.profile = JSON.parse(localStorage.getItem('user')); // console.log(this.profile);

          this.profileForm = this.formBuilder.group({
            email: this.profile.email,
            password: this.profile.password,
            firstName: this.profile.firstName,
            lastName: this.profile.lastName,
            phone: this.profile.phone
          });
        }
      }, {
        key: "updateProfile",
        value: function updateProfile() {
          var _this26 = this;

          this.submitted = true;

          if (this.profileForm.invalid) {
            return;
          }

          this.loading = true;
          this.api.postProfileUpdate(this.profileForm.value).then(function (result) {
            _this26.util.successToast('Profile Updated Successfully');

            _this26.loading = false;
            _this26.profileForm = _this26.formBuilder.group({
              email: null,
              password: null,
              firstName: null,
              lastName: null,
              phone: null
            });
          }, function (err) {
            _this26.util.errorToast(err.error.error);

            _this26.loading = false;
            console.log(err.error.error);
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/users/profile/profile.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _api_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/users/reset-password/reset-password.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/users/reset-password/reset-password.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersResetPasswordResetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/reset-password/reset-password.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/users/reset-password/reset-password.component.ts ***!
    \******************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppUsersResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");

    var ResetPasswordComponent =
    /*#__PURE__*/
    function () {
      function ResetPasswordComponent(api, util, router, formBuilder) {
        _classCallCheck(this, ResetPasswordComponent);

        this.api = api;
        this.util = util;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.passwordForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this27 = this;

          this.submitted = true;

          if (this.passwordForm.invalid) {
            return;
          }

          this.loading = true;
          this.api.postResetPassword(this.passwordForm.value).then(function (result) {
            console.log(result);

            _this27.util.successToast('An Email has been Sent To The Provided Email');

            _this27.loading = false;
          }, function (err) {
            _this27.util.errorToast('Email Account Does Not Exist On Our Platform');

            _this27.loading = false;
            console.log(err);
          });
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reset-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/reset-password/reset-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reset-password.component.css */
      "./src/app/users/reset-password/reset-password.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/users/users.component.css":
  /*!*******************************************!*\
    !*** ./src/app/users/users.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/users.component.ts":
  /*!******************************************!*\
    !*** ./src/app/users/users.component.ts ***!
    \******************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent() {
        _classCallCheck(this, UsersComponent);
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UsersComponent;
    }();

    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users.component.css */
      "./src/app/users/users.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UsersComponent);
    /***/
  },

  /***/
  "./src/app/users/view/view.component.css":
  /*!***********************************************!*\
    !*** ./src/app/users/view/view.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersViewViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/users/view/view.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/users/view/view.component.ts ***!
    \**********************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppUsersViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/api.service */
    "./src/app/api/api.service.ts");
    /* harmony import */


    var src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/utility.service */
    "./src/app/api/utility.service.ts");

    var ViewComponent =
    /*#__PURE__*/
    function () {
      function ViewComponent(router, route, api, util) {
        _classCallCheck(this, ViewComponent);

        this.router = router;
        this.route = route;
        this.api = api;
        this.util = util;
        this.loading = true;
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.viewUser(this.route.snapshot.params.affinity_email);
        }
      }, {
        key: "viewUser",
        value: function viewUser(slug) {
          var _this28 = this;

          this.api.viewUser(slug).then(function (result) {
            _this28.util.successToast('User Record Loaded');

            _this28.user = result.data;
            _this28.loading = false;
            console.log(_this28.user);
          }, function (err) {
            _this28.util.errorToast('Error Loading Users Details');

            _this28.loading = false;
            console.log(err);
          });
        }
      }]);

      return ViewComponent;
    }();

    ViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }];
    };

    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/view/view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view.component.css */
      "./src/app/users/view/view.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], src_app_api_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])], ViewComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Projects\sms2profit\angular-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map