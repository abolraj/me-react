import{u as w,r as p,j as s,C as y,E as N,c as S}from"./index-DhpraPPd.js";import C from"./file-text-C9D8q86y.js";import P from"./circle-check-DJTZ7J5P.js";import T from"./copy-mPE84smS.js";import{a as $,p as k}from"./packageService-sVw6yZzu.js";import"./featureService-P98QB5kO.js";function R({packageData:c,itemData:t,baseStoryPointUSD:i=5,yearsExp:o=5,className:v="",...x}){const{t:e}=w(),[d,u]=p.useState(!1),_=p.useRef(null),n=p.useMemo(()=>{if(!t)return null;const r=t.features.map(a=>({...a,subtotal:a.amount*a.story_points})),l=r.reduce((a,g)=>a+g.subtotal,0),m=Math.round(l*t.scale),b=m*i,j=parseInt(m/(o*6)*30);return{featureCalculations:r,sumBeforeScale:l,scale:t.scale,finalStoryPoints:m,estimatedCost:b,estimatedTime:j}},[o,t,i]),f=()=>{const r=h();navigator.clipboard.writeText(r),u(!0),setTimeout(()=>u(!1),2e3)},h=()=>_.current.innerText;return n?s.jsxs("div",{className:`mx-auto ${v}`,...x,children:[s.jsx("div",{className:"bg-gradient-to-r from-primary to-primary/90 rounded-t-2xl p-6 md:p-8 text-primary-content shadow-lg",children:s.jsx("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-6",children:s.jsxs("div",{className:"w-full flex flex-wrap items-center gap-4",children:[s.jsx("div",{className:"p-3 bg-white/20 rounded-xl backdrop-blur-sm",children:s.jsx(C,{className:"w-8 h-8"})}),s.jsxs("div",{className:"grow text-start",children:[s.jsx("h1",{className:"text-2xl md:text-4xl font-bold",children:e("services.contract_title")}),s.jsx("p",{className:"text-primary-content/80 mt-2",children:e("services.contract_subtitle")})]})]})})}),s.jsx("div",{className:"bg-base-100 rounded-b-2xl shadow-xl p-2 md:p-4 border border-base-300",children:s.jsx("div",{className:"",children:s.jsxs("div",{className:"bg-base-300 whitespace-pre-line text-start rounded-xl p-2 md:p-4 border border-base-300",children:[s.jsx("div",{className:"w-fill mx-auto flex flex-wrap justify-end gap-2 mb-2",children:s.jsxs("button",{onClick:f,className:`btn ${d?"btn-success":"btn-outline btn-primary"} gap-2`,children:[d?s.jsx(P,{className:"w-4 h-4"}):s.jsx(T,{className:"w-4 h-4"}),e(d?"services.copied":"services.copy_contract")]})}),s.jsx("div",{className:"overflow-auto",children:s.jsxs("pre",{className:"whitespace-pre-wrap whitespace-break-spaces min-w-[50rem]",ref:_,children:["# ",e("services.contract_title")," ",`
`,`
`,"## ",e("services.contract_id"),": #ARC-",t.slug," ",`
`,"## ",e("services.contract_date"),": ",new Date().toLocaleDateString()," ",`
`,`
`,e("services.cost_estimation_strategy_note")," ",`
`,`
`,"## ",e("services.developer_experience")," : ",o," ",e("services.years"),`
`,`
`,"## ",e("services.package_title"),": ",(c==null?void 0:c.title)||""," ",`
`,"## ",e("services.package_details"),": ",(c==null?void 0:c.description)||""," ",`
`,`
`,"## ",e("services.item_name"),": ",(t==null?void 0:t.name)||""," ",`
`,"## ",e("services.item_scale"),": ",(t==null?void 0:t.scale)||1,"x ",`
`,"## ",e("services.item_details"),": ",(t==null?void 0:t.description)||""," ",`
`,`
`,e("services.features_breakdown"),": ",`
`,t==null?void 0:t.features.map((r,l)=>`  ${l+1}. ${r.title} - ${r.amount} × ${r.story_points} SP = ${r.amount*r.story_points} SP`).join(`
`)," ",`
`,`
`,e("services.total_story_points"),": ",(n==null?void 0:n.finalStoryPoints)||0," SP ",`
`,e("services.estimated_cost"),": $",(n==null?void 0:n.estimatedCost.toLocaleString())||0," ",`
`,e("services.estimated_time"),": ",(n==null?void 0:n.estimatedTime)||0," ",e("services.days")," ",`
`,`
`,`
`,`
`,"# ",e("services.services_strategy_title"),`
`,`
`,"# ",e("services.what_is_story_point"),`
`,"## ",e("services.story_point_definition"),`
`,`
`,"# ",e("services.how_it_works")," :",`
`,[{title:e("services.step_packages"),desc:e("services.step_packages_desc")},{title:e("services.step_items"),desc:e("services.step_items_desc")},{title:e("services.step_features"),desc:e("services.step_features_desc")},{title:e("services.step_calculation"),desc:e("services.step_calculation_desc")}].map((r,l)=>s.jsxs(s.Fragment,{children:[" "," + ",r.title," : ",r.desc," ",`
`]})),`
`,`
`,"# ",e("services.total_estimated_cost")," : ",`
`," "," ## ",e("services.the_golden_formula")," 1 : ",e("services.formula_explanation"),`
`," "," ## [ Final SP = Σ(Amount × SP) × Scale ]",`
`,`
`,"# ",e("services.estimated_duration")," : ",`
`," "," ## ",e("services.the_golden_formula")," 2 : ",e("services.formula_est_time"),`
`," "," ## [ Min Days = ( SP / ( Expriences (years) × 6 ) ) × 30 ]",`
`,`
`,e("services.contract_terms_and_conditions_note")]})})]})})})]}):null}function E({}){const{itemSlug:c}=y({strict:!1}),{exp:t}=N({strict:!1}),{packageItem:i}=$.usePackageItem(c),{packageData:o}=k.usePackage(i==null?void 0:i.package_slug);return s.jsx("section",{className:"text-base-content",children:o&&i&&t&&s.jsx(R,{packageData:o,itemData:i,yearsExp:t})})}const B=S("/services/contract/$itemSlug")({component:E});export{B as Route};
