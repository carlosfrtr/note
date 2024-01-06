var note = {
  update_time: 2000,
  save: false,
  load: function() {
      document.getElementById("note").focus();
      window.setInterval(function() { note.save() }, note.update_time);
  },
  save: function() {
      xmlDoc = new XMLHttpRequest();
      xmlDoc.open('PUT', '', true);
      xmlDoc.send(document.getElementById("note").value);
  }};

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    note.load();
  }
};