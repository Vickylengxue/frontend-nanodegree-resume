/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name":"Vicky Leng",
    "role":"Web Developer",
    "contacts": {
        "mobile":"17602189765",
        "email":"vicky_lengxue@sina.com",
        "github":"https://github.com/Vickylengxue",
        "twitter":"I have no twitter",
        "location":"Shanghai Pudong",
        "blog": "To be continue"
    },
    "welcomMessage":"Hello, welcome to know about me.",
    "skills": ["awesomeness", "programming", "JS", "Bootstrap", "jQuery", "HTML&CSS"],
    "biopic":"images/fry.jpg",
};
var education = {
    "schools": [
        {
            "name": "Fu Yu Highschool",
            "location": "Qiqi Haer",
            "degree": "hightschool",
            "majors": ["technology and science"],
            "dates": "2008-6",
            "url": "none",
        },
        {
            "name": "Shanghai Univercity",
            "location": "Shanghai",
            "degree": "Bachelor's degree",
            "dates": "2012-6",
            "url": "http://www.shu.edu.cn/",
            "majors": ["Matieral Science and Technology"]
        }
    ],
    "onlineCourses": [
        {
            "title": "Udacity Front-End Web Developer Nanodegree",
            "school": "Udacity Online School",
            "dates": "2016-12",
            "url": "http://cn.udacity.com/"
        }
    ],
};
var work = {
    "jobs": [
        {
            "employer": "Shanghai ClearTV Corp.",
            "title": "Department Assistant",
            "location": "Shanghai Zhangjiang",
            "dates": "2015 - Current",
            "description": "2015-2016.6 Worked as assistant of Research and development Department. <br> 2016.6 - current Do some work related to front-end develop."
        },
        {
            "employer": "Westingarea Mechanical and Electrical Systems co., LTD",
            "title": "Assistant to CEO",
            "location": "Shanghai Pudong",
            "dates": "2013 - 2015",
            "description": "Worked as assistant to the CEO. Provides comprehensive support services to the CEO that ensures a professional, responsive and effective experience with the organization as a whole."
        },
        {
            "employer": "RuiXi Enterprise Management Consulting co., LTD",
            "title": "HR Researching",
            "location": "Shanghai Putuo",
            "dates": "2012 - 2013",
            "description": "Worked as HR researching. Coordinating interviews with the hiring managers. Following up on the interview process status. Maintaining relationships with both internal and external clients to ensure staffing goals are achieved."
        }]
};
var projects = {
    "projects": [
        {
            "title": "the company website of ClearTV",
            "dates": "2016-11",
            "description": "It is a company website, showing products to the customer overseas. It is built with a CSS format called matirlize.",
            "images": ["images/project1-companyWebsite.jpg"]
        },
        {
            "title": "Resume",
            "dates": "2017-01",
            "description": "It is a website resume. Its format is refer to the tamplate at Wix.com. Built with Bootstrap, jQuery. ",
            "images": ["images/project2-resume.jpg"]
        }
    ]
}

/**
 *  声明变量
 */

$("#main").contents().filter(function(){return this.nodeType === 3;}).remove();

var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);

var formattedBioPic = HTMLbioPic.replace('%data%',bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomMessage);




var formattedProjectTitle = HTMLprojectTitle.replace('%data%',projects.projects.title);
var formattedProjectDates = HTMLprojectDates.replace('%data%',projects.projects.dates);
var formattedProjectDescription = HTMLprojectDescription.replace('%data%',projects.projects.description);
var formattedProjectImage = HTMLprojectImage.replace('%data%',projects.projects.images);

var formattedSchoolName = HTMLschoolName.replace('%data%',education.schools.name);
var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',education.schools.degree);
var formattedSchoolDates = HTMLschoolDates.replace('%data%',education.schools.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',education.schools.location);
var formattedSchoolMajor = HTMLschoolMajor.replace('%data%',education.schools.majors);

var formattedOnlineTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses.title);
var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses.school);
var formattedOnlineDates = HTMLonlineDates.replace('%data%',education.onlineCourses.dates);
var formattedOnlineURL = HTMLonlineURL.replace('%data%',education.onlineCourses.url);

/**
 * @description Add header
 */

bio.display = function() {
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    /**
     * @param i - i == the name of contacts' property, i等于contacts对象内的属性名
     * @description Add topContacts
     */
    for(var i in bio.contacts) {
        var propertyValue = bio.contacts[i];
        var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace('%contact%',i);
        formattedHTMLcontactGeneric = formattedHTMLcontactGeneric.replace('%data%',propertyValue);
        $('#topContacts').append(formattedHTMLcontactGeneric);
    };
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMsg);
    $('#header').append(HTMLskillsStart);
    for(var i=0; bio.skills[i]; i++) {
        var formattedSkills = HTMLskills.replace('%data%',bio.skills[i]);
        $('#skills').append(formattedSkills);
    }
};
bio.display();

/**
 * @description Add Work Experience
 */
work.display = function() {
    $('#workExperience').append(HTMLworkStart);
    for(var i=0; work.jobs[i]; i++) {
        for(var index in work.jobs[i]) {
            var index2 = index.slice(0,1).toUpperCase() + index.slice(1);
            var HTMLtitle = eval('HTMLwork'+ index2);
            var formattedItem = HTMLtitle.replace('%data%',work.jobs[i][index]);
            $('.work-entry').append(formattedItem);
        };
    };
};
work.display();

/**
 * @description Add Projects
 */



/**
 * @description Add Education
 */

/**
 * @description Add mapDiv
 */



