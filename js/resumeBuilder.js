/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Vicky Leng",
    "role": "Web Developer",
    "contacts": {
        "mobile": "17602189765",
        "email": "vicky_lengxue@sina.com",
        "github": "https://github.com/Vickylengxue",
        "twitter": "sorry, I have no twitter",
        "location": "Shanghai Pudong",
        "blog": "To be continue"
    },
    "welcomMessage": "Hello, welcome to know about me.",
    "skills": ["awesomeness", "programming", "JS", "Bootstrap", "jQuery", "HTML&CSS"],
    "biopic": "images/fry.jpg",
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
            "url": "http://www.shu.edu.cn/",
            "dates": "2012-6"
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
            "url": "www.cleartv.net",
            "description": "2015-2016.6 Worked as assistant of Research and development Department. <br> 2016.6 - current Do some work related to front-end develop."
        },
        {
            "employer": "Westingarea Mechanical and Electrical Systems co., LTD",
            "title": "Assistant to CEO",
            "location": "Shanghai Pudong",
            "dates": "2013 - 2015",
            "url": "http://www.ehsy.com/",
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
            "image": ["images/project1-companyWebsite.jpg"],
            "url": "https://snowlengxue.github.io/website-Clearoversea/"
        },
        {
            "title": "Resume",
            "dates": "2017-01",
            "description": "It is a website resume. Its format is refer to the tamplate at Wix.com. Built with Bootstrap, jQuery. ",
            "image": ["images/project2-resume.jpg"],
            "url": "https://snowlengxue.github.io/"
        }
    ]
}

/**
 *  声明变量
 */

$("#main").contents().filter(function () {
    return this.nodeType === 3;
}).remove();

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomMessage);

/**
 * @description Add header
 */

bio.display = function () {
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    /**
     * @param i - i == the name of contacts' property, i等于contacts对象内的属性名
     * @description Add topContacts
     */
    var keys = Object.getOwnPropertyNames(bio.contacts);
    for (var i = 0; i < keys.length; i++) {
        var propertyName = keys[i];
        var propertyValue = bio.contacts[propertyName];
        var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace('%contact%', propertyName);
        formattedHTMLcontactGeneric = formattedHTMLcontactGeneric.replace('%data%', propertyValue);
        $('#topContacts').append(formattedHTMLcontactGeneric);
    }
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMsg);
    $('#header').append(HTMLskillsStart);

    for (var i = 0; bio.skills[i]; i++) {
        var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
        $('#skills').append(formattedSkills);
    }
    $('#skills').css('flex-direction', 'row');
    $('#skills > .flex-item').css('flex-grow', '1');
};
bio.display();

/**
 * @description 遍历对象内容并添加到html. Traversal function, replace the %data% with the value
 *
 *
 * @param id - 定位要添加的位置（父元素）, the father element's id in html page
 * @param start - 添加第一个start div  Add the first start div
 * @param obj - 要遍历的对象, the object
 * @param sonobj - 该对象的子对象, the object in the father object
 * @param HTMLname - 对应的helper.js内的变量名片段,part of the variable's name in helper.js
 * @param location - 对应的需要插入的HTML的位置（子元素）the location to input html text
 */

var objloop = function (id, start, obj, sonobj, HTMLname, location) {
    var location = location + ':last';//选择最后一个div，用于添加html内容
    //开始遍历对象
    for (var i = 0; obj[sonobj][i]; i++) {
        $(id).append(eval(start));//添加含有start的div,例如：HTMLworkStart

        var keys = Object.getOwnPropertyNames(obj[sonobj][i]);
        for (var j = 0; j < keys.length; j++) {
            var x = keys[j];
            var htmlText = obj[sonobj][i][x];
            //处理education 对象内的name与degree的拼接
            if (x === 'name' || x === 'degree') {
                var formattedName, formattedDegree;
                if (x === 'name') {
                    var name = x;
                    formattedName = replaceData(x, HTMLname, htmlText);
                } else {
                    var degree = x;
                    formattedDegree = replaceData(x, HTMLname, htmlText);
                }
                //把name 和 degree拼接到一起
                var formattedCap = formattedName + formattedDegree;
                if (formattedDegree) {
                    $(location).append(formattedCap);
                    formattedName = undefined;
                    formattedDegree = undefined;
                }
            } else if (x === 'url') {
                //遇到url,就把url的内容添加到a标签中
                $(location + '> a').attr('href', obj[sonobj][i][x]);
            } else {//其他内容正常添加
                $(location).append(replaceData(x, HTMLname, htmlText));
            }
        }
    }
};

/**
 * @description 将data替换成对象内的内容 replace the %data%
 * @param key - 对象的属性 the property in the object
 * @param name - HTMLname的值，即：对应的helper.js内的变量名片段 part of the variable's name in helper.js
 * @param text - 对象内属性的值 the value of the property
 * @returns {XML|void|string} - 返回一个HTML字符串 return a string which is the html content
 */
function replaceData(key, name, text) {
    var lastName = key.slice(0, 1).toUpperCase() + key.slice(1);
    var HTMLtitle = eval(name + lastName);
    var formattedItem = HTMLtitle.replace('%data%', text);
    return formattedItem;
}

/**
 * @description Add Work Experience
 */
// objloop('#workExperience', 'HTMLworkStart', work, 'jobs', 'HTMLwork', '.work-entry');

/**
 * @description Add Projects
 */
// objloop('#projects', 'HTMLprojectStart', projects, 'projects', 'HTMLproject', '.project-entry');
// $('.project-entry > img').css('width', '100%');
/**
 * @description Add Education
 */
objloop('#education', 'HTMLschoolStart', education, 'schools', 'HTMLschool', '.education-entry');
objloop('#education', 'HTMLschoolStart', education, 'onlineCourses', 'HTMLonline', '.education-entry');

/**
 * @description Add mapDiv
 */
$("#mapDiv").append(googleMap);

/**
 * @description international name switch
 */

$("#main").append(internationalizeButton);
var countNum = 0;
function inName(name) {
    name = name.split(' ');
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    if (countNum === 0) {
        name[1] = name[1].toUpperCase();
        name = name.join(' ');
        countNum = 1;
        return name;
    } else {
        name[1] = name[1].slice(0, 1).toUpperCase() + name[1].slice(1).toLowerCase();
        name = name.join(' ');
        countNum = 0;
        return name;
    }
}