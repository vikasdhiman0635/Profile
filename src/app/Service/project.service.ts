import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  compnayProjects = [
    {
      id: "1",
      projectname: "Process Org Utility",
      statedate: "Oct 2023",
      enddate: "Present",
      Accomplishment: "Successfully streamlined query processes for non-technical teams, saving valuable time, and fostering a more efficient workflow with the ongoing development of the integrated Angular frontend and Spring Boot backend.",
      details: [
        {
          desc: "Currently spearheading the development and maintenance of backend APIs using Spring Boot, seamlessly integrating with multiple databases."
        },
        {
          desc: "Actively crafting an intuitive Angular frontend with Material Design, optimizing query workflows for non-technical teams, particularly helpdesk."
        },
        {
          desc: "Ongoing efforts to improve system performance, establish robust communication channels, and regularly gather user feedback for continuous enhancements."
        }
      ]
    },
    {
      id: "2",
      projectname: "Perseus",
      statedate: "Sept 2023",
      enddate: "Present",
      Accomplishment: "Significantly, enabled the inspection of traffic, operational pods, and pod characteristics through this application, streamlining the monitoring process compared to the previously used Openshift, Gearsphear, and Pass platforms.",
      details: [
        {
          desc: "Implemented parallel zip functionality for backend calls, enhancing performance and efficiency."
        },
        {
          desc: "Leveraged the same technology stack employed in the Sanwiki app for the development of this application."
        },
        {
          desc: "Utilized Clearity and Material Grid to display and enable future editing, sorting, and searching of work items."
        },
        {
          desc: "Regularly utilized Jenkins, Gitlab, and AWS for daily tasks and end-of-day deployment of modifications."
        }
      ]
    },
    {
      id: "3",
      projectname: "Sanwiki",
      statedate: "Aug 2023",
      enddate: "Sept 2023",
      Accomplishment: "Notably, provided the organization’s users with a unified platform for easily tracking server data, eliminating the need to use multiple platforms.",
      details: [
        {
          desc: "Developed an Angular application with a front-end built using Material UI."
        },
        {
          desc: "Designed and implemented an Angular microservice from scratch with a focus on efficiency and minimal code footprint"
        },
        {
          desc: "Deployed the application using Gitlab, Jenkins, Docker, Openshift, and Pass for streamlined development and deployment."
        },
        {
          desc: "Implemented lazy loading principles and router guards to efficiently control the application’s routing."
        }
      ]
    },
    {
      id: "4",
      projectname: "Patching Management",
      statedate: "Sept 2022",
      enddate: "Mar 2023",
      Accomplishment: "A notable achievement was handling large volumes of server data efficiently through this project.",
      details: [
        {
          desc: "Led the management of frontend, backend APIs, and the database."
        },
        {
          desc: "Employed MySQL as the database, Spring Boot as the backend, and Angular 12 as the frontend framework."
        },
        {
          desc: "Engineered a robust web project with a strong emphasis on security principles."
        },
        {
          desc: "Achieved performance optimization and increased code coverage."
        },
        {
          desc: "Designed the system to allow users to apply filters for data organization, making it searchable and editable, and enabling data export to Excel format."
        },
        {
          desc: "Developed a dashboard to generate reports on various time scales (hourly, daily, weekly, monthly, and yearly) and export them in Excel format."
        }
      ]
    },
    {
      id: "5",
      projectname: "Airline Reservation System (Echo Flights)",
      statedate: "Jan 2022",
      enddate: "Jan 2022",
      Accomplishment: "A noteworthy accomplishment of the project is the user-friendly feature allowing users to check available flight seats without the need to log in, offering individual seat control within a single ticket, which accommodates up to 5 seats.",
      details: [
        {
          desc: "Utilized Angular for the front-end and Spring Boot for the back-end, with MySQL serving as the database, and implemented RESTful APIs through microservices."
        },
        {
          desc: "Successfully established a connection with the database and meticulously crafted the back-end, rigorously testing the application on various platforms to ensure seamless operation."
        },
        {
          desc: "Created an intuitive dashboard to generate comprehensive reports on a weekly, monthly, and annual basis, providing users with valuable insights."
        },
        {
          desc: "Wrote extensive test cases for the Spring Boot application using Junit and Mockito to ensure robust functionality and reliability."
        },
        {
          desc: "Achieved a significant improvement in the project’s code coverage, resulting in an impressive 97% score on SonarScanner, indicating high code quality and performance optimization."
        }
      ]
    },
  ];


  projects = [
    {
      id: "7",
      image: "../../../assets/projectscreenshots/AirLine/1.jpg",
      projectname: "Air-Line Reservation",
      projectdate: "January 2020",
      projectType: "Web App",
      link: "",
      description: "In this project user can check your Flight details and check availability and check your status and book. There are two roles Admin and User. Admin can add any flight, add flight company and airport also. User can check history also.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/AirLine/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/AirLine/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/AirLine/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/AirLine/4.jpg"
        },
      ]
    },
    {
      id: "1",
      image: "../../../assets/projectscreenshots/Ayuda/ayuda.jpg",
      projectname: "Ayuda",
      projectdate: "October 2020",
      projectType: "Web App",
      link: "https://ayudavos.web.app",
      description: "This is my intern project. in this project user can test covid symptoms without any cost. And there are also check country covid status. In tihs project my role is a Front-End Developer and using angular.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/Ayuda/ayuda.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Ayuda/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Ayuda/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Ayuda/4.jpg"
        },
      ]
    },
    {
      id: "2",
      image: "../../../assets/projectscreenshots/Bus/1.jpg",
      projectname: "Bus Service",
      projectdate: "February 2021",
      projectType: "Web App",
      link: "",
      description: "This is a very advanced project. this project is created in Angular 11, Spring Boot, Microservice, Hibernate, Rest API, MySQL, This is the social project. In this application user can book your bus add your bus if user have your bus. in this platform user easily do your job and improve your work performance.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/Bus/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Bus/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Bus/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Bus/4.jpg"
        },
      ]
    },
    {
      id: "3",
      image: "../../../assets/projectscreenshots/liveChat/1.jpg",
      projectname: "Live Chat",
      projectdate: "June 2020",
      projectType: "Web App",
      description: "This project created in Angular & firebase. In this project you can log in and after you can create a room and invite your friend after you can chat. This project is taken very low internet access. And very low user details we need only one gmail account. And its free forver.",
      link: "https://livemessanging.web.app/login",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/liveChat/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/liveChat/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/liveChat/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/liveChat/4.jpg"
        },
      ]
    },
    {
      id: "4",
      image: "../../../assets/projectscreenshots/Smart City/1.jpg",
      projectname: "Smart City",
      projectdate: "March 2020",
      projectType: "Web App",
      link: "https://panipatsmartcity.web.app",
      description: "This is a social project. Any person can improve your social skills about Panipat history and others like Panipat public service, Panipat online marketing, and Panipat industry. This project made in angular and spring boot ( microservices, Spring security ) and backend. This project made by Vikas Dhiman.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/Smart City/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Smart City/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Smart City/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/Smart City/4.jpg"
        },
      ]
    },
    {
      id: "5",
      image: "../../../assets/projectscreenshots/OnlineShopping/1.jpg",
      projectname: "Online Shopping",
      projectdate: "August 2019",
      projectType: "Web App",
      link: "",
      description: "In this project user can book your product easily, If user have your shop so, user can register yourself easily without any cost and sale your product easily. In this project user can made your cart check your booking history also.",
      projectImages: [
        {
          projImage: "../../../assets/projectscreenshots/OnlineShopping/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineShopping/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineShopping/3.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineShopping/4.jpg"
        },
      ]
    },
    {
      id: "6",
      image: "http://www.foodenginepos.com/img/features/Online_Apps.jpg",
      projectname: "Online Food Ordering",
      projectdate: "February 2019",
      projectType: "Web App",
      link: "",
      description: "Online Food Ordering project have my first project. In this project hear user can order your food easily and Admin can add you dishes also.",
      projectImages: [
        {
          projImage: "http://www.foodenginepos.com/img/features/Online_Apps.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineFoodOrdering/1.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineFoodOrdering/2.jpg"
        },
        {
          projImage: "../../../assets/projectscreenshots/OnlineFoodOrdering/3.jpg"
        },
      ]
    }
  ]

  constructor() { }


  getall() {
    return this.projects;
  }

  // getById(id:any):any
  // {
  //   for(let i=0;i<this.projects.length;i++)
  //   {
  //     if(this.projects[i].id===id)
  //     {
  //       return this.projects[i];
  //     }
  //   }
  // }

  getById(id: any) {
    let res = null;
    this.projects.forEach(element => {
      if (element.id === id) {
        res = element;
      }
    });
    return res;
  }

}
