const request = (reqObject, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      callback(null, xhr.responseText);
    } else {
      console.log('Request Error');
    }
  }
  xhr.open(reqObject.method, reqObject.url);
  xhr.send(JSON.stringify(reqObject));
};
