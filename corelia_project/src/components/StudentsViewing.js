import Courses from "./Courses";

import ethicalImg from "../img/ethical_hack.jpg";
import cdataImg from "../img/cdata.jpg";
import kuberImg from "../img/kubernetes.jpg";
import financialImg from "../img/financial.jpg";
import graphicImg from "../img/graphic.jpg";

const StudentsViewing = () => {
  const courses = [
    {
      courseImage: ethicalImg,
      courseTitle: "Learn Ethical Hacking From Scratch",
      courseAuthor: "Zaid Sabih, z Security",
      courseRating: "4.6",
      ratingNumbers: "94,117",
      
    },
    {
      courseImage: cdataImg,
      courseTitle: "Mastering Data Structures & Algorithms using C and C++",
      courseAuthor: "Abdul Bari",
      courseRating: "4.7",
      ratingNumbers: "17,135",
      
    },
    {
      courseImage: financialImg,
      courseTitle:
        "The Data Science Course 2021: Complete Data Science Bootcamp",
      courseAuthor: "365 Careers, 365 Careers Team",
      courseRating: "4.6",
      ratingNumbers: "90,944",
      
    },
    {
      courseImage: kuberImg,
      courseTitle:
        "Certified Kubernetes Administrator (CKA) with Practice Tests",
      courseAuthor: "Mumshad Mannambeth, KodeKloud Training",
      courseRating: "4.7",
      ratingNumbers: "24,590",
     
    },
    {
      courseImage: graphicImg,
      courseTitle: "Graphic Design Masterclass - Learn GREAT Design",
      courseAuthor: "Lindsay Marsh",
      courseRating: "4.7",
      ratingNumbers: "25,588",
     
    },
  ];
  return <Courses heading='Students are viewing' link='' courses={courses} />;
};

export default StudentsViewing;
