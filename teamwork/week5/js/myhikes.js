
console.log('working');
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];

let aHike = document.createElement('section');

const eachHike = document.createElement('h2');
const imgSorc  = hikeList.imgSrc;
const altSorc = hikeList.imgSrc;
const distanceHeader = document.createElement('h3');
const distance = document.createElement('p');
const difficultyHeader = document.createElement('h3');
const difficulty = document.createElement('p');

eachHike = hikeList.name;

distanceHeader.textContent = "Distance";
distance.textContent = hikeList.distance;
difficultyHeader.textContent = "Difficulty";
difficultyHeader.textContent = hikeList.difficulty;

aHike.appendChild(eachHike);
aHike.appendChild(imgSorc);
aHike.appendChild(altSorc);
aHike.appendChild(distanceHeader);
aHike.appendChild(distance);





document.querySelector('div.hikeshere').appendChild(aHike);