(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],[,function(e,t,n){e.exports={title:"accordion-demo_title__2bPrw",demo:"accordion-demo_demo__2h4AZ",description:"accordion-demo_description__29Ho8",content:"accordion-demo_content__1RUQm"}},,,,,,function(e,t,n){e.exports={trigger:"accordion-section_trigger__ZYdfQ",panel:"accordion-section_panel__DLcyy",button:"accordion-section_button__hOFRM",title:"accordion-section_title__xSUNM",icon:"accordion-section_icon__3ZI_a",content:"accordion-section_content__3qh35"}},,,,function(e,t,n){e.exports={accordion:"accordion_accordion__2T1zJ"}},function(e,t,n){e.exports={content:"textbox_content__1N3ZR"}},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(10),l=n.n(c),r=(n(18),n(1)),i=n.n(r),s=n(2),d=n(3),m=n(5),u=n(4),p=n(6),E=n(11),h=n.n(E),b=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).call(this,e))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.children;return o.a.createElement("div",{className:h.a.accordion},e)}}]),t}(a.Component),g=n(8),y=n(7),_=n.n(y),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){n.setState((function(e){return{isExpanded:!e.isExpanded}}))},n.state={isExpanded:e.isExpanded},n.toggle=n.toggle.bind(Object(g.a)(n)),n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.includeAccordionContent,a=e.children,c=e.className,l=this.state.isExpanded;return o.a.createElement("div",{className:c},o.a.createElement("button",{className:_.a.trigger,onClick:this.toggle,"aria-expanded":l},o.a.createElement("span",{className:_.a.title},t,o.a.createElement("span",{className:_.a.icon}))),o.a.createElement("div",{id:"sect",className:_.a.panel,hidden:!l},n?o.a.createElement("div",{className:_.a.content}," Accordion Content"):null,o.a.createElement("br",null),a))}}]),t}(a.Component);f.defaultProps={includeAccordionContent:!0,isExpanded:!0};var v=f,x=n(12),C=n.n(x),A=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=e.children;return o.a.createElement("div",{style:t,className:C.a.content},n)}}]),t}(a.Component);var w=function(){return o.a.createElement("div",{id:"accordion-demo"},o.a.createElement("h2",{className:i.a.title},"React w/ CSS Module - Accordion Demo"),o.a.createElement("section",{className:i.a.content},o.a.createElement("p",null,"This demo is build with React along with CSS Module. The main purpose is to explorer CSS scoping capabilities of CSS in JS techniques. It uses an Accordion component which uses generic css class selector for, ",o.a.createElement("code",null,".title"),", ",o.a.createElement("code",null,".content"),". But they don't interfere with same selectors on the page."),o.a.createElement("pre",null,"Ex: ",o.a.createElement("br",null),"\xa0\xa0 page style                                     ",o.a.createElement("span",{style:{color:"#3c4043"}},".content")," (color: #3c4043;) ",o.a.createElement("br",null),"\xa0\xa0 accordion style                                ",o.a.createElement("span",{style:{color:"red"}},".content")," (color: red;) ",o.a.createElement("br",null),"\xa0\xa0 embedded component <textbox> style             ",o.a.createElement("span",{style:{color:"darkblue"}},".content")," (color: darkblue;)"),"Styles in component are encapsulated, they don't leak out onto the page and don't penetrate into the inner components.",o.a.createElement("br",null)," ",o.a.createElement("br",null),"The page is can only style Accordion if it exposes the styles to be stylable. It demonstrates the behavior with the following use cases:",o.a.createElement("ol",null,o.a.createElement("li",null,"Accordion styles don't leak out into the page, don't bleed into inner components."),o.a.createElement("li",null,"Page can style components's content."),o.a.createElement("li",null,"Page styles its content and insert it into Accordion."),o.a.createElement("li",null,"Component styles can be combined into single stylesheet."),o.a.createElement("li",null,"Content and Styles are separate.")),o.a.createElement("p",null,"The demo uses the two following CSS properties in the Accordion header to highlight the behavior:"),o.a.createElement("ul",null,o.a.createElement("li",null,"background-color"),o.a.createElement("li",null,"color"))),o.a.createElement("h4",null,"Demo:"),o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",null,"Accordion content is directly added by Accordion component ",o.a.createElement("br",null),o.a.createElement("div",{style:{color:"red",backgroundColor:"lightblue",border:"1px solid red",width:"9em",padding:".5em"}}," Accordion content")),o.a.createElement("li",null,"Page content is added by the page. ",o.a.createElement("br",null),o.a.createElement(A,null,"Page content")))),o.a.createElement("div",{className:i.a.demoBlock},o.a.createElement("div",{className:i.a.demo},o.a.createElement(b,null,o.a.createElement(v,{title:"Accordion styles don't leak out into the page, don't bleed into inner components",isExpanded:!0},o.a.createElement(A,null," Page content"),o.a.createElement("div",{className:i.a.description}," Page,  Accordion, and Textbox all use ",o.a.createElement("code",null,".content")," class selector. ",o.a.createElement("br",null)," ",o.a.createElement("br",null),"Their styles don't interfere. Accordion styles are encapsulated inside the component.")),o.a.createElement(v,{className:"stylingAccordion",title:"Page styles component's content"},o.a.createElement("div",{className:i.a.description},"Page can create a style with higher specificity and style Accordion content. text color is ",o.a.createElement("span",{style:{color:"green"}},"green"))),o.a.createElement(v,{title:"Page styles its content inserted into Accordion",includeAccordionContent:!1},o.a.createElement(A,{style:{backgroundColor:"lightgray"}},o.a.createElement("span",{style:{color:"green"}}," Page content ")),o.a.createElement("div",{className:i.a.description},"Page content is inserted in Accordion but the page has full control in styling its appearance. ",o.a.createElement("br",null)," ",o.a.createElement("span",{style:{color:"green"}},"color")," and ",o.a.createElement("span",{style:{backgroundColor:"lightgray"}},"background-color")," changed.")),o.a.createElement(v,{title:"Component styles can be combined into single stylesheet",includeAccordionContent:!1},o.a.createElement("div",{className:i.a.description},"Yes. Component styles are scoped to component where they were created. ",o.a.createElement("br",null)," It's achieved through a compile step. ",o.a.createElement("br",null),o.a.createElement("br",null),"the original HTML and style ",o.a.createElement("br",null),'HTML:    <section class="content"> ',o.a.createElement("br",null),"CSS:     .content {...}",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#e8bf6a"}},"<section "),o.a.createElement("span",{style:{color:"gray"}}," class"),o.a.createElement("span",{style:{color:"#a5c261"}},'="accordion-demo_content__1RUQm"'),o.a.createElement("span",{style:{color:"#e8bf6a"}},">"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#a5c261"}},".accordion-demo_content__1RUQm { color:#3c4043; }"))),o.a.createElement(v,{title:"Content and Style are separate",includeAccordionContent:!0},o.a.createElement("div",{className:"description"},"Vue supports separation of content and style by enabling the use of <styles> tag for CSS and <template> tag for HTML."))))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.67221fbb.chunk.js.map