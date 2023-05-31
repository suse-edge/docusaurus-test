"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,title:"SLE Micro on X86_64 on libvirt (virt-install)"},o="Intro",s={unversionedId:"quickstart/slemicro-virt-install-x86_64",id:"quickstart/slemicro-virt-install-x86_64",title:"SLE Micro on X86_64 on libvirt (virt-install)",description:"Libvirtd",source:"@site/docs/quickstart/slemicro-virt-install-x86_64.md",sourceDirName:"quickstart",slug:"/quickstart/slemicro-virt-install-x86_64",permalink:"/quickstart/slemicro-virt-install-x86_64",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/quickstart/slemicro-virt-install-x86_64.md",tags:[],version:"current",lastUpdatedBy:"Eduardo M\xednguez",lastUpdatedAt:1685529269,formattedLastUpdatedAt:"May 31, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SLE Micro on X86_64 on libvirt (virt-install)"},sidebar:"docs",previous:{title:"SLE Micro on OSX on Apple Silicon (UTM)",permalink:"/quickstart/slemicro-utm-aarch64"},next:{title:"K3s on SLE Micro",permalink:"/quickstart/k3s-on-slemicro"}},l={},c=[{value:"Libvirtd",id:"libvirtd",level:2},{value:"Virt-install",id:"virt-install",level:2},{value:"Convert the raw image to qcow2",id:"convert-the-raw-image-to-qcow2",level:2},{value:"Ignition &amp; Combustion files",id:"ignition--combustion-files",level:2},{value:"Create the VM",id:"create-the-vm",level:2},{value:"Access to the vm",id:"access-to-the-vm",level:2},{value:"Delete the VM",id:"delete-the-vm",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("h2",{id:"libvirtd"},"Libvirtd"),(0,i.kt)("p",null,"The libvirtd program is the server side daemon component of the libvirt virtualization management system.\nThis daemon runs on host servers and performs required management tasks for virtualized guests. This includes activities such as starting, stopping and migrating guests between host servers, configuring and manipulating networking, and managing storage for use by guests.\nThe libvirt client libraries and utilities connect to this daemon to issue tasks and collect information about the configuration and resources of the host system and guests.\n(see ",(0,i.kt)("a",{parentName:"p",href:"https://libvirt.org/manpages/libvirtd.html"},"https://libvirt.org/manpages/libvirtd.html"),")"),(0,i.kt)("h2",{id:"virt-install"},"Virt-install"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"virt-install"),' is a command line tool for creating new KVM , Xen, or Linux container guests using the "libvirt" hypervisor management library. See the EXAMPLES section at the end of this document to quickly get started.\n',(0,i.kt)("inlineCode",{parentName:"p"},"virt-install")," tool supports both text based & graphical installations, using VNC or SDL graphics, or a text serial console. The guest can be configured to use one or more virtual disks, network interfaces, audio devices, physical USB or PCI devices, among others.\nThe installation media can be held locally or remotely on NFS , HTTP , FTP servers. In the latter case ",(0,i.kt)("inlineCode",{parentName:"p"},"virt-install")," will fetch the minimal files necessary to kick off the installation process, allowing the guest to fetch the rest of the OS distribution as needed. PXE booting, and importing an existing disk image (thus skipping the install phase) are also supported."),(0,i.kt)("p",null,"To see more details about virt-install options, please visit ",(0,i.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/virt-install"},"https://linux.die.net/man/1/virt-install"),"\nTo see more details about virt-manager and the graphical interface, please visit ",(0,i.kt)("a",{parentName:"p",href:"https://virt-manager.org/"},"https://virt-manager.org/")),(0,i.kt)("h1",{id:"image-based-process-step-by-step"},"Image-based process step by step"),(0,i.kt)("p",null,"We have to create the image based and prepare the image with ignition and combustion files.\nBasically we will use the following documents as reference to create the image changing the base SLEMicro image to be downloaded (",(0,i.kt)("strong",{parentName:"p"},"in this case will be SLE Micro x86_64"),"):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the raw image file from the SUSE website at ",(0,i.kt)("a",{parentName:"li",href:"https://www.suse.com/download/sle-micro/"},"https://www.suse.com/download/sle-micro/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select AMD64/Intel 64 architecture"),(0,i.kt)("li",{parentName:"ul"},"Look for the raw file (I.e.- ",(0,i.kt)("inlineCode",{parentName:"li"},"SLE-Micro.x86_64-5.4.0-Default-GM.raw.xz"),")")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," You need to have a valid user on the SUSE site to be able to download the file."),(0,i.kt)("p",null,"If you are trying to download to a remote server, you can use scp to copy that file to the server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Access to ",(0,i.kt)("a",{parentName:"p",href:"https://scc.suse.com/"},"https://scc.suse.com/")," to generate a registration code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Butane, qemu-img and cdrtools installed (using zypper for example)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," sudo zypper install butane qemu-tools xz mkisofs\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Unzip the file"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"  xz -d SLE-Micro.x86_64-5.4.0-Default-GM.raw.xz \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resize the image file. In this example, to 30G")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," qemu-img resize -f raw ~/PATH-TO-FILE/SLE-Micro.x86_64-5.4.0-Default-GM.raw 30G > /dev/null\n")),(0,i.kt)("h2",{id:"convert-the-raw-image-to-qcow2"},"Convert the raw image to qcow2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"qemu-img convert -O qcow2 SLE-Micro.x86_64-5.4.0-Default-GM.raw slemicro\n")),(0,i.kt)("h2",{id:"ignition--combustion-files"},"Ignition & Combustion files"),(0,i.kt)("p",null,"To automate the installation, we will leverage Butane, Ignition and\nCombustion as explained before:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a temporary folder to store the assets"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"TMPDIR=$(mktemp -d)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create the required folders for ignition and combustion"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"mkdir -p ${TMPDIR}/{combustion,ignition}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"config.fcc")," butane config file as required. See the\nfollowing example to set a ",(0,i.kt)("inlineCode",{parentName:"p"},"root"),' password for the root user, and to\nconfigure the hostname to be "slemicro"\''),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'cat << \'EOF\' > ${TMPDIR}/config.fcc \nvariant: fcos \nversion: 1.4.0 \nstorage: \n  files: \n    - path: /etc/hostname \n      mode: 0644 \n      overwrite: true \n      contents: \n        inline: "slemicro" \npasswd: \n  users: \n   - name: root \n     password_hash: "$y$j9T$/t4THH10B7esLiIVBROsE.$G1lyxfy/MoFVOrfXSnWAUq70Tf3mjfZBIe18koGOuXB" \nEOF\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a script combustion file as required. See the following\nexample to register the SLE Micro instance to SUSE's SCC (use your\nown email/regcode) and to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/issue.d/combustion")," file"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'cat << EOF > ${TMPDIR}/combustion/script  \n#!/bin/bash \n# combustion: network \n\n# Redirect output to the console \nexec > >(exec tee -a /dev/tty0) 2>&1\n\n# Set hostname at combustion phase for SUSEConnect\nhostname slemicro\n\n# Registration \nif ! which SUSEConnect > /dev/null 2>&1; then \n    zypper --non-interactive install suseconnect-ng \nfi \n\nSUSEConnect --email foobar@suse.com --url https://scc.suse.com --regcode YOURCODE \n\n# Leave a marker \necho "Configured with combustion" > /etc/issue.d/combustion \nEOF\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Convert the butane config to ignition"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"butane -p -o ${TMPDIR}/ignition/config.ign ${TMPDIR}/config.fcc\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create an ISO file. It is requried for both ignition and combustion\nto work that the ISO is labeled as ",(0,i.kt)("inlineCode",{parentName:"p"},"ignition")," (hence the -V\nparameter)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"mkisofs -full-iso9660-filenames -o ignition-and-combustion.iso -V ignition ${TMPDIR}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional:")," Remove the temporary folder"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"rm -Rf ${TMPDIR}\n")))),(0,i.kt)("h2",{id:"create-the-vm"},"Create the VM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"virt-install --name MyVM --memory 4096 --vcpus 4 --disk ./slemicro --import --cdrom ./ignition-and-combustion.iso --network default --osinfo detect=on,name=sle-unknown\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTES:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pass the ",(0,i.kt)("inlineCode",{parentName:"li"},"-noautoconsole")," flag in case your console hangs on the installation, this will allow you to run other commands without CTRL-C interrupt"),(0,i.kt)("li",{parentName:"ul"},"Pass the ",(0,i.kt)("inlineCode",{parentName:"li"},"--debug")," flag if you run into issues"),(0,i.kt)("li",{parentName:"ul"},"If you run into an issue and you need to restart, or if you get an error saying that MyVM is already running, run this command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," virsh destroy MyVM ; virsh undefine MyVM\n")),(0,i.kt)("p",null,"After a couple of seconds, the VM will boot up and will configure itself\nusing the ignition and combustion scripts, including registering itself\nto SCC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"virsh list\n Id   Nombre          State\n----------------------------------\n 14   MyVM          running\n")),(0,i.kt)("h2",{id:"access-to-the-vm"},"Access to the vm"),(0,i.kt)("p",null,"You can access to the VM using virsh console:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"virsh console MyVM\n\nConnected to domain MyVM\n")),(0,i.kt)("p",null,"or using ssh directly and the user set in the ignition file (in this case root)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"virsh domifaddr MyVM\n Nombre     MAC address          Protocol     Address\n-------------------------------------------------------------------------------\n vnet14     52:54:00:f0:be:e5    ipv4         192.168.122.221/24\n \nssh root@192.168.122.221\n")),(0,i.kt)("h2",{id:"delete-the-vm"},"Delete the VM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"virsh destroy MyVM ; virsh undefine MyVM\n")))}m.isMDXComponent=!0}}]);