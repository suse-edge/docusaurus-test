"use strict";(self.webpackChunksuse_edge_docs=self.webpackChunksuse_edge_docs||[]).push([[9611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:8,title:"NVIDIA GPU's on SLE Micro"},r="Intro",s={unversionedId:"quickstart/nvidia-slemicro",id:"quickstart/nvidia-slemicro",title:"NVIDIA GPU's on SLE Micro",description:"In this guide, we'll show you how to implement host-level NVIDIA GPU support via the pre-built open-source drivers on SLE Micro 5.3+. In other words, drivers that are baked into the operating system rather than dynamically loaded by NVIDIA's GPU Operator. This configuration is highly desirable for customers that want to pre-bake all artefacts required for deployment into the image, and where the dynamic selection of the driver version is not a requirement. This guide shows how to deploy the additional components onto a pre-installed system, but the steps could also be used to create a deployment image with the software pre-baked.",source:"@site/docs/quickstart/nvidia-slemicro.md",sourceDirName:"quickstart",slug:"/quickstart/nvidia-slemicro",permalink:"/docs/quickstart/nvidia-slemicro",draft:!1,editUrl:"https://github.com/suse-edge/suse-edge.github.io/tree/main/docs/quickstart/nvidia-slemicro.md",tags:[],version:"current",lastUpdatedBy:"Rhys Oxenham",lastUpdatedAt:1695131271,formattedLastUpdatedAt:"Sep 19, 2023",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"NVIDIA GPU's on SLE Micro"},sidebar:"docs",previous:{title:"RKE2 cluster with SELinux enabled",permalink:"/docs/quickstart/rke2-selinux"},next:{title:"SLE Micro vs SLE Micro for Rancher",permalink:"/docs/misc/slemicro-vs-slemicro-rancher"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Further Validation",id:"further-validation",level:2},{value:"Implementation with Kubernetes",id:"implementation-with-kubernetes",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("p",null,"In this guide, we'll show you how to implement host-level NVIDIA GPU support via the pre-built ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/open-gpu-kernel-modules"},"open-source drivers")," on SLE Micro 5.3+. In other words, drivers that are baked into the operating system rather than dynamically loaded by NVIDIA's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/gpu-operator"},"GPU Operator"),". This configuration is highly desirable for customers that want to pre-bake all artefacts required for deployment into the image, and where the dynamic selection of the driver version is not a requirement. This guide shows how to deploy the additional components onto a pre-installed system, but the steps could also be used to create a deployment image with the software pre-baked."),(0,o.kt)("p",null,"However, should you want to utilise the GPU Operator for Kubernetes integration, it should still be possible to follow this guide and enable the GPU operator by telling it to utilise the ",(0,o.kt)("em",{parentName:"p"},"pre-installed")," drivers via the ",(0,o.kt)("inlineCode",{parentName:"p"},"driver.enabled=false")," flag in the NVIDIA GPU Operator Helm chart, where more comprehensive instructions are available ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/install-gpu-operator.html#chart-customization-options"},"here"),"."),(0,o.kt)("p",null,"It's important to call out that the support for these drivers is provided by both SUSE and NVIDIA in tight collaboration, however if you have any concerns or questions about the combination in which you're utilising the drivers, then please ask your SUSE or NVIDIA account managers for further assistance. If you're planning on utilising ",(0,o.kt)("a",{parentName:"p",href:"https://www.nvidia.com/en-gb/data-center/products/ai-enterprise/"},"NVIDIA AI Enterprise")," (NVAIE) you will need to ensure that you're using an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/platform-support.html#supported-nvidia-gpus-and-systems"},"NVAIE certified GPU"),", which ",(0,o.kt)("em",{parentName:"p"},"may")," require the use of proprietary NVIDIA drivers. If you're unsure, please speak with your NVIDIA representative."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The instructions provided below will drastically simplify in the coming weeks; the instructions below demonstrate how to pull some packages from SLES repos and install them on SLE Micro, and we're currently porting these packages over to SLE Micro 5.3, 5.4, and 5.5. They'll also be available in the ALP-based Micro equivalent in the coming months.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"If you're following this guide, it's assumed that you've got the following already available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"At least one host with SLE Micro 5.3+ installed; this can be physical or virtual."),(0,o.kt)("li",{parentName:"ul"},"Your host(s) is/are attached to a subscription as this will be required for package access - an evaluation is available ",(0,o.kt)("a",{parentName:"li",href:"https://www.suse.com/download/sle-micro/"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/NVIDIA/open-gpu-kernel-modules#compatible-gpus"},"compatible NVIDIA GPU")," installed (or passed through to the virtual machine in which SLE Micro is running)."),(0,o.kt)("li",{parentName:"ul"},"Access to the root user - these instructions assume you're the root user, and ",(0,o.kt)("em",{parentName:"li"},"not")," escalating your privileges via ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo"),".")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Currently, the required packages for the NVIDIA open driver are not available in standard SLE Micro package repositories, only SUSE Linux Enterprise Server (SLES), so we need to pull them from those repositories, which we can easily do via the toolbox utility. Note that this will not be required in coming weeks - we're currently making these packages available in SLE Micro, so the next few steps will become redundant."),(0,o.kt)("p",null,"In the meantime, ensure that you've got the ",(0,o.kt)("inlineCode",{parentName:"p"},"mounts.conf")," file setup correctly, this will ensure that any containers started by podman (which includes the ",(0,o.kt)("inlineCode",{parentName:"p"},"toolbox")," utility) will automatically have your SUSE Connect credentials injected into the image. This will allow package access so we can download the packages from the SLES repositories (this file is ",(0,o.kt)("em",{parentName:"p"},"usually")," already configured on SLE Micro 5.3, but let's make sure): "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat << EOF > /etc/containers/mounts.conf\n# This configuration file specifies the default mounts for each container of the\n# tools adhering to this file (e.g., CRI-O, Podman, Buildah).  The format of the\n# config is /SRC:/DST, one mount per line.\n#/etc/SUSEConnect:/etc/SUSEConnect\n/etc/zypp/credentials.d/SCCcredentials:/etc/zypp/credentials.d/SCCcredentials\nEOF\n")),(0,o.kt)("p",null,"Next, make a temporary directory in which we can push the packages that we need to download from SLES onto the local filesystem, for this I'm just using ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/nvidia"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p /root/nvidia\n")),(0,o.kt)("p",null,"Now we can open up the ",(0,o.kt)("inlineCode",{parentName:"p"},"toolbox")," utility, which provides additional command line tooling and utilities that are not part of SLE Micro's base operating system. This tool is useful for troubleshooting a system where you want to maintain a minimal footprint underlying operating system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"toolbox\n")),(0,o.kt)("p",null,"Once we're in the toolbox utility, we can ask the package manager (",(0,o.kt)("inlineCode",{parentName:"p"},"zypper"),") to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"sle-module-basesystem")," module, refresh the repositories, and then ",(0,o.kt)("em",{parentName:"p"},"download")," the NVIDIA driver packages into the previously created ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/nvidia")," directory on the host filesystem, noting that from within toolbox the absolute path is ",(0,o.kt)("inlineCode",{parentName:"p"},"/media/root/root/nvidia"),". In the example below we're specifically pulling the \"G06\" generation of driver, which supports the latest GPU's (please see ",(0,o.kt)("a",{parentName:"p",href:"https://en.opensuse.org/SDB:NVIDIA_drivers#Install"},"here")," for further information), so please ensure that you're selecting an appropriate GPU version."),(0,o.kt)("p",null,"In addition, the example below calls for ",(0,o.kt)("em",{parentName:"p"},"535.86.05")," of the driver; please make sure that the driver version that you're selecting is compatible with your GPU, and in addition meets the CUDA requirements (if applicable) by checking ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/"},"here"),". It's also advisable to check the ",(0,o.kt)("a",{parentName:"p",href:"http://download.nvidia.com/suse/sle15sp4/x86_64/"},"NVIDIA SLE15-SP4 repository")," to ensure that the driver version that you've chosen has an equivalent ",(0,o.kt)("inlineCode",{parentName:"p"},"nvidia-compute-utils-G06")," package with the same version string; this repository is regularly refreshed by NVIDIA, but the versions need to match; there's a possibility that we have a newer driver version in the SUSE repo than NVIDIA has in theirs (or vice versa), so it's important to match the versions here."),(0,o.kt)("p",null,"When you've confirmed the above, use the following commands to pull the required packages appropriate for your system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ADDITIONAL_MODULES=sle-module-basesystem zypper ref\nzypper --pkg-cache-dir /media/root/root/nvidia install -y --download-only nvidia-open-driver-G06-signed-kmp=535.86.05\n")),(0,o.kt)("p",null,"Now that you've got the packages available outside of the toolbox utility, exit the toolbox:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: Please make sure that you've exited the ",(0,o.kt)("inlineCode",{parentName:"p"},"toolbox")," utility before proceeding!")),(0,o.kt)("p",null,"Now you're ready to install the packages on the host operating system, and for this we need to open up a ",(0,o.kt)("inlineCode",{parentName:"p"},"transactional-update")," session, which creates a new read/write snapshot of the underlying operating system so we can make changes to the immutable platform (for further instructions on ",(0,o.kt)("inlineCode",{parentName:"p"},"transactional-update")," see ",(0,o.kt)("a",{parentName:"p",href:"https://documentation.suse.com/sle-micro/5.4/html/SLE-Micro-all/sec-transactional-udate.html"},"here"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"transactional-update shell\n")),(0,o.kt)("p",null,"When you're in your ",(0,o.kt)("inlineCode",{parentName:"p"},"transactional-update")," shell, add the additional required package repositories from NVIDIA; this will allow us to pull in additional utilities, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"nvidia-smi"),", along with access to CUDA packages that you may want to utilise:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"zypper ar https://developer.download.nvidia.com/compute/cuda/repos/sles15/x86_64/ nvidia-sle15sp4-cuda\nzypper ar http://download.nvidia.com/suse/sle15sp4/ nvidia-sle15sp4-main\n")),(0,o.kt)("p",null,"Next, move to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/nvidia")," directory, which will contain a couple of directories that the previous ",(0,o.kt)("inlineCode",{parentName:"p"},"zypper")," command created with the downloaded packages from SLES. Then, we can request that the package manager install the pre-built signed kernel modules, the firmware packages, and the additional useful utilities package:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /root/nvidia/container-suseconnect-zypp:SLE-Module-Basesystem15-SP4-Updates/x86_64\nzypper in -y nvidia-open-driver-G06-signed-kmp-default* kernel-firmware-nvidia-gspx-G06* nvidia-compute-utils-G06\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: If this fails to install it's likely that there's a dependency mismatch between the selected driver version and what NVIDIA is shipping in their repositories - please revisit the section above to validate that your versions match; it may require you to remove files from ",(0,o.kt)("inlineCode",{parentName:"p"},"/root/nvidia")," and re-execute the commands starting from ",(0,o.kt)("inlineCode",{parentName:"p"},"toolbox"),".")),(0,o.kt)("p",null,"Now that you've installed these packages, it's time to exit the ",(0,o.kt)("inlineCode",{parentName:"p"},"transactional-update")," session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: Please make sure that you've exited the ",(0,o.kt)("inlineCode",{parentName:"p"},"transactional-update")," session before proceeding!")),(0,o.kt)("p",null,"Next, if you're ",(0,o.kt)("em",{parentName:"p"},"not")," using a supported GPU, remembering that the list can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/open-gpu-kernel-modules#compatible-gpus"},"here"),", you can see if the driver will work by enabling support at the module level, but your mileage may vary -- skip this step if you're using a ",(0,o.kt)("em",{parentName:"p"},"supported")," GPU:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sed -i '/NVreg_OpenRmEnableUnsupportedGpus/s/^#//g' /etc/modprobe.d/50-nvidia-default.conf\n")),(0,o.kt)("p",null,"Now that you've got your drivers installed, it's time to reboot, as SLE Micro is an immutable operating system it needs to reboot into the new snapshot that you created in a previous step; the drivers are only installed into this new snapshot, and hence it's not possible to load the drivers without rebooting into this new snapshot, which will happen automatically. Issue the reboot command when you're ready:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"reboot\n")),(0,o.kt)("p",null,"Once the system has rebooted successfully, log back in and try to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"nvidia-smi")," tool to verify that the driver is loaded successfully and that it's able to both access and enumerate your GPU(s):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nvidia-smi\n")),(0,o.kt)("p",null,"The output of this command should show you something similar to the following output, noting that in the example below we have two GPU's:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Mon Sep 18 06:58:12 2023\n+---------------------------------------------------------------------------------------+\n| NVIDIA-SMI 535.86.05              Driver Version: 535.86.05    CUDA Version: 12.2     |\n|-----------------------------------------+----------------------+----------------------+\n| GPU  Name                 Persistence-M | Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp   Perf          Pwr:Usage/Cap |         Memory-Usage | GPU-Util  Compute M. |\n|                                         |                      |               MIG M. |\n|=========================================+======================+======================|\n|   0  NVIDIA A100-PCIE-40GB          Off | 00000000:17:00.0 Off |                    0 |\n| N/A   29C    P0              35W / 250W |      4MiB / 40960MiB |      0%      Default |\n|                                         |                      |             Disabled |\n+-----------------------------------------+----------------------+----------------------+\n|   1  NVIDIA A100-PCIE-40GB          Off | 00000000:CA:00.0 Off |                    0 |\n| N/A   30C    P0              33W / 250W |      4MiB / 40960MiB |      0%      Default |\n|                                         |                      |             Disabled |\n+-----------------------------------------+----------------------+----------------------+\n\n+---------------------------------------------------------------------------------------+\n| Processes:                                                                            |\n|  GPU   GI   CI        PID   Type   Process name                            GPU Memory |\n|        ID   ID                                                             Usage      |\n|=======================================================================================|\n|  No running processes found                                                           |\n+---------------------------------------------------------------------------------------+\n")),(0,o.kt)("p",null,"...and that's it! You've successfully installed and verified that the NVIDIA drivers are loaded into SLE Micro."),(0,o.kt)("h2",{id:"further-validation"},"Further Validation"),(0,o.kt)("p",null,"At this stage, all we've been able to verify is that at the host level the NVIDIA device can be accessed and that the drivers are loading successfully. However, if we want to be sure that it's functioning, a simple test would be to try and validate that the GPU can take instruction from a user-space application, ideally via a container, and through the CUDA library, as that's typically what a real workload would utilise. For this, we can make a further modification to the host OS by installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"nvidia-container-toolkit"),". First, open up another ",(0,o.kt)("inlineCode",{parentName:"p"},"transactional-update")," shell, noting that we could have done this in a single transaction in the previous step, but to many (e.g. customers wanting to use Kubernetes) this step won't be required:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"transactional-update shell\n")),(0,o.kt)("p",null,"Next, install the ",(0,o.kt)("inlineCode",{parentName:"p"},"nvidia-container-toolkit")," package, which comes from one of the repo's that we configured in a previous step. Note that this command will initially appear to fail as it has a dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"libseccomp"),", whereas this package is ",(0,o.kt)("inlineCode",{parentName:"p"},"libseccomp2"),' in SLE Micro, so you can safely select the second option ("break dependencies") here:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"zypper in install nvidia-container-toolkit\n")),(0,o.kt)("p",null,"Your output should look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Refreshing service 'SUSE_Linux_Enterprise_Micro_5.4_x86_64'.\nRefreshing service 'SUSE_Linux_Enterprise_Micro_x86_64'.\nRefreshing service 'SUSE_Package_Hub_15_SP4_x86_64'.\nLoading repository data...\nReading installed packages...\nResolving package dependencies...\n\nProblem: nothing provides 'libseccomp' needed by the to be installed nvidia-container-toolkit-1.14.1-1.x86_64\n Solution 1: do not install nvidia-container-toolkit-1.14.1-1.x86_64\n Solution 2: break nvidia-container-toolkit-1.14.1-1.x86_64 by ignoring some of its dependencies\n\nChoose from above solutions by number or cancel [1/2/c/d/?] (c): 2\n(...)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: We're working on fixing this dependency issue, so this should be a lot cleaner in the coming weeks.")),(0,o.kt)("p",null,"When you're ready, you can exit the ",(0,o.kt)("inlineCode",{parentName:"p"},"transactional-update")," shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")),(0,o.kt)("p",null,"...and reboot the machine into the new snapshot:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"reboot\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: As before, you will need to ensure that you've exited the ",(0,o.kt)("inlineCode",{parentName:"p"},"transactional-shell")," and rebooted the machine for your changes to be enacted.")),(0,o.kt)("p",null,"Now that the machine has rebooted, you can validate that the system is able to successfully enumerate the devices via the NVIDIA container toolkit (the output should be verbose, and it should provide a number of INFO and WARN messages, but no ERROR messages):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nvidia-ctk cdi generate --output=/etc/cdi/nvidia.yaml\n")),(0,o.kt)("p",null,"When ready, you can then run a podman-based container (doing this via ",(0,o.kt)("inlineCode",{parentName:"p"},"podman")," gives us a good way of validating access to the NVIDIA device from within a container, which should give confidence for doing the same with Kubernetes), giving it access to the labelled NVIDIA device(s) that were taken care of by the previous command, based on ",(0,o.kt)("a",{parentName:"p",href:"https://registry.suse.com/bci/bci-base-15sp5/index.html"},"SLE BCI")," and simply running bash:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"podman run --rm --device nvidia.com/gpu=all --security-opt=label=disable -it registry.suse.com/bci/bci-base:latest bash\n")),(0,o.kt)("p",null,"When we're in the temporary podman container we can install the required CUDA libraries, again checking the correct CUDA version for your driver ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/"},"here")," although the previous output of ",(0,o.kt)("inlineCode",{parentName:"p"},"nvidia-smi")," should show the required CUDA version. In the example below we're installing ",(0,o.kt)("em",{parentName:"p"},"CUDA 12.1")," and we're pulling a large number of examples, demo's, and development kits so you can fully validate the GPU:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"zypper ar http://developer.download.nvidia.com/compute/cuda/repos/sles15/x86_64/ cuda-sle15-sp4\nzypper in -y cuda-libraries-devel-12-1 cuda-minimal-build-12-1 cuda-demo-suite-12-1\n")),(0,o.kt)("p",null,"Once this has been installed successfully, don't exit from the container, we'll run the ",(0,o.kt)("inlineCode",{parentName:"p"},"deviceQuery")," CUDA example, which will comprehensively validate GPU access via CUDA, and from within the container itself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/usr/local/cuda-12/extras/demo_suite/deviceQuery\n")),(0,o.kt)("p",null,"If successful, you should see output that shows similar to the following, noting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Result = PASS")," message at the end of the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'/usr/local/cuda-12/extras/demo_suite/deviceQuery Starting...\n\n CUDA Device Query (Runtime API) version (CUDART static linking)\n\nDetected 2 CUDA Capable device(s)\n\nDevice 0: "NVIDIA A100-PCIE-40GB"\n  CUDA Driver Version / Runtime Version          12.2 / 12.1\n  CUDA Capability Major/Minor version number:    8.0\n  Total amount of global memory:                 40339 MBytes (42298834944 bytes)\n  (108) Multiprocessors, ( 64) CUDA Cores/MP:     6912 CUDA Cores\n  GPU Max Clock rate:                            1410 MHz (1.41 GHz)\n  Memory Clock rate:                             1215 Mhz\n  Memory Bus Width:                              5120-bit\n  L2 Cache Size:                                 41943040 bytes\n  Maximum Texture Dimension Size (x,y,z)         1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)\n  Maximum Layered 1D Texture Size, (num) layers  1D=(32768), 2048 layers\n  Maximum Layered 2D Texture Size, (num) layers  2D=(32768, 32768), 2048 layers\n  Total amount of constant memory:               65536 bytes\n  Total amount of shared memory per block:       49152 bytes\n  Total number of registers available per block: 65536\n  Warp size:                                     32\n  Maximum number of threads per multiprocessor:  2048\n  Maximum number of threads per block:           1024\n  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)\n  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)\n  Maximum memory pitch:                          2147483647 bytes\n  Texture alignment:                             512 bytes\n  Concurrent copy and kernel execution:          Yes with 3 copy engine(s)\n  Run time limit on kernels:                     No\n  Integrated GPU sharing Host Memory:            No\n  Support host page-locked memory mapping:       Yes\n  Alignment requirement for Surfaces:            Yes\n  Device has ECC support:                        Enabled\n  Device supports Unified Addressing (UVA):      Yes\n  Device supports Compute Preemption:            Yes\n  Supports Cooperative Kernel Launch:            Yes\n  Supports MultiDevice Co-op Kernel Launch:      Yes\n  Device PCI Domain ID / Bus ID / location ID:   0 / 23 / 0\n  Compute Mode:\n     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >\n\nDevice 1: "NVIDIA A100-PCIE-40GB"\n  CUDA Driver Version / Runtime Version          12.2 / 12.1\n  CUDA Capability Major/Minor version number:    8.0\n  Total amount of global memory:                 40339 MBytes (42298834944 bytes)\n  (108) Multiprocessors, ( 64) CUDA Cores/MP:     6912 CUDA Cores\n  GPU Max Clock rate:                            1410 MHz (1.41 GHz)\n  Memory Clock rate:                             1215 Mhz\n  Memory Bus Width:                              5120-bit\n  L2 Cache Size:                                 41943040 bytes\n  Maximum Texture Dimension Size (x,y,z)         1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)\n  Maximum Layered 1D Texture Size, (num) layers  1D=(32768), 2048 layers\n  Maximum Layered 2D Texture Size, (num) layers  2D=(32768, 32768), 2048 layers\n  Total amount of constant memory:               65536 bytes\n  Total amount of shared memory per block:       49152 bytes\n  Total number of registers available per block: 65536\n  Warp size:                                     32\n  Maximum number of threads per multiprocessor:  2048\n  Maximum number of threads per block:           1024\n  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)\n  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)\n  Maximum memory pitch:                          2147483647 bytes\n  Texture alignment:                             512 bytes\n  Concurrent copy and kernel execution:          Yes with 3 copy engine(s)\n  Run time limit on kernels:                     No\n  Integrated GPU sharing Host Memory:            No\n  Support host page-locked memory mapping:       Yes\n  Alignment requirement for Surfaces:            Yes\n  Device has ECC support:                        Enabled\n  Device supports Unified Addressing (UVA):      Yes\n  Device supports Compute Preemption:            Yes\n  Supports Cooperative Kernel Launch:            Yes\n  Supports MultiDevice Co-op Kernel Launch:      Yes\n  Device PCI Domain ID / Bus ID / location ID:   0 / 202 / 0\n  Compute Mode:\n     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >\n> Peer access from NVIDIA A100-PCIE-40GB (GPU0) -> NVIDIA A100-PCIE-40GB (GPU1) : Yes\n> Peer access from NVIDIA A100-PCIE-40GB (GPU1) -> NVIDIA A100-PCIE-40GB (GPU0) : Yes\n\ndeviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 12.2, CUDA Runtime Version = 12.1, NumDevs = 2, Device0 = NVIDIA A100-PCIE-40GB, Device1 = NVIDIA A100-PCIE-40GB\nResult = PASS\n')),(0,o.kt)("p",null,"From here, you can continue to run any other CUDA workload - you can utilise compilers, and any other aspect of the CUDA ecosystem to run some further tests. When you're done you can exit from the container, noting that whatever you've installed in there is ephemeral (so will be lost!), and hasn't impacted the underlying operating system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"exit\n")),(0,o.kt)("h2",{id:"implementation-with-kubernetes"},"Implementation with Kubernetes"),(0,o.kt)("p",null,"(Coming soon!)"))}d.isMDXComponent=!0}}]);