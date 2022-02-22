<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator Web</title>
    <!-- load bootstrap css -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <style media="screen">
      .screen{
        height:60px;
        font-size:30px;
        margin-bottom:10px;
      }
    </style>
    <!-- load jquery and bootstrap js -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <!-- <script src="calculator.js"></script> -->
    <script type="text/javascript">
      let temp = 0; // untuk menyimpan angka sementara
      let opr = ''; // untuk menyimpan operasi sementara
      // fungsi untuk menampilkan angka ke display
      ShowNumber = (number) => {
        let screen = document.getElementById('screen').value;
        // jika tampilan display masih kosong, 
        // maka angka langsung ditambahkan
        // Number(..) digunakan untuk konversi ke tipe numeric
        if(Number(screen) == 0){
          document.getElementById('screen').value = number;
        // jika display sudah ada angkanya,
        // maka angka digabungkan
        }else{
          document.getElementById('screen').value += number;
        }
      }
      Operation = (operator) => {
        // mengambil nilai dari display
        let screen = document.getElementById('screen').value;
        // jika nilai temp masing kosong, maka
        // nilai temp akan diisi dengan angka yang ada di display
        if(temp == 0){
          temp = Number(screen);
        // jika nilai temp sudah ada,
        // maka nilai temp akan diolah sesuai dengan operasi yang ada
        }else{
          if(opr == '+'){
            temp += Number(screen);
          }
          else if(opr == '-'){
            temp -= Number(screen);
          }
          else if(opr == '*'){
            temp *= Number(screen);
          }
          else if(opr == '/'){
            if(Number(screen) == 0){
              alert('Cannot devide by zero');
            }else{
              temp /= Number(screen);
            }
          }
        }
        opr = operator;
        // ketika tombol operator diklik maka tampilan display akan kosong
        document.getElementById('screen').value = "";
      }
 
      ShowResult = () => {
      // fungsi untuk tombol sama dengan (=)
      // ketika fungsi ini dipanggil maka akan display menampilkan 
      // hasil perhitungan
        let screen = document.getElementById('screen').value;
        if(opr == '+'){
          temp += Number(screen);
          document.getElementById('screen').value = temp;
        }
        else if(opr == '-'){
          temp -= Number(screen);
          document.getElementById('screen').value = temp;
        }
        else if(opr == '*'){
          temp *= Number(screen);
          document.getElementById('screen').value = temp;
        }
        else if(opr == '/'){
          if(Number(screen) == 0){
            alert('Cannot devide by zero');
          }else{
            temp /= Number(screen);
            document.getElementById('screen').value = temp;
          }
        }
      }
 
      Reset = () => { // fungsi untuk mereset calculator
        temp = 0;
        document.getElementById('screen').value = "";
      }
 
    </script>
  </head>
  <body>
    <div class="container">
      <div class="col-sm-5">
        <div class="card col-sm-12">
          <div class="card-header bg-primary text-white">
            <h4>Basic Calculator</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12">
                <input type="text" id="screen" class="form-control screen" readonly>
              </div>
 
              <div class="col-sm-3">
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('1');"><h3>1</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('4');"><h3>4</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('7');"><h3>7</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="Reset();"><h3>CE</h3></button>
              </div>
              <div class="col-sm-3">
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('2');"><h3>2</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('5');"><h3>5</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('8');"><h3>8</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('0');"><h3>0</h3></button>
              </div>
              <div class="col-sm-3">
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('3');"><h3>3</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('6');"><h3>6</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="ShowNumber('9');"><h3>9</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="ShowResult();"><h3>=</h3></button>
              </div>
              <div class="col-sm-3">
                <button type="button" class="btn btn-dark btn-block" onclick="Operation('*');"><h3>x</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="Operation('/');"><h3>/</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="Operation('-');"><h3>-</h3></button>
                <button type="button" class="btn btn-dark btn-block" onclick="Operation('+');"><h3>+</h3></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
