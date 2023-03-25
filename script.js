const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(registrationForm);
  const vendorName = formData.get('vendorName');
  const vendorEmail = formData.get('vendorEmail');
  const vendorPhone = formData.get('vendorPhone');
  const vendorAddress = formData.get('vendorAddress');

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      vendorName: vendorName,
      vendorEmail: vendorEmail,
      vendorPhone: vendorPhone,
      vendorAddress: vendorAddress,
    })
  };

//   fetch('https://example.com/api/vendors', requestOptions)
//     .then(response => response.json())
//     .then(data => {
//       alert('Registration Successful!');
//       registrationForm.reset();
//     })
//     .catch(error => console.error(error));
// });
