var  medida;
var pi = 3.1415;

//Menu mobile
$(function () {
  $("header .menu").click(function () {
    $("header .menu").toggleClass("active-menu");
    $("header .menu p").toggleClass("active-menu");
    $("header .categorias-menu").toggleClass("active-menu");
  });
});

$(function () {
    $("header nav a").click(function () {
      $("header .menu").removeClass("active-menu");
      $("header .menu p").removeClass("active-menu");
      $("header .categorias-menu").removeClass("active-menu");
    });
  });

// Código Cuadrado

function datosCuadrados() {
    
  $("#botaoCuadrado").on("click", function(){

    $("#cuadrado .resultado > *").remove();
      
    var ladoCuadrado = Number($("#ladoCuadrado").val());

    // console.log("Lado del cuadrado: " + ladoCuadrado);

    function perimetroCuadrado() {
      var medida = "cm";
      var perimetroCuadrado = ladoCuadrado * 4;
      // console.log("Perimetro: " + perimetroCuadrado);
      $("#cuadrado .resultado").prepend("<b>Perimetro: </b><p>" + perimetroCuadrado + " " + medida + "</p>");
    }

    function areaCuadrado() {
      var medida = "cm&#178;";
      var areaCuadrado = ladoCuadrado ** 2;
      // console.log("Area: " + areaCuadrado);
      $("#cuadrado .resultado").prepend("<b>Area: </b><p>" + areaCuadrado + " " + medida + "</p>");
    }

    areaCuadrado();
    perimetroCuadrado();

    
  });
}

datosCuadrados();

// Código Triangulo




function datosTriangulo() {
    
    $("#botaoTriangulo").on("click", function(){
  
      $("#triangulo .resultado > *").remove();
        
      var ladoTrianguloOne = Number($("#ladoTrianguloOne").val());
      var ladoTrianguloTwo = Number($("#ladoTrianguloTwo").val());
      var ladoTrianguloThree = Number($("#ladoTrianguloThree").val());
  
      // console.log("Un lado del triangulo : " + ladoTrianguloOne);
      // console.log("Un lado del triangulo : " + ladoTrianguloOne);
      // console.log("Base del triangulo: " + ladoTrianguloThree);
  
      function perimetroTriangulo() {
        var medida = "cm";
        var perimetroTriangulo = ladoTrianguloOne + ladoTrianguloTwo + ladoTrianguloThree;
        console.log("Perimetro: " + perimetroTriangulo);
        $("#triangulo .resultado").prepend("<b>Perimetro: </b><p>" + perimetroTriangulo + " " + medida + "</p>");
      }
  
      function areaTriangulo() {
        var medida = "cm&#178;";

        var alturaTriangulo = (ladoTrianguloOne + ladoTrianguloTwo + ladoTrianguloThree) / 2;
         console.log("Altura Triangulo: " + alturaTriangulo);
        var areaTriangulo = Math.sqrt(alturaTriangulo * (alturaTriangulo - ladoTrianguloOne) * (alturaTriangulo - ladoTrianguloTwo) * (alturaTriangulo - ladoTrianguloThree));
        console.log("Area: " + areaTriangulo);
        $("#triangulo .resultado").prepend("<b>Area: </b><p>" + areaTriangulo + " " + medida + "</p>");
      }
  
      areaTriangulo();
      perimetroTriangulo();
  
      
    });
  }

  datosTriangulo();

  // Código Circulo

  function datosCirculos() {
    
    $("#botaoCirculo").on("click", function(){
  
      $("#circulo .resultado > *").remove();
        
      var radioCirculo = Number($("#radioCirculo").val());
  
      // console.log("Radio del circulo: " + radioCirculo);
  
      function perimetroCirculo() {
        var medida = "cm";
        var perimetroCirculo = 2 * Number(pi) * radioCirculo;
        // console.log("Perimetro: " + perimetroCirculo);
        $("#circulo .resultado").prepend("<b>Perimetro: </b><p>" + perimetroCirculo + " " + medida + "</p>");
      }
  
      function areaCirculo() {
        var medida = "cm&#178;";
        var areaCirculo = Number(pi) * (radioCirculo ** 2);
        // console.log("Area: " + areaCirculo);
        $("#circulo .resultado").prepend("<b>Area: </b><p>" + areaCirculo + " " + medida + "</p>");
      }
  
      areaCirculo();
      perimetroCirculo();
  
      
    });
  }
  
  datosCirculos();
