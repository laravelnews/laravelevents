(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_VerifyEmail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/LoginLayout.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/LoginLayout.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Layouts_LoginLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/LoginLayout */ "./resources/js/Layouts/LoginLayout.vue");
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Logo */ "./resources/js/Components/Logo.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: _Layouts_LoginLayout__WEBPACK_IMPORTED_MODULE_0__.default,
  components: {
    Logo: _Components_Logo__WEBPACK_IMPORTED_MODULE_1__.default
  },
  setup: function setup() {
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_3__.reactive)({
      processing: false
    });

    var submit = function submit() {
      form.processing = true;
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post(route("verification.send")).then(function () {
        form.processing = false;
      });
    };

    var logout = function logout() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post(route("logout")).then(function (response) {
        window.location = "/";
      });
    };

    return {
      form: form,
      submit: submit,
      logout: logout,
      route: route
    };
  }
});

/***/ }),

/***/ "./resources/js/Components/Logo.vue":
/*!******************************************!*\
  !*** ./resources/js/Components/Logo.vue ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Logo_vue_vue_type_template_id_672d36f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=672d36f6 */ "./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6");

const script = {}
script.render = _Logo_vue_vue_type_template_id_672d36f6__WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

script.__file = "resources/js/Components/Logo.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (script);

/***/ }),

/***/ "./resources/js/Layouts/LoginLayout.vue":
/*!**********************************************!*\
  !*** ./resources/js/Layouts/LoginLayout.vue ***!
  \**********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _LoginLayout_vue_vue_type_template_id_5631159f_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginLayout.vue?vue&type=template&id=5631159f&bindings={} */ "./resources/js/Layouts/LoginLayout.vue?vue&type=template&id=5631159f&bindings={}");
/* harmony import */ var _LoginLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginLayout.vue?vue&type=script&lang=js */ "./resources/js/Layouts/LoginLayout.vue?vue&type=script&lang=js");



_LoginLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _LoginLayout_vue_vue_type_template_id_5631159f_bindings___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_LoginLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Layouts/LoginLayout.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_LoginLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Auth/VerifyEmail.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Auth/VerifyEmail.vue ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _VerifyEmail_vue_vue_type_template_id_9f895776_bindings_form_setup_submit_setup_logout_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=template&id=9f895776&bindings={"form":"setup","submit":"setup","logout":"setup","route":"setup"} */ "./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&bindings={\"form\":\"setup\",\"submit\":\"setup\",\"logout\":\"setup\",\"route\":\"setup\"}");
/* harmony import */ var _VerifyEmail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=script&lang=js */ "./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js");



_VerifyEmail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _VerifyEmail_vue_vue_type_template_id_9f895776_bindings_form_setup_submit_setup_logout_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_VerifyEmail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Auth/VerifyEmail.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_VerifyEmail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Layouts/LoginLayout.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Layouts/LoginLayout.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/LoginLayout.vue?vue&type=script&lang=js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/LoginLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerifyEmail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerifyEmail_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VerifyEmail.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6":
/*!************************************************************************!*\
  !*** ./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6 ***!
  \************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6 .render */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_template_id_672d36f6__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Logo_vue_vue_type_template_id_672d36f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Logo.vue?vue&type=template&id=672d36f6 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6");


/***/ }),

/***/ "./resources/js/Layouts/LoginLayout.vue?vue&type=template&id=5631159f&bindings={}":
/*!****************************************************************************************!*\
  !*** ./resources/js/Layouts/LoginLayout.vue?vue&type=template&id=5631159f&bindings={} ***!
  \****************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/LoginLayout.vue?vue&type=template&id=5631159f&bindings={} .render */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginLayout_vue_vue_type_template_id_5631159f_bindings___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoginLayout_vue_vue_type_template_id_5631159f_bindings___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoginLayout.vue?vue&type=template&id=5631159f&bindings={} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/LoginLayout.vue?vue&type=template&id=5631159f&bindings={}");


/***/ }),

/***/ "./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&bindings={\"form\":\"setup\",\"submit\":\"setup\",\"logout\":\"setup\",\"route\":\"setup\"}":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&bindings={"form":"setup","submit":"setup","logout":"setup","route":"setup"} ***!
  \***********************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&bindings={"form":"setup","submit":"setup","logout":"setup","route":"setup"} .render */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerifyEmail_vue_vue_type_template_id_9f895776_bindings_form_setup_submit_setup_logout_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VerifyEmail_vue_vue_type_template_id_9f895776_bindings_form_setup_submit_setup_logout_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VerifyEmail.vue?vue&type=template&id=9f895776&bindings={"form":"setup","submit":"setup","logout":"setup","route":"setup"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&bindings={\"form\":\"setup\",\"submit\":\"setup\",\"logout\":\"setup\",\"route\":\"setup\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Components/Logo.vue?vue&type=template&id=672d36f6 ***!
  \*********************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = {
  class: "inline-block w-20 rounded-sm",
  version: "1.1",
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 183 174",
  style: {"enable-background":"new 0 0 183 174"},
  "xml:space": "preserve",
  fill: "currentColor"
}
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("g", null, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("path", {
    class: "st0",
    d: "M183-4H0c0,0,0,0,0,0v173.2c0,2.6,2.1,4.8,4.8,4.8h173.5c2.6,0,4.7-2.1,4.7-4.7L183-4C183-4,183-4,183-4z M87.9,129.1C87.9,129.2,87.9,129.2,87.9,129.1c0,1-0.8,1.8-1.8,1.8H48.2h0c0,0,0,0,0,0c-2.5,0-4.5-2-4.5-4.5V44.9c0,0,0-0.1,0-0.1 c0-1,0.8-1.7,1.8-1.7h6.8c0,0,0.1,0,0.1,0c1,0,1.7,0.8,1.7,1.8v76.3h32c0,0,0.1,0,0.1,0c1,0,1.7,0.8,1.7,1.8V129.1z M141,128.3  c0,0,0,0.1,0,0.1c0,1.4-1.2,2.6-2.7,2.5h-7.6c-0.7,0-1.3-0.1-1.9-0.4c-0.6-0.3-1.1-0.8-1.4-1.3L87.5,59.5v48.8c0,0,0,0.1,0,0.1 c0,1-0.8,1.7-1.8,1.7h-6.3c0,0-0.1,0-0.1,0c-1,0-1.7-0.8-1.7-1.8V45.7c0,0,0-0.1,0-0.1c0-1.4,1.2-2.6,2.7-2.5h7.5 c0.7,0,1.3,0.1,1.9,0.4c0.6,0.3,1.1,0.8,1.4,1.3l40,69.7V44.9c0,0,0-0.1,0-0.1c0-1,0.8-1.7,1.8-1.7h6.3c0,0,0.1,0,0.1,0 c1,0,1.7,0.8,1.7,1.8V128.3z"
  })
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("svg", _hoisted_1, [
    _hoisted_2
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/LoginLayout.vue?vue&type=template&id=5631159f&bindings={}":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/LoginLayout.vue?vue&type=template&id=5631159f&bindings={} ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "flex flex-col font-sans justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("\n  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.\n  Read the documentation to get started: https://tailwindui.com/documentation\n"),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&bindings={\"form\":\"setup\",\"submit\":\"setup\",\"logout\":\"setup\",\"route\":\"setup\"}":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/VerifyEmail.vue?vue&type=template&id=9f895776&bindings={"form":"setup","submit":"setup","logout":"setup","route":"setup"} ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


const _hoisted_1 = { class: "flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0" }
const _hoisted_2 = { class: "w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg" }
const _hoisted_3 = { class: "flex items-center justify-between mt-4" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Logo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Logo")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Logo),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
        onSubmit: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($setup.submit(...args)), ["prevent"]))
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
            class: { 'opacity-25': $setup.form.processing },
            disabled: $setup.form.processing
          }, " Resend Verification Email ", 10 /* CLASS, PROPS */, ["disabled"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
            onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($setup.logout(...args)), ["prevent"])),
            class: "text-sm text-gray-600 underline hover:text-gray-900"
          }, " Logout ")
        ])
      ], 32 /* HYDRATE_EVENTS */)
    ])
  ]))
}

/***/ })

}]);