import { createStore } from "vuex"

const store = createStore({
   state: {
      projectsItems: [
         //PENSÉES ENFOUIES
         {
            videoBGLoc: "pensees_enfouies/pensees_enfouies-video.mp4",
            projectUrl: "pensees-enfouies",
            projectName: "Pensées Enfouies",
            projectDescription:
               "L’Oeuvre des ­­Pensées enfouies est une installation interactive, visuelle et sonore qui explore les idées qui traversent l’esprit créatif. Elle nous plonge dans la tête d’un écrivain inconnu, qui depuis le premier jour du confinement, s’exerce à l’écriture de poèmes touchant à la vie quotidienne. Un recueil de poésie moderne et nouveau genre, qui implique l’utilisateur dans la découverte de l’autre. Une incursion dans les pensées de l’autre, une connexion à ses émotions, une réflexion sur soi .",
            projectVimeoUrl:
               "https://player.vimeo.com/video/498800064?title=0&byline=0&portrait=0",
            projectClientName: "Mapp MTL, 5e Édition",
            projectClientYear: "2020 - Never Apart",
            projectMembers: [
               "Productrice créative - Camille Renaud",
               "Concepteur & poète - Christophe Godon",
               "Développeur interactif - Olivier Maurice",
            ],
            projectTechnologies: ["Touch Designer", "Max MSP", "Leap Motion"],
            projectImages: [
               "pensees_enfouies/photos/image0.jpg",
               "pensees_enfouies/photos/image1.jpg",
               "pensees_enfouies/photos/image2.jpg",
               "pensees_enfouies/photos/image3.jpg",
               "pensees_enfouies/photos/image4.jpg",
               "pensees_enfouies/photos/image5.jpg",
               "pensees_enfouies/photos/image6.jpg",
               "pensees_enfouies/photos/image7.jpg",
               "pensees_enfouies/photos/image8.jpg",
            ],
         },
         //INSERT PROJECT BY COPYING PREVIOUS PROJECT AND CHANGE VALUES
      ],
   },
})

export default store