var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

  var currentHour = (new Date()).getHours();

  $('.colorcode')
    .each(function(){
      var val = parseInt($(this).prop('id'));
      if(val > currentHour && val < currentHour + 11 ){
        $(this).css('background-color','#90EE90');
      }else if(val < currentHour && val > currentHour-11){
        $(this).css('background-color','#D3D3D3');
      }else if(val === currentHour){
        $(this).css('background-color','#FF5733');
      }else{
        $(this).css('background-color','White');
      }
    });

    $( function() {
        $( ".widget button" )
          .eq( 0 ).button()
          .end().eq( 1 ).button( {
            icon: "ui-icon-gear",
            showLabel: false
          } );
      } );
      const noteForm = document.querySelector(".note-form");
      const noteInput = document.querySelector(".note-input");
      const noteSubmit = document.querySelector(".note-submit");
      const notes = document.querySelector(".notes");

      let notesStorage = localStorage.getItem("notes")
        ? JSON.parse(localStorage.getItem("notes"))
        : [];
function firstTime(){
      noteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        notesStorage.push(noteInput.value);
        localStorage.setItem("notes", JSON.stringify(notesStorage));
        listBuilder(noteInput.value);
        noteInput.value = "";
      });

      const listBuilder = (text) => {
        const note = document.createElement("li");
        note.innerHTML = text + ' <button onclick="deleteNote(this)">x</button>';
        notes.appendChild(note);
      };

      const getNotes = JSON.parse(localStorage.getItem("notes"));
      getNotes.forEach((note) => {
        listBuilder(note);
      });

      
    }
  
    noteSubmit.addEventListener("click", firstTime)
    const deleteNote = (btn) => {
      let el = btn.parentNode;
      const index = [...el.parentElement.childNodes].indexOf(el);
      notesStorage.splice(index, 2);
      localStorage.setItem("notes", JSON.stringify(notesStorage));
      el.remove();
    };
