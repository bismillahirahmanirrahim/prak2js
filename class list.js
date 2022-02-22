<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class List</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- load jquery and bootstrap js -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script type="text/javascript">
      ChangeBackground = (color) => {
        // mengambil element HTML
        let element = document.getElementById('pesan');
        // mengosongkan class pada elemen yang diambil
        element.className="";
        // memberikan class "alert" pada elemen yang dimbil
        element.classList.add("alert");
        // memberikan class tipe alert berdasarkan parameter
        element.classList.add("alert-"+color);
      }
    </script>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="card col-sm-12">
            <div class="card-header bg-success text-white">
              <h4>Alert Setting</h4>
            </div>
            <div class="card-body">
              <div id="pesan" class="alert alert-light">
                <strong>Urgent!</strong>
                This is a alert message, you can change type of alert below.
              </div>
            </div>
            <div class="card-footer">
              <!-- Background setting -->
              <select class="form-control" onchange="ChangeBackground(this.value);">
                <option value="light">Default</option>
                <option value="primary">Primary</option>
                <option value="danger">Danger</option>
                <option value="warning">Warning</option>
                <option value="success">Success</option>
                <option value="dark">Dark</option>
                <option value="secondary">Secondary</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
