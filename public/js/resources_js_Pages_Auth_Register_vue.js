(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Register_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Hooks_UseErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Hooks/UseErrors */ "./resources/js/Hooks/UseErrors.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: _Layouts_LoginLayout__WEBPACK_IMPORTED_MODULE_0__.default,
  setup: function setup() {
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      name: null,
      email: null,
      remember: false
    });

    var _useErrors = (0,_Hooks_UseErrors__WEBPACK_IMPORTED_MODULE_3__.useErrors)(),
        forError = _useErrors.forError,
        hasError = _useErrors.hasError;

    var submit = function submit() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post(route("register"), form, {
        preserveScroll: true,
        preserveState: true
      });
    };

    return {
      form: form,
      submit: submit,
      forError: forError,
      hasError: hasError,
      route: route
    };
  }
});

/***/ }),

/***/ "./resources/js/Hooks/UseErrors.js":
/*!*****************************************!*\
  !*** ./resources/js/Hooks/UseErrors.js ***!
  \*****************************************/
/*! namespace exports */
/*! export useErrors [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useErrors": () => /* binding */ useErrors
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

function useErrors() {
  var _usePage = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.usePage)(),
      props = _usePage.props;

  var hasErrors = function hasErrors() {
    return Object.keys(props.value.errors).length;
  };

  var hasError = function hasError(key) {
    return props.value.errors.hasOwnProperty(key);
  };

  var forError = function forError(key) {
    if (!hasErrors() || !props.value.errors[key] || props.value.errors[key].length == 0) {
      return;
    }

    return props.value.errors[key];
  };

  return {
    forError: forError,
    hasError: hasError,
    hasErrors: hasErrors
  };
}

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

/***/ "./resources/js/Pages/Auth/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue ***!
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
/* harmony import */ var _Register_vue_vue_type_template_id_e59c811e_bindings_form_setup_submit_setup_forError_setup_hasError_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=e59c811e&bindings={"form":"setup","submit":"setup","forError":"setup","hasError":"setup","route":"setup"} */ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={\"form\":\"setup\",\"submit\":\"setup\",\"forError\":\"setup\",\"hasError\":\"setup\",\"route\":\"setup\"}");
/* harmony import */ var _Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js */ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js");



_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Register_vue_vue_type_template_id_e59c811e_bindings_form_setup_submit_setup_forError_setup_hasError_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Auth/Register.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

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

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={\"form\":\"setup\",\"submit\":\"setup\",\"forError\":\"setup\",\"hasError\":\"setup\",\"route\":\"setup\"}":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={"form":"setup","submit":"setup","forError":"setup","hasError":"setup","route":"setup"} ***!
  \*****************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={"form":"setup","submit":"setup","forError":"setup","hasError":"setup","route":"setup"} .render */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_e59c811e_bindings_form_setup_submit_setup_forError_setup_hasError_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_e59c811e_bindings_form_setup_submit_setup_forError_setup_hasError_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=e59c811e&bindings={"form":"setup","submit":"setup","forError":"setup","hasError":"setup","route":"setup"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={\"form\":\"setup\",\"submit\":\"setup\",\"forError\":\"setup\",\"hasError\":\"setup\",\"route\":\"setup\"}");


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

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={\"form\":\"setup\",\"submit\":\"setup\",\"forError\":\"setup\",\"hasError\":\"setup\",\"route\":\"setup\"}":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Register.vue?vue&type=template&id=e59c811e&bindings={"form":"setup","submit":"setup","forError":"setup","hasError":"setup","route":"setup"} ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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


const _hoisted_1 = { class: "sm:mx-auto sm:w-full sm:max-w-md" }
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("img", {
  class: "w-auto h-12 mx-auto",
  src: "https://tailwindui.com/img/logos/workflow-mark-on-white.svg",
  alt: "Workflow"
}, null, -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", { class: "mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900" }, " Create your account ", -1 /* HOISTED */)
const _hoisted_4 = { class: "mt-2 text-sm leading-5 text-center text-gray-600 max-w" }
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Or ")
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" sign in to your account ")
const _hoisted_7 = { class: "mt-8 sm:mx-auto sm:w-full sm:max-w-md" }
const _hoisted_8 = { class: "px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10" }
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  for: "name",
  class: "block text-sm font-medium leading-5 text-gray-700"
}, " Name ", -1 /* HOISTED */)
const _hoisted_10 = { class: "mt-1 rounded-md shadow-sm" }
const _hoisted_11 = {
  key: 0,
  class: "pt-3 text-sm font-semibold text-red-400"
}
const _hoisted_12 = { class: "mt-6" }
const _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  for: "email",
  class: "block text-sm font-medium leading-5 text-gray-700"
}, " Email address ", -1 /* HOISTED */)
const _hoisted_14 = { class: "mt-1 rounded-md shadow-sm" }
const _hoisted_15 = {
  key: 0,
  class: "pt-3 text-sm font-semibold text-red-400"
}
const _hoisted_16 = { class: "mt-6" }
const _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  for: "password",
  class: "block text-sm font-medium leading-5 text-gray-700"
}, " Password ", -1 /* HOISTED */)
const _hoisted_18 = { class: "mt-1 rounded-md shadow-sm" }
const _hoisted_19 = {
  key: 0,
  class: "pt-3 text-sm font-semibold text-red-400"
}
const _hoisted_20 = { class: "mt-6" }
const _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
  for: "password_confirmation",
  class: "block text-sm font-medium leading-5 text-gray-700"
}, " Confirm Password ", -1 /* HOISTED */)
const _hoisted_22 = { class: "mt-1 rounded-md shadow-sm" }
const _hoisted_23 = {
  key: 0,
  class: "pt-3 text-sm font-semibold text-red-400"
}
const _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "mt-6" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", { class: "block w-full rounded-md shadow-sm" }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      type: "submit",
      class: "flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
    }, " Create Account ")
  ])
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
      _hoisted_2,
      _hoisted_3,
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_4, [
        _hoisted_5,
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
          href: $setup.route('login'),
          class: "font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            _hoisted_6
          ]),
          _: 1
        }, 8 /* PROPS */, ["href"])
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_7, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_8, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("form", {
          onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($setup.submit(...args)), ["prevent"]))
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, [
            _hoisted_9,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($setup.form.name = $event)),
                id: "name",
                type: "text",
                class: ["block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5", { 'border-red-400': $setup.hasError('name') }]
              }, null, 2 /* CLASS */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]
              ])
            ]),
            ($setup.hasError('name'))
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.forError("name")), 1 /* TEXT */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_12, [
            _hoisted_13,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_14, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($setup.form.email = $event)),
                id: "email",
                type: "email",
                class: ["block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5", { 'border-red-400': $setup.hasError('email') }]
              }, null, 2 /* CLASS */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]
              ])
            ]),
            ($setup.hasError('email'))
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.forError("email")), 1 /* TEXT */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [
            _hoisted_17,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_18, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ($setup.form.password = $event)),
                id: "password",
                type: "password",
                class: ["block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5", { 'border-red-400': $setup.hasError('password') }]
              }, null, 2 /* CLASS */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.password]
              ])
            ]),
            ($setup.hasError('password'))
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.forError("password")), 1 /* TEXT */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_20, [
            _hoisted_21,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_22, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
                "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ($setup.form.password_confirmation = $event)),
                id: "password_confirmation",
                type: "password",
                class: ["block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5", {
                                'border-red-400': $setup.hasError(
                                    'password_confirmation'
                                ),
                            }]
              }, null, 2 /* CLASS */), [
                [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.password_confirmation]
              ])
            ]),
            ($setup.hasError('password_confirmation'))
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.forError("password_confirmation")), 1 /* TEXT */))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ]),
          _hoisted_24
        ], 32 /* HYDRATE_EVENTS */)
      ])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ })

}]);