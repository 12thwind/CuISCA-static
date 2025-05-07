// form-handler.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all forms with the class 'emailjs-form'
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading indicator or disable submit button
        const submitButton = form.querySelector('input[type="submit"]');
        const originalButtonText = submitButton.value;
        submitButton.value = "Sending...";
        submitButton.disabled = true;
        
        // Prepare template parameters - adjust these based on your form fields
        const templateParams = {
          name: form.querySelector('[name="name"]') ? form.querySelector('[name="name"]').value : '',
          email: form.querySelector('[name="email"]') ? form.querySelector('[name="email"]').value : '',
          message: form.querySelector('[name="message"]') ? form.querySelector('[name="message"]').value : '',
          // Add other form fields as needed
          subject: form.querySelector('[name="subject"]') ? form.querySelector('[name="subject"]').value : '',
          phone: form.querySelector('[name="phone"]') ? form.querySelector('[name="phone"]').value : '',
          date: form.querySelector('[name="date"]') ? form.querySelector('[name="date"]').value : '',
          ceremony: form.querySelector('[name="ceremony"]') ? form.querySelector('[name="ceremony"]').value : '',
          vision: form.querySelector('[name="vision"]') ? form.querySelector('[name="vision"]').value : '',
          interests: form.querySelector('[name="interests"]') ? form.querySelector('[name="interests"]').value : '',
          category: form.querySelector('[name="category"]') ? form.querySelector('[name="category"]').value : '',
          firstName: form.querySelector('[name="firstName"]') ? form.querySelector('[name="firstName"]').value : '',
          question: form.querySelector('[name="question"]') ? form.querySelector('[name="question"]').value : '',
        };
        
        // Replace with your Service ID and Template ID from EmailJS
        emailjs.send('service_zq412ey', 'template_dmucgf9', templateParams)
          .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<p>Thank you for your message! We will get back to you soon.</p>';
            
            // Insert success message after the form
            form.parentNode.insertBefore(successMessage, form.nextSibling);
            
            // Reset the form
            form.reset();
            
            // Restore button
            submitButton.value = originalButtonText;
            submitButton.disabled = false;
          }, function(error) {
            console.log('FAILED...', error);
            
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.innerHTML = '<p>Sorry, there was a problem sending your message. Please try again later.</p>';
            
            // Insert error message after the form
            form.parentNode.insertBefore(errorMessage, form.nextSibling);
            
            // Restore button
            submitButton.value = originalButtonText;
            submitButton.disabled = false;
          });
      });
    });
  });
  