(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){},21:function(e){e.exports={products:[{productName:"HP Elite Laptop",productPrice:"399.99",productType:"computer",productDescription:"Powered By Intel's Core i3 Processor, 8GB Of Ram & 1 TB of Hard Drive space, you can store all of the apps, games, photos, music and movies that you need.",productImage:"../lib/img/product1.jpg",productImageAlt:"HP Laptop"},{productName:"Viper V730 Mechanical Gaming Keyboard",productPrice:"57.66",productType:"keyboard",productDescription:"LED backlit keys with 5 lighting profiles. 104 key rollover anti-ghosting and 8 multimedia control keys",productImage:"../lib/img/product4.jpg",productImageAlt:"Mechanical Keyboard"},{productName:"Samsung EV-NX500ZBMIUS Camera",productPrice:"495",productType:"camera",productDescription:"New 28MP Back Side Illuminated APS-C Sensor. The NX AF System III on the NX500 is supported by 205 phase detect auto focus points",productImage:"../lib/img/product12.jpg",productImageAlt:"Samsung Camera"},{productName:"Canon PowerShot SX530 Camera",productPrice:"259.95",productType:"camera",productDescription:"Powerful 50x Optical Zoom (24-1200mm) Large 3.0-inch LCD with a screen resolution of 461,000 dots allows easy viewing even from a wide angle",productImage:"../lib/img/product11.jpg",productImageAlt:"Canon Camera"},{productName:"Havit Wired Gaming Keyboard",productPrice:"29.99",productType:"keyboard",productDescription:"Including a 7 Colorful Circular Breathing LED Gaming Mouse and a Rainbow Backlit Gaming Keyboard",productImage:"../lib/img/product5.jpg",productImageAlt:"Gaming Keyboard"},{productName:"Gateway ZX4951-33e",productPrice:"185",productType:"computer",productDescription:"Intel Core i3-550 3.2 GHz dual-core processor. 4 MB Intel Smart Cache, 2.5 GT/s DMI, Intel Hyper-Threading Technology",productImage:"../lib/img/product2.jpg",productImageAlt:"Gateway Computer"},{productName:"Canon PIXMA MG3620 Printer",productPrice:"39.99",productType:"printer",productDescription:"Easily print from your iPhone, iPad, Android or tablet ; High Resolution: 4800 x 1200 maximum color dpi produces incredible quality and detail.",productImage:"../lib/img/product9.jpg",productImageAlt:"Canon Printer"},{productName:"VicTsing USB Wired Keyboard",productPrice:"28.99",productType:"keyboard",productDescription:"Vic Tsing gaming keyboard panel adopts all metal materials, shockproof and wear-resistant. The skin-like rubber oil coating on it adds a delicate feeling.",productImage:"../lib/img/product6.jpeg",productImageAlt:"Wired Keyboard"},{productName:"Epson EcoTank Printer",productPrice:"349.99",productType:"printer",productDescription:"Less waste with Cartridge-Free Printing \u2014 one set of replacement bottles equivalent to about 80 individual cartridges (4); means fewer trips to the store.",productImage:"../lib/img/product7.jpg",productImageAlt:"Epson Printer"},{productName:"Dell Optiplex 990 SFF PC",productPrice:"263.50",productType:"computer",productDescription:"Intel Core i5 Processor, 16GB RAM, 2TB HDD, DVDRW, Keyboard & Mouse, Wi-Fi, Bluetooth 4.0, Windows 10 Home, 20in LCD Monitor",productImage:"../lib/img/product3.webp",productImageAlt:"Dell Computer"},{productName:"Canon EOS Rebel T7 DSLR Camera",productPrice:"429.99",productType:"camera",productDescription:"24.1 Megapixel CMOS (APS-C) Sensor with ISO 100-6400 (H: 12800) | DIGIC 4+ Image Processor | Continuous Shooting at up to 3.0 fps",productImage:"../lib/img/product10.jpg",productImageAlt:"Canon DSLR Camera"},{productName:"HP OfficeJet 3830 Printer",productPrice:"49.89",productType:"printer",productDescription:"Main functions of this HP color inkjet photo printer: copy, scan, fax, wireless printing, AirPrint, touchscreen, Instant Ink ready so you'll never run out of ink, and more",productImage:"../lib/img/product8.jpg",productImageAlt:"HP Inkjet Printer"}]}},26:function(e,a,t){},27:function(e,a,t){},34:function(e,a,t){e.exports=t(54)},39:function(e,a,t){},51:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(29),l=t.n(c),o=(t(39),t(6)),s=t(7),i=t(9),m=t(8),u=t(10),d=t(13),p=t(11),g=t(20),E=t.n(g),b=t(30),f=function(e){return n.a.createElement("div",{"data-type":e.productType,"data-price":e.productPrice,className:"col-md-4 sortclassName"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"view overlay"},n.a.createElement("img",{className:"card-img-top",src:e.productImage,alt:e.productImageAlt}),n.a.createElement("a",{href:"#!"},n.a.createElement("div",{className:"mask rgba-white-slight"}))),n.a.createElement("div",{className:"card-body"},n.a.createElement("h4",{className:"card-title"},e.productName),n.a.createElement("p",{className:"card-text"},"$",e.productPrice),n.a.createElement("p",{className:"card-text"},e.productDescription),n.a.createElement("a",{href:"##",className:"btn btn-primary"},"Order Now!"))))},h=t(21),N=(t(15),t(16),t(17),t(26),function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={productsMap:h.products},t.componentDidMount=Object(b.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object({NODE_ENV:"production",PUBLIC_URL:""}).PORT||25565,e.next=3,fetch("http://localhost:25565/api/products");case 3:return a=e.sent,e.next=6,JSON.stringify(a);case 6:e.sent,console.log(a[0]),console.log("test");case 9:case"end":return e.stop()}},e)})),t.sortByPriceHandler=function(){t.setState({productsMap:t.state.productsMap.slice().sort(function(e,a){return e.productPrice-a.productPrice})})},t.sortByTypeHandler=function(){t.setState({productsMap:t.state.productsMap.slice().sort(function(e,a){var t=e.productType,r=a.productType;return t<r?-1:t>r?1:0})})},t.unsortHandler=function(){t.setState({productsMap:h.products})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"page-wrapper"},n.a.createElement("div",{className:"container container-bg productsDiv"},n.a.createElement("div",{className:"dropdown"},n.a.createElement("a",{className:"dropdownButton btn dropdown-toggle",href:"###",role:"button",id:"dropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort"),n.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuLink"},n.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.sortByTypeHandler},"Sort by type"),n.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.sortByPriceHandler},"Sort by price"),n.a.createElement("a",{className:"dropdown-item",href:"###",onClick:this.unsortHandler},"Unsort"))),n.a.createElement("div",{className:"row sortedProductsRow"},this.state.productsMap.map(function(e,a){return n.a.createElement(f,{key:a,productName:e.productName,productPrice:e.productPrice,productType:e.productType,productDescription:e.productDescription,productImage:e.productImage,productImageAlt:e.productImageAlt})}))))}}]),a}(n.a.Component)),v=t(31),y=(t(27),["./lib/img/slideImg1.png","./lib/img/slideImg2.jpeg","./lib/img/slideImg3.png"]),w={duration:5e3,transitionDuration:500,infinite:!0,indicators:!0,arrows:!0,onChange:function(e,a){console.log("slide transition from ".concat(e," to ").concat(a))}},x=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"page-wrapper"},n.a.createElement("div",{className:"container container-bg"},n.a.createElement("div",{className:"slide-container"},n.a.createElement(v.Slide,w,n.a.createElement("div",{className:"each-slide"},n.a.createElement("div",{style:{backgroundImage:"url(".concat(y[0],")")}})),n.a.createElement("div",{className:"each-slide"},n.a.createElement("div",{style:{backgroundImage:"url(".concat(y[1],")")}})),n.a.createElement("div",{className:"each-slide"},n.a.createElement("div",{style:{backgroundImage:"url(".concat(y[2],")")}})))),n.a.createElement("h2",{className:"text-center p-4"},n.a.createElement("u",null,n.a.createElement("b",null,"Who We Are"))),n.a.createElement("p",{className:"p-4 homeText"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper, risus sit amet lacinia fringilla, dolor ligula faucibus mi, quis congue mauris mauris vel lacus. Proin suscipit convallis posuere. Suspendisse bibendum metus erat, ac placerat elit imperdiet at. Nunc non dolor nec dolor malesuada aliquet vel eu ipsum. Proin ultrices mauris urna, at maximus velit ultrices sed. Vivamus sed venenatis purus, ut feugiat sem. Nam sit amet tristique tellus, quis faucibus quam. Mauris venenatis justo id nibh euismod ultricies ut vehicula lectus. Integer non justo consectetur, fermentum turpis congue, viverra tortor. Vivamus lobortis, diam in consectetur viverra, arcu urna volutpat nisl, non pellentesque neque nisl et metus. Donec quam mi, tristique non efficitur a, malesuada vitae odio. Nullam feugiat, augue eu lobortis commodo, felis elit volutpat odio, vel semper arcu enim in eros. Nullam mollis sed nibh ut viverra. Vestibulum vehicula, magna eget feugiat venenatis, odio dolor commodo libero, in sodales lacus sem sed tortor. Curabitur posuere ante nec convallis suscipit. Aliquam felis enim, egestas id malesuada non, finibus id massa. Nunc hendrerit purus arcu, at commodo odio ultrices eget. Integer sit amet semper lorem. Phasellus consectetur purus id eros suscipit, nec malesuada nibh posuere. Suspendisse bibendum vulputate mattis.")))}}]),a}(n.a.Component),I=(t(51),function(e){function a(){var e,t;Object(o.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(n)))).state={nameValue:"",emailValue:"",subjectValue:"",messageValue:"",formErrors:[],submittedSuccessfully:!1},t.nameOnChangeHandler=function(e){t.setState({nameValue:e.target.value})},t.emailOnChangeHandler=function(e){t.setState({emailValue:e.target.value})},t.subjectOnChangeHandler=function(e){t.setState({subjectValue:e.target.value})},t.messageOnChangeHandler=function(e){t.setState({messageValue:e.target.value})},t.formSubmit=function(){var e=[];""===t.state.nameValue&&e.push("Please enter a name."),""!==t.state.emailValue&&-1!==t.state.emailValue.indexOf("@")||e.push("Please enter a valid Email."),""===t.state.subjectValue&&e.push("Please enter a subject."),""===t.state.messageValue&&e.push("Please enter a message."),t.setState({formErrors:e}),0===e.length&&t.setState({submittedSuccessfully:!0})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state.formErrors.map(function(e,a){return n.a.createElement("div",{key:a,className:"formErrorDiv"},n.a.createElement("p",{className:"formErrorText"},e))});return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container container-bg contactFormDiv"},n.a.createElement("section",{className:"mb-4 contactForm"},n.a.createElement("h2",{className:"h1-responsive font-weight-bold text-center my-4"},"Contact us"),n.a.createElement("p",{className:"text-center w-responsive mx-auto mb-5"},"Do you have any questions? Please do not hesitate to contact us directly. Our team will contact you within 24 hours to help."),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-9 mb-md-0 mb-5"},n.a.createElement("form",{id:"contact-form",name:"contact-form",action:"mail.php",method:"POST"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"md-form mb-0"},n.a.createElement("input",{type:"text",id:"name",name:"name",className:"form-control",onChange:this.nameOnChangeHandler}),n.a.createElement("label",{htmlFor:"name",className:""},"Your name"))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"md-form mb-0"},n.a.createElement("input",{type:"text",id:"email",name:"email",className:"form-control",onChange:this.emailOnChangeHandler}),n.a.createElement("label",{htmlFor:"email",className:""},"Your email")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"md-form mb-0"},n.a.createElement("input",{type:"text",id:"subject",name:"subject",className:"form-control",onChange:this.subjectOnChangeHandler}),n.a.createElement("label",{htmlFor:"subject",className:""},"Subject")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"md-form"},n.a.createElement("textarea",{id:"message",name:"message",rows:"2",className:"form-control md-textarea",onChange:this.messageOnChangeHandler}),n.a.createElement("label",{htmlFor:"message"},"Your message"))))),n.a.createElement("div",{className:"text-center text-md-left"},n.a.createElement("a",{id:"send",href:"###",className:"btn btn-primary",onClick:this.formSubmit},"Send")),n.a.createElement("div",{className:"status"})),n.a.createElement("div",{className:"col-md-3 text-center"},n.a.createElement("ul",{className:"list-unstyled mb-0"},n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-map-marker-alt fa-2x"}),n.a.createElement("p",null,"Detroit, MI 48127, USA")),n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-phone mt-4 fa-2x"}),n.a.createElement("p",null,"+ 01 (555) 555 5555")),n.a.createElement("li",null,n.a.createElement("i",{className:"fas fa-envelope mt-4 fa-2x"}),n.a.createElement("p",null,"DylanBarber1@Outlook.com")))),this.state.submittedSuccessfully?n.a.createElement("div",{className:"formSubmittedDiv"},n.a.createElement("p",{className:"formSubmittedText"},"Your form has been submitted!")):n.a.createElement("div",{className:"formErrorsFoundWrapper"},e)))))}}]),a}(n.a.Component)),P=function(){return n.a.createElement("footer",{className:"page-footer font-small primary-color pt-4 align-items-end"},n.a.createElement("div",{className:"container text-center text-md-left"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 mx-auto"},n.a.createElement("h5",{className:"font-weight-bold text-uppercase mt-3 mb-4"},"Disclaimer"),n.a.createElement("p",null,"DB Electronics is a publicy traded company. Access to the information and the documents contained on this portion of DB Electronics' website is restricted for regulatory reasons.")),n.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),n.a.createElement("div",{className:"col-md-2 mx-auto"},n.a.createElement("h5",{className:"font-weight-bold text-uppercase mt-3 mb-4"},"News"),n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Sign up for our Newsletter!")),n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"DB News")),n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Industry News")))),n.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),n.a.createElement("div",{className:"col-md-2 mx-auto"},n.a.createElement("h5",{className:"font-weight-bold text-uppercase mt-3 mb-4"},"Legal"),n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Please")),n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Don't")),n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Sue")),n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Me")))),n.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),n.a.createElement("div",{className:"col-md-2 mx-auto"},n.a.createElement("h5",{className:"font-weight-bold text-uppercase mt-3 mb-4"},"Rewards"),n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Sign up!")),n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Customer Deals")),n.a.createElement("li",null,n.a.createElement("a",{href:"#!"},"Member Deals")))))),n.a.createElement("hr",null),n.a.createElement("ul",{className:"list-unstyled list-inline text-center"},n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:"###",className:"btn-floating btn-fb mx-1"},n.a.createElement("i",{className:"fab fa-facebook-f"}," "))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:"###",className:"btn-floating btn-tw mx-1"},n.a.createElement("i",{className:"fab fa-twitter"}," "))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:"###",className:"btn-floating btn-gplus mx-1"},n.a.createElement("i",{className:"fab fa-google-plus-g"}," "))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:"###",className:"btn-floating btn-li mx-1"},n.a.createElement("i",{className:"fab fa-linkedin-in"}," "))),n.a.createElement("li",{className:"list-inline-item"},n.a.createElement("a",{href:"###",className:"btn-floating btn-dribbble mx-1"},n.a.createElement("i",{className:"fab fa-dribbble"}," ")))),n.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2019 Copyright:",n.a.createElement("a",{href:"./index.html"}," DBElectronics.com")))},C=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d.a,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark primary-color"},n.a.createElement(d.b,{className:"navbar-brand",to:"/"},"DB Electronics"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#basicExampleNav","aria-controls":"basicExampl eNav","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"basicExampleNav"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement(d.c,{className:"navBarLink nav-link",exact:!0,activeClassName:"active",to:"/"},n.a.createElement("li",{className:"nav-item"},"Home")),n.a.createElement(d.c,{className:"navBarLink nav-link",activeClassName:"active",to:"/Products/"},n.a.createElement("li",{className:"nav-item"},"Products")),n.a.createElement(d.c,{className:"navBarLink nav-link",activeClassName:"active",to:"/Contact"},n.a.createElement("li",{className:"nav-item"},"Contact Us!"))))),n.a.createElement(p.a,{path:"/",exact:!0,component:x}),n.a.createElement(p.a,{path:"/Products",component:N}),n.a.createElement(p.a,{path:"/Contact",component:I}),n.a.createElement(P,null)))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.808dc46c.chunk.js.map