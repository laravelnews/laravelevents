(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Auth_Forms_RegistrationForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _Hooks_UseErrors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Hooks/UseErrors */ "./resources/js/Hooks/UseErrors.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["showLabels"],
  setup: function setup() {
    var _useErrors = (0,_Hooks_UseErrors__WEBPACK_IMPORTED_MODULE_0__.useErrors)(),
        forError = _useErrors.forError,
        hasError = _useErrors.hasError;

    var form = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({
      name: null,
      email: null,
      password: null
    });

    var submit = function submit() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.post("/register", form);
    };

    return {
      form: form,
      forError: forError,
      hasError: hasError,
      submit: submit,
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

/***/ "./resources/js/Pages/Auth/Forms/RegistrationForm.vue":
/*!************************************************************!*\
  !*** ./resources/js/Pages/Auth/Forms/RegistrationForm.vue ***!
  \************************************************************/
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
/* harmony import */ var _RegistrationForm_vue_vue_type_template_id_0a761f2a_bindings_showLabels_props_form_setup_forError_setup_hasError_setup_submit_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=template&id=0a761f2a&bindings={"showLabels":"props","form":"setup","forError":"setup","hasError":"setup","submit":"setup","route":"setup"} */ "./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=template&id=0a761f2a&bindings={\"showLabels\":\"props\",\"form\":\"setup\",\"forError\":\"setup\",\"hasError\":\"setup\",\"submit\":\"setup\",\"route\":\"setup\"}");
/* harmony import */ var _RegistrationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationForm.vue?vue&type=script&lang=js */ "./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=script&lang=js");



_RegistrationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _RegistrationForm_vue_vue_type_template_id_0a761f2a_bindings_showLabels_props_form_setup_forError_setup_hasError_setup_submit_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__.render
/* hot reload */
if (false) {}

_RegistrationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/Auth/Forms/RegistrationForm.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_RegistrationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=script&lang=js .default */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegistrationForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=template&id=0a761f2a&bindings={\"showLabels\":\"props\",\"form\":\"setup\",\"forError\":\"setup\",\"hasError\":\"setup\",\"submit\":\"setup\",\"route\":\"setup\"}":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=template&id=0a761f2a&bindings={"showLabels":"props","form":"setup","forError":"setup","hasError":"setup","submit":"setup","route":"setup"} ***!
  \****************************************************************************************************************************************************************************************************************/
/*! namespace exports */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] -> ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=template&id=0a761f2a&bindings={"showLabels":"props","form":"setup","forError":"setup","hasError":"setup","submit":"setup","route":"setup"} .render */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_template_id_0a761f2a_bindings_showLabels_props_form_setup_forError_setup_hasError_setup_submit_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RegistrationForm_vue_vue_type_template_id_0a761f2a_bindings_showLabels_props_form_setup_forError_setup_hasError_setup_submit_setup_route_setup___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RegistrationForm.vue?vue&type=template&id=0a761f2a&bindings={"showLabels":"props","form":"setup","forError":"setup","hasError":"setup","submit":"setup","route":"setup"} */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=template&id=0a761f2a&bindings={\"showLabels\":\"props\",\"form\":\"setup\",\"forError\":\"setup\",\"hasError\":\"setup\",\"submit\":\"setup\",\"route\":\"setup\"}");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=template&id=0a761f2a&bindings={\"showLabels\":\"props\",\"form\":\"setup\",\"forError\":\"setup\",\"hasError\":\"setup\",\"submit\":\"setup\",\"route\":\"setup\"}":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Auth/Forms/RegistrationForm.vue?vue&type=template&id=0a761f2a&bindings={"showLabels":"props","form":"setup","forError":"setup","hasError":"setup","submit":"setup","route":"setup"} ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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


const _hoisted_1 = { class: "mt-1 rounded-md shadow-sm" }
const _hoisted_2 = {
  key: 0,
  class: "mt-2 text-sm text-red-600"
}
const _hoisted_3 = { class: "mt-1 rounded-md shadow-sm" }
const _hoisted_4 = {
  key: 0,
  class: "mt-2 text-sm text-red-600"
}
const _hoisted_5 = { class: "mt-1 rounded-md shadow-sm" }
const _hoisted_6 = {
  key: 0,
  class: "mt-2 text-sm text-red-600"
}
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", { class: "mt-6" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", { class: "block w-full rounded-md shadow-sm" }, [
    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
      type: "submit",
      class: "flex justify-center w-full px-6 py-2 font-medium text-white transition duration-150 ease-in-out bg-purple-600 border border-transparent rounded-md text-md hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700"
    }, " Sign up ")
  ])
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("form", {
    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => ($setup.submit(...args)), ["prevent"]))
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      class: { 'has-error': $setup.hasError('name') }
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        for: "name",
        class: ["block text-sm font-medium leading-5 text-gray-700", { 'sr-only': !$props.showLabels }]
      }, " Name ", 2 /* CLASS */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ($setup.form.name = $event)),
          id: "name",
          type: "text",
          required: "",
          placeholder: "Full Name",
          class: ["block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5", {
                        'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': $setup.hasError(
                            'name'
                        ),
                    }]
        }, null, 2 /* CLASS */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]
        ])
      ]),
      ($setup.hasError('name'))
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.forError("name")), 1 /* TEXT */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 2 /* CLASS */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      class: ["mt-6", { 'has-error': $setup.hasError('email') }]
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        for: "email",
        class: ["block text-sm font-medium leading-5 text-gray-700", { 'sr-only': !$props.showLabels }]
      }, " Email address ", 2 /* CLASS */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ($setup.form.email = $event)),
          id: "email",
          type: "email",
          required: "",
          placeholder: "Email address",
          class: ["block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5", {
                        'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': $setup.hasError(
                            'email'
                        ),
                    }]
        }, null, 2 /* CLASS */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]
        ])
      ]),
      ($setup.hasError('email'))
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.forError("email")), 1 /* TEXT */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 2 /* CLASS */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      class: ["mt-6", { 'has-error': $setup.hasError('password') }]
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", {
        for: "password",
        class: ["block text-sm font-medium leading-5 text-gray-700", { 'sr-only': !$props.showLabels }]
      }, " Password ", 2 /* CLASS */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ($setup.form.password = $event)),
          id: "password",
          type: "password",
          required: "",
          placeholder: "Password",
          class: ["block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5", {
                        'border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red': $setup.hasError(
                            'password'
                        ),
                    }]
        }, null, 2 /* CLASS */), [
          [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.password]
        ])
      ]),
      ($setup.hasError('password'))
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("p", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.forError("password")), 1 /* TEXT */))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
    ], 2 /* CLASS */),
    _hoisted_7
  ], 32 /* HYDRATE_EVENTS */))
}

/***/ })

}]);