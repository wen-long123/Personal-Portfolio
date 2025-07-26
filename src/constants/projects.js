import project1 from "@/assets/projects/project1.jpeg";
import project2 from "@/assets/projects/project2.png";
import project3 from "@/assets/projects/project3.png";
import project4 from "@/assets/projects/project4.png";
import comingsoon from "@/assets/projects/comingsoon.png";

export const projects = [
  {
    id: "project-1",
    title: "SMS Spam Detection",
    description:
      "Implemented and compared Naive Bayes and LSTM models to classify SMS as spam or ham using UCI dataset.",
    image: project1,
    tags: ["Python", "TensorFlow", "Scikit-learn", "NLP"],
    demoUrl:
      "https://github.com/wen-long123/SMS-Spam-Detection/blob/main/ICT303_Assignment2_35134977_SeahWenLong.ipynb",
    githubUrl: "https://github.com/wen-long123/SMS-Spam-Detection.git",
  },
  {
    id: "project-2",
    title: "Multi-class Image Classification",
    description:
      "Implemented and compared custom MLP, custom VGG16, and pretrained VGG16 models for 8-class image classification with transfer learning and hyperparameter tuning.",
    image: project2,
    tags: ["PyTorch", "Deep Learning", "Transfer Learning", "CNN"],
    demoUrl:
      "https://github.com/wen-long123/multiclass-image-classification-pytorch/blob/main/ICT303_Assignment1_35134977_SeahWenLong.ipynb",
    githubUrl:
      "https://github.com/wen-long123/multiclass-image-classification-pytorch.git",
  },
  {
    id: "project-3",
    title: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience. Built with React and modern web technologies.",
    image: project3,
    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "CSS",
      "React Three Fiber",
      "Framer Motion",
      "Lucide React",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/wen-long123/personal-portfolio.git",
  },
  {
    id: "project-4",
    title: "Expert System for Diet\n& Workout",
    description:
      "Developed a rule-based expert system using ES-Builder to recommend personalized diet plans and workout routines based on user goals and preferences.",
    image: project4,
    tags: ["ES-Builder", "Expert System", "Decision Tree", "Rule-Based AI"],
    demoUrl:
      "http://www.mcgoo.com.au/esbuilder/viewer/viewES.php?es=1621458721cf31c13934e42f08428bee",
    githubUrl: "https://github.com/wen-long123/Expert-System-for-personalized-dietary-and-workout.git",
  },
  {
    id: "project-5",
    title: "Coming Soon",
    description: "A new project coming soon!",
    image: comingsoon,
    tags: ["Tag1", "Tag2", "Tag3"],
    demoUrl: "#",
    githubUrl: "#",
  },
];
