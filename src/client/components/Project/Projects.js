import RateCV from "../../assets/images/projects/project-review.jpg";
import FeastSharing from "../../assets/images/projects/project-feast.jpg";
import AnimoProduction from "../../assets/images/projects/project-animo.jpg";
import FastestPresser from "../../assets/images/projects/project-fastest.jpg";
import GifiestGifs from "../../assets/images/projects/project-gifs.jpg";
import WeatherNow from "../../assets/images/projects/project-weather.jpg";
import Vianney from "../../assets/images/projects/project-vianney.jpg";

export const projects = {
  projects: [
    {
      id: 1,
      title: "Rate my CV",
      image: RateCV,
      about:
        "Rate my CV allows you to upload your CV and review other people's CVs",
      year: 2021,
      keywords: [
        "React",
        "NodeJS",
        "JS",
        "CSS",
        "HTML",
        "PostMan",
        "SQL",
        "Storybook",
        "KnexJS",
        "Git",
      ],
      links: {
        website: "",
        github: "https://github.com/HackYourFuture-CPH/rate-my-cv",
      },
      setting: "group",
    },
    {
      id: 2,
      title: "Feast sharing",
      image: FeastSharing,
      about: "A website where you to arrange and book feasts.",
      year: 2020,
      keywords: [
        "React",
        "NodeJS",
        "JS",
        "CSS",
        "HTML",
        "PostMan",
        "SQL",
        "KnexJS",
        "Databases",
        "Git",
      ],
      links: {
        website: "https://feast-sharing.herokuapp.com/",
        github: "https://github.com/valmdz/meal-sharing",
      },
      setting: "individual",
    },
    {
      id: 3,
      title: "Animo production",
      image: AnimoProduction,
      about:
        "Redesign and implementation of a website for a california based productions company.",
      year: 2020,
      keywords: ["Squarespace", "JS", "CSS", "HTML", "UX design", "UI design"],
      links: {
        website: "https://www.animoproduction.com/",
        github: "",
      },
      setting: "individual",
    },
    {
      id: 4,
      title: "Fastest presser",
      image: FastestPresser,
      about: "A game where the one with the fastest fingers wins.",
      year: 2020,
      keywords: ["JS", "CSS", "HTML", "Git"],
      links: {
        website: "",
        github:
          "https://github.com/valmdz/hyf-homework/tree/master/javascript/javascript2/week3",
      },
      setting: "individual",
    },
    {
      id: 5,
      title: "GIFiest GIFs",
      image: GifiestGifs,
      about:
        "A site that allows you to find the GIFiest GIFs by calling the giphy api.",
      year: 2020,
      keywords: ["JS", "CSS", "HTML", "API calls", "Git"],
      links: {
        website: "",
        github:
          "https://github.com/valmdz/hyf-homework/tree/master/javascript/javascript3/week1",
      },
      setting: "individual",
    },
    {
      id: 6,
      title: "Weather now",
      image: WeatherNow,
      about:
        "A weather app that allows you to find the weather of cities around the world byt calling the open weather map api.",
      year: 2020,
      keywords: ["JS", "CSS", "HTML", "API calls", "Git"],
      links: {
        website: "",
        github:
          "https://github.com/valmdz/hyf-homework/tree/master/javascript/javascript3/week1",
      },
      setting: "individual",
    },
    {
      id: 7,
      title: "Shop section - Vianney Méndez",
      image: Vianney,
      about:
        "On this section a user can choose the region from which she/he is buying from and see the available products for that region.",
      year: 2020,
      keywords: ["Wordpress", "CSS", "HTML", "Illustrator"],
      links: {
        website: "https://www.vianneymendez.com/shop/",
        github: "",
      },
      setting: "individual",
    },
  ],
};
