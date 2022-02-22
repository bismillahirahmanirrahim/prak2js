<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Set and Get Value Javascript</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <!-- load jquery and bootstrap js -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script type="text/javascript">
      
      count = () =>{
      // mengambil nilai dari elemen (get value)
        let panjang = document.getElementById('panjang').value;
        let lebar = document.getElementById('lebar').value;
        let hasil = panjang * lebar;
        
        // menentukan nilai pada elemen (set value)
        document.getElementById('hasil').value = hasil;
      }
    </script>
  </head>
  <body>
    <div class="container">
      <div class="card col-sm-4">
        <div class="card-header">
          <h4>Hitung Luas Persegi Panjang</h4>
        </div>
        <div class="card-body">
          Panjang
          <input type="number" id="panjang" class="form-control">
          Lebar
          <input type="number" id="lebar" class="form-control">
          <button type="button" class="btn btn-info btn-block"
          onclick="count()">
            Hitung
          </button>
          Hasil
          <input type="text" id="hasil" class="form-control" readonly>
        </div>
      </div>
    </div>
  </body>
</html>
