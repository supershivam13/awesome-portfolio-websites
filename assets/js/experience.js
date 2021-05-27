//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Secretary, Students' Technical Council",
    cardImage: "assets/images/experience-page/gym.png",
    place: "Student's Gymkhana, IIT Patna",
    time: "(Feb. 2021 - present)",
    desp: "<li>An elected representative providing for technical, administrative, and clerical support associated with all inter-disciplinary technical activities involving the institute.</li> <li>Established the GeeksforGeeks Student Chapter at IIT Patna</li>",
  },
  {
    title: "Microsoft Learn Student Ambassador - Beta",
    cardImage: "assets/images/experience-page/beta.png",
    place: "Microsoft",
    time: "(Apr. 2021 - Present)",
    desp: "<li>Student Ambassadors is a community of students who are eager to help students and their communities, lead in their local tech circles, and develop technical and career skills for the future.</li><li>Conducted an event 'Hosting your First Web App on Streamlit with VS Code' with around 50 attendees.</li>",
  },
  {
    title: "Sub-Cord, Web and App Committee",
    cardImage: "assets/images/experience-page/inf.jpg",
    place: "Infinito, IIT Patna",
    time: "(Mar. 2020 - May 2021)",
    desp:"<li>Responsible for the development and maintenance the website and application of Infinito - Sports Fest of IIT Patna.</li><li>Mentored juniors to learn Open Source by contributing to the website.</li>",
  },
  {
    title: "Google Crowdsource Influencer",
    cardImage: "assets/images/experience-page/crowd.png",
    place: "Google Crowdsource",
    time: "(Feb. 2021 - Present)",
    desp:"<li>CrowdSource Influencers are the representative of Crowdsource community for their region/campus encouraging peers to contribute, enabling diversity in Machine Learning models and make Google products work equally well for everyone.</li><li>Got Featured as a 'Top Contributor' on the Google Crowdsource Offical Facebook page.</li>",
  },
  {
    title: "Sub-Cord, Hospitality Committee",
    cardImage: "assets/images/experience-page/cel.jpg",
    place: "Celesta, IIT Patna",
    time: "(Mar. 2020 - May 2021)",
    desp:"<li>Responsible for the arrangements and proper hospitality to the Chief Guests, Event Speakers, VIPs, etc at Celesta - Technical Fest of IIT Patna.</li><li>Look after the proper management of transportation servies of Chief Guets, VIPs, etc to and from the campus.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Community Member, GDG Patna",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "GDG Patna is a local group of developers who are specifically interested in Google products and APIs",
  },
  {
    title: "Contingent Member, 9th Inter IIT Tech Meet",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Analysed the existing problems and proposed solutions in the event 'Product Case Study'",
  },
  {
    title: "Contingent Member, 8th Inter IIT Tech Meet",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Presented the project 'DigiMonitor' of IIT Patna in the event 'Engineer's Conclave'",
  },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
  // {
  //   title: "30 DaysofFlutter",
  //   cardImage: "assets/images/experience-page/5.jpg",
  //   description:
  //     "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  // },
  // {
  //   title: "Garuda Hacks",
  //   cardImage: "assets/images/experience-page/6.jpg",
  //   description:
  //     "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  // {
  //   title: "HakinCode",
  //   image: "assets/images/experience-page/hakin.png",
  //   time: "06/2020 - 08/2020",
  //   desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  // },
  // {
  //   title: "Google Summer of Code",
  //   image: "assets/images/experience-page/gsoc.png",
  //   time: "03/2020 - 08/2020",
  //   desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  // },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
