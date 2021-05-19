var note = {
    update_time: 2000,
    save: false,
    load: function() {
       document.getElementById("note").focus();
       document.getElementById("note").addEventListener("keydown", function(e) {e.keyCode == 9? false: true;})
       document.getElementById("note").addEventListener('keyup', function(e) { note.changed = true});
       window.setInterval(function() { note.changed ? note.save() : note.update(); }, note.update_time);
    },

   save: function() {
       xmlDoc = new XMLHttpRequest();
       xmlDoc.open('PUT', '', true);
       xmlDoc.send(document.getElementById("note").value);
       note.changed = false;
   },

   update: function() {
       xmlDoc = new XMLHttpRequest();
       xmlDoc.open('POST', '', true);
       xmlDoc.onload = function(e) {
           if (xmlDoc.response != null)
               document.getElementById("note").value = JSON.parse(xmlDoc.response).note;
       }
       xmlDoc.send();
   }

  };

   document.onreadystatechange = () => {
     if (document.readyState === 'complete') {
       note.load();
     }
   };