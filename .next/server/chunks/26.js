exports.id=26,exports.ids=[26],exports.modules={3064:(e,t,r)=>{Promise.resolve().then(r.bind(r,1757)),Promise.resolve().then(r.bind(r,7533)),Promise.resolve().then(r.bind(r,9799)),Promise.resolve().then(r.bind(r,5663)),Promise.resolve().then(r.t.bind(r,9607,23))},7912:(e,t,r)=>{Promise.resolve().then(r.bind(r,7574)),Promise.resolve().then(r.bind(r,9065)),Promise.resolve().then(r.bind(r,7795)),Promise.resolve().then(r.bind(r,8747)),Promise.resolve().then(r.t.bind(r,8531,23))},9728:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9607,23))},3280:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8531,23))},2389:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},5541:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,1284,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},9065:(e,t,r)=>{"use strict";r.d(t,{NewBlogNotification:()=>d});var s=r(5512),n=r(8009),o=r(9334),a=r(3330),i=r(771),l=r(8747);function d(){let[e,t]=(0,n.useState)(!1),{language:r}=(0,l.o)(),d=(0,o.useRouter)();return e?(0,s.jsxs)("div",{className:"fixed bottom-4 right-4 bg-secondary-500 text-white p-4 rounded-lg shadow-lg flex items-center space-x-2",children:[(0,s.jsx)(a.A,{className:"h-6 w-6"}),(0,s.jsx)("span",{children:"en"===r?"New blog post available!":"\xa1Nuevo post de blog disponible!"}),(0,s.jsx)(i.$,{onClick:()=>{t(!1),d.push("/blog-podcast")},variant:"outline",size:"sm",className:"ml-2",children:"en"===r?"Read now":"Leer ahora"})]}):null}},7574:(e,t,r)=>{"use strict";r.d(t,{Nav:()=>N});var s=r(5512),n=r(8009),o=r(8531),a=r.n(o),i=r(771),l=r(7553),d=r(1643),c=r(1255),h=r(124);let m=l.bL,u=l.l9;l.bm;let p=l.ZL,f=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)(l.hJ,{className:(0,h.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:r}));f.displayName=l.hJ.displayName;let x=(0,d.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),g=n.forwardRef(({side:e="right",className:t,children:r,...n},o)=>(0,s.jsxs)(p,{children:[(0,s.jsx)(f,{}),(0,s.jsxs)(l.UC,{ref:o,className:(0,h.cn)(x({side:e}),t),...n,children:[r,(0,s.jsxs)(l.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(c.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]}));g.displayName=l.UC.displayName,n.forwardRef(({className:e,...t},r)=>(0,s.jsx)(l.hE,{ref:r,className:(0,h.cn)("text-lg font-semibold text-foreground",e),...t})).displayName=l.hE.displayName,n.forwardRef(({className:e,...t},r)=>(0,s.jsx)(l.VY,{ref:r,className:(0,h.cn)("text-sm text-muted-foreground",e),...t})).displayName=l.VY.displayName;var b=r(8320),v=r(8747);function j(){let{language:e,toggleLanguage:t}=(0,v.o)();return(0,s.jsx)(i.$,{onClick:t,variant:"outline",size:"sm",className:"rounded-full border-2 border-gray-200 hover:border-secondary-500 hover:bg-secondary-50",children:"en"===e?"ES":"EN"})}var y=r(7795);function N(){let[e,t]=(0,n.useState)(!1),{language:r}=(0,v.o)(),{user:o,logout:l}=(0,y.A)(),d=[{name:"en"===r?"Home":"Inicio",path:"/"},{name:"en"===r?"Blog & Podcast":"Blog y Podcast",path:"/blog-podcast"},{name:"en"===r?"About":"Acerca de",path:"/about"},{name:"en"===r?"Pricing":"Precios",path:"/pricing"},{name:"en"===r?"Contact":"Contacto",path:"/contact"},...o?[]:[{name:"en"===r?"Login":"Iniciar sesi\xf3n",path:"/login"}],...o?.isAdmin?[{name:"en"===r?"Admin":"Administrador",path:"/admin/dashboard"}]:[]],c=({href:e,children:r})=>(0,s.jsx)(a(),{href:e,onClick:()=>t(!1),className:"text-lg font-medium text-primary-900 hover:text-secondary-600 transition-colors py-3",children:r});return(0,s.jsx)("nav",{className:"fixed top-0 w-full bg-white border-b border-gray-100 z-50 shadow-sm",children:(0,s.jsxs)("div",{className:"container flex items-center justify-between h-16",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)(a(),{href:"/",className:"flex items-center space-x-2",children:[(0,s.jsx)("img",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-01-26%20a%20las%2015.19.42_e01988de.jpg-cpajLuZWHffaR1AfdCOjwttm1CwJLm.jpeg",alt:"LinkUp Logo",className:"h-8 w-8 rounded-full"}),(0,s.jsx)("span",{className:"font-bold text-xl text-primary-900",children:"LinkUp"})]}),(0,s.jsx)(j,{})]}),(0,s.jsxs)("div",{className:"hidden md:flex items-center space-x-6",children:[d.map(e=>(0,s.jsx)(a(),{href:e.path,className:"text-sm font-medium text-primary-900 hover:text-secondary-600 transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-secondary-600 after:transition-all hover:after:w-full",children:e.name},e.path)),o?(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("span",{className:"text-sm font-medium text-primary-900",children:["Welcome, ",o.username]}),(0,s.jsx)(i.$,{onClick:l,variant:"ghost",className:"hover:bg-secondary-50 rounded-full",children:"en"===r?"Logout":"Cerrar sesi\xf3n"})]}):(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)(a(),{href:"/login",className:"text-sm font-medium text-primary-900 hover:text-secondary-600 transition-all duration-300",children:"en"===r?"Login":"Iniciar sesi\xf3n"}),(0,s.jsx)(i.$,{asChild:!0,className:"bg-blue-600 text-white hover:bg-blue-700 rounded-full",children:(0,s.jsx)(a(),{href:"/apply",children:"en"===r?"Apply Now":"Aplicar Ahora"})})]})]}),(0,s.jsxs)(m,{open:e,onOpenChange:t,children:[(0,s.jsx)(u,{asChild:!0,children:(0,s.jsxs)(i.$,{variant:"ghost",size:"icon",className:"md:hidden hover:bg-secondary-50 rounded-full",children:[(0,s.jsx)(b.A,{className:"h-6 w-6"}),(0,s.jsx)("span",{className:"sr-only",children:"Open menu"})]})}),(0,s.jsx)(g,{side:"right",className:"w-[280px] bg-white p-0",children:(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[(0,s.jsxs)("div",{className:"p-4 border-b",children:[(0,s.jsxs)(a(),{href:"/",onClick:()=>t(!1),className:"flex items-center space-x-2",children:[(0,s.jsx)("img",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-01-26%20a%20las%2015.19.42_e01988de.jpg-cpajLuZWHffaR1AfdCOjwttm1CwJLm.jpeg",alt:"LinkUp Logo",className:"h-8 w-8 rounded-full"}),(0,s.jsx)("span",{className:"font-bold text-xl text-primary-900",children:"LinkUp"})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)(j,{})})]}),(0,s.jsx)("div",{className:"flex-1 overflow-auto",children:(0,s.jsxs)("div",{className:"flex flex-col px-4 py-6 space-y-4",children:[d.map(e=>(0,s.jsx)(c,{href:e.path,children:e.name},e.path)),o?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("span",{className:"text-sm font-medium text-primary-900",children:["Welcome, ",o.username]}),(0,s.jsx)(i.$,{onClick:()=>{l(),t(!1)},variant:"ghost",className:"rounded-full",children:"en"===r?"Logout":"Cerrar sesi\xf3n"})]}):(0,s.jsx)(i.$,{asChild:!0,className:"bg-blue-600 hover:bg-blue-700 text-white rounded-full",onClick:()=>t(!1),children:(0,s.jsx)(a(),{href:"/apply",children:"en"===r?"Apply Now":"Aplicar Ahora"})})]})})]})})]})]})})}},771:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var s=r(5512),n=r(8009),o=r(2705),a=r(1643),i=r(124);let l=(0,a.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary-500 text-white shadow-sm hover:bg-secondary-600",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...a},d)=>{let c=n?o.DX:"button";return(0,s.jsx)(c,{className:(0,i.cn)(l({variant:t,size:r,className:e})),ref:d,...a})});d.displayName="Button"},7795:(e,t,r)=>{"use strict";r.d(t,{A:()=>i,AuthProvider:()=>a});var s=r(5512),n=r(8009);let o=(0,n.createContext)(),a=({children:e})=>{let[t,r]=(0,n.useState)(null),[a,i]=(0,n.useState)(!0);(0,n.useEffect)(()=>{let e=localStorage.getItem("token");e?l(e):i(!1)},[]);let l=async e=>{try{let t=await fetch("http://localhost:5000/api/users/profile",{headers:{Authorization:`Bearer ${e}`}});if(t.ok){let e=await t.json();r(e)}else localStorage.removeItem("token")}catch(e){console.error("Error fetching user profile:",e)}finally{i(!1)}},d=async(e,t)=>{try{let s=await fetch("http://localhost:5000/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});if(s.ok){let t=await s.json();return localStorage.setItem("token",t.token),await l(t.token),"linkup.startups@gmail.com"===e&&r(e=>({...e,isAdmin:!0})),!0}return!1}catch(e){return console.error("Error logging in:",e),!1}},c=async(e,t,r)=>{try{if((await fetch("http://localhost:5000/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,email:t,password:r})})).ok)return!0;return!1}catch(e){return console.error("Error registering:",e),!1}};return(0,s.jsx)(o.Provider,{value:{user:t,loading:a,login:d,register:c,logout:()=>{localStorage.removeItem("token"),r(null)}},children:e})},i=()=>(0,n.useContext)(o)},8747:(e,t,r)=>{"use strict";r.d(t,{LanguageProvider:()=>a,o:()=>i});var s=r(5512),n=r(8009);let o=(0,n.createContext)(),a=({children:e})=>{let[t,r]=(0,n.useState)("en");return(0,s.jsx)(o.Provider,{value:{language:t,toggleLanguage:()=>{r(e=>"en"===e?"es":"en")}},children:e})},i=()=>(0,n.useContext)(o)},124:(e,t,r)=>{"use strict";r.d(t,{cn:()=>o});var s=r(2281),n=r(4805);function o(...e){return(0,n.QP)((0,s.$)(e))}},7060:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x,metadata:()=>f});var s=r(2740),n=r(7653),o=r.n(n),a=r(7429),i=r.n(a),l=r(1757),d=r(9607),c=r.n(d);function h(){return(0,s.jsx)("footer",{className:"bg-gray-100 py-8",children:(0,s.jsxs)("div",{className:"container mx-auto px-4",children:[(0,s.jsxs)("div",{className:"flex flex-wrap justify-between items-center",children:[(0,s.jsx)("div",{className:"w-full md:w-auto mb-4 md:mb-0",children:(0,s.jsxs)(c(),{href:"/",className:"flex items-center",children:[(0,s.jsx)("img",{src:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-01-26%20a%20las%2015.19.42_e01988de.jpg-cpajLuZWHffaR1AfdCOjwttm1CwJLm.jpeg",alt:"LinkUp Logo",className:"h-8 w-8 mr-2"}),(0,s.jsx)("span",{className:"font-bold text-xl text-primary-900",children:"LinkUp"})]})}),(0,s.jsx)("nav",{className:"w-full md:w-auto",children:(0,s.jsxs)("ul",{className:"flex flex-wrap justify-center md:justify-end space-x-6",children:[(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/",className:"text-gray-600 hover:text-secondary-600",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/about",className:"text-gray-600 hover:text-secondary-600",children:"About"})}),(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/blog-podcast",className:"text-gray-600 hover:text-secondary-600",children:"Blog & Podcast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/pricing",className:"text-gray-600 hover:text-secondary-600",children:"Pricing"})}),(0,s.jsx)("li",{children:(0,s.jsx)(c(),{href:"/contact",className:"text-gray-600 hover:text-secondary-600",children:"Contact"})})]})})]}),(0,s.jsxs)("div",{className:"mt-8 text-center text-gray-500 text-sm",children:["\xa9 ",new Date().getFullYear()," LinkUp. All rights reserved."]})]})})}var m=r(5663),u=r(9799);r(3141);var p=r(7533);let f={title:"LinkUp",description:"Transform Your Startup Journey with LinkUp",icons:{icon:[{url:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINKUP-removebg-preview-gvcWC04ntMdre9NtwJxygicnbRrcXF.png",href:"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LINKUP-removebg-preview-gvcWC04ntMdre9NtwJxygicnbRrcXF.png"}]}};function x({children:e}){return(0,s.jsx)("html",{lang:"en",className:`${o().variable} ${i().variable}`,children:(0,s.jsx)("body",{className:"min-h-screen bg-white antialiased flex flex-col",children:(0,s.jsx)(u.AuthProvider,{children:(0,s.jsxs)(m.LanguageProvider,{children:[(0,s.jsx)(l.Nav,{}),(0,s.jsx)("main",{className:"flex-grow",children:e}),(0,s.jsx)(p.NewBlogNotification,{}),(0,s.jsx)(h,{})]})})})})}},1867:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(2740),n=r(9607),o=r.n(n),a=r(6301),i=r(7606),l=r(7699),d=r(3673),c=r(7317);let h=(0,l.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary-500 text-white shadow-sm hover:bg-secondary-600",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),m=a.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...o},a)=>{let l=n?i.DX:"button";return(0,s.jsx)(l,{className:function(...e){return(0,c.QP)((0,d.$)(e))}(h({variant:t,size:r,className:e})),ref:a,...o})});function u(){return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen text-center px-4",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold mb-4",children:"404 - Page Not Found"}),(0,s.jsx)("p",{className:"text-xl mb-8",children:"Oops! The page you're looking for doesn't exist."}),(0,s.jsx)(m,{asChild:!0,children:(0,s.jsx)(o(),{href:"/",children:"Go back home"})})]})}m.displayName="Button"},7533:(e,t,r)=>{"use strict";r.d(t,{NewBlogNotification:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call NewBlogNotification() from the server but NewBlogNotification is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\agrad\\Documents\\GitHub\\Linkup\\components\\NewBlogNotification.jsx","NewBlogNotification")},1757:(e,t,r)=>{"use strict";r.d(t,{Nav:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call Nav() from the server but Nav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\agrad\\Documents\\GitHub\\Linkup\\components\\nav.jsx","Nav")},9799:(e,t,r)=>{"use strict";r.d(t,{AuthProvider:()=>n});var s=r(6760);let n=(0,s.registerClientReference)(function(){throw Error("Attempted to call AuthProvider() from the server but AuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\agrad\\Documents\\GitHub\\Linkup\\contexts\\AuthContext.js","AuthProvider");(0,s.registerClientReference)(function(){throw Error("Attempted to call useAuth() from the server but useAuth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\agrad\\Documents\\GitHub\\Linkup\\contexts\\AuthContext.js","useAuth")},5663:(e,t,r)=>{"use strict";r.d(t,{LanguageProvider:()=>n});var s=r(6760);let n=(0,s.registerClientReference)(function(){throw Error("Attempted to call LanguageProvider() from the server but LanguageProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\agrad\\Documents\\GitHub\\Linkup\\contexts\\LanguageContext.js","LanguageProvider");(0,s.registerClientReference)(function(){throw Error("Attempted to call useLanguage() from the server but useLanguage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\agrad\\Documents\\GitHub\\Linkup\\contexts\\LanguageContext.js","useLanguage")},3141:()=>{}};