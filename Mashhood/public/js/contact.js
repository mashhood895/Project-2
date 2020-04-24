    //codes for selecting and deselecting of rating 
    document.addEventListener('DOMContentLoaded', function(){
      let ratings = document.querySelectorAll('.rating');
      ratings.forEach(function(rating){
        rating.addEventListener('click', setRating); 
      });

      let rating = parseInt(document.querySelector('.ratings').getAttribute('data-rating'));
      const goal = ratings[rating - 1];
      goal.dispatchEvent(new MouseEvent('click'));
    });

    function setRating(ev){
      let span = ev.currentTarget;
      let ratings = document.querySelectorAll('.rating');
      let match = false;
      let num = 0;
      ratings.forEach(function(rating, index){
        if(match){
          rating.classList.remove('rated');
        }else{
          rating.classList.add('rated');
        }
            // clicked span
            if(rating === span){
              match = true;
              num = index + 1;
            }
		});

		//alert(num);
		document.getElementById('rat').value=num;
      document.querySelector('.ratings').setAttribute('data-rating', num);
    } 

    // selecting and deselecting end</script>

		function Validation(){

			const username = document.getElementById('first&lastname').value;
			let mobilenumber = document.getElementById('contact').value;
			let email = document.getElementById('emailaddress').value;
			let subject = document.getElementById('query').value;
			let message = document.getElementById('texting').value;
			let validForm=true;

			if(username=="")
			{
				document.getElementById('fullname').innerHTML="Please Enter Your Full Name";
				validForm = false;
			}

			if(mobilenumber=="")
			{
				document.getElementById('digit').innerHTML="Please Enter Your Contact Number";
				validForm = false;
			}

			if(email=="")
			{
				document.getElementById('emailid').innerHTML="Please Enter Your Email Address";
				validForm = false;
			}
			if(subject=="")
			{
				document.getElementById('headline').innerHTML="Please Enter Your Subject";
				validForm = false;
			}
			if(message=="")
			{
				document.getElementById('text').innerHTML="Please Write Your Comments";
				validForm = false;
			}
			// else{

			//   alert("Form Submitted Successfully!");
			//   return true;
			// }

			return validForm;
		}