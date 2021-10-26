function getStatus(statusContent) {
  const status = document.createElement("div");
  status.setAttribute("id", "status");
  status.innerHTML = statusContent;
  return status;
}

function handleSubmit(e) {
  e.preventDefault();
  const { files } = document.querySelector(
    '#uploadForm>input[name="upload_file"]'
  );
  const successStatus = `<p style="color: green">File uploaded Successfully</p>`;
  const failedStatus = `<p style="color: red">Error Uploading File!</p>`;
  const formData = new FormData();
  formData.append("file", files[0]);
  document.querySelector("#status") &&
    document.body.removeChild(document.querySelector("#status"));

  fetch("/submit", {
    method: "post",
    body: formData,
  })
    .then((response) => {
      if (response.ok && response.status === 200)
        document.body.appendChild(getStatus(successStatus));
    })
    .catch((error) => {
      document.body.appendChild(getStatus(failedStatus));
      console.debug(error);
    });
}

document.querySelector("#uploadForm").addEventListener("submit", handleSubmit);
