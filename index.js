import Vue from 'vue'
import {FormComponent, LoginComponent} from './src/components.jsx';

window.onload = function () {
    var form = new Vue({
        el: "#formC",
        components: {
            "form-component": FormComponent
        }
    });
    var login = new Vue({
        el: "#loginC",
        components: {
            "login-component": LoginComponent
        }
    });
};