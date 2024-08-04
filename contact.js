const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  submitButton.disabled = true;

  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      window.location.href = window.location.origin + "/success.html";
    } else {
      console.error("Form submission error:", response.statusText);
      alert("There was an issue with your submission. Please try again.");
      submitButton.disabled = false;
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("There was an issue with your submission. Please try again.");
    submitButton.disabled = false;
  }
});
