(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},33:function(e,a,t){e.exports=t(54)},38:function(e,a,t){},40:function(e){e.exports={}},51:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(28),c=t.n(l),s=(t(38),t(6)),m=t(7),o=t(9),i=t(8),u=t(10),d=t(13),p=t(11),E=t(20),f=t.n(E),h=t(29),b=function(e){return r.a.createElement("div",{"data-type":e.productType,"data-price":e.productPrice,className:"col-md-4 sortclassName"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"view overlay"},r.a.createElement("img",{className:"card-img-top",src:e.productImage,alt:e.productImageAlt}),r.a.createElement("a",{href:"#!"},r.a.createElement("div",{className:"mask rgba-white-slight"}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.productName),r.a.createElement("p",{className:"card-text"},"$",e.productPrice),r.a.createElement("p",{className:"card-text"},e.productDescription),r.a.createElement("a",{href:"##",className:"btn btn-primary"},"Order Now!"))))},N=(t(40),t(15),t(16),t(17),t(25),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={products:[]},t.componentDidMount=function(){t.fetchAllProducts()()},t.fetchAllProducts=function(e){return Object(h.a)(f.a.mark(function a(){var n,r,l,c,s;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n=Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||25565,!e){a.next=11;break}return console.log(e),a.next=5,fetch("http://localhost:".concat(n,"/api/products/?type=").concat(e));case 5:return r=a.sent,a.next=8,r.json();case 8:return l=a.sent,t.setState({products:l}),a.abrupt("return");case 11:return a.next=13,fetch("http://localhost:".concat(n,"/api/products"));case 13:return c=a.sent,a.next=16,c.json();case 16:s=a.sent,t.setState({products:s});case 18:case"end":return a.stop()}},a)}))},t.sortByPriceHandler=function(){t.setState({products:t.state.products.slice().sort(function(e,a){return e.product_price-a.product_price})})},t.sortByTypeHandler=function(){t.setState({products:t.state.products.slice().sort(function(e,a){var t=e.product_type,n=a.product_type;return t<n?-1:t>n?1:0})})},t.unsortHandler=function(){t.fetchAllProducts()()},t.unfilterHandler=function(){t.fetchAllProducts()()},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("div",{className:"container container-bg productsDiv"},r.a.createElement("div",{className:"dropdown sortAndFilter"},r.a.createElement("a",{className:"dropdownButton btn dropdown-toggle",href:"###",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},r.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.sortByTypeHandler},"Sort by type"),r.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.sortByPriceHandler},"Sort by price"),r.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.unsortHandler},"Unsort"))),r.a.createElement("div",{className:"dropdown sortAndFilter"},r.a.createElement("a",{className:"dropdownButton btn dropdown-toggle",href:"###",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Filter"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},r.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.fetchAllProducts("computer")},"Computers"),r.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.fetchAllProducts("camera")},"Cameras"),r.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.fetchAllProducts("printer")},"Printers"),r.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.unsortHandler},"Unfilter"))),r.a.createElement("div",{className:"row sortedProductsRow"},this.state.products.map(function(e,a){return r.a.createElement(b,{key:a,productName:e.product_name,productPrice:e.product_price,productType:e.product_type,productDescription:e.product_description,productImage:e.product_image,productImageAlt:e.product_name})}))))}}]),a}(r.a.Component)),v=t(30),g=(t(26),["./lib/img/slideImg1.png","./lib/img/slideImg2.jpeg","./lib/img/slideImg3.png"]),w={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0,onChange:function(e,a){console.log("slide transition from ".concat(e," to ").concat(a))}},y=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"page-wrapper"},r.a.createElement("div",{className:"container container-bg"},r.a.createElement("div",{className:"slide-container"},r.a.createElement(v.Slide,w,r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(g[0],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(g[1],")")}})),r.a.createElement("div",{className:"each-slide"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(g[2],")")}})))),r.a.createElement("h2",{className:"text-center p-4"},r.a.createElement("u",null,r.a.createElement("b",null,"Who We Are"))),r.a.createElement("p",{className:"p-4 homeText"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, risus sit amet lacinia fringilla, dolor ligula faucibus mi, quis congue mauris mauris vel lacus. Proin suscipit convallis posuere. Suspendisse bibendum metus erat, ac placerat elit imperdiet at. Nunc non dolor nec dolor malesuada aliquet vel eu ipsum. Proin ultrices mauris urna, at maximus velit ultrices sed. Vivamus sed venenatis purus, ut feugiat sem. Nam sit amet tristique tellus, quis faucibus quam. Mauris venenatis justo id nibh euismod ultricies ut vehicula lectus. Integer non justo consectetur, fermentum turpis congue, viverra tortor. Vivamus lobortis, diam in consectetur viverra, arcu urna volutpat nisl, non pellentesque neque nisl et metus. Donec quam mi, tristique non efficitur a, malesuada vitae odio. Nullam feugiat, augue eu lobortis commodo, felis elit volutpat odio, vel semper arcu enim in eros. Nullam mollis sed nibh ut viverra. Vestibulum vehicula, magna eget feugiat venenatis, odio dolor commodo libero, in sodales lacus sem sed tortor. Curabitur posuere ante nec convallis suscipit. Aliquam felis enim, egestas id malesuada non, finibus id massa. Nunc hendrerit purus arcu, at commodo odio ultrices eget. Integer sit amet semper lorem. Phasellus consectetur purus id eros suscipit, nec malesuada nibh posuere. Suspendisse bibendum vulputate mattis.")))}}]),a}(r.a.Component),x=(t(51),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(r)))).state={nameValue:"",emailValue:"",subjectValue:"",messageValue:"",formErrors:[],submittedSuccessfully:!1},t.nameOnChangeHandler=function(e){t.setState({nameValue:e.target.value})},t.emailOnChangeHandler=function(e){t.setState({emailValue:e.target.value})},t.subjectOnChangeHandler=function(e){t.setState({subjectValue:e.target.value})},t.messageOnChangeHandler=function(e){t.setState({messageValue:e.target.value})},t.formSubmit=function(){var e=[];""===t.state.nameValue&&e.push("Please enter a name."),""!==t.state.emailValue&&-1!==t.state.emailValue.indexOf("@")||e.push("Please enter a valid Email."),""===t.state.subjectValue&&e.push("Please enter a subject."),""===t.state.messageValue&&e.push("Please enter a message."),t.setState({formErrors:e}),0===e.length&&t.setState({submittedSuccessfully:!0})},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.state.formErrors.map(function(e,a){return r.a.createElement("div",{key:a,className:"formErrorDiv"},r.a.createElement("p",{className:"formErrorText"},e))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container container-bg contactFormDiv"},r.a.createElement("section",{className:"mb-4 contactForm"},r.a.createElement("h2",{className:"h1-responsive font-weight-bold text-center my-4"},"Contact us"),r.a.createElement("p",{className:"text-center w-responsive mx-auto mb-5"},"Do you have any questions? Please do not hesitate to contact us directly. Our team will contact you within 24 hours to help."),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9 mb-md-0 mb-5"},r.a.createElement("form",{id:"contact-form",name:"contact-form",action:"mail.php",method:"POST"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"md-form mb-0"},r.a.createElement("input",{type:"text",id:"name",name:"name",className:"form-control",onChange:this.nameOnChangeHandler}),r.a.createElement("label",{htmlFor:"name",className:""},"Your name"))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"md-form mb-0"},r.a.createElement("input",{type:"text",id:"email",name:"email",className:"form-control",onChange:this.emailOnChangeHandler}),r.a.createElement("label",{htmlFor:"email",className:""},"Your email")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"md-form mb-0"},r.a.createElement("input",{type:"text",id:"subject",name:"subject",className:"form-control",onChange:this.subjectOnChangeHandler}),r.a.createElement("label",{htmlFor:"subject",className:""},"Subject")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"md-form"},r.a.createElement("textarea",{id:"message",name:"message",rows:"2",className:"form-control md-textarea",onChange:this.messageOnChangeHandler}),r.a.createElement("label",{htmlFor:"message"},"Your message"))))),r.a.createElement("div",{className:"text-center text-md-left"},r.a.createElement("a",{id:"send",href:"###",className:"btn btn-primary",onClick:this.formSubmit},"Send")),r.a.createElement("div",{className:"status"})),r.a.createElement("div",{className:"col-md-3 text-center"},r.a.createElement("ul",{className:"list-unstyled mb-0"},r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-map-marker-alt fa-2x"}),r.a.createElement("p",null,"Detroit, MI 48127, USA")),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-phone mt-4 fa-2x"}),r.a.createElement("p",null,"+ 01 (555) 555 5555")),r.a.createElement("li",null,r.a.createElement("i",{className:"fas fa-envelope mt-4 fa-2x"}),r.a.createElement("p",null,"DylanBarber1@Outlook.com")))),this.state.submittedSuccessfully?r.a.createElement("div",{className:"formSubmittedDiv"},r.a.createElement("p",{className:"formSubmittedText"},"Your form has been submitted!")):r.a.createElement("div",{className:"formErrorsFoundWrapper"},e)))))}}]),a}(r.a.Component)),k=function(){return r.a.createElement("footer",{className:"page-footer font-small primary-color pt-4 align-items-end"},r.a.createElement("div",{className:"container text-center text-md-left"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mx-auto"},r.a.createElement("h5",{className:"font-weight-bold text-uppercase mt-3 mb-4"},"Disclaimer"),r.a.createElement("p",null,"DB Electronics is a publicy traded company. Access to the information and the documents contained on this portion of DB Electronics' website is restricted for regulatory reasons.")),r.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),r.a.createElement("div",{className:"col-md-2 mx-auto"},r.a.createElement("h5",{className:"font-weight-bold text-uppercase mt-3 mb-4"},"News"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Sign up for our Newsletter!")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"DB News")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Industry News")))),r.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),r.a.createElement("div",{className:"col-md-2 mx-auto"},r.a.createElement("h5",{className:"font-weight-bold text-uppercase mt-3 mb-4"},"Legal"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Please")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Don't")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Sue")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Me")))),r.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),r.a.createElement("div",{className:"col-md-2 mx-auto"},r.a.createElement("h5",{className:"font-weight-bold text-uppercase mt-3 mb-4"},"Rewards"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Sign up!")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Customer Deals")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Member Deals")))))),r.a.createElement("hr",null),r.a.createElement("ul",{className:"list-unstyled list-inline text-center"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"###",className:"btn-floating btn-fb mx-1"},r.a.createElement("i",{className:"fab fa-facebook-f"}," "))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"###",className:"btn-floating btn-tw mx-1"},r.a.createElement("i",{className:"fab fa-twitter"}," "))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"###",className:"btn-floating btn-gplus mx-1"},r.a.createElement("i",{className:"fab fa-google-plus-g"}," "))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"###",className:"btn-floating btn-li mx-1"},r.a.createElement("i",{className:"fab fa-linkedin-in"}," "))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"###",className:"btn-floating btn-dribbble mx-1"},r.a.createElement("i",{className:"fab fa-dribbble"}," ")))),r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2019 Copyright:",r.a.createElement("a",{href:"./index.html"}," DBElectronics.com")))},C=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark primary-color"},r.a.createElement(d.b,{className:"navbar-brand",to:"/"},"DB Electronics"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampl eNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"basicExampleNav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement(d.c,{className:"navBarLink nav-link",exact:!0,activeClassName:"active",to:"/"},r.a.createElement("li",{className:"nav-item"},"Home")),r.a.createElement(d.c,{className:"navBarLink nav-link",activeClassName:"active",to:"/Products/"},r.a.createElement("li",{className:"nav-item"},"Products")),r.a.createElement(d.c,{className:"navBarLink nav-link",activeClassName:"active",to:"/Contact"},r.a.createElement("li",{className:"nav-item"},"Contact Us!"))))),r.a.createElement(p.a,{path:"/",exact:!0,component:y}),r.a.createElement(p.a,{path:"/Products",component:N}),r.a.createElement(p.a,{path:"/Contact",component:x}),r.a.createElement(k,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.f3e55ff7.chunk.js.map