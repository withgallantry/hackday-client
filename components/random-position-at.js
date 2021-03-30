AFRAME.registerComponent('random-position-at', {
    dependencies: ['position'],
  
    schema: {
      offset: {type: 'vec3'},
      selector: {type: 'string'}
    },
  
    update: function () {
      var data = this.data;
      var el = this.el;

      if (window.location.hash.indexOf('presenter') !== -1) {
        return;
      }
  
      setTimeout(function () {
        var entities = el.sceneEl.querySelectorAll(data.selector);
        var entity = entities[Math.floor(Math.random() * entities.length)];
        var position = entity.getAttribute('position');
        var parentPosition = entity.parentNode.getAttribute('position');

        const xPos = position.x + parentPosition.x + data.offset.x;
        const yPos = 1.4;
        const zPos = position.z + parentPosition.z + data.offset.z;

        el.setAttribute('position', {
          x: xPos,
          y: yPos,
          z: zPos
        });
      }, 100);
    }
  });