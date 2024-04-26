$(document).ready(function(){
    let numero1 = 0;
    let numero2 = 0;
    
    let resultado = 0;

    const regex = /^\d+$/;

    $("#btnSumar").click(function(){

        //console.log("hola mundo");

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();


        if(numero1 ===""){

            
            $("#error1").text("Debe ingresar el primer numero");
            $("#error1").css("color", "blue");
            return
        }

        if(!regex.test(numero1)){
            $("#error1").text("Solo debe ingresar numeros");
            $("#error1").css("color", "fuchsia");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2===""){

            $("#error2").text("Deebe ingresar el segundo numero");
            $("#error2").css("color", "blue");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Solo debe ingresar numeros");
            $("#error2").css("color", "fushsia")
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2)
        $("#resultado").text(resultado);
        $("#resultado").css("color", "red");
        $("#resultado").css("fontSize", "2rem");
        limpiar();
    })

    $("#btnLimpiar").click(function(){

    })

    function limpiar(){
        $("#numero1").val();
        $("#numero2").val();
    }



    $("#btnRestar").click(function(){
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();


        if(numero1 ===""){

            
            $("#error1").text("Debe ingresar el primer numero");
            $("#error1").css("color", "blue");
            return
        }

        if(!regex.test(numero1)){
            $("#error1").text("Solo debe ingresar numeros");
            $("#error1").css("color", "fuchsia");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2===""){

            $("#error2").text("Deebe ingresar el segundo numero");
            $("#error2").css("color", "blue");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Solo debe ingresar numeros");
            $("#error2").css("color", "fushsia")
            return;
        }

        resultado = parseInt(numero1) - parseInt(numero2)
        $("#resultado").text(resultado);
        $("#resultado").css("color", "red");
        $("#resultado").css("fontSize", "2rem");

    })

    $("#btnMultiplicar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();


        if(numero1 ===""){

            
            $("#error1").text("Debe ingresar el primer numero");
            $("#error1").css("color", "blue");
            return
        }

        if(!regex.test(numero1)){
            $("#error1").text("Solo debe ingresar numeros");
            $("#error1").css("color", "fuchsia");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2===""){

            $("#error2").text("Deebe ingresar el segundo numero");
            $("#error2").css("color", "blue");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Solo debe ingresar numeros");
            $("#error2").css("color", "fushsia")
            return;
        }

        resultado = parseInt(numero1) * parseInt(numero2)
        $("#resultado").text(resultado);
        $("#resultado").css("color", "red");
        $("#resultado").css("fontSize", "2rem");

    })

    $("#btnDividir").click(function(){
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();


        if(numero1 ===""){

            
            $("#error1").text("Debe ingresar el primer numero");
            $("#error1").css("color", "blue");
            return
        }

        if(!regex.test(numero1)){
            $("#error1").text("Solo debe ingresar numeros");
            $("#error1").css("color", "fuchsia");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2===""){

            $("#error2").text("Deebe ingresar el segundo numero");
            $("#error2").css("color", "blue");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Solo debe ingresar numeros");
            $("#error2").css("color", "fushsia")
            return;
        }

        resultado = parseInt(numero1) / parseInt(numero2)
        $("#resultado").text(resultado);
        $("#resultado").css("color", "red");
        $("#resultado").css("fontSize", "2rem");
    })
})