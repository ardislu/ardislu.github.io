(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{yPrK:function(t,c,n){"use strict";n.r(c),n.d(c,"SettingsModule",(function(){return w}));var e=n("ofXK"),o=n("tyNb"),a=n("bTqV"),r=n("NFeN"),s=n("Wp6s"),b=n("NGqd"),i=n("xJkR"),u=n("0IaG"),l=n("fXoL");let d=(()=>{class t{constructor(t,c){this.dialogRef=t,this.data=c,this.dialogRef.beforeClosed().subscribe(t=>this.dialogRef.close(Boolean(t)))}ngOnInit(){}}return t.\u0275fac=function(c){return new(c||t)(l.Jb(u.g),l.Jb(u.a))},t.\u0275cmp=l.Db({type:t,selectors:[["app-confirmation-dialog"]],decls:9,vars:6,consts:[["mat-dialog-title",""],["mat-button","","color","accent",3,"mat-dialog-close"],["mat-button","","color","warn",3,"mat-dialog-close"]],template:function(t,c){1&t&&(l.Ob(0,"h2",0),l.sc(1),l.Nb(),l.Ob(2,"mat-dialog-content"),l.sc(3),l.Nb(),l.Ob(4,"mat-dialog-actions"),l.Ob(5,"button",1),l.sc(6),l.Nb(),l.Ob(7,"button",2),l.sc(8),l.Nb(),l.Nb()),2&t&&(l.zb(1),l.tc(c.data.title),l.zb(2),l.uc(" ",c.data.body,"\n"),l.zb(2),l.cc("mat-dialog-close",!1),l.zb(1),l.tc(c.data.rejectButtonText),l.zb(1),l.cc("mat-dialog-close",!0),l.zb(1),l.tc(c.data.confirmButtonText))},directives:[u.h,u.e,u.c,a.b,u.d],styles:[""]}),t})();var m=n("lGQG");const g=function(){return["/home"]};function f(t,c){if(1&t){const t=l.Pb();l.Mb(0),l.Ob(1,"mat-card",2),l.Ob(2,"mat-card-header"),l.Kb(3,"img",3),l.Ob(4,"mat-card-title"),l.sc(5),l.Nb(),l.Ob(6,"mat-card-subtitle"),l.sc(7," User Settings "),l.Nb(),l.Nb(),l.Ob(8,"mat-card-content"),l.Ob(9,"p"),l.sc(10," More settings to come... "),l.Nb(),l.Nb(),l.Ob(11,"mat-card-actions"),l.Ob(12,"button",4),l.sc(13,"HOME"),l.Nb(),l.Ob(14,"button",5),l.Vb("click",(function(){return l.ic(t),l.Xb().logout()})),l.sc(15,"LOG OUT"),l.Nb(),l.Nb(),l.Nb(),l.Lb()}if(2&t){const t=c.ngIf;l.zb(3),l.cc("src",t.picture,l.jc),l.zb(2),l.uc(" ",t.name," "),l.zb(7),l.cc("routerLink",l.dc(3,g))}}const p=function(){return{"background-color":"#303030"}};function h(t,c){1&t&&(l.Ob(0,"mat-card",2),l.Ob(1,"mat-card-header"),l.Ob(2,"mat-card-title"),l.Kb(3,"ngx-skeleton-loader",6),l.Nb(),l.Nb(),l.Ob(4,"mat-card-content"),l.Kb(5,"ngx-skeleton-loader",7),l.Nb(),l.Nb()),2&t&&(l.zb(3),l.cc("theme",l.dc(3,p)),l.zb(2),l.cc("count",5)("theme",l.dc(4,p)))}const O=[{path:"",component:(()=>{class t{constructor(t,c){this.auth=t,this.dialog=c}ngOnInit(){}logout(){this.dialog.open(d,{data:{title:"Logout?",body:"Are you sure you want to logout?",confirmButtonText:"Yes",rejectButtonText:"No"}}).afterClosed().subscribe(t=>{t&&this.auth.logout()})}}return t.\u0275fac=function(c){return new(c||t)(l.Jb(m.a),l.Jb(u.b))},t.\u0275cmp=l.Db({type:t,selectors:[["app-settings"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"settings-card"],["mat-card-image","","mat-card-avatar","",3,"src"],["mat-button","","color","accent",3,"routerLink"],["mat-button","","color","warn",3,"click"],["animation","pulse",3,"theme"],["animation","pulse",3,"count","theme"]],template:function(t,c){if(1&t&&(l.qc(0,f,16,4,"ng-container",0),l.Yb(1,"async"),l.qc(2,h,6,5,"ng-template",null,1,l.rc)),2&t){const t=l.hc(3);l.cc("ngIf",l.Zb(1,2,c.auth.userProfile$))("ngIfElse",t)}},directives:[e.k,s.a,s.e,s.f,s.c,s.i,s.h,s.d,s.b,a.b,o.d,i.a],pipes:[e.b],styles:[".settings-card[_ngcontent-%COMP%]{width:min(70%,40em);margin:min(10%,5em) auto;white-space:pre-wrap}"]}),t})()}];let N=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(c){return new(c||t)},imports:[[o.f.forChild(O)],o.f]}),t})(),w=(()=>{class t{}return t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({factory:function(c){return new(c||t)},imports:[[e.c,o.f,a.c,r.b,s.g,b.a,i.b,N]]}),t})()}}]);