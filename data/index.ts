export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: " lg:col-span-2 lg:row-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-1  md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Budget Tracker App ",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Todo-List-app CRUD",
    des: "The Todo List Application is a dynamic and responsive task management tool built using Next.js, React, and Tailwind CSS. It provides a seamless and efficient way to manage your daily tasks, offering full CRUD (Create, Read, Update, Delete) functionality.This application ensures that users can easily keep track of their tasks, update their progress, and maintain an organized workflow.",
    img: "/todo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg",],
    link: "https://github.com/GauravR02/todo-list-crud",
  },
  {
    id: 2,
    title: "V-Rooms video conferencing app",
    des: "The V-rooms Application is a comprehensive web meeting solution designed to facilitate seamless virtual meetings and video conferencing. Built using Next.js, React, and Tailwind CSS, this application leverages the GetStream API for high-quality video streaming and ClerkAuth for secure authentication. The app is tailored to provide users with a robust and user-friendly platform for hosting and joining virtual meetings.",
    img: "/vroom.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://geekyy-v-rooms-dev.vercel.app/",
   },
  {
    id: 3,
    title: "Budget-Tracker",
    des: "A Budget tracker application includes a dashboard page. Creating a transaction is easy with the simple form and category options, history section which is able to show the transactions month and year wise to locate the exact transaction  and add the expenses category wise. Transaction page shows the logs and on manage page users can switch the currencies",
    img: "/expense.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "",
  },
  //  {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "He always had utilized his time and energy into the work for the better output.",
    name: "Namrata",
    title: "Associate of Credence",
  },
  {
    quote:
      "I've never met a hard working and dedicated person who truly cares about preciseness in work",
    name: "Siddhant",
    title: "Manager of phase 4 Collection Dept CRM",
  },
  {
    quote:
      "I enjoyed working with him as a colleague",
    name: "Prasad",
    title: "Customer Service Executive Credence",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "Credence RM",
    img: "/credence.png",
    nameImg: "/cred.png",
  },
  // {
  //   id: 2,
  //   name: "appwrite",
  //   img: "/app.svg",
  //   nameImg: "/appName.svg",
  // },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  // {
  //   id: 5,
  //   name: "docker.",
  //   img: "/dock.svg",
  //   nameImg: "/dockerName.svg",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Customer Service Executive",
    desc: "Responsible for managing a portfolio of overdue accounts and negotiating payment arrangements with customers.  Utilized CRM tools to track customer interactions and update account information.  Met monthly targets for debt collection while maintaining compliance with regulations and company policies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/GauravR02"
  },
  {
    id: 2,
    img: "/twit.svg",
    link:"https://x.com/GauravR_0203"
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/gauravsingrajput/"
  },
];