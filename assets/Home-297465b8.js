import{o as c,c as r,a as t,t as m,w as f,b as v,v as E,n as F,_,r as u,F as p,d as j,e as b}from"./index-5d3f233c.js";const g="/list_icon.svg";const h=["id"],$={class:"item__container"},y={class:"text__container"},O={class:"item__text"},x={class:"item__text"},I=t("img",{class:"item__icon",src:g,alt:"change icon"},null,-1),L=[I],B=["id"],C=t("button",{class:"form__button",type:"submit"},"Change",-1),V={props:{object:{type:Object,required:!0}},data(){return{input:"Enter new value"}}},k=Object.assign(V,{__name:"ObjectItem",setup(e){function a(o){document.getElementById(o).classList.toggle("form__open"),document.getElementById(o+"item").classList.toggle("item__open"),document.getElementById(o+"item").classList.toggle("item__close")}return(o,n)=>(c(),r("li",{style:F({backgroundColor:e.object.color}),class:"item"},[t("div",{id:e.object.name+"item",class:"item__anim__container item__close"},[t("div",$,[t("div",y,[t("span",O,"name : "+m(e.object.name),1),t("span",x,"value : "+m(e.object.value),1)]),t("button",{class:"item__button",onClick:n[0]||(n[0]=s=>a(e.object.name))},L)]),t("form",{class:"item__form",id:e.object.name,onSubmit:n[2]||(n[2]=f(s=>o.$emit("change-value",e.object.name,this.input),["prevent"]))},[v(t("input",{class:"form__input",type:"text","onUpdate:modelValue":n[1]||(n[1]=s=>o.input=s)},null,512),[[E,o.input]]),C],40,B)],8,h)],4))}});const S={components:{ObjectItem:k},data(){return{objects:[{name:"foo1",value:"bar1",color:"#F4E0F9"},{name:"foo2",value:"bar2",color:"#E3E0F9"},{name:"foo3",value:"bar3",color:"#E0EAF9"},{name:"foo4",value:"bar4",color:"#E0F4F9"},{name:"foo5",value:"bar5",color:"#E0F9F0"},{name:"foo6",value:"bar6",color:"#E0F9E2"},{name:"foo7",value:"bar7",color:"#F1F9E0"},{name:"foo8",value:"bar8",color:"#F8F9E0"},{name:"foo9",value:"bar9",color:"#F9F3E0"},{name:"foo10",value:"bar10",color:"#F9ECE0"},{name:"foo11",value:"bar11",color:"#F9E4E0"},{name:"foo12",value:"bar12",color:"#F9E0E0"},{name:"foo13",value:"bar13",color:"#F4E0F9"},{name:"foo14",value:"bar14",color:"#E3E0F9"},{name:"foo15",value:"bar15",color:"#E0EAF9"},{name:"foo16",value:"bar16",color:"#E0F4F9"},{name:"foo17",value:"bar17",color:"#E0F9F0"},{name:"foo18",value:"bar18",color:"#E0F9E2"},{name:"foo19",value:"bar19",color:"#F1F9E0"},{name:"foo20",value:"bar20",color:"#F8F9E0"}]}},methods:{changeValue(e,a){console.log(e),console.log(a),this.objects.map(o=>{a.trim()&&o.name===e&&(o.value=a)})}}},w={class:"list__container"},A=t("h1",{class:"list__h1"},"Objects",-1),D={class:"list"};function M(e,a,o,n,s,i){const l=u("ObjectItem");return c(),r("div",w,[A,t("ul",D,[(c(!0),r(p,null,j(s.objects,d=>(c(),b(l,{object:d,onChangeValue:i.changeValue},null,8,["object","onChangeValue"]))),256))])])}const q=_(S,[["render",M]]),z={name:"app",components:{ObjectList:q}};function H(e,a,o,n,s,i){const l=u("ObjectList");return c(),b(l,{objects:e.objects},null,8,["objects"])}const T=_(z,[["render",H]]);export{T as default};
