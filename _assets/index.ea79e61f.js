import{a as e,i as r,o,j as i,k as s,w as a,p as t}from"./index.54b7cc7b.js";import"./xlsx.a48e520c.js";import"./index.a439205d.js";import"./Trigger.9f179c61.js";import"./omit.a368f9ae.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6cff96b8.js";import"./CheckOutlined.29be3015.js";import"./index.a5bb273d.js";import{A as n}from"./index.2fe64d86.js";import"./colors.5745025a.js";import"./RightOutlined.0becd0a0.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.eedde627.js";import"./index.56208f19.js";import"./index.a172b251.js";import"./index.48bb8c88.js";import"./UpOutlined.78f2a1da.js";import"./index.2a5e56d5.js";import"./index.551ba04e.js";import"./index.dfac5dac.js";import"./index.5869ffa6.js";import"./useDebounce.eb7ff478.js";import"./useEventListener.89e18c2c.js";import"./useBreakpoint.7a6f6445.js";import{u as p}from"./index.519c19a2.js";import m from"./Drawer1.ab846b85.js";import c from"./Drawer2.05af6a14.js";import d from"./Drawer3.85961e74.js";import"./index.dcd2bc4f.js";import"./tsxHelper.948ab144.js";import"./index.32b7dc7d.js";import"./index.90135c93.js";import"./useForm.ba76dbfd.js";import l from"./Drawer4.84f81e58.js";import w from"./Drawer5.ce8a3800.js";var D=e({components:{Alert:n,Drawer1:m,Drawer2:c,Drawer3:d,Drawer4:l,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[i,{openDrawer:s}]=p(),[a,{openDrawer:t}]=p(),[n,{openDrawer:m}]=p(),[c,{openDrawer:d}]=p();return{register1:e,openDrawer1:r,register2:i,openDrawer2:s,register3:a,openDrawer3:t,register4:n,register5:c,openDrawer5:d,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const f={class:"px-10 py-4"},j=t("打开Drawer"),g=t("打开Drawer"),u=t("打开Drawer"),b=t("打开Drawer并传递数据"),x=t("打开详情Drawer");D.render=function(e,t,n,p,m,c){const d=r("Alert"),l=r("a-button"),w=r("Drawer1"),D=r("Drawer2"),y=r("Drawer3"),k=r("Drawer4"),R=r("Drawer5");return o(),i("div",f,[s(d,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:a((()=>[j])),_:1},8,["onClick"]),s(d,{message:"内外同时同时显示隐藏","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer2},{default:a((()=>[g])),_:1},8,["onClick"]),s(d,{message:"自适应高度/显示footer","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer3},{default:a((()=>[u])),_:1},8,["onClick"]),s(d,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.send},{default:a((()=>[b])),_:1},8,["onClick"]),s(d,{message:"详情页模式","show-icon":""}),s(l,{type:"primary",class:"my-4",onClick:e.openDrawer5},{default:a((()=>[x])),_:1},8,["onClick"]),s(w,{onRegister:e.register1},null,8,["onRegister"]),s(D,{onRegister:e.register2},null,8,["onRegister"]),s(y,{onRegister:e.register3},null,8,["onRegister"]),s(k,{onRegister:e.register4},null,8,["onRegister"]),s(R,{onRegister:e.register5},null,8,["onRegister"])])};export default D;