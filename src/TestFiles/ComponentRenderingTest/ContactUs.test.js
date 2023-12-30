import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactUs from '../../allComponents/ContactUs';

describe('ContactUs Component', () => {
  it('renders ContactUs component correctly', () => {
    render(<ContactUs />);
  
    // Check if the main title and description are rendered
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.'
      )
    ).toBeInTheDocument();
  
    // Check if input fields and labels are associated correctly
    expect(screen.getByLabelText('Your name')).toBeInTheDocument();
    expect(screen.getByLabelText('Your email')).toBeInTheDocument();
    expect(screen.getByLabelText('Subject')).toBeInTheDocument();
    expect(screen.getByLabelText('Your message')).toBeInTheDocument();
  
    // Check if the form submission button is present
    expect(screen.getByText('Send')).toBeInTheDocument();
  
    // Check if contact information is displayed
    expect(screen.getByText('San Francisco, CA 94126, USA')).toBeInTheDocument();
    expect(screen.getByText('+ 01 234 567 89')).toBeInTheDocument();
    expect(screen.getByText('contact@mdbootstrap.com')).toBeInTheDocument();
  });
  
  it('updates response message upon form submission', () => {
    render(<ContactUs />);

    const sendButton = screen.getByText('Send');
    fireEvent.click(sendButton);

    // Check if the response message updates after clicking 'Send'
    expect(screen.getByText('Soon you will receive a response')).toBeInTheDocument();
  });

  // Add more test cases as needed to cover other interactions and functionalities
});
