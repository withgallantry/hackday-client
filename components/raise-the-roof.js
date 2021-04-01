/**
 * Rotate arms on click.
 */
AFRAME.registerComponent('raise-the-roof', {
    schema: {default: false},
  
    init: function () {
      var el = this.el;
      const raiseButton = document.querySelector('#raise');
      if (!el.components['firebase-broadcast']) { return; }
      raiseButton.addEventListener('mousedown', function () {
        el.setAttribute('raise-the-roof', true);
      });
      raiseButton.addEventListener('touchstart', function () {
        el.setAttribute('raise-the-roof', true);
      });
      raiseButton.addEventListener('mouseup', function () {
        el.setAttribute('raise-the-roof', false);
      });
      raiseButton.addEventListener('touchend', function () {
        el.setAttribute('raise-the-roof', false);
      });
    },
  
    update: function () {
      var el = this.el;
  
      var arms = el.querySelector('.arms');
      if (!arms) { return; }
  
      if (this.data) {
        arms.setAttribute('rotation', {x: 180, y: 0, z: 0});
      } else {
        arms.setAttribute('rotation', {x: 0, y: 0, z: 0});
      }
    }
  });