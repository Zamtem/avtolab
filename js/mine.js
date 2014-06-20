document.addEventListener("backbutton", function() {
            if ( $('.ui-page-active').attr('id') == 'page1') {
                exitAppPopup();
            } else {
                history.back();             
            }
        }, false);
        
        function exitAppPopup() {
    navigator.notification.confirm(
          'Exit PhoneGap ' + device.cordova + ' Demo?'
        , function(button) {
              if (button == 2) {
                  navigator.app.exitApp();
              } 
          }
        , 'Exit'
        , 'No,Yes'
    );  
    return false;
}
