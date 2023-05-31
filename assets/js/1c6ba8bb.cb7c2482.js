"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),l=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},6761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),i=a(5162);const l={sidebar_position:1,title:"Create a package (RPM or Container image) using OBS (openSUSE Build Service)"},s=void 0,u={unversionedId:"dev_howto/create-package-obs",id:"dev_howto/create-package-obs",title:"Create a package (RPM or Container image) using OBS (openSUSE Build Service)",description:"openSUSE Build Service",source:"@site/docs/dev_howto/create-package-obs.mdx",sourceDirName:"dev_howto",slug:"/dev_howto/create-package-obs",permalink:"/dev_howto/create-package-obs",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/dev_howto/create-package-obs.mdx",tags:[],version:"current",lastUpdatedBy:"Eduardo M\xednguez",lastUpdatedAt:1685529269,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create a package (RPM or Container image) using OBS (openSUSE Build Service)"},sidebar:"docs",previous:{title:"Rancher portfolio disambiguation",permalink:"/misc/rancher-disambiguation"}},c={},p=[{value:"openSUSE Build Service",id:"opensuse-build-service",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create and configure a project",id:"create-and-configure-a-project",level:2},{value:"Create a package",id:"create-a-package",level:2},{value:"RPM package",id:"rpm-package",level:3},{value:"Container image",id:"container-image",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"opensuse-build-service"},"openSUSE Build Service"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://build.opensuse.org"},"openSUSE Build Service")," is the public instance of the ",(0,r.kt)("a",{parentName:"p",href:"https://openbuildservice.org/"},"Open Build Service")," used for development of the openSUSE distribution and to offer packages from same source for Fedora, Debian, Ubuntu, SUSE Linux Enterprise and other distributions.."),(0,r.kt)("p",null,"This service is also able to build container images, using either a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," or a KIWI configuration."),(0,r.kt)("p",null,"Everyone can create a SUSE IdP account to be able to use this service."),(0,r.kt)("p",null,"A published container image will be available on ",(0,r.kt)("a",{parentName:"p",href:"https://registry.opensuse.org"},"registry.opensuse.org")," and a published package would be available at ",(0,r.kt)("a",{parentName:"p",href:"https://download.opensuse.org"},"download.opensuse.org")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"In order to use OBS you first need an IdP account (",(0,r.kt)("a",{parentName:"p",href:"https://idp-portal.suse.com/univention/self-service/#page=createaccount"},"sign up here"),") and you need to log into ",(0,r.kt)("a",{parentName:"p",href:"https://build.opensuse.org"},"build.opensuse.org")),(0,r.kt)("p",null,"You will also need the ",(0,r.kt)("inlineCode",{parentName:"p"},"osc")," (for openSUSE Commander) command as this quickstart will do it the CLI way, but most things can be done in the WebUI if you prefer."),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"osc"),":"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"suse",label:"SUSE",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"zypper install osc\n"))),(0,r.kt)(i.Z,{value:"mac",label:"MacOS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install osc\n"))),(0,r.kt)(i.Z,{value:"pip",label:"PIP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install osc\n")))),(0,r.kt)("h2",{id:"create-and-configure-a-project"},"Create and configure a project"),(0,r.kt)("p",null,"We are going to create a project under your home namespace, this will bring up your editor to configure it right away."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'osc meta prj -e "home:$USERNAME:$PROJECTNAME"\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use your home project root just specify ",(0,r.kt)("inlineCode",{parentName:"p"},"home:$USERNAME")," here and in following steps")),(0,r.kt)("p",null,"In the editor you can now fill the metadata to look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<project name="home:$USERNAME">\n  <title/>\n  <description/>\n  <person userid="$USERNAME" role="maintainer"/>\n  \x3c!--\n    If you want to build RPM packages you need a block like this one, here for\n    SLE-15 SP4 replace accordingly to the distribution you want to target\n  --\x3e\n  <repository name="sp4">\n    <path project="SUSE:SLE-15-SP4:Update" repository="standard"/>\n    <path project="SUSE:SLE-15-SP4:GA" repository="standard"/>\n    <arch>x86_64</arch>\n    <arch>s390x</arch>\n    <arch>aarch64</arch>\n  </repository>\n  \x3c!-- If you want to build container images you need a block akin to this one --\x3e\n  <repository name="containers">\n    \x3c!--\n        This defines the available source images for the build (here any from\n        registry.suse.com)\n    --\x3e\n    <path project="SUSE:Registry" repository="standard"/>\n    \x3c!--\n        These defines package repositories available during build, I am\n        refering to the one above here so I can use the RPM packages published\n        in this project for the container images of the project\n    --\x3e\n    <path project="home:$USERNAME:$PROJECTNAME" repository="sp4"/>\n    \x3c!-- This is the list of architecture you want to build for --\x3e\n    <arch>x86_64</arch>\n    <arch>s390x</arch>\n    <arch>aarch64</arch>\n  </repository>\n</project>\n')),(0,r.kt)("p",null,"If you want to build containers you need to tweak the configuration of the project as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'osc meta prjconf -e "home:$USERNAME:$PROJECTNAME"\n')),(0,r.kt)("p",null,"The configration is different whether you want to use KIWI or Dockerfile build system:"),(0,r.kt)(o.Z,{groupId:"buildtype",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"docker",label:"Dockerfile",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'%if "%_repository" == "containers"\nType: docker\nRepotype: none\nPatterntype: none\nBuildEngine: podman\n%endif\n'))),(0,r.kt)(i.Z,{value:"kiwi",label:"Kiwi",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'%if "%_repository" == "containers"\nType: kiwi\nRepotype: none\nPatterntype: none\n%endif\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to build containers using both KIWI and ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfiles")," in the same project, you need two repositories\nin your project's metadata (with different names) and both snippets in project's configuration (one for each repository).")),(0,r.kt)("h2",{id:"create-a-package"},"Create a package"),(0,r.kt)("p",null,"To create a package in your project use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"osc meta pkg -e home:$USERNAME:$PROJECTNAME $PACKAGENAME\n")),(0,r.kt)("p",null,"There you'll get another XML file to edit, you only have to set a title and description here."),(0,r.kt)("p",null,"Now you can checkout the directory to start adding your files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"osc co home:$USERNAME:$PROJECTNAME/$PACKAGENAME\n")),(0,r.kt)("p",null,"Now go into the directory and when all is ready you can add your files and commit using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"osc add <files>...\nosc ci\n")),(0,r.kt)("p",null,"Now let's see the specificities of RPM and Container packages"),(0,r.kt)("h3",{id:"rpm-package"},"RPM package"),(0,r.kt)("p",null,"An RPM package is defined by the presence of a spec file, I will not go into the details of that file\nas this is way beyond the scope of that quickstart, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/Portal:Packaging"},"https://en.opensuse.org/Portal:Packaging")," for more\ndetails about packaging."),(0,r.kt)("p",null,"I will however get into more details about the ",(0,r.kt)("inlineCode",{parentName:"p"},"_service")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_constraints")," special files that may change the\nbehavior of OBS."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_service")," file allows one to define automation to happen on said time, for RPM packages these are usually manually triggered.\nIt is then possible to automate fetching a git repository into a tarball, updating the specfile version from git info, vendoring\ngo or rust dependencies, etc...You can get more insight into what is possible here\n",(0,r.kt)("a",{parentName:"p",href:"https://en.opensuse.org/openSUSE:Build_Service_Concept_SourceService"},"https://en.opensuse.org/openSUSE:Build_Service_Concept_SourceService")," ."),(0,r.kt)("p",null,"Here is one for a rust project for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="_services"',title:'"_services"'},'<services>\n    <service name="tar_scm" mode="manual">\n        <param name="scm">git</param>\n        <param name="url">https://github.com/project-akri/akri</param>\n        <param name="filename">akri</param>\n        <param name="versionformat">@PARENT_TAG@</param>\n        <param name="versionrewrite-pattern">v(.*)</param>\n        <param name="revision">v0.10.4</param>\n    </service>\n    <service name="recompress" mode="manual">\n        <param name="file">*.tar</param>\n        <param name="compression">xz</param>\n    </service>\n    <service name="set_version" mode="manual" />\n    <service name="cargo_vendor" mode="manual">\n        <param name="srcdir">akri</param>\n        <param name="compression">xz</param>\n    </service>\n</services>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_constraints"),' file allow to define "restrictions" about the builder selected by OBS, like for example the disk size, if your build\ncomplains about having not enough space, this is the file you should edit/create.\nSee here for the complete guide: ',(0,r.kt)("a",{parentName:"p",href:"https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.build_job_constraints.html"},"https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.build_job_constraints.html")),(0,r.kt)("h3",{id:"container-image"},"Container image"),(0,r.kt)("p",null,"You can build a container image in two different ways, you can either use a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," or a KIWI configuration."),(0,r.kt)("p",null,"Each method has their own benefits and drawbacks.\nKiwi supports using the package manager from the host/build system, so it can build base images and derive images which don't contain a package manager,\nlike ",(0,r.kt)("inlineCode",{parentName:"p"},"opensuse/busybox"),". With Dockerfile, it's practically required to use a full base image like ",(0,r.kt)("inlineCode",{parentName:"p"},"opensuse/tumbleweed"),"."),(0,r.kt)("p",null,"I won't go into details how a Dockerfile or a kiwi build works, I'll just tell about the interaction with OBS."),(0,r.kt)("p",null,"First the ",(0,r.kt)("inlineCode",{parentName:"p"},"kiwi_metainfo_helper")," service that you can add as a buildtime source service allows to substitute buildtime placeholders to use in you Dockerfile\nor kiwi configuration. You can find a list of the placeholders here: ",(0,r.kt)("a",{parentName:"p",href:"https://build.opensuse.org/package/view_file/openSUSE:Factory/obs-service-kiwi_metainfo_helper/README"},"https://build.opensuse.org/package/view_file/openSUSE:Factory/obs-service-kiwi_metainfo_helper/README")),(0,r.kt)("p",null,"Another useful service is the ",(0,r.kt)("inlineCode",{parentName:"p"},"replace_using_package_version")," service, that allows to replace a placeholder with the version of a RPM package.\nFor example if I have ",(0,r.kt)("inlineCode",{parentName:"p"},"foobar")," package in version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2.3")," in an available RPM repository, I can use this service to automatically tag an image that has this\npackage installed. Here it would replace ",(0,r.kt)("inlineCode",{parentName:"p"},"%PKG_VERSION%")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="_services"',title:'"_services"'},'<services>\n    <service mode="buildtime" name="kiwi_metainfo_helper"/>\n    <service mode="buildtime" name="replace_using_package_version">\n        <param name="file">Dockerfile</param>\n        <param name="regex">%PKG_VERSION%</param>\n        <param name="parse-version">minor</param>\n        <param name="package">foobar</param>\n    </service>\n</services>\n')),(0,r.kt)("p",null,"You now have to tell OBS about the name and tag of your image:"),(0,r.kt)(o.Z,{groupId:"buildtype",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"docker",label:"Dockerfile",mdxType:"TabItem"},(0,r.kt)("p",null,"You can use one or multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildTag")," as comments in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\nlike this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!BuildTag: foo/bar:latest foo/bar:%PKG_VERSION%.%RELEASE%\n#!BuildTag: foo/bar:tag foo/bar:anothertag\n"))),(0,r.kt)(i.Z,{value:"kiwi",label:"Kiwi",mdxType:"TabItem"},(0,r.kt)("p",null,"In the kiwi configuration to specify the tags of your image you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"containerconfig")," element, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<preferences>\n    <type image="docker">\n       <containerconfig\n            name="foo/bar"\n            tag="latest"\n            additionaltags="atag,anothertag,%PKG_VERSION%.%RELEASE">\n            ...\n')))))}h.isMDXComponent=!0}}]);