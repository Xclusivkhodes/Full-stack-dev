const generateQR = () => {
  const text = document.getElementById("text").value;
  if (!text) {
    alert("Please enter a text or a URL");
    return;
  }
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: 200,
    height: 200,
  });
  console.log("Hello");
};
