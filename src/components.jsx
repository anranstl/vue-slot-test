import Vue from 'vue';

var FormComponent = {
    props: {
        id: {
            type: String,
        },
        name: {
            type: String,
        }
    },
    mounted: function () {
    },
    render: function(h){
        return h("form", this.$slots.default);
    }
};

var LoginComponent = {
    mounted: function () {
        var input = this.$el.querySelector('input');
        if(input){
            input["newprop"] = {name: 'test', password: 'test'};
        }
    },
    render: function(h){
        return h("div", Array.apply(null, {length: 2}).map(function(){
            return h("input");
        }));
    }
};

Vue.component("form-component", FormComponent);
Vue.component("login-component", LoginComponent);

export{
    FormComponent,
    LoginComponent
}