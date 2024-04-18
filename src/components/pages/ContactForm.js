import React, { useState } from 'react';
import { createContact } from '../../services/contactServices';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comment: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comment: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Vérifier si les champs obligatoires sont remplis
    let formErrors = {};
    let isValid = true;

    // Vérification des champs obligatoires
    if (!formData.firstName) {
      formErrors.firstName = 'First name is required';
      isValid = false;
    }
    if (!formData.lastName) {
      formErrors.lastName = 'Last name is required';
      isValid = false;
    }
    if (!formData.phone) {
      formErrors.phone = 'Phone is required';
      isValid = false;
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    }
    if (!formData.comment) {
      formErrors.comment = 'Comment is required';
      isValid = false;
    }

    if (!isValid) {
      setErrors(formErrors);
      return;
    }
   
  
    try {
      await createContact(formData);
      // Réinitialiser le formulaire après l'envoi réussi
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        comment: ''
      });

      setErrors({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        comment: ''
      });

      // alert('Votre message a été envoyé avec succès!');
      toast.success('Votre message a été envoyé avec succès!')
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      toast.error('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.');
    }
  };

  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-3">
          <div className="contact-info">
            <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
            <h2>Contact Us</h2>
            <h4>We would love to hear from you!</h4>
          </div>
        </div>
        <div className="col-md-9 ">
          <div className="contact-form ">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                <div className="col-sm-10">          
                  <input 
                    type="text" 
                    className={`form-control ${errors.firstName && 'is-invalid'}`} 
                    id="fname" 
                    placeholder="Enter First Name" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                <div className="col-sm-10">          
                  <input 
                    type="text" 
                    className={`form-control ${errors.lastName && 'is-invalid'}`} 
                    id="lname" 
                    placeholder="Enter Last Name" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
              </div>

              <div className="form-group mb-3">
                <label className="control-label col-sm-2" htmlFor="lname">Phone :</label>
                <div className="col-sm-10">          
                  <input 
                    type="number" 
                    className={`form-control ${errors.phone && 'is-invalid'}`} 
                    id="lname" 
                    placeholder="Enter Phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                <div className="col-sm-10">
                  <input 
                    type="email" 
                    className={`form-control ${errors.email && 'is-invalid'}`} 
                    id="email" 
                    placeholder="Enter email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
              <div className="form-group mb-3">
                <label className="control-label col-sm-2" htmlFor="comment">Comment:</label>
                <div className="col-sm-10">
                  <textarea 
                    className={`form-control ${errors.comment && 'is-invalid'}`} 
                    rows="5" 
                    id="comment" 
                    name="comment" 
                    value={formData.comment} 
                    onChange={handleChange} 
                  ></textarea>
                  {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
                </div>
              </div>
              <div className="form-group mb-7">        
                <div className="col-sm-offset-12 col-sm-10">
                  <button type="submit" className="btn btn-default col-12">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactForm;
