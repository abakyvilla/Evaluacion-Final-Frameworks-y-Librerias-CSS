
  var receta ={
    nombre: 'Tamalitos de Elote',
    fecha: new Date,
    numer1: 12,
    numer2: 34,
    sumar: function () {
      var suma = this.numer2 + this.numer1
      return suma;
    },
    restar: function () {
      var resta = this.numer2 - this.numer1

      return resta;
    },
    dividir: function () {
      var division = this.numer2 / this.numer1

      return division;
    },
    mostrar: function() {
      console.log('Resultado de Suma: ' + this.sumar() + ' Resultado de Resta: ' + this.restar() + ' Resultado de Dividir' + this.dividir());
    }
  }

  document.getElementById('publicar').addEventListener('click', function() {
    console.log(receta.mostrar());

  });
