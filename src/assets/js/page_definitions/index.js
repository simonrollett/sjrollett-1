const page_content = {
  config: {
    html_template: "template_home"
  },
    head:{
        title: "homepage title here"
    },
    content:{
        settings:{
            preheader: '',
            login: true,
            help: true,
            tel: false
        },
        head:[],
        body:[
            "A new email address <strong>{{CUSTOMER_EMAIL_PREVIOUS}}</strong> has been added to your account on {{CUSTOMER_EMAIL_CHANGE_DATE_TIME}}."
        ],
        footer:[

        ],
        terms:[]
    }
};

module.exports = page_content;
