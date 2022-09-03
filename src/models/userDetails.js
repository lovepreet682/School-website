const mongoose = require('mongoose');

const schemaDetails= new mongoose.Schema({
    brandname:String,
    links:[
        {
            label: String,
            url:String
        }
    ]
    
});

const detail = new mongoose.model('detail', schemaDetails);
/* 
detail.create({
    brandname:'company name',
    links:[
        {
            label:'Home',
            url:'/'
        },
        {
            label:'Gallery',
            url:'/gallery'
        },
        {
            label:'Courses',
            url:'/course'
        },
        {
            label:'about us',
            url:'/aboutus'
        },
        {
            label:'contact us',
            url:'/contact'
        },
]
});

 */