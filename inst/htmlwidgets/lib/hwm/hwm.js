HTMLWidgets.widget({

  name: 'hwm',
  type: 'output',

  factory: function(el, width, height) {

    var hwmWidget = null;
    console.log("hwm factory, el: " + el)
    
    return {
      renderValue: function(options) {
          console.log("---- ~/github/igvShiny/inst/htmlwidgets, renderValue");
          console.log("     el: ");
          console.log(el);
          console.log("hwm.js renderValue, wh: " + width + ", " + height)
          console.log("--------- options");
          console.log(options.data)
          window.el = el;
          // el.appendChild(document.createTextNode(options.data))
          //el.contentEditable = true;
	  var newDiv = document.createElement("div"); 
          newDiv.contentEditable = true;
          newDiv.setAttribute("id", "hwmDiv");
          var editableText = document.createTextNode(options.data)
          editableText.contentEditable = true;
          el.appendChild(newDiv);
	  newDiv.appendChild(editableText)

          },
      resize: function(width, height) {
        console.log("new size: " + width + ", " + height);
        // TODO: code to re-render the widget with a new size
        }

    }; // return
  }  // factory
});  // widget
//------------------------------------------------------------------------------------------------------------------------
// Shiny.addCustomMessageHandler("redrawIgvWidget",
// 
//     function(message) {
//         console.log("--- redrawIgvShiny")
//         window.igvBrowser.resize();
//         window.igvBrowser.visibilityChange();
//         });
// 
//------------------------------------------------------------------------------------------------------------------------
