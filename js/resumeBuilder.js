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
            "major": ["technology and science"],
            "dates": "2008-6"
        },
        {
            "name": "Shanghai Univercity",
            "location": "Shanghai",
            "degree": "Bachelor's degree",
            "major": ["Matieral Science and Technology"],
            "dates": "2012-6"
        }
    ],
    "onlineCourses": [
        {
            "title": "Udacity Front-End Web Developer Nanodegree",
            "school": "Udacity Online School",
            "dates": "2016-12",
            "uRL": "http://cn.udacity.com/"
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
            "image": ["images/project1-companyWebsite.jpg"]
        },
        {
            "title": "Resume",
            "dates": "2017-01",
            "description": "It is a website resume. Its format is refer to the tamplate at Wix.com. Built with Bootstrap, jQuery. ",
            "image": ["images/project2-resume.jpg"]
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

var formattedSchoolName = HTMLschoolName.replace('%data%',education.schools.name);
var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',education.schools.degree);
var formattedSchoolDates = HTMLschoolDates.replace('%data%',education.schools.dates);
var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',education.schools.location);
var formattedSchoolMajor = HTMLschoolMajor.replace('%data%',education.schools.major);

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
 * @description 设置一个循环函数，遍历对象内容并添加到html
 * @param id - 定位要添加的位置（父元素）
 * @param start - 添加第一个start div
 * @param obj - 要遍历的对象
 * @param sunobj - 该对象的子对象
 * @param HTMLname - 对应的helper.js内的变量名片段
 * @param location - 对应的需要插入的HTML的位置（子元素）
 */

// var objloop = function(id, start, obj, sunobj, HTMLname, location) {
//     var location = location + ':last';//选择最后一个div，用于添加html内容
//     for(var i = 0; obj[sunobj][i]; i++) {
//         $(id).append(eval(start));//添加含有start的div,例如：HTMLworkStart
//         for(var index in obj[sunobj][i]) {
//             var index2 = index.slice(0,1).toUpperCase() + index.slice(1);//拼接字符串，首字母大写，此字符串作为后面的变量
//             var HTMLtitle = eval(HTMLname + index2);//将拼接好的字符串，转换成变量，该变量与helper.js内变量名一一对应
//             var formattedItem = HTMLtitle.replace('%data%',obj[sunobj][i][index]);//替换
//             $(location).append(formattedItem);//找到最后一个div，添加替换的内容
//         };
//     };
// };

var objloop = function(id, start, obj, sunobj, HTMLname, location) {
    var location = location + ':last';//选择最后一个div，用于添加html内容
    for(var i = 0; obj[sunobj][i]; i++) {
        $(id).append(eval(start));//添加含有start的div,例如：HTMLworkStart
        for(var index in obj[sunobj][i]) {
            if(index === 'name'|| index === 'degree') {
                var name, degree;
                var formattedName, formattedDegree;
                if(index==='name') {
                    name = index;
                    formattedName = replaceData();
                }else {
                    degree = index;
                    formattedDegree = replaceData();
                };
                if(formattedDegree) {
                    var formattedCap = formattedName + formattedDegree;
                    $(location).append(formattedCap);
                    name = undefined;
                    degree = undefined;
                    formattedName = undefined;
                    formattedDegree = undefined;
                };
            }else {
                $(location).append(replaceData());//找到最后一个div，添加替换的内容
            }
            function replaceData() {
                var index2 = index.slice(0,1).toUpperCase() + index.slice(1);//拼接字符串，首字母大写，此字符串作为后面的变量
                var HTMLtitle = eval(HTMLname + index2);//将拼接好的字符串，转换成变量，该变量与helper.js内变量名一一对应
                var formattedItem = HTMLtitle.replace('%data%',obj[sunobj][i][index]);//替换
                return formattedItem;
            }
        };
    };
};


/**
 * @description Add Work Experience
 */
objloop('#workExperience', 'HTMLworkStart', work, 'jobs', 'HTMLwork', '.work-entry');

/**
 * @description Add Projects
 */
objloop('#projects', 'HTMLprojectStart', projects, 'projects', 'HTMLproject', '.project-entry');

/**
 * @description Add Education
 */




objloop('#education', 'HTMLschoolStart', education, 'schools', 'HTMLschool', '.education-entry');

objloop('#education', 'HTMLschoolStart', education, 'onlineCourses', 'HTMLonline', '.education-entry');

/**
 * @description Add mapDiv
 */



