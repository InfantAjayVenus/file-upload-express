
function handleSubmit(e) {
  e.preventDefault();
  const {files} = document.querySelector('#uploadForm>input[name="upload_file"]');
  const formData = new FormData();
  formData.append('file', files[0]);

  fetch('/submit', {
    method: 'post',
    body: formData,
  })
}

document.querySelector('#uploadForm').addEventListener('submit', handleSubmit)
