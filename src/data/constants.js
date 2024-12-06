//* Experience data:
import Smiit from '../assets/Experience/SMIIT.jpg';
import Civo from '../assets/Experience/Civo.jpg';
import WeMakesDevs from '../assets/Experience/WeMakesDevs.jpg';
import kubesimplify from '../assets/Experience/kubesimplify.jpg';
import Onepane from '../assets/Experience/onepaneai_logo.jpg';
import PerfectScale from '../assets/Experience/perfectscale_logo.jpg';
import Cerbos from '../assets/Experience/cerbos.jpeg';
import KubeOps from '../assets/Experience/kubeOps.jpeg';
import LoftLabs from '../assets/Experience/loft.jpeg';
export const experiences = [
  {
    companyImgURL: Smiit,
    job: 'Cloud & DevOps Tech Writer',
    companyName: 'SMIIT',
    date: 'Contract',
    worked:
      'I created tutorials, blog posts, and articles about Kubernetes and DevOps technologies. I analyzed complicated technical topics and came up with solutions for documentation.',
  },
  {
    companyImgURL: WeMakesDevs,
    job: 'DevOps Tech Writer',
    companyName: 'WeMakesDevs',
    date: 'Community',
    worked:
      'Created various technical documents, including user guides and tutorials. Ensured clarity and accuracy of complex technical concepts.',
  },
  {
    companyImgURL: Civo,
    job: 'DevOps Tech Writer',
    companyName: 'Civo',
    date: 'Freelance',
    worked:
      'I have successfully created extensive and easily understandable documentation for various DevOps technologies.',
  },

  {
    companyImgURL: kubesimplify,
    job: 'Cloud & DevOps Tech Writer',
    companyName: 'kubesimplify',
    date: 'Community',
    worked:
      'Focusing on simplifying cloud-native content and raising awareness through writing and speaking.',
  },

  {
    companyImgURL: Onepane,
    job: 'K8s & DevOps Tech Writer',
    companyName: 'Onepane',
    date: 'Intern',
    worked: 'Focused on building content around Observalibilty and k8s.',
  },

  {
    companyImgURL: PerfectScale,
    job: 'K8s Tech Writer',
    companyName: 'PerfectScale',
    date: 'Freelance',
    worked:
      'Provides tutorials, how-to-guide, troubleshooting guides around k8s and emerging technologies.',
  },
  {
    companyImgURL: Cerbos,
    job: 'DevOps and K8s Tech Writer',
    companyName: 'Cerbos',
    date: 'Freelance',
    worked:
      'Build content around Cloud Native World, how to guide and tutorials.',
  },
  {
    companyImgURL: KubeOps,
    job: 'DevOps Eng and Writer',
    companyName: 'KubeOps Consulting',
    date: 'Freelance',
    worked: 'Pure worked towards Devops and automation, online help and docs.',
  },
  {
    companyImgURL: LoftLabs,
    job: 'K8s Tech Writer',
    companyName: 'Loft Labs',
    date: 'Freelance',
    worked: 'Tutorials and guides around multi-tenancy and k8s.',
  },
];

//* Blogs data:
import K8s from '../assets/Blogs/K8s.png';
export const blogs = [
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/65a5be30bf4809bb3a2e8aff/675080f0d9cc6efc6ac37a75_1600_900.webp',
    blogURL: 'https://www.loft.sh/blog/deploying-stateful-application-vcluster',
    blogName: `Deploying Stateful Applications Using vCluster and Persistent Volume Integration`,
    TechnologiesUsed: ['Kubernetes', 'vCluster', 'Persistent Volume'],
    blogStart: `Virtual clusters are lightweight, isolated environments to run Kubernetes clusters within an existing host cluster.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/67515c7e3b39b3503c16ec0d_aws-termination-notice.png',
    blogURL:
      'https://www.perfectscale.io/blog/karpenter-consolidation-spot-instance-termination',
    blogName: `Handling Karpenter Consolidation and Spot Instance Termination`,
    TechnologiesUsed: ['Kubernetes', 'AWS spot instance'],
    blogStart: `Karpenter helps us dynamically manage the lifecycle of nodes in a Kubernetes  cluster.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/673f370b8053b345faec537d_strategic-nodepool-selection.png',
    blogURL: 'https://www.perfectscale.io/blog/nodepool-selection',
    blogName: `Nodepool Selection Strategies: Performance vs. Cost`,
    TechnologiesUsed: ['Kubernetes', 'Nodepool'],
    blogStart: `Strategic Nodepool selection plays an important role in achieving the optimization of kubernetes’ performance and cost.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/67482ffd2975832afb3bf0c4_thanksgiving.png',
    blogURL: 'https://www.perfectscale.io/blog/best-kubernetes-tools',
    blogName: `Top K8s tools community is thankful for this Thanksgiving`,
    TechnologiesUsed: ['Kubernetes', 'Tools'],
    blogStart: `For this Thanksgiving, we asked the Kubernetes community about their favourite and most used tools for managing Kubernetes. `,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/673443473374d61e8a1eb13c_karpenter-figma.png',
    blogURL: 'https://www.perfectscale.io/blog/karpenter',
    blogName: `Karpenter: The Ultimate Guide`,
    TechnologiesUsed: ['Kubernetes', 'Karpenter'],
    blogStart: `Karpenter is an open-source, flexible, and high-performance Kubernetes cluster autoscaler developed by AWS.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/6729aaff8893750171ba9a05_etcd-banner.png',
    blogURL: 'https://www.perfectscale.io/blog/etcd-8gb',
    blogName: `Why the etcd Database Size Should Not Exceed 8GB?`,
    TechnologiesUsed: ['Kubernetes', 'etcd'],
    blogStart: `etcd is a distributed key-value store that provides a way to store data across a cluster of machines.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/671f7ca43d27dc48dc453386_Group%201000001377.png',
    blogURL:
      'https://www.perfectscale.io/blog/kubernetes-cpu-limit-best-practises',
    blogName: `Kubernetes CPU Limit: Best Practices for Optimal Performance`,
    TechnologiesUsed: ['Kubernetes', 'CPU Limit'],
    blogStart: `Kubernetes CPU limits specify the maximum amount of CPU resources that a container can use.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/670e8be764ed2960e0160a56_healthchecks.png',
    blogURL: 'https://www.perfectscale.io/blog/kubernetes-health-check',
    blogName: `Kubernetes Health Checks: Ensure Performance and Availability`,
    TechnologiesUsed: ['Kubernetes', 'Health Checks'],
    blogStart: `Kubernetes Health check is crucial for maintaining optimal application availability and performance. `,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/6704d4704b9aa737d0e43ddf_k8s-secrets-banner.png',
    blogURL: 'https://www.perfectscale.io/blog/kubernetes-secrets',
    blogName: `Understanding Kubernetes Secrets: A Comprehensive Guide`,
    TechnologiesUsed: ['Kubernetes', 'Secrets'],
    blogStart: `Kubernetes Secrets are objects designed to store and manage sensitive information. By using Secrets, you can avoid embedding sensitive data directly in your application code or container images, thereby reducing the risk of accidental exposure. `,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/66fb9b9634e3e936a66b70a7_Frame%20313955.png',
    blogURL: 'https://www.perfectscale.io/blog/karpenter-vs-cluster-autoscaler',
    blogName: `Karpenter vs Cluster Autoscaler: Choosing the Right Kubernetes Scaling Strategy`,
    TechnologiesUsed: ['Kubernetes', 'Karpenter', 'Autoscaling'],
    blogStart: `As Kubernetes continues to dominate the container orchestration landscape, efficient scaling of clusters remains a critical concern for developers and teams.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/66c49037c9e147564807e422_Group%205616.png',
    blogURL: 'https://www.perfectscale.io/blog/kubernetes-v1-31',
    blogName: `Kubernetes v1.31: What's New and Improved?`,
    TechnologiesUsed: ['Kubernetes'],
    blogStart: `Kubernetes 1.31, codenamed "Elli," marks the first release after Kubernetes' 10th anniversary. This version introduces 45 enhancements, including 11 features graduating to stable status, several beta improvements, and exciting new alpha features.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/66b9ddb5b2f2ebb07a27f28d_Group%205586.png',
    blogURL:
      'https://www.perfectscale.io/blog/kubernetes-vertical-pod-autoscaler',
    blogName: `Vertical Pod Autoscaler`,
    TechnologiesUsed: ['Kubernetes', 'Auto-scaling'],
    blogStart: `In this article, we’ll explore the VPA(Vertical Pod Autoscaler), what it is, how it works, how it relates to HPA, the implementation of VPA, using VPA with HPA, VPA’s best practices, and limitations.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/66cf5651dd272c74ca4f8fbc_Group%205618.png',
    blogURL: 'https://www.perfectscale.io/blog/kubernetes-autoscaler',
    blogName: `Cluster Auto-scaler`,
    TechnologiesUsed: ['Kubernetes', 'Auto-scaling'],
    blogStart: `Kubernetes Cluster Autoscaler (CA) adjusts the number of nodes in the cluster based on pod scheduling failures or when nodes are underutilized.`,
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/66a8886619b7f5a02826f423_Group%205569.png',
    blogURL: 'https://www.perfectscale.io/blog/kubernetes-v1-30',
    blogName: `Kubernetes v1.30: What's New and Improved?`,
    TechnologiesUsed: ['Kubernetes'],
    blogStart: `Kubernetes 1.30, "Uwubernetes," marks the first release of 2024. This version brings 45 enhancements to the table, including 10 new or improved Alpha features, 18 Beta features enabled by default, and 17 features graduating to Stable status.`,
  },
  {
    blogImgURL:
      'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fg1jj8skdc1vrlorlguyo.jpeg',
    blogURL: 'https://dev.to/cerbos/introduction-to-rbac-in-kubernetes-5hh5',
    blogName: 'Introduction to RBAC in Kubernetes',
    TechnologiesUsed: ['Kubernetes', 'RBAC', 'Authorization'],
    blogStart:
      'In this article, you will learn what RBAC is, the key challenges and approaches to managing RBAC in Kubernetes, and how Cerbos can help you in your application security.',
  },
  {
    blogImgURL:
      'https://www.kubeblogs.com/content/images/size/w2000/2024/07/kb-ima-1.png',
    blogURL:
      'https://www.kubeblogs.com/explore-all-the-new-features-in-kubernetes-1-30',
    blogName: 'Explore all the new features in Kubernetes 1.30',
    TechnologiesUsed: ['Kubernetes', '1.30'],
    blogStart:
      'Kubernetes 1.30, nicknamed "Uwubernetes," marks the first release of 2024. This release brings 45 enhancements, including 10 new or improved Alpha features, 18 Beta features enabled by default, and 17 features graduating to Stable.',
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/66990d7172b221ba3f9328b0_Group%205545.png',
    blogURL:
      'https://www.perfectscale.io/blog/kubernetes-horizontal-pod-autoscaler-hpa',
    blogName: 'Kubernetes Horizontal Pod Autoscaler (HPA)',
    TechnologiesUsed: ['Kubernetes', 'HPA', 'Autoscaling'],
    blogStart:
      'Autoscaling is one of the most powerful features of Kubernetes. Autoscaling is a method of automatically scaling your Kubernetes workloads based on resource usage.',
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/6686b25556f99f4116bc4d39_Group%205396-p-1080.png',
    blogURL: 'https://www.perfectscale.io/blog/kubernetes-node-notready',
    blogName:
      'Kubernetes Node NotReady: Troubleshoot Common Causes & Best Practices',
    TechnologiesUsed: ['Kubernetes', 'Troubleshooting'],
    blogStart:
      'Struggling with OOMKilled errors in your Kubernetes clusters? Learn what causes these issues, how to troubleshoot them.',
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/667a78c52ceb922ab75ebbbb_Group%205339-p-1080.png',
    blogURL: 'https://www.perfectscale.io/blog/oomkilled',
    blogName: 'How to fix OOMKilled in Kubernetes',
    TechnologiesUsed: ['Kubernetes', 'Troubleshooting'],
    blogStart:
      'Struggling with OOMKilled errors in your Kubernetes clusters? Learn what causes these issues, how to troubleshoot them, and best practices to prevent OOMKilled events for optimal container performance.',
  },
  {
    blogImgURL:
      'https://cdn.prod.website-files.com/635e4ccf77408db6bd802ae6/66614ebb6c475f3369206517_Group%205308-p-1080.png',
    blogURL:
      'https://www.perfectscale.io/blog/imagepullbackoff-troubleshooting',
    blogName: 'ImagePullBackOff: Troubleshooting Tips and Tricks',
    TechnologiesUsed: ['Kubernetes', 'Troubleshooting'],
    blogStart:
      'The ImagePulBackOff error is the most common Kubernetes error that DevOps engineers face in their day-to-day lives.',
  },
  {
    blogImgURL:
      'https://assets-global.website-files.com/635e4ccf77408db6bd802ae6/663949665869f67e673b5b97_Group%205123-p-1080.png',
    blogURL: 'https://www.perfectscale.io/blog/createcontainerconfigerror',
    blogName:
      'The Ultimate Guide: Kubernetes CreateContainerConfigError and CreateContainerError',
    TechnologiesUsed: ['Kubernetes'],
    blogStart:
      'CreateContainerConfigError and CreateContainerError error messages play a crucial role in effective monitoring and troubleshooting.',
  },
  {
    blogImgURL:
      'https://blog.onepane.ai/content/images/size/w2000/2024/02/Untitled-2023-11-29-1752-2.png',
    blogURL:
      'https://medium.com/onepane/building-your-own-idp-guide-to-getting-started-with-backstage-babb8c2bd34f',
    blogName: 'Building Your Own IDP: Guide to Getting Started with Backstage',
    TechnologiesUsed: ['Backstage', 'Observability', 'Software Templates'],
    blogStart:
      'Things are getting tangled and complicated. You imagine a forest.',
  },
  {
    blogImgURL:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1672939328614/c2aee5ea-eb42-456a-9d24-10fb31421a82.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    blogURL:
      'https://blog.kubesimplify.com/deploying-java-application-using-docker-and-kubernetes-devops-project',
    blogName:
      'Deploying Java Application using Docker and Kubernetes- DevOps Project',
    TechnologiesUsed: ['Java', 'Docker', 'K8s'],
    blogStart:
      'In this blog, We going to see "How to Deploy a Java Application using Docker and Kubernetes.',
  },
  {
    blogImgURL: K8s,
    blogURL: 'https://www.civo.com/learn/validating-k8s-configuration-files ',
    blogName: 'Validating K8s configuration files to prevent misconfiguration',
    TechnologiesUsed: ['Civo ', 'K8s ', 'Helm'],
    blogStart:
      'Kubernetes has emerged as the industry standard for container orchestration, empowering developers to streamline the deployment and management of applications.',
  },
  {
    blogImgURL:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1648569856438/XCHCN3-oT.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    blogURL: 'https://duggaltania.hashnode.dev/getting-started-with-kubescape',
    blogName: 'Getting started with kubescape',
    TechnologiesUsed: ['KubeScape', 'K8s', 'security'],
    blogStart:
      'Kubescape is an open-source tool by Armo. It scans our k8s clusters, YAML files, and Helm charts, finding vulnerabilities and detecting misconfigurations according to some frameworks like MITRE, NSA, etc.',
  },
  {
    id: 'others',
    blogImgURL:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1655027647726/lK2Gb0-Zd.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    blogURL: 'https://duggaltania.hashnode.dev/cncf-landscape',
    blogName: 'CNCF Landscape',
    TechnologiesUsed: ['CNCF'],
    blogStart:
      'CNCF (Cloud Native Computing Foundation ) is the open source, vendor-neutral hub of cloud-native computing, hosting projects to make cloud-native sustainable.',
  },
  {
    blogImgURL:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1656938513991/qv_1C3jEc.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    blogURL:
      'https://blog.wemakedevs.org/linux-required-to-get-started-with-devops-part-1',
    blogName: 'Linux Required to Get Started with DevOps',
    TechnologiesUsed: ['Linux', 'DevOps'],
    blogStart:
      "Welcome you to this blog. We'll cover all the required Linux for getting started with DevOps or those who wanna learn Linux in a very understandable manner. This is part 1 of Linux Required to Get Started.",
  },
  {
    blogImgURL:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1660100135729/rKHRYCFm3.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    blogURL: 'https://blog.wemakedevs.org/learn-linux-series-part-2',
    blogName: 'Linux Required to Get Started with DevOps - 2',
    TechnologiesUsed: ['Linux', 'DevOps'],
    blogStart:
      "This is the second part of the 'Linux Series of DevOps'. You can find the first part here.",
  },
  {
    blogImgURL:
      'https://magnificent-pisces-43f.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa8654d6d-a058-45ec-b01e-52eb295ecd01%2F90f5386c-a90e-4c6f-b4be-5ed0d9fad024%2FBlog-post-explaining-what-is-GitOps.jpg?table=block&id=824fe200-6c23-4765-95c2-b260abf20803&spaceId=a8654d6d-a058-45ec-b01e-52eb295ecd01&width=1920&userId=&cache=v2',
    blogURL:
      'https://magnificent-pisces-43f.notion.site/Overview-of-GitOps-How-GitOps-works-and-Why-it-s-so-useful-824fe2006c23476595c2b260abf20803',
    blogName: "How GitOps works and Why it's so useful",
    TechnologiesUsed: ['GitOps', 'CI/CD', 'DevOps', 'Workflow'],
    blogStart: `In this blog, we are going to talk about what GitOps is and why it has become so popular.`,
  },
  {
    blogImgURL:
      'https://www.coletiv.com/static/35b6a79fea4a7289acb6796cd4ad05b4/55109/android-github-actions-setup-image.png',
    blogURL:
      'https://magnificent-pisces-43f.notion.site/The-Ultimate-of-Github-Actions-d498a8b59ff54f37b90d1160ef0b7dc3',
    blogName: 'The Ultimate of GitHub-Actions',
    TechnologiesUsed: [
      'Github-Actions',
      'CI/CD',
      'Pipeline',
      'DevOps',
      'Workflow',
    ],
    blogStart: `GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) platform that integrates directly with GitHub. This allows developers to create automated workflows with their repositories.`,
  },
  {
    blogImgURL:
      'https://magnificent-pisces-43f.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6e23bd2d-d4bc-414c-b89e-0401704732dd%2Fcicdblog.jpg?table=block&id=24f78a24-cb88-42f2-97a8-5079df37a932&spaceId=a8654d6d-a058-45ec-b01e-52eb295ecd01&width=1720&userId=&cache=v2',
    blogURL:
      'https://magnificent-pisces-43f.notion.site/CI-CD-Build-failure-in-Production-Why-affa7a868a14401b872252e3d951ebbb',
    blogName: 'CI-CD Build failure in Production, Why?',
    TechnologiesUsed: ['CI/CD'],
    blogStart: `The first reason is You cannot check logs because, whenever you try to resolve a problem or a bug, you always go for the logs first. This is something that needs to be corrected when you cannot check logs.`,
  },
  {
    blogImgURL:
      'https://creatorspace.imgix.net/users/clqhpqu2401j7po01j39whz2c/wXQXaOFQeIg01Kcg-helm.png?',
    blogURL:
      'https://magnificent-pisces-43f.notion.site/Helm-Your-k8s-Package-Manager-85e43006a13d42a4afc2473ba2914c13',
    blogName: 'Helm - Your k8s Package Manager',
    TechnologiesUsed: ['Helm', 'k8s', 'DevOps', 'Yaml'],
    blogStart: `Helm simplifies the work of maintaining and deploying large numbers of K8s resources by grouping them into a single package known as a Helm Chart, which can be easily configured for different environments.`,
  },
  {
    blogImgURL:
      'https://magnificent-pisces-43f.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F394da764-d63a-4dbb-9d20-f269ba19660e%2Fiac_pic.jpg?table=block&id=61292eab-8c7c-45ae-b036-e8a1d51553d7&spaceId=a8654d6d-a058-45ec-b01e-52eb295ecd01&width=950&userId=&cache=v2',
    blogURL:
      'https://magnificent-pisces-43f.notion.site/Infrastructure-as-Code-IaC-A-Guide-to-Automating-Infrastructure-Management-9b16548c78414347bb23409b3b830ff7',
    blogName: 'Infrastructure as Code',
    TechnologiesUsed: ['Automation', 'Ansible', 'Chef', 'Puppet'],
    blogStart: `IaC is the process of managing and provisioning infrastructure through machine-readable definition files, rather than manual processes.`,
  },
  {
    blogImgURL:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1687268979757/5012b01f-257a-4b99-a576-9373ec38b77a.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    blogURL:
      'https://duggaltania.hashnode.dev/prometheus-your-monitoring-solution',
    blogName: 'Prometheus - Your Monitoring Solution',
    TechnologiesUsed: ['Prometheus', 'Yaml', 'DevOps', 'Monitoring'],
    blogStart: `Prometheus captures and stores events in real time. Memory consumption, network utilization, or individual incoming requests are examples of events that may be relevant to your application.`,
  },
  {
    id: 'others',
    blogImgURL:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1660356833174/0tCMD4wBK.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    blogURL:
      'https://duggaltania.hashnode.dev/networking-part-1-transmission-modes',
    blogName: 'Networking (Part 1)-Transmission Modes',
    TechnologiesUsed: [
      'Hardware',
      'Firmware',
      'Software',
      'Transmission Modes',
    ],
    blogStart: `The term hardware is used to refer to the physical Components of any electronic devices such as the CPU, Peripheral Devices and it's memory.`,
  },
  {
    id: 'others',
    blogImgURL:
      'https://cdn.hashnode.com/res/hashnode/image/upload/v1660402192966/QQZwdWOTb.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
    blogURL: 'https://duggaltania.hashnode.dev/overview-of-cloud-computing',
    blogName: 'Overview of Cloud-Computing',
    TechnologiesUsed: [
      'Private cloud',
      'Public cloud',
      'Community cloud',
      'Hybrid cloud',
    ],
    blogStart: `The term cloud computing refers to the practice of remotely storing data or running applications on a network of Internet servers.`,
  },
];

// Testimonials data:
import Nitish from '../assets/Testimonials/Nitish.jpg';
import Shivani from '../assets/Testimonials/Shivani.jpg';
import Godwin from '../assets/Testimonials/Godwin.jpg';
import Kelvin from '../assets/Testimonials/Kelvin.jpg';
import Rajendra from '../assets/Testimonials/Rajendra.jpg';
import Srinivas from '../assets/Testimonials/Srinivas.jpg';
import Paakhi from '../assets/Testimonials/Paakhi.jpg';
import Suhas from '../assets/Testimonials/Suhas.jpg';
export const testimonials = [
  {
    name: 'Nitish',
    imgURL: Nitish,
    message: "Amazing Tania! That's so well written in simple language",
  },
  {
    name: 'Shivani',
    imgURL: Shivani,
    message: 'Very well explained. Great writing Tania',
  },
  {
    name: 'Godwin',
    imgURL: Godwin,
    message:
      'Lovely written piece. Just got to know about CNCF from this article. It was worth reading',
  },
  {
    name: 'Kelvin',
    imgURL: Kelvin,
    message: `Nice blog Tania. It will help to build my project.
           Thankyou`,
  },
  {
    name: 'Rajendra',
    imgURL: Rajendra,
    message: `Thankyou for such a nice article Tania.
           Keep up the good work`,
  },
  {
    name: 'Srinivas',
    imgURL: Srinivas,
    message: "That's an awesome read Tania",
  },
  {
    name: 'Paakhi',
    imgURL: Paakhi,
    message:
      'Such an insightful and easily understandable content. Loved reading it',
  },
  {
    name: 'Suhas',
    imgURL: Suhas,
    message: "I've seen some of your articles, they are great",
  },
];
