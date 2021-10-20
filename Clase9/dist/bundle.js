System.register("validacion", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function validarCorreo(correo) {
        if (correo.length > 5) {
            console.log("Mayor que 5");
        }
    }
    exports_1("validarCorreo", validarCorreo);
    function validarPass(pass) {
        if (pass.length > 5) {
            console.log("Mayor que 5");
        }
    }
    exports_1("validarPass", validarPass);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("index", ["validacion"], function (exports_2, context_2) {
    "use strict";
    var validacion_1;
    var __moduleName = context_2 && context_2.id;
    function valida(correo) {
        validacion_1.validarCorreo(correo);
    }
    return {
        setters: [
            function (validacion_1_1) {
                validacion_1 = validacion_1_1;
            }
        ],
        execute: function () {
        }
    };
});
