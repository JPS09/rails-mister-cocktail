// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'bootstrap';
import { initSelect2 } from '../components/init_select2';
import { initSweetalert} from '../components/init_sweetalert';

document.addEventListener("turbolinks:load", function() {
  initSelect2();
  initSweetalert('#sweet-alert-demo', {
    title: "Confirmation",
    text: "Are you sure?",
    icon: "warning"
  },  (value) => {
    if (value) {
      const link = document.querySelector('#delete-link');
      link.click();
    }
  });
  initSweetalert('#sweet-delete', {
    title: "Confirmation",
    text: "Are you sure ?",
    icon: "warning",
    buttons: {
      cancel: {
        text: "Cancel",
        value: null,
        visible: true,
        className: "",
        closeModal: true,
      },
      confirm: {
        text: "OK",
        value: true,
        visible: true,
        className: "",
        closeModal: true
      }
    }
  },  (value) => {
    if (value) {
      const link = document.querySelector('#delete');
      console.log(link);
      link.click();
    }
  });
});


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
