(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"28Eo":function(e,t,n){"use strict";n.r(t),n.d(t,"ImageGeneratorModule",(function(){return C}));var r=n("ofXK"),a=n("tyNb"),i=n("XNiG"),o=n("Kj3r"),s=n("fXoL"),c=n("Wp6s"),d=n("kmnG"),l=n("qFsG"),u=n("3Pt+"),p=n("bTqV"),g=n("NFeN"),m=n("8LU1"),h=n("FKr1");let b=(()=>{class e{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(e){this._vertical=Object(m.b)(e)}get inset(){return this._inset}set inset(e){this._inset=Object(m.b)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,t){2&e&&(s.Ab("aria-orientation",t.vertical?"vertical":"horizontal"),s.Cb("mat-divider-vertical",t.vertical)("mat-divider-horizontal",!t.vertical)("mat-divider-inset",t.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,t){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],encapsulation:2,changeDetection:0}),e})(),f=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[h.e],h.e]}),e})();const v=["canvas"];let y=(()=>{class e{constructor(){this.seed=Math.random().toString(),this.circleCount=600,this.width=300,this.height=300}ngOnInit(){this.generateImage()}ngOnChanges(){this.generateImage()}generateImage(){const e=this.xmur3(this.seed),t=this.sfc32(e(),e(),e(),e());this.canvas.nativeElement.width=this.width,this.canvas.nativeElement.height=this.height;const n=this.canvas.nativeElement.getContext("2d");for(let r=0;r<this.circleCount;r++){const e=Math.floor(t()*this.width),r=Math.floor(t()*this.height),a=Math.floor(t()*Math.floor(.08*this.width)),i=Math.floor(255*t()),o=Math.floor(255*t()),s=Math.floor(255*t());n.beginPath(),n.arc(e,r,a,0,2*Math.PI),n.fillStyle=`rgb(${i}, ${o}, ${s})`,n.fill(),n.closePath()}}xmur3(e){let t,n;for(t=0,n=1779033703^e.length;t<e.length;t++)n=Math.imul(n^e.charCodeAt(t),3432918353),n=n<<13|n>>>19;return()=>(n=Math.imul(n^n>>>16,2246822507),n=Math.imul(n^n>>>13,3266489909),(n^=n>>>16)>>>0)}sfc32(e,t,n,r){return()=>{let a=(e>>>=0)+(t>>>=0)|0;return e=t^t>>>9,t=(n>>>=0)+(n<<3)|0,a=a+(r=1+(r>>>=0)|0)|0,n=(n=n<<21|n>>>11)+a|0,(a>>>0)/4294967296}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["app-random-image"]],viewQuery:function(e,t){var n;1&e&&s.oc(v,!0),2&e&&s.ic(n=s.Yb())&&(t.canvas=n.first)},inputs:{seed:"seed",circleCount:"circleCount",width:"width",height:"height"},features:[s.xb],decls:2,vars:0,consts:[["canvas",""]],template:function(e,t){1&e&&s.Lb(0,"canvas",null,0)},styles:[""]}),e})();const w=function(){return["/home"]},k=[{path:"",component:(()=>{class e{constructor(){this.length=800,this.inputChanged=new i.a}ngOnInit(){this.inputChanged.pipe(Object(o.a)(300)).subscribe(()=>this.seed=this.inputValue),this.resizeCanvas(),this.randSeed()}resizeCanvas(){const e=Math.floor(.85*window.innerHeight),t=Math.floor(.85*window.innerWidth);this.length=Math.min(e,t)}randSeed(){const e=Math.random().toString();this.inputValue=e,this.seed=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Eb({type:e,selectors:[["app-image-generator"]],decls:19,vars:7,consts:[[1,"image-card"],["matInput","",3,"ngModel","ngModelChange"],["mat-icon-button","",3,"click"],["svgIcon","dice"],[1,"canvas-container"],[3,"seed","circleCount","width","height"],["mat-button","","color","accent",3,"routerLink"]],template:function(e,t){1&e&&(s.Pb(0,"mat-card",0),s.Pb(1,"mat-card-title"),s.Pb(2,"div"),s.uc(3,"Image Generator"),s.Ob(),s.Ob(),s.Pb(4,"mat-card-content"),s.uc(5," The image below is procedurally generated and rendered using the HTML5 Canvas element. Enter a new seed below to generate a new image, or click the dice icon to generate a new random seed. "),s.Ob(),s.Pb(6,"mat-card-content"),s.Pb(7,"mat-form-field"),s.Pb(8,"mat-label"),s.uc(9,"Seed"),s.Ob(),s.Pb(10,"input",1),s.Xb("ngModelChange",(function(e){return t.inputValue=e}))("ngModelChange",(function(){return t.inputChanged.next()})),s.Ob(),s.Ob(),s.Pb(11,"button",2),s.Xb("click",(function(){return t.randSeed()})),s.Lb(12,"mat-icon",3),s.Ob(),s.Lb(13,"mat-divider"),s.Ob(),s.Pb(14,"mat-card-content",4),s.Lb(15,"app-random-image",5),s.Ob(),s.Pb(16,"mat-card-actions"),s.Pb(17,"button",6),s.uc(18," HOME "),s.Ob(),s.Ob(),s.Ob()),2&e&&(s.zb(10),s.ec("ngModel",t.inputValue),s.zb(5),s.ec("seed",t.seed)("circleCount",t.length/2)("width",t.length)("height",t.length),s.zb(2),s.ec("routerLink",s.fc(6,w)))},directives:[c.a,c.i,c.d,d.b,d.e,l.a,u.a,u.e,u.g,p.b,g.a,b,y,c.b,a.d],styles:[".image-card[_ngcontent-%COMP%]{width:85%;margin:min(5%,5em) auto;white-space:pre-wrap}.canvas-container[_ngcontent-%COMP%]{text-align:center}"]}),e})()}];let O=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[a.f.forChild(k)],a.f]}),e})();var M=n("xJkR");let x=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[r.c]]}),e})(),C=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[r.c,O,M.b,c.g,p.c,u.c,d.d,l.b,g.b,f,x]]}),e})()},xJkR:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n("fXoL");const a="undefined"!=typeof performance&&void 0!==performance.now&&"function"==typeof performance.mark&&"function"==typeof performance.measure&&("function"==typeof performance.clearMarks||"function"==typeof performance.clearMeasures),i="undefined"!=typeof PerformanceObserver&&void 0!==PerformanceObserver.prototype&&"function"==typeof PerformanceObserver.prototype.constructor,o="[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0);let s={},c={};const d=()=>a?performance.now():Date.now(),l=e=>{s[e]=void 0,c[e]&&(c[e]=void 0),a&&(o||performance.clearMeasures(e),performance.clearMarks(e))},u=e=>{if(a){if(o&&i){const t=new PerformanceObserver(n=>{c[e]=n.getEntries().find(t=>t.name===e),t.disconnect()});t.observe({entryTypes:["measure"]})}performance.mark(e)}s[e]=d()},p=(e,t)=>{try{const n=s[e];return!a||o?(performance.measure(e,e,t||e),c[e]?c[e]:n?{duration:d()-n,startTime:n,entryType:"measure",name:e}:{}):(performance.measure(e,e,t||void 0),performance.getEntriesByName(e).pop()||{})}catch(n){return{}}finally{l(e),t&&l(t)}};var g=n("ofXK");const m=function(e,t,n,r){return{circle:e,progress:t,"progress-dark":n,pulse:r}};function h(e,t){if(1&e&&r.Lb(0,"span",1),2&e){const e=r.Zb();r.ec("ngClass",r.hc(2,m,"circle"===e.appearance,"progress"===e.animation,"progress-dark"===e.animation,"pulse"===e.animation))("ngStyle",e.theme)}}let b=(()=>{class e{constructor(){this.count=1,this.appearance="",this.animation="progress",this.theme={},this.items=[]}ngOnInit(){u("NgxSkeletonLoader:Rendered"),u("NgxSkeletonLoader:Loaded"),this.items.length=this.count;const e=["progress","progress-dark","pulse","false"];-1===e.indexOf(this.animation)&&(Object(r.V)()&&console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${e.join(", ")}. Forcing default to "progress".`),this.animation="progress")}ngAfterViewInit(){p("NgxSkeletonLoader:Rendered")}ngOnDestroy(){p("NgxSkeletonLoader:Loaded")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["ngx-skeleton-loader"]],inputs:{count:"count",appearance:"appearance",animation:"animation",theme:"theme"},decls:1,vars:1,consts:[["class","loader","aria-busy","true","aria-valuemin","0","aria-valuemax","100","aria-valuetext","Loading...","role","progressbar","tabindex","0",3,"ngClass","ngStyle",4,"ngFor","ngForOf"],["aria-busy","true","aria-valuemin","0","aria-valuemax","100","aria-valuetext","Loading...","role","progressbar","tabindex","0",1,"loader",3,"ngClass","ngStyle"]],template:function(e,t){1&e&&r.sc(0,h,1,7,"span",0),2&e&&r.ec("ngForOf",t.items)},directives:[g.j,g.i,g.l],styles:[".loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:no-repeat #eff1f6;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.loader[_ngcontent-%COMP%]:after, .loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%]{-webkit-animation:2s ease-in-out infinite progress;animation:2s ease-in-out infinite progress;background-size:200px 100%}.loader.progress[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.loader.progress-dark[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.loader.pulse[_ngcontent-%COMP%]{-webkit-animation:1.5s ease-in-out .5s infinite pulse;animation:1.5s ease-in-out .5s infinite pulse}@media (prefers-reduced-motion:reduce){.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%], .loader.pulse[_ngcontent-%COMP%]{-webkit-animation:none;animation:none}.loader.progress[_ngcontent-%COMP%], .loader.progress-dark[_ngcontent-%COMP%]{background-image:none}}@-webkit-keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@keyframes progress{0%{background-position:-200px 0}100%{background-position:calc(200px + 100%) 0}}@-webkit-keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}"]}),e})(),f=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[g.c]]}),e})()}}]);