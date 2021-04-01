/**
 * Set User Name
 */
AFRAME.registerComponent('person-name', {
    schema: {default: "Default"},
  
    init: function () {
      var el = this.el;
      const joinButton = document.querySelector('#splash .join-button');
      const nameInput = document.querySelector('#name');
      if (!el.components['firebase-broadcast']) { return; }

      joinButton.addEventListener('click', function () {
        const nameToUse = nameInput.value || 'Anonymous';
        el.setAttribute('person-name', nameToUse);
      });

    },

    update: function () {
      var el = this.el;
      console.log('Data', this.data);

      
      var name = el.querySelector('.person-name');
      if (!name) { return; }
      name.setAttribute('value', this.data);
      
    }
  });