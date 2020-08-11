let orbitRadius = prompt("Please enter orbit radius: ");
let orbitalSpeed = prompt("Please enter orbital speed (km/hr): ");
let numberOrbitsCompleted = prompt("Please enter number of orbits completed: ");

// Code your orbitCircumference function here:
function orbitCircumference(orbitRadius) {
let circumference = Math.round(Math.PI*Math.pow(orbitRadius, 2));
  return circumference;
}

// console.log(orbitCircumference(orbitRadius));

// Code your missionDuration function here:


function missionDuration(numberOrbitsCompleted, orbitRadius, orbitalSpeed) {
let missionTime = (orbitCircumference(orbitRadius)/orbitalSpeed)*numberOrbitsCompleted;
  missionTime = Math.round(missionTime*100)/100
  return missionTime;
}
console.log(`The mission will travel ${orbitCircumference(orbitRadius)} km around the planet, and it will take ${missionDuration(numberOrbitsCompleted, orbitRadius, orbitalSpeed)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateA,candidateC,candidateE];


function selectRandomEntry(crew) {
  let index = Math.floor(Math.random()*crew.length);
  return crew[index];
}

let randomCrew = selectRandomEntry(crew);

// Code your oxygenExpended function here:
function oxygenExpended(randomCrew) {
  let missionTime = missionDuration(numberOrbitsCompleted, orbitRadius, orbitalSpeed);
  let o2Used = (randomCrew.o2Used(missionTime))
      o2Used = Math.round(o2Used*1000)/1000
  return o2Used;
}

console.log(`${randomCrew.name} will perform the spacewalk, which will last ${missionDuration(numberOrbitsCompleted, orbitRadius, orbitalSpeed)} hours and require ${oxygenExpended(randomCrew)} kg of oxygen.`)
// Candidate data & crew array.

