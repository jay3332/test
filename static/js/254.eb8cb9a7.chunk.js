"use strict";(self.webpackChunkgloble=self.webpackChunkgloble||[]).push([[254],{254:function(e,a,r){r.r(a),r.d(a,{default:function(){return w}});var t=r(2982),o=r(885),s=r(2791),l=r(6215),n=r(173),c=r(2606),i=r(8278),d=r(8336),u=r(3925),p=(d.R,u.R,{"es-MX":"NAME_ES","en-CA":"NAME_EN"}),m=r(184);function g(e){var a=e.win,r=e.error,t=e.guesses,o=(0,s.useContext)(i.R).locale,d=l.U;if("en-CA"!==o){var u=p[o];d=l.v.properties[u]}return r?(0,m.jsx)("p",{className:"text-red-700 ",children:r}):a?(0,m.jsx)("p",{className:"text-green-800 dark:text-green-300 font-bold ",children:(0,m.jsx)(c.Z,{id:"Game7",values:{answer:d}})}):0===t?(0,m.jsx)("p",{className:"text-gray-700 dark:text-gray-400 ",children:(0,m.jsx)(c.Z,{id:"Game3"})}):1===t?(0,m.jsx)("p",{className:"text-gray-700 dark:text-gray-400 ",children:(0,m.jsx)(c.Z,{id:"Game4",values:{click:n.tq?"tap":"click"}})}):(0,m.jsx)("p",{className:"text-red-700 "})}var x=r(3843),b=JSON.parse('[{"real":"eswatini","old":"swaziland"},{"real":"myanmar","old":"burma"},{"real":"north macedonia","old":"macedonia"},{"real":"congo","old":"congo-brazzaville"},{"real":"vatican","old":"holy see"},{"real":"vatican","old":"vatican city"},{"real":"cabo verde","old":"cape verde"},{"real":"democratic republic of the congo","old":"democratic republic of congo"},{"real":"democratic republic of the congo","old":"dr congo"}]'),f=r(3272),v=r(9199).R;function w(e){var a=e.guesses,r=e.setGuesses,n=e.win,d=e.setWin,u=(0,s.useState)(""),w=(0,o.Z)(u,2),h=w[0],N=w[1],C=(0,s.useState)(""),y=(0,o.Z)(C,2),j=y[0],k=y[1],A=(0,s.useContext)(i.R).locale,L=p[A];function E(e,a){return a.find((function(a){var r=a.properties,t=r.NAME,o=r.NAME_LONG,s=r.ABBREV,l=r.ADMIN,n=r.BRK_NAME,c=r.NAME_SORT;return t.toLowerCase()===e||o.toLowerCase()===e||l.toLowerCase()===e||s.toLowerCase()===e||s.replace(/\./g,"").toLowerCase()===e||t.replace(/-/g," ").toLowerCase()===e||n.toLowerCase()===e||c.toLowerCase()===e||a.properties[L].toLowerCase()===e}))}return(0,m.jsxs)("div",{className:"mt-10 mb-6 block mx-auto text-center",children:[(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k("");var o=function(){var e=h.trim().toLowerCase().replace(/&/g,"and").replace(/^st\s/g,"st. "),r=b.find((function(a){return a.old===e})),t=r?r.real:e;if(E(t,a))k(f.Z[A].Game6);else{var o=E(t,v);if(o)return o.properties.NAME===l.U&&d(!0),o;k(f.Z[A].Game5)}}();o&&l.v&&(o.proximity=(0,x.z)(o,l.v),r([].concat((0,t.Z)(a),[o])),N(""))},className:"w-80 flex space-x-4 mx-auto my-2 justify-center",children:[(0,m.jsx)("input",{className:"shadow px-2 py-1 md:py-0 text-gray-700 dark:bg-slate-300 focus:outline-none  focus:shadow-outline disabled:bg-slate-400 border rounded disabled:border-slate-400 w-full",type:"text",name:"guesser",id:"guesser",value:h,onChange:function(e){return N(e.currentTarget.value)},disabled:n,placeholder:0===a.length?f.Z[A].Game1:"",autoComplete:"new-password"}),(0,m.jsx)("button",{className:"bg-blue-700 dark:bg-purple-800 hover:bg-blue-900 dark:hover:bg-purple-900 disabled:bg-blue-900  text-white  font-bold py-1 md:py-2 px-4 rounded focus:shadow-outline ",type:"submit",disabled:n,children:(0,m.jsx)(c.Z,{id:"Game2"})})]}),(0,m.jsx)(g,{win:n,error:j,guesses:a.length})]})}}}]);
//# sourceMappingURL=254.eb8cb9a7.chunk.js.map