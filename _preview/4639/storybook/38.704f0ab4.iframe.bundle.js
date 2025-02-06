(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"./src/components/VBanner/VTranslationStatusBanner.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../node_modules/.pnpm/core-js@3.36.1/node_modules/core-js/modules/es.string.link.js");var vue=__webpack_require__("../node_modules/.pnpm/vue@2.7.16/node_modules/vue/dist/vue.js"),ui=__webpack_require__("./src/stores/ui.ts"),translation_banner=__webpack_require__("./src/utils/translation-banner.ts"),emits=__webpack_require__("./src/types/emits.ts"),VLink=__webpack_require__("./src/components/VLink.vue"),VNotificationBanner=__webpack_require__("./src/components/VBanner/VNotificationBanner.vue"),VBanner_VTranslationStatusBannervue_type_script_lang_ts=Object(vue.defineComponent)({name:"VTranslationStatusBanner",components:{VLink:VLink.a,VNotificationBanner:VNotificationBanner.a},inheritAttrs:!1,props:{bannerKey:{type:String,required:!0}},emits:{close:Object(emits.a)()},setup:function setup(){var uiStore=Object(ui.a)();return{currentLocale:Object(vue.computed)((function(){var localeObject=uiStore.currentLocale;return{link:Object(translation_banner.a)(localeObject),name:localeObject.name}}))}}}),componentNormalizer=__webpack_require__("../node_modules/.pnpm/vue-loader@15.11.1_@vue+compiler-sfc@3.3.4_babel-core@7.0.0-bridge.0_@babel+core@7.24.4__css-_kpa2jm6q5lntp7j2v7yhhjk7he/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(VBanner_VTranslationStatusBannervue_type_script_lang_ts,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VNotificationBanner",_vm._b({attrs:{id:_vm.bannerKey,nature:"warning","data-testid":"banner-translation","close-button-label":_vm.$t("notification.translation.close")},on:{close:function close($event){return _vm.$emit("close")}}},"VNotificationBanner",_vm.$attrs,!1),[_c("i18n",{attrs:{path:"notification.translation.text"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{staticClass:"text-curr underline",attrs:{href:_vm.currentLocale.link}},[_vm._v(_vm._s(_vm.$t("notification.translation.link")))])]},proxy:!0},{key:"locale",fn:function fn(){return[_vm._v("\n      "+_vm._s(_vm.currentLocale.name)+"\n    ")]},proxy:!0}])})],1)}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VTranslationStatusBanner",exportName:"default",description:"",tags:{},props:[{name:"bannerKey",type:{name:"BannerId"},required:!0}],events:[{name:"close"}]}}}]);