import React from "react";
import "./styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Comments from "./components/Comments";
import SideVideo from "./components/SideVideo";


//Made my array of default comments to be in a variable so that I can then call it within my mainVideo const
let comments = [
    {
        name: "Micheal Lyons",
        comment: "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
        likes: 0,
        timestamp: 1628522461000
    },
    {
        name: "Gary Wong",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        likes: 0,
        timestamp: 1626359541000
    },
    {
        name: "Theodore Duncan",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
        likes: 0,
        timestamp: 1626011132000
    }
];

class App extends React.Component {
  state = {
    // Side Video array of objects
    sideVideo: [
        {
            id: "c05b9a93-8682-4ab6-aff2-92ebb4bbfc14",
            title: "Become A Travel Pro In One Easy Lesson",
            channel: "Todd Welch",
            image: "https://i.imgur.com/5qyCZrD.jpg"
        },
        {
            id: "25ce5d91-a262-4dcf-bb87-42b87546bcfa",
            title: "Les Houches The Hidden Gem Of The Chamonix",
            channel: "Cornelia Blair",
            image: "https://i.imgur.com/yFS8EBr.jpg"
        },
        {
            id: "b6f35f03-7936-409b-bd2a-446bcc5f30e7",
            title: "Travel Health Useful Medical Information For",
            channel: "Glen Harper",
            image: "https://i.imgur.com/MMDMgD7.jpg"
        },
        {
            id: "1b964601-a6dd-4fcc-b5f3-1000338c9557",
            title: "Cheap Airline Tickets Great Ways To Save",
            channel: "Emily Harper",
            image: "https://i.imgur.com/ibLw5q5.jpg"
        },
        {
            id: "9c268c0a-83dc-4b96-856a-bb5ded2772b1",
            title: "Take A Romantic Break In A Boutique Hotel",
            channel: "Ethan Owen",
            image: "https://i.imgur.com/7rD6Mf6.jpg"
        },
        {
            id: "fc5261d1-58a0-47e4-9c19-2b7a1715fa1b",
            title: "Choose the Perfect Accommodations",
            channel: "Lydia Perez",
            image: "https://i.imgur.com/0hi3N4B.jpg"
        },
        {
            id: "99478bed-6428-49ed-8eaa-f245a5414336",
            title: "Cruising Destination Ideas",
            channel: "Timothy Austin",
            image: "https://i.imgur.com/DDJNZNw.jpg"
        },
        {
            id: "76ca28c0-7dea-4553-887f-8e5129a80fc3",
            title: "Train Travel On Track For Safety",
            channel: "Scotty Cranmer",
            image: "https://i.imgur.com/i6S8m7I.jpg"
        }
    ],
    //Main Video Object
    mainVideo: [
      {
        title: "BMX Rampage: 2021 Highlights",
        channel: "Red Cow",
        image: "https://i.imgur.com/l2Xfgpl.jpg",
        description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        views: "1,001,023",
        likes: "110,985",
        duration: "4:01",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: 1626032763000,
        comments: comments,
        id: "84e96018-4022-434e-80bf-000ce4cd12b8"
      }
    ]
  };

  // DEEP DIVING EXPERIENCE
  timeElapsed = (date) => {
    if (typeof date !== 'object') {
        date = new Date(date);
    }
    var seconds = Math.ceil((new Date(Date.now()) - date) / 1000);
    var intervalType;
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        intervalType = 'year';
    } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            intervalType = 'month';
        } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
                intervalType = 'day';
            } else {
                interval = Math.floor(seconds / 3600);
                if (interval >= 1) {
                    intervalType = "hour";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "minute";
                    } else {
                        interval = seconds;
                        intervalType = "second";
                    }
                }
            }
        }
    }
    if (interval > 1 || interval === 0) {
        intervalType += 's';
    }
    return `${interval} ${intervalType} ago`;
  }

  render() {
    return (
      <div className="all-components">
        <Header />
        <Hero hero={this.state.mainVideo} />
        <div className="all-components__main">
          <div className="all-components__one">
            <Main main={this.state.mainVideo} timeElapsed={this.timeElapsed} />
            <Comments comments={this.state.mainVideo[0].comments} timeElapsed={this.timeElapsed}/>
          </div>
          <div className="all-components__two">
            <SideVideo sideVideos={this.state.sideVideo} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
