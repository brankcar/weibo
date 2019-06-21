import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Backbone, Router } from 'meteor/backbone';

import './main.html';
import './index/index.html';

Session.setDefault("currentUrl", {
  index: "active",
  login: "",
  reg: ""
});

Template.container.currentUrl = function() {
  return Session.get("currenUrl");
};




Meteor.startup(function() {
  
})
