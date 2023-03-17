const formListener = () => {
  // prevent input non-numeric characters in card number and cvv fields
  const cardCard = document.querySelector('#card-number');
  const cardCvv = document.querySelector('#card-cvv');

  cardCard.addEventListener('keypress', (e) => {
    // Get the character code of the pressed key
    const { charCode } = e;
    // Check if the character code is not within the range of digits
    if (charCode < 48 || charCode > 57) {
      // Prevent the keypress event
      e.preventDefault();
    }
  });

  cardCvv.addEventListener('keypress', (e) => {
    // Get the character code of the pressed key
    const { charCode } = e;
    // Check if the character code is not within the range of digits
    if (charCode < 48 || charCode > 57) {
      // Prevent the keypress event
      e.preventDefault();
    }
  });
};

export default formListener;