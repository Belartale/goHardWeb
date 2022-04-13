"use strict";(globalThis.webpackChunkboilerplate_frontend=globalThis.webpackChunkboilerplate_frontend||[]).push([[5],{163:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(0),r=a(129),n=a(212),i=a(9),o=a(6),s=a(4),m=a(164),c=a(19),u=a(24),d=a(57),f=a(56),p=a(10),v=a(20),x=function(){return x=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},x.apply(this,arguments)},g=function(){var e=(0,c.useTogglersRedux)().togglersRedux,t=(0,u.useMessageSaga)().postMessageVacancy,a=(0,d.useMessage)(),g=a.message,E=a.setMessage,y=a.resetToInitialMessage,b=(0,f.useForm)({defaultValues:p.initialState.vacancy,mode:"onSubmit"}),h=b.control,N=b.handleSubmit,w=b.watch,T=b.getValues,F=b.reset,S=b.formState.errors;(0,l.useEffect)((function(){E({type:"vacancy",value:{firstName:T("firstName"),lastName:T("lastName"),email:T("email"),text:T("text"),select:T("select")}})}),[w("firstName"),w("lastName"),w("email"),w("text"),w("select")]);return l.createElement(r.default,null,l.createElement(i.Header,{backgroundsize:"cover",image:m,opacity:"true"},l.createElement(i.ContainerCenter,null,l.createElement(s.Title,null,l.createElement(i.GreenText,null,"Vacancies")))),l.createElement(i.Section,null,l.createElement(i.MyContainer,{sx:{display:"flex",flexDirection:"column",alignItems:"center"}},l.createElement(s.Subtitle,{maxWidth:"920px",mb:"50px",textAlign:"center"},"Like other growing companies, we are actively looking for employees. Depending on the period, we need different specialists, but there is one general requirement: “we are looking for our own person”. If you are a purposeful specialist, responsible, grasping on the fly - we are waiting for you in our ranks!"),l.createElement(s.Form,{component:"form",isValidateForm:[S.firstName,S.lastName,S.email,S.text].every((function(e){return!1==!!e})),maxWidth:"600px",sx:{position:"relative",margin:"0 auto"},onSubmit:N((function(){t(g.vacancy),y(),F()}))},l.createElement(n.default,{container:!0,columnSpacing:"20px",rowSpacing:"10px"},l.createElement(n.default,{item:!0,sm:6,xs:12},l.createElement(f.Controller,{control:h,name:"firstName",render:function(e){var t,a=e.field;return l.createElement(s.MyTextField,x({},a,{fullWidth:!0,error:!!S.firstName,helperText:null===(t=S.firstName)||void 0===t?void 0:t.message,label:"First Name",value:g.vacancy.firstName,variant:"outlined"}))},rules:{required:"Field must be filled"}})),l.createElement(n.default,{item:!0,sm:6,xs:12},l.createElement(f.Controller,{control:h,name:"lastName",render:function(e){var t,a=e.field;return l.createElement(s.MyTextField,x({},a,{fullWidth:!0,error:!!S.lastName,helperText:null===(t=S.lastName)||void 0===t?void 0:t.message,label:"Last Name",value:g.vacancy.lastName,variant:"outlined"}))},rules:{required:"Field must be filled"}})),l.createElement(n.default,{item:!0,sm:8,xs:12},l.createElement(f.Controller,{control:h,name:"email",render:function(e){var t,a=e.field;return l.createElement(s.MyTextField,x({},a,{fullWidth:!0,error:!!S.email,helperText:null===(t=S.email)||void 0===t?void 0:t.message,label:"E-mail adress",value:g.vacancy.email,variant:"outlined"}))},rules:{required:"Field must be filled or incorrect email",validate:function(e){return!!(0,v.validateEmail)(e)||"Incorrect email"}}})),l.createElement(n.default,{item:!0,sm:4,xs:12},l.createElement(f.Controller,{control:h,name:"select",render:function(e){var t=e.field;return l.createElement(s.MySelect,x({error:!!S.select,nameSelect:"Vacancy",values:[{value:"React",text:"React"},{value:"Java",text:"Java"}]},t))},rules:{required:"Field must be filled"}})),l.createElement(n.default,{item:!0,xs:12},l.createElement(f.Controller,{control:h,name:"text",render:function(e){var t,a=e.field;return l.createElement(s.MyTextField,x({},a,{fullWidth:!0,multiline:!0,error:!!S.text,helperText:null===(t=S.text)||void 0===t?void 0:t.message,label:"How can we help?",rows:6,value:g.vacancy.text,variant:"outlined"}))},rules:{required:"Field must be filled"}})),l.createElement(n.default,{item:!0,xs:12},l.createElement(s.MyButton,{type:"submit",typebutton:"sm"},"Send"))),e.isPostForm&&l.createElement(s.Spinner,{absolute:!0,size:"60px"})))),l.createElement(i.MyContainer,{sx:{paddingTop:"20px",paddingBottom:"20px"}},l.createElement(o.ContactBar,{size:"lg"})))};const E=function(){return l.createElement(o.ErrorBoundary,null,l.createElement(g,null))}},164:(e,t,a)=>{e.exports=a.p+"assets/4fab2.jpg"}}]);