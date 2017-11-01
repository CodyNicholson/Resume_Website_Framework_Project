var bio =
{
    "name" : "Name",
    "role" : "Undergrad at DePaul University",
    "contacts" :
    {
        "email" : "email",
        "github" : "github name",
        "location" : ["Chicago, IL", "Lincoln Park, IL"],
        "linkedIn" : "linkedIn name"
    },
    "welcomeMessage" : "This is my résumé webpage where you can find all the details about my skills, experience, and background",
    "skills" :
    [
        "Java", "C#", "Python", "TensorFlow", "Keras", "Computer Vision", "Image Processing", "C++", "Design Patterns", "Git", "HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Jasmine",
        "Agile Methodologies", "ASP.NET MVC5", "Entity Framework", "Bootstrap", "jQuery", "SQL", "Linux", "Selenium Webdriver", "Acceptance Testing", "Leadership"
    ],
    "bioPic" : "images/head.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedlinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);

var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location[0]);

$("#header").prepend(formattedRole).prepend(formattedName).append(formattedBioPic).append(HTMLskillsStart).append(formattedwelcomeMessage).prepend(HTMLreturnHome);
$("#topContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn).append(formattedLocation);
$("#footerContacts").append(formattedEmail).append(formattedGithub).append(formattedlinkedIn).append(formattedLocation);

// Adds all my skills to the header
for(i = 0; i < bio.skills.length; i++)
{
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
}

var work =
{
    "jobs" :
        [
            {
                "employer": "CDK Global",
                "title": "Full-Stack Development Intern",
                "location": "Hoffman Estates, IL",
                "dates": "June 2017 - August 2017",
                "description": "Developed software to complete various stories I received during our two-week sprint cycles using various frontend, "+
                    "backend, version control, project management, and unit testing technologies. Led a Hack-a-thon team in creating a web application "+
                    "to determine RGB values from given color names using data mining techniques.",
                "link": "http://www.cdkglobal.com/"
            },
            {
                "employer": "CNA Financial",
                "title": "Software Engineer",
                "location": "Chicago, IL",
                "dates": "October 2016 - June 2017",
                "description": "Engineered a software system to perform automated functional testing of many of the company’s projects. " +
                    "Created an excel spreadsheet generator that works alongside the functional automated testing system to export test results " +
                    "in a format that the business team could understand. Brought in new employees and taught them how to automate user stories.",
                "link": "https://www.cna.com/"
            }
        ]
};

work.display = function()
{
    for (job in work.jobs)
    {
        // Creates a div with class work-entry
        $("#workExperience").append(HTMLworkStart);
        // Creates variables to hold the job information for each job
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title).replace("%link%", work.jobs[job].link);
        var formattedEmployerTitle = formattedTitle +formattedEmployer;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        // Adds the job info to the newly created div
        $(".work-entry:last").append(formattedEmployerTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
    }
};

var projects =
{
    "projs" :
    [
        {
            "title" : "Tetris Web Application",
            "dates" : "July 2017",
            "description" : "This is a Tetris game I programmed using HTML5 Canvas and JavaScript. The game randomly generates Tetris pieces for the player to place in the Tetris arena using the arrow keys to move them and the "+
                "'q' and 'w' keys to rotate them. When the player fills in an entire row they are rewarded with points. Every 50 points the player receives causes the pieces to drop faster.",
            "images" : ["images/tetrisMessage.jpg","images/tetrisGame.jpg"],
            "captions": ["This is the message that displays when the page loads","This is a picture of a person playing the game"],
            "link": "https://github.com/CodyNicholson/Tetris_Web_App_Project"
        },
        {
            "title" : "Selenium Functional Automated Testing Framework",
            "dates" : "April 2017",
            "description" : "After two years of being a Software Development Engineer in Test, this project represents a high-level view of my capabilities as an automated testing engineer. The framework I have created " +
                "is meant to be used to automate the functional testing of web applications using Selenium, Java, TestNG, and the Apache POI library for Java. After running a test you will receive an excel spreadsheet " +
                "with detailed information about any of the failures that may have occurred. If a test fails you will also get a screenshot of what exactly the browser was looking at upon failure. Using this approach " +
                "makes it very easy to run tests and track down errors at a speed unattainable by manual testers or even HP UFT. Also, Selenium does not require licensing like many other test automation software.",
            "images" : ["images/seleniumTesting.jpg","images/seleniumConsoleOutput.jpg","images/seleniumExcelOutput.jpg"],
            "captions": ["Selenium is controlling the browser and is clicking the 'Github' button","The TestNG output from the two tests I ran","The output excel document with the results"],
            "link": "https://github.com/CodyNicholson/Selenium_Functional_Automated_Testing"
        }
    ]
};

projects.display = function()
{
    for (p in projects.projs)
    {
        // Creates a div with class work-entry
        $("#projects").append(HTMLprojectStart);
        // Creates variables to hold the project information for each job
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projs[p].title).replace("%link%", projects.projs[p].link);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projs[p].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projs[p].description);
        // Adds the Employment description to the newly created div
        $(".project-entry:last").append(formattedTitle).append(formattedDates).append(formattedDescription);
        if (projects.projs[p].images.length > 0)
        {
            for (i in projects.projs[p].images)
            {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projs[p].images[i]).replace("%link%", projects.projs[p].link);
                formattedImage = formattedImage.replace("%caption%", projects.projs[p].captions[i]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

var education =
{
    "schools" :
    [
        {
            "name" : "DePaul University",
            "location" : "Chicago, IL",
            "degree" : "Bachelor of Computer Science",
            "description" : "I am a senior at DePaul University pursuing a Bachelor of Science (BS) degree in Computer Science and a minor "+
                "in Mathematics that I will receive in June of 2018. I am enrolled in the combined degree program and plan to receive a Master "+
                "of Science (MS) degree in Software Engineering after my fifth year at DePaul in 2019.",
            "dates" : "2014-2018",
            "link": "https://www.depaul.edu/"
        },
        {
            "name" : "James B. Conant High School",
            "location" : "Hoffman Estates, IL",
            "degree" : ["High School Diploma"],
            "description" : "In high school I was an average student who ran cross country, track, and occasionally performed in gymnastics. I graduated "+
                "with a 3.0 GPA and a 27 on my ACT. Once I got to college I started taking my education much more seriously.",
            "dates" : ["2010-2014"],
            "link": "http://chs.d211.org/"
        }
    ]
};

education.display = function()
{
    for (edu in education.schools)
    {
        // Creates a div with class education-entry
        $("#education").append(HTMLschoolStart);
        // Creates variables to hold the edu information for each school
        var formattedTitle = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("%link%", education.schools[edu].link);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        var formattedMajors = HTMLschoolDescription.replace("%data%", education.schools[edu].description);
        // Adds the edu info to the newly created div
        $(".education-entry:last").append(formattedTitle).append(formattedDegree).append(formattedDates).append(formattedLocation).append(formattedMajors);
    }
};

var honorsAndAwards =
{
    "honors" :
        [
            {
                "title": "Eagle Scout",
                "dates": "July 2014",
                "location": "Schaumburg, IL",
                "description": "After developing my leadership skills over six years I finally made it to the highest rank in scounting: Eagle. "
                    + "What this means is that I have extensive experience in working with others to achieve common goals, "
                    + "resolve conflicts, and facilitate the growth of others.",
                "link": "http://www.scouting.org/"
            },
            {
                "title": "National Society of Leadership and Success",
                "dates": "September 2016",
                "location": "DePaul University",
                "description": "I was accepted into this organization because of my leadership experience and my academic achievements at DePaul University",
                "link": "https://www.societyleadership.org/"
            }
        ]
};

honors.display = function()
{
    for (honor in honorsAndAwards.honors)
    {
        // Creates a div with class honor-entry
        $("#honors").append(HTMLhonorStart);
        // Creates variables to hold the honor information for each honor
        var formattedTitle = HTMLhonorTitle.replace("%data%", honorsAndAwards.honors[honor].title).replace("%link%", honorsAndAwards.honors[honor].link);
        var formattedDates = HTMLhonorDates.replace("%data%", honorsAndAwards.honors[honor].dates);
        var formattedLocation = HTMLhonorLocation.replace("%data%", honorsAndAwards.honors[honor].location)
        var formattedDescription = HTMLhonorDescription.replace("%data%", honorsAndAwards.honors[honor].description);
        // Adds the honor info to the newly created div
        $(".honor-entry:last").append(formattedTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
    }
};

var comServe =
{
    "cService" :
    [
        {
            "title": "Eagle Project",
            "dates": "April 2014 - August 2014",
            "description": "Led an effort using 30+ volunteers to complete major phases of capital improvement including the demolition, removal, reconstruction, "
                + "and addition of a handicap ramp for a sidewalk at the Church of the Holy Spirit. The improvement, besides looking better and having less tripping hazards, "
                + "was the addition of a handicap ramp to allow people in wheelchairs to access the Church. I also led two different fund-raising efforts that resulted in "
                + "the Church receiving an 85% discount on the total cost of the project.",
            "location": "Schaumburg, IL",
            "images": ["images/eagleProject1.jpg", "images/eagleProject3.jpg"],
            "captions": ["The sidewalk after I lead the demolition team in breaking it up into small pieces that we could carry", "A small portion of the team and I at the project site", "The finished sidewalk with the added handicap ramp"]
        }
    ]
};

comServe.display = function()
{
    for (p in comServe.cService)
    {
        // Creates a div with class work-entry
        $("#comService").append(HTMLcomServeStart);
        // Creates variables to hold the project information for each job
        var formattedTitle = HTMLcomServeTitle.replace("%data%", comServe.cService[p].title);
        var formattedDates = HTMLcomServeDates.replace("%data%", comServe.cService[p].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", comServe.cService[p].description);
        var formattedLocation = HTMLprojectLocation.replace("%data%", comServe.cService[p].location)
        // Adds the Employment description to the newly created div
        $(".comServe-entry:last").append(formattedTitle).append(formattedDates).append(formattedLocation).append(formattedDescription);
        if (comServe.cService[p].images.length > 0)
        {
            for (i in comServe.cService[p].images)
            {
                var formattedImage = HTMLcomServeImage.replace("%data%", comServe.cService[p].images[i]);
                formattedImage = formattedImage.replace("%caption%", comServe.cService[p].captions[i]);
                $(".comServe-entry:last").append(formattedImage);
            }
        }
    }
};

// Runs the display functions
work.display();
projects.display();
education.display();
honors.display();
comServe.display();

// Add googleMap element to the mapDiv
$("#mapDiv").append(googleMap);

// Log where users click on my website
$(document).click(function(loc)
{
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x,y);
});

// Get locations from jobs array to plot on googleMap
function locationizer(work_obj)
{
    var locationArray = [];
    for(job in work_obj.jobs)
    {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}
console.log(locationizer(work));
