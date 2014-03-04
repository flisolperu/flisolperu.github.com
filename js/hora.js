var futuro = new Date (2014,3,26,9,0);
      var actualiza = 1000;
      function faltan(){
      var ahora = new Date();
      var faltan = futuro - ahora;
      if (faltan > 0){
        var segundos = Math.round(faltan/1000);
        var minutos = Math.floor(segundos/60);
        var segundos_s = segundos%60;
        var horas = Math.floor(minutos/60);
        var minutos_s = minutos%60;
        var dias = Math.floor(horas/24);
        var horas_s = horas%24;
        document.formulario.dias.value= dias;
        document.formulario.horas_s.value= horas_s;
        document.formulario.minutos_s.value= minutos_s;
        document.formulario.segundos_s.value= segundos_s;
        setTimeout("faltan()",actualiza);
      } else {
        document.formulario.dias.value= 0;
        document.formulario.horas_s.value= 0;
        document.formulario.minutos_s.value= 0;
        document.formulario.segundos_s.value= 0;
      return true;
      }}