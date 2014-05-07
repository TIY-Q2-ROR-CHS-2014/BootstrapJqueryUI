var when_things_happen = function() {
  $("input.this_is_a_dude_class").datepicker({
    minDate: 0
  });
  $("div.dialog_thing").dialog({
    title: "This is a dialog",
    modal: true,
    autoOpen: false,
    open: function() {
      console.log("You have opened a dialogous!");
    }
    // Open, create, drag, resize, close
  });
  $("a.open_dialog").click(function() {
    $("div.dialog_thing").dialog('open');
  });
  $('div.these_are_going_to_be_tabs').tabs({
    collapsible: true //,
    //disabled: [0, 1]
  });
  $("input.autocomplete_1").autocomplete({
    source: ["Drama", "Comedy", "Horror"],
    minLength: 3,
    select: function(event, ui){
      console.log(event);
      console.log(ui);
    }
  });
  // Source can be a URL as well as an array of elements
  // So if I want the autocomplete to be an ajax call to the server
  // This is how I do it!
  // "/hospitals.json"
  //  ["MUSC", "Roper", "", ""]


  $("div.new_accordion").accordion({
    collapsible: true
  });

  $("div.draggable").draggable({
    scope: "asdf",
    snap: true,
    appendTo: "div.droppable"
  });
  $("div.droppable").droppable({
    scope: "asdf",
    tolerance: "touch",
    // fit, intersect, pointer, touch
    // intersect: at least 50% of teh draggable element
    // must be inside
    // pointer: wherever your mouse pointer is
    drop: function(event, ui) {
      console.log("This guy is now inside of our droppable");
    }
  });

  $("div.sortable").sortable({
    items: "li",
    sort: function(event, ui) {
      console.log(ui); 
    }
  });
};

$(document).ready(when_things_happen);
$(document).on("page:load", when_things_happen);
