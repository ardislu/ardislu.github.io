(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{AmYw:function(t,r,e){"use strict";e.d(r,"b",(function(){return h})),e.d(r,"a",(function(){return f}));var a=e("UXun"),c=e("lJxs"),s=e("AytR");class i{constructor(t,r,e,a){this.title=t,this.tags=r,this.description=e,this.route=a}}class n{constructor(t,r,e){this.title=t,this.subtitle=r,this.description=e}}var o=e("fXoL"),p=e("tk/3");let u=(()=>{class t{adapt(t){return new i(t.title,t.tags.replace(/ /g,"").split(","),t.description,t.route)}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),h=(()=>{class t{constructor(t,r){this.http=t,this.adapter=r}list(){return this.cache||(this.cache=this.http.get(s.a.strapiHost+"/project-cards").pipe(Object(a.a)(1),Object(c.a)(t=>t.map(t=>this.adapter.adapt(t))))),this.cache}}return t.\u0275fac=function(r){return new(r||t)(o.Sb(p.a),o.Sb(u))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{adapt(t){return new n(t.title,t.subtitle,t.description)}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),f=(()=>{class t{constructor(t,r){this.http=t,this.adapter=r}list(){return this.cache||(this.cache=this.http.get(s.a.strapiHost+"/about").pipe(Object(a.a)(1),Object(c.a)(t=>this.adapter.adapt(t)))),this.cache}}return t.\u0275fac=function(r){return new(r||t)(o.Sb(p.a),o.Sb(d))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);