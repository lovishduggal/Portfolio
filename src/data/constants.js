//* Experience data:
import Smiit from '../assets/Experience/SMIIT.jpg';
import Civo from '../assets/Experience/Civo.jpg';
import WeMakesDevs from '../assets/Experience/WeMakesDevs.jpg';
import kubesimplify from '../assets/Experience/kubesimplify.jpg';
import Onepane from '../assets/Experience/onepaneai_logo.jpg';
import PerfectScale from '../assets/Experience/perfectscale_logo.jpg';
export const experiences = [
    {
        companyImgURL: Smiit,
        job: 'Cloud & DevOps Tech Writer',
        companyName: 'SMIIT',
        date: 'Contract',
        worked: 'I created tutorials, blog posts, and articles about Kubernetes and DevOps technologies. I analyzed complicated technical topics and came up with solutions for documentation.',
    },
    {
        companyImgURL: WeMakesDevs,
        job: 'DevOps Tech Writer',
        companyName: 'WeMakesDevs',
        date: 'Community',
        worked: 'Created various technical documents, including user guides and tutorials. Ensured clarity and accuracy of complex technical concepts.',
    },
    {
        companyImgURL: Civo,
        job: 'DevOps Tech Writer',
        companyName: 'Civo',
        date: 'Freelance',
        worked: 'I have successfully created extensive and easily understandable documentation for various DevOps technologies.',
    },

    {
        companyImgURL: kubesimplify,
        job: 'Cloud & DevOps Tech Writer',
        companyName: 'kubesimplify',
        date: 'Community',
        worked: 'Focusing on simplifying cloud-native content and raising awareness through writing and speaking.',
    },

    {
        companyImgURL: Onepane,
        job: 'K8s & DevOps Tech Writer',
        companyName: 'Onepane',
        date: 'Intern',
        worked: 'Focused on building content around Observalibilty and k8s',
    },

    {
        companyImgURL: PerfectScale,
        job: 'K8s Tech Writer',
        companyName: 'PerfectScale',
        date: 'Freelance',
        worked: 'Provides tutorials, how-to-guide, troubleshooting guides around k8s and emerging technologies',
    },
];

//* Blogs data:
import K8s from '../assets/Blogs/K8s.png';
export const blogs = [
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
        blogName:
            'Building Your Own IDP: Guide to Getting Started with Backstage',
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
        blogURL:
            'https://www.civo.com/learn/validating-k8s-configuration-files ',
        blogName:
            'Validating K8s configuration files to prevent misconfiguration',
        TechnologiesUsed: ['Civo ', 'K8s ', 'Helm'],
        blogStart:
            'Kubernetes has emerged as the industry standard for container orchestration, empowering developers to streamline the deployment and management of applications.',
    },
    {
        blogImgURL:
            'https://cdn.hashnode.com/res/hashnode/image/upload/v1648569856438/XCHCN3-oT.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
        blogURL:
            'https://duggaltania.hashnode.dev/getting-started-with-kubescape',
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
        blogStart: `IaC is the process of managing and provisioning infrastructure through machine-readable definition files, rather than manual processes`,
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
