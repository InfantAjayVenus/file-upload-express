const successStatus = `<p style="color: green">File uploaded Successfully</p>`;
const failedStatus = `<p style="color: red">Error Uploading File!</p>`;

function getStatus(statusContent) {
  const status = document.createElement("div");
  status.setAttribute("id", "status");
  status.innerHTML = statusContent;
  return status;
}

function handleSubmit(e) {
  e.preventDefault();
  let files = [];
  files = e.target.upload_file.files;
  const formData = new FormData();
  document.querySelector("#status") &&
    document.body.removeChild(document.querySelector("#status"));
  try {
    if (files.length !== 0) {
      Object.values(files).map(ele => {
        formData.append("file", ele);
      });
      for (var key of formData.entries()) {
        console.log(key[0] + ', ' + key[1])
      }
      fetch("/submit",{
        body: formData,
        method: "post"
      })
      .then((response) => {
        if (response.ok && response.status === 200)
          document.body.appendChild(getStatus(successStatus));
          document.getElementById('upload_file').value = '';
        })
      .catch((error) => {
        document.body.appendChild(getStatus(failedStatus));
        console.debug(error);
      });
    } else {
      throw failedStatus;
    }
  } catch (err) {
      document.body.appendChild(getStatus(err));
    }
  }

document.querySelector("#uploadForm").addEventListener("submit", handleSubmit);
