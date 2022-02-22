<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alert Javascript</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- load jquery and bootstrap js -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="card col-sm-4">
          <div class="card-header bg-primary text-white">
            <h4>Basic Alert</h4>
          </div>
          <div class="card-body">
            <button type="button" class="btn btn-success"
            onclick="alert('Thank you for your click')">
              Click on Me
            </button>
            <button type="button" class="btn btn-info"
            onmouseover="alert('Thank you for your hover')">
              Hover on Me
            </button>
          </div>
        </div>
 
        <div class="card col-sm-4">
          <div class="card-header bg-success text-white">
            <h4>Dynamic Alert</h4>
          </div>
          <div class="card-body">
            <input type="text" id="message" class="form-control">
            <button type="button" class="btn btn-success"
            onclick="alert(document.getElementById('message').value)">
            <!-- mengambil isi dari elemen dengan id = "message" -->
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>