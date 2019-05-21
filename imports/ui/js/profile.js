import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tasks } from '../../api/tasks.js'

import '../js/task.js';
import '../html/profile.html';

Template.profile.events({
    "submit .edit-profile": function () {
        var file = $('#profileImage').get(0).files[0];
        if (file) {
            fsFile = new FS.File(file);
        }
    }
});