"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4212],{4212:(w,p,r)=>{r.r(p),r.d(p,{RemindersPageModule:()=>I});var m=r(9808),a=r(4182),o=r(5649),u=r(501),g=r(655),f=r(6466),h=r(271),e=r(2096),x=r(2235);function C(t,c){1&t&&e._UZ(0,"ion-icon",36)}function P(t,c){1&t&&e._UZ(0,"ion-icon",37)}function Z(t,c){1&t&&e._UZ(0,"ion-icon",38)}function v(t,c){1&t&&e._UZ(0,"ion-icon",39)}function R(t,c){1&t&&e._UZ(0,"ion-icon",40)}function y(t,c){if(1&t){const n=e.EpF();e.TgZ(0,"ion-card",14)(1,"ion-item-sliding",null,15)(3,"ion-item")(4,"ion-card-content")(5,"div",16),e.YNc(6,C,1,0,"ion-icon",17),e.YNc(7,P,1,0,"ion-icon",18),e.TgZ(8,"div",19)(9,"ion-label",20),e._uU(10),e.qZA(),e.TgZ(11,"ion-label",21),e._uU(12),e.qZA(),e.TgZ(13,"div",22),e._UZ(14,"ion-icon",23),e.TgZ(15,"ion-label",24),e._uU(16),e.ALo(17,"date"),e.qZA()(),e.TgZ(18,"ion-card-subtitle",25),e._uU(19),e.YNc(20,Z,1,0,"ion-icon",26),e.YNc(21,v,1,0,"ion-icon",27),e.YNc(22,R,1,0,"ion-icon",28),e.qZA()()()()(),e.TgZ(23,"ion-item-options",29)(24,"ion-item-option",30),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.MAs(2);return e.oxw(2).onUpdate(s,l)}),e._UZ(25,"ion-icon",31),e.qZA(),e.TgZ(26,"ion-item-option",32),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.MAs(2);return e.oxw(2).onComplete(s.value,s.key,l)}),e._UZ(27,"ion-icon",33),e.qZA(),e.TgZ(28,"ion-item-option",34),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.MAs(2);return e.oxw(2).onDelete(s.value,l)}),e._UZ(29,"ion-icon",35),e.qZA()()()()}if(2&t){const n=c.$implicit;e.xp6(6),e.Q6J("ngIf","personal"===n.key.itemCategory),e.xp6(1),e.Q6J("ngIf","work"===n.key.itemCategory),e.xp6(3),e.Oqu(n.key.itemName),e.xp6(2),e.Oqu(n.key.itemDetails),e.xp6(4),e.hij("Due ",e.xi3(17,11,n.key.itemDueDate,"fullDate"),""),e.xp6(2),e.Udp("color","high"===n.key.itemPriority?"red":"low"===n.key.itemPriority?"green":"orange"),e.xp6(1),e.hij(" ",n.key.itemCategory," "),e.xp6(1),e.Q6J("ngIf","high"===n.key.itemPriority),e.xp6(1),e.Q6J("ngIf","middle"===n.key.itemPriority),e.xp6(1),e.Q6J("ngIf","low"===n.key.itemPriority)}}function M(t,c){if(1&t&&(e.TgZ(0,"div")(1,"ion-row")(2,"div",12),e._uU(3,"Upcoming"),e.qZA(),e.YNc(4,y,30,14,"ion-card",13),e.qZA()()),2&t){const n=e.oxw();e.xp6(4),e.Q6J("ngForOf",n.UncompleteReminderList)}}function T(t,c){1&t&&e._UZ(0,"ion-icon",36)}function U(t,c){1&t&&e._UZ(0,"ion-icon",37)}function O(t,c){if(1&t){const n=e.EpF();e.TgZ(0,"ion-card",14)(1,"ion-item-sliding",null,15)(3,"ion-item")(4,"ion-card-content")(5,"div",16),e.YNc(6,T,1,0,"ion-icon",17),e.YNc(7,U,1,0,"ion-icon",18),e.TgZ(8,"div",41)(9,"ion-label",20),e._uU(10),e.qZA(),e.TgZ(11,"ion-label",21),e._uU(12),e.qZA(),e.TgZ(13,"div",22),e._UZ(14,"ion-icon",23),e.TgZ(15,"ion-label",24),e._uU(16),e.ALo(17,"date"),e.qZA()()()()()(),e.TgZ(18,"ion-item-options",29)(19,"ion-item-option",34),e.NdJ("click",function(){const s=e.CHM(n).$implicit,l=e.MAs(2);return e.oxw(2).onDelete(s.value,l)}),e._UZ(20,"ion-icon",35),e.qZA()()()()}if(2&t){const n=c.$implicit;e.xp6(6),e.Q6J("ngIf","personal"===n.key.itemCategory),e.xp6(1),e.Q6J("ngIf","work"===n.key.itemCategory),e.xp6(3),e.Oqu(n.key.itemName),e.xp6(2),e.Oqu(n.key.itemDetails),e.xp6(4),e.hij("Due ",e.xi3(17,5,n.key.itemDueDate,"fullDate"),"")}}function b(t,c){if(1&t&&(e.TgZ(0,"div")(1,"ion-row")(2,"div",12),e._uU(3,"Completed"),e.qZA(),e.YNc(4,O,21,8,"ion-card",13),e.qZA()()),2&t){const n=e.oxw();e.xp6(4),e.Q6J("ngForOf",n.completedReminderList)}}const k=[{path:"",component:(()=>{class t{constructor(n,i){this.modalCtrl=n,this.reminderService=i,this.selectTabs="upcoming",this.reminderList=[],this.UncompleteReminderList=[],this.completedReminderList=[]}ngOnInit(){this.UncompleteReminderList=this.reminderService.getUncompletedReminders(),this.completedReminderList=this.reminderService.getCompletedReminders(),this.reminderList=this.reminderService.getAllReminders()}addNewItem(){return(0,g.mG)(this,void 0,void 0,function*(){const n=yield this.modalCtrl.create({component:f.I});return n.onDidDismiss().then(i=>{this.getUncompletedReminders(),console.log(i)}),yield n.present()})}getAllReminders(){this.reminderList=this.reminderService.getAllReminders(),console.log(this.reminderService.getAllReminders())}complete(n,i){return(0,g.mG)(this,void 0,void 0,function*(){let d={itemName:i.itemName,itemDetails:i.itemDetails,itemDueDate:i.itemDueDate,itemPriority:i.itemPriority,itemCategory:i.itemCategory,isCompleted:!0};yield this.reminderService.setCompleted(n,d),this.getUncompletedReminders(),this.getCompletedReminders()})}onComplete(n,i,d){d.close(),this.complete(n,i)}delete(n){this.reminderService.deleteReminder(n),this.getUncompletedReminders(),this.getCompletedReminders()}onDelete(n,i){i.close(),this.delete(n)}getUncompletedReminders(){this.UncompleteReminderList=this.reminderService.getUncompletedReminders()}getCompletedReminders(){this.completedReminderList=this.reminderService.getCompletedReminders()}debug(){}update(n){return(0,g.mG)(this,void 0,void 0,function*(){const i=yield this.modalCtrl.create({component:h.U,componentProps:{reminder:n}});return i.onDidDismiss().then(()=>{this.getUncompletedReminders()}),yield i.present()})}onUpdate(n,i){i.close(),this.update(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(o.IN),e.Y36(x.Z))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reminders"]],decls:24,vars:3,consts:[["slot","start"],[1,"ion-justify-content-center","creature"],["src","/assets/emote-gif.gif","width","10px",1,"emote-image"],["src","/assets/ghostgif.gif",1,"creature-container"],[3,"ngModel","ngModelChange"],["value","upcoming"],["value","completed"],[1,"cards"],[4,"ngIf"],["vertical","bottom","horizontal","center",1,"add-button"],[3,"click"],["name","add"],[1,"list-header"],["class","ion-margin card-container",4,"ngFor","ngForOf"],[1,"ion-margin","card-container"],["slidingItem",""],[1,"content-container"],["name","body","class","bed-icon","size","large",4,"ngIf"],["name","business","class","bed-icon","size","large",4,"ngIf"],[1,"title-desc"],[1,"title"],[1,"desc"],[1,"date-container"],["name","time",1,"time"],[1,"date"],[1,"tag"],["color","danger","size","small","name","ellipse",4,"ngIf"],["color","warning","size","small","name","ellipse",4,"ngIf"],["color","success","size","small","name","ellipse",4,"ngIf"],["side","end"],["color","secondary",3,"click"],["name","create","size","large"],["color","success",3,"click"],["name","checkmark-outline","size","large"],["color","danger",3,"click"],["name","trash-outline","size","large"],["name","body","size","large",1,"bed-icon"],["name","business","size","large",1,"bed-icon"],["color","danger","size","small","name","ellipse"],["color","warning","size","small","name","ellipse"],["color","success","size","small","name","ellipse"],[1,"completed-title-desc","completed"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5," Home "),e.qZA()()(),e.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row",1),e._UZ(9,"ion-img",2)(10,"ion-img",3),e.qZA(),e.TgZ(11,"ion-segment",4),e.NdJ("ngModelChange",function(s){return i.selectTabs=s}),e.TgZ(12,"ion-segment-button",5)(13,"ion-label"),e._uU(14,"Upcoming"),e.qZA()(),e.TgZ(15,"ion-segment-button",6)(16,"ion-label"),e._uU(17,"Completed"),e.qZA()()(),e.TgZ(18,"div",7),e.YNc(19,M,5,1,"div",8),e.YNc(20,b,5,1,"div",8),e.TgZ(21,"ion-fab",9)(22,"ion-fab-button",10),e.NdJ("click",function(){return i.addNewItem()}),e._UZ(23,"ion-icon",11),e.qZA()()()()()),2&n&&(e.xp6(11),e.Q6J("ngModel",i.selectTabs),e.xp6(8),e.Q6J("ngIf","upcoming"===i.selectTabs),e.xp6(1),e.Q6J("ngIf","completed"===i.selectTabs))},directives:[o.Gu,o.sr,o.Sm,o.fG,o.wd,o.W2,o.jY,o.Nd,o.Xz,o.cJ,o.QI,a.JJ,a.On,o.GO,o.Q$,m.O5,m.sg,o.PM,o.td,o.Ie,o.FN,o.gu,o.tO,o.IK,o.u8,o.IJ,o.W4],pipes:[m.uU],styles:["body[_ngcontent-%COMP%]{overflow:hidden}ion-content[_ngcontent-%COMP%]{--background: url(/assets/kindcrittersbg.png) 0 -130% no-repeat !important;background:#56742c}ion-title[_ngcontent-%COMP%]{color:#494a48}ion-segment[_ngcontent-%COMP%]{position:sticky;background-color:#eae6e0}ion-segment-button[_ngcontent-%COMP%]{font-weight:700}.creature[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;align-items:center;margin-top:20px;margin-bottom:20px}.cards[_ngcontent-%COMP%]{overflow-y:scroll;height:49vh}.creature-container[_ngcontent-%COMP%]{position:sticky;bottom:0;width:40%}.emote-image[_ngcontent-%COMP%]{margin-bottom:10px;width:40px!important}.card-container[_ngcontent-%COMP%]{width:100%}.content-container[_ngcontent-%COMP%]{display:flex}.list-header[_ngcontent-%COMP%]{color:#f1f3ec;font-weight:700;margin-left:20px;margin-top:20px}.bed-icon[_ngcontent-%COMP%]{color:#494a48;align-self:center}.title-desc[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;margin-left:30px}.title-desc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;color:#494a48}.title-desc[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:10px;color:#494a48}.date-container[_ngcontent-%COMP%]{display:flex}.date-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{align-self:center;margin-right:5px;color:#494a48}.date-container[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{align-self:center;font-size:13px;color:#494a48}.add-button[_ngcontent-%COMP%]{position:fixed;bottom:20;right:0}.completed-title-desc[_ngcontent-%COMP%]{text-decoration:line-through;display:flex;flex-direction:column;width:100%;margin-left:30px}.completed-title-desc[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}.completed-title-desc[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-size:10px}.completed[_ngcontent-%COMP%]{opacity:70%}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.Bz.forChild(k)],u.Bz]}),t})(),I=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,a.u5,o.Pc,A]]}),t})()}}]);