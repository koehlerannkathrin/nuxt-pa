(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{249:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Teasers"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"teasers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"headline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:94}};t.loc.source={body:"query Teasers {\n  teasers {\n    id\n    headline\n    content\n    image {\n      url\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var r=n.type;"NamedType"===r.kind&&t.add(r.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.Teasers=function(e,n){var t={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var c=r[n]||new Set,d=new Set,l=new Set;for(c.forEach((function(e){l.add(e)}));l.size>0;){var f=l;l=new Set,f.forEach((function(e){d.has(e)||(d.add(e),(r[e]||new Set).forEach((function(e){l.add(e)})))}))}return d.forEach((function(n){var r=o(e,n);r&&t.definitions.push(r)})),t}(t,"Teasers")},257:function(e,n,t){"use strict";t.r(n);t(117),t(118);var r=t(249),o={data:function(){return{teasers:[],query:""}},apollo:{teasers:{prefetch:!0,query:t.n(r).a}},computed:{filteredList:function(){var e=this;return this.teasers.filter((function(n){return n.headline.toLowerCase().includes(e.query.toLowerCase())}))}}},c=t(34),component=Object(c.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-container",{staticClass:"container-content"},[t("b-col",{attrs:{md:"8"}},[e._v("\n      // Search articles\n      "),t("form",{staticClass:"search-field"},[t("span"),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"search",placeholder:"Search..."},domProps:{value:e.query},on:{input:function(n){n.target.composing||(e.query=n.target.value)}}})]),e._v(" "),e._l(e.filteredList,(function(n,r){return t("div",{key:r,staticClass:"teaser-content"},[t("div",{staticClass:"teaser-img"},[t("img",{attrs:{src:"https://strapi-pa-heroku.herokuapp.com/"+n.image.url,alt:""}})]),e._v(" "),t("h3",{},[e._v(e._s(n.headline))]),e._v(" "),t("p",[e._v(e._s(n.content))]),e._v("\n          // Link to the teasers using router-link\n          "),t("router-link",{attrs:{to:{name:"teasers-id",params:{id:n.id}},tag:"a"}},[e._v("See acrticles ")])],1)}))],2)],1)}),[],!1,null,null,null);n.default=component.exports}}]);