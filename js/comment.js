function kirim() {
    var a = document.getElementById("bend").innerHTML;
    var b = document.getElementById("nama").value;
    var c = document.getElementById("komentar").value;
    // document.write(a + "<br />" + "<br />");
    // document.write(b + "<br />");
    // document.write(c);
    $('#comment_nama').append(`<h4>`+ b +`</h4>`);
  }