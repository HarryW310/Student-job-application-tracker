document.addEventListener("DOMContentLoaded", function() {
    //variable for radiobuttons allowing them to be selected
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(function(radio) {
        
        // The feature that changes the colour of the boxes based on the selection
        radio.addEventListener('change', function() {
           
            var box = this.closest('.box');          
            switch (this.value) {
                 // these cases apply the colour to the boxes background
                 case 'Applied':
                    box.style.backgroundColor = 'red';
                    break; 

                 case 'Phone interview':
                    box.style.backgroundColor = 'orange';
                    break;
 
                 case 'In Person interview':
                    box.style.backgroundColor = 'yellow';
                    break;

                 case 'Job Offer':
                    box.style.backgroundColor = 'lightgreen';
                    break;
                    
                 default:
                    box.style.backgroundColor = 'rgb(186, 250, 255)';                
            }
        });
    });
});
