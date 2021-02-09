$(document).ready(function () {
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  });
  $("table.table").DataTable({
    language: {
      lengthMenu: "Mostrar _MENU_ registros",
      zeroRecords: "No se han encontrado resultados",
      info: "Mostrando  _START_ - _END_ de un total de _TOTAL_ registros",
      infoEmpty: "Mostrando 0-0 de un total de 0 registros",
      infoFiltered: "(filtrado de un total de _MAX_ registros)",
      sSearch: "Buscar:",
      oPaginate: {
        sFirst: "Primero",
        sLast: "Último",
        sNext: "Siguiente",
        sPrevious: "Anterior",
      },
      sProcessing: "Procesando...",
    },
    //para usar los botones
    responsive: "true",
    dom: "Bfrtip",
    buttons: [
      {
        extend: "excelHtml5",
        text: '<i class="fas fa-file-excel"></i> ',
        title: "",
        titleAttr: "Exportar como Excel",
        className: "btn btn-success",
        exportOptions: {
          columns: ":not(:first-child)",
        },
      },
      {
        extend: "pdfHtml5",
        text: '<i class="fas fa-file-pdf"></i> ',
        title: "",
        titleAttr: "Exportar como PDF",
        className: "btn btn-danger",
        exportOptions: {
          columns: ":not(:first-child)",
        },
        customize: function (doc) {
          doc.defaultStyle = {
            font: "Roboto",
          };
        },
      },
      {
        extend: "print",
        text: '<i class="fa fa-print"></i> ',
        titleAttr: "Imprimir",
        className: "btn btn-info",
        exportOptions: {
          columns: ":not(:first-child)",
        },
        customize: function (doc) {
          doc.defaultStyle = {
            font: "Roboto",
          };
        },
      },
    ],
  });
});

/* $(document).ready(function () {
    $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
      $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    });
    $("table.table").DataTable({
      scrollY: 200,
      scrollCollapse: true,
      paging: false,
    });
  });*/

/* ========================== ALERTAS ================================*/
/* ======================== Articulos ===============================*/
$(document).on("click", ".btnGuardarArticulo", function () {
  $(".alert-text").text("El artículo se ha registrado exitosamente");
  $("#alertaNuevoProducto").removeClass("invisible"); //Muestra la alerta
  $("#alertaNuevoProducto").removeClass("collapse");
  $("#tab-materiales").removeClass("active"); //vuelve a mostrar información general por default
  $("#tab-info-gral").addClass("active");
  $("#materiales").removeClass("active");
  $("#materiales").removeClass("show");
  $("#info-gral").addClass("active");
  $("#info-gral").addClass("show");
});

$(document).on("click", ".cerrar-alerta-nuevo-articulo", function () {
  $("#alertaNuevoProducto").addClass("invisible");
  $("#alertaNuevoProducto").addClass("collapse");
});

$(document).on("click", ".btnConfirmarEliminarArticulo", function () {
  $("#modalEliminarArticulo").modal("hide");
  $(".alert-text").text("El artículo se ha eliminado");
  $("#alertaArticuloEliminado").removeClass("invisible"); //Muestra la alerta
  $("#alertaArticuloEliminado").removeClass("collapse");
});

$(document).on("click", ".cerrar-alerta-eliminar-articulo", function () {
  $("#alertaArticuloEliminado").addClass("invisible");
  $("#alertaArticuloEliminado").addClass("collapse");
});

/* ================== Proveedores ===============================*/
$(document).on("click", ".btnGuardarProveedor", function () {
  $(".alert-text").text("El proveedor se ha registrado exitosamente");
  $("#alertaNuevoProveedor").removeClass("invisible"); //Muestra la alerta
  $("#alertaNuevoProveedor").removeClass("collapse");
});

$(document).on("click", ".cerrar-alerta-nuevo-proveedor", function () {
  $("#alertaNuevoProveedor").addClass("invisible");
  $("#alertaNuevoProveedor").addClass("collapse");
});

$(document).on("click", ".btnConfirmarEliminarProveedor", function () {
  $("#modalEliminarProveedor").modal("hide");
  $(".alert-text").text("El proveedor se ha eliminado");
  $("#alertaProveedorEliminado").removeClass("invisible"); //Muestra la alerta
  $("#alertaProveedorEliminado").removeClass("collapse");
});

$(document).on("click", ".cerrar-alerta-eliminar-proveedor", function () {
  $("#alertaProveedorEliminado").addClass("invisible");
  $("#alertaProveedorEliminado").addClass("collapse");
});

/* =================== Clientes ==================================*/
$(document).on("click", ".btnGuardarCliente", function () {
  $(".alert-text").text("El cliente se ha registrado exitosamente");
  $("#alertaNuevoCliente").removeClass("invisible"); //Muestra la alerta
  $("#alertaNuevoCliente").removeClass("collapse");
});

$(document).on("click", ".cerrar-alerta-nuevo-cliente", function () {
  $("#alertaNuevoCliente").addClass("invisible");
  $("#alertaNuevoCliente").addClass("collapse");
});

$(document).on("click", ".btnConfirmarEliminarCliente", function () {
  $("#modalEliminarCliente").modal("hide");
  $(".alert-text").text("El cliente se ha eliminado");
  $("#alertaClienteEliminado").removeClass("invisible"); //Muestra la alerta
  $("#alertaClienteEliminado").removeClass("collapse");
});

$(document).on("click", ".cerrar-alerta-eliminar-cliente", function () {
  $("#alertaClienteEliminado").addClass("invisible");
  $("#alertaClienteEliminado").addClass("collapse");
});

/* ======================== Categorías ===============================*/
$(document).on("click", ".btnGuardarCategoria", function () {
  $(".alert-text").text("La categoría se ha registrado exitosamente");
  $("#alertaNuevaCategoria").removeClass("invisible"); //Muestra la alerta
  $("#alertaNuevaCategoria").removeClass("collapse");
});

$(document).on("click", ".cerrar-alerta-nueva-categoria", function () {
  $("#alertaNuevaCategoria").addClass("invisible");
  $("#alertaNuevaCategoria").addClass("collapse");
});

$(document).on("click", ".btnConfirmarEliminarCategoria", function () {
  $("#modalEliminarCategoria").modal("hide");
  $(".alert-text").text("La categoria se ha eliminado");
  $("#alertaCategoriaEliminada").removeClass("invisible"); //Muestra la alerta
  $("#alertaCategoriaEliminada").removeClass("collapse");
});

$(document).on("click", ".cerrar-alerta-eliminar-categoria", function () {
  $("#alertaCategoriaEliminada").addClass("invisible");
  $("#alertaCategoriaEliminada").addClass("collapse");
});

/* ================================ MODALES ==========================*/
/* -- Modales Articulos -- */
$("#btnNuevo").click(function () {
  $("#formProducto").trigger("reset");
  $("#formMateriales").trigger("reset");
  $(".modal-header").css("background-color", "#3a9dff");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Registrar Nuevo Artículo");
  $("#modalProducto").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEditarArticulo", function () {
  $("#formProducto").trigger("reset");
  $("#formMateriales").trigger("reset");
  $(".modal-header").css("background-color", "#ffc107");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Editar Artículo");
  $("#modalProducto").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEliminarArticulo", function () {
  $(".modal-header").css("background-color", "#d9534f");
  $(".modal-header").css("color", "white");
  $("#modalEliminarArticulo").modal("show");
  id = null;
  opcion = 1;
});

$(document).ready(function () {
  $("input[name='tipoArticulo']").click(function () {
    var radio_value = $(this).val();
    if (radio_value == "1") {
      $("#modalProducto").modal("show");
      $("#modalMateriaPrima").modal("hide");
    } else if (radio_value == "0") {
      $("#modalMateriaPrima").modal("show");
      $("#modalProducto").modal("hide");
    }
  });
});

/* ---Modales Proveedores ---*/
$("#btnNuevoProveedor").click(function () {
  $("#formProveedor").trigger("reset");
  $(".modal-header").css("background-color", "#3a9dff");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Registrar Nuevo Proveedor");
  $("#modalProveedor").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEditarProveedor", function () {
  $("#formProveedor").trigger("reset");
  $(".modal-header").css("background-color", "#ffc107");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Editar Proveedor");
  $("#modalProveedor").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEliminarProveedor", function () {
  $(".modal-header").css("background-color", "#d9534f");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Eliminar Proveedor");
  $("#modalEliminarProveedor").modal("show");
  id = null;
  opcion = 1;
});

/* --- Modales Categorias --- */

$("#btnNuevaCategoria").click(function () {
  $("#formCategoria").trigger("reset");
  $(".modal-header").css("background-color", "#3a9dff");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Registrar Nueva Categoría");
  $("#modalCategoria").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEditarCategoria", function () {
  $("#formCategoria").trigger("reset");
  $(".modal-header").css("background-color", "#ffc107");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Editar Categoría");
  $("#modalCategoria").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEliminarCategoria", function () {
  $(".modal-header").css("background-color", "#d9534f");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Eliminar Categoria");
  $("#modalEliminarCategoria").modal("show");
  id = null;
  opcion = 1;
});

/* --- Modales Clientes ---*/
$("#btnNuevoCliente").click(function () {
  $("#formCliente").trigger("reset");
  $(".modal-header").css("background-color", "#3a9dff");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Registrar Nuevo Cliente");
  $("#modalCliente").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEditarCliente", function () {
  $("#formCliente").trigger("reset");
  $(".modal-header").css("background-color", "#ffc107");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Editar Cliente");
  $("#modalCliente").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEliminarCliente", function () {
  $(".modal-header").css("background-color", "#d9534f");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Eliminar Cliente");
  $("#modalEliminarCliente").modal("show");
  id = null;
  opcion = 1;
});
/* --- Modales Usuarios ---*/
$("#btnNuevoUsuario").click(function () {
  $("#formUsuario").trigger("reset");
  $(".modal-header").css("background-color", "#3a9dff");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Registrar Nuevo Usuario");
  $("#modalUsuario").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEditarUsuario", function () {
  $("#formUsuario").trigger("reset");
  $(".modal-header").css("background-color", "#ffc107");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Editar Usuario");
  $("#modalUsuario").modal("show");
  id = null;
  opcion = 1;
});

$(document).on("click", ".btnEliminarUsuario", function () {
  $(".modal-header").css("background-color", "#d9534f");
  $(".modal-header").css("color", "white");
  $(".modal-title").text("Eliminar Usuario");
  $("#modalEliminarUsuario").modal("show");
  id = null;
  opcion = 1;
});
/* ======================== Usuarios ===============================*/

$(document).on("click", ".btnGuardarUsuario", function () {
  $(".alert-text").text("El usuario se ha registrado exitosamente");
  $("#alertaNuevoUsuario").removeClass("invisible"); //Muestra la alerta
  $("#alertaNuevoUsuario").removeClass("collapse");
});

$(document).on("click", ".cerrar-alerta-nuevo-usuario", function () {
  $("#alertaNuevoUsuario").addClass("invisible");
  $("#alertaNuevoUsuario").addClass("collapse");
});

$(document).on("click", ".btnConfirmarEliminarUsuario", function () {
  $("#modalEliminarUsuario").modal("hide");
  $(".alert-text").text("El usuario se ha eliminado");
  $("#alertaUsuarioEliminado").removeClass("invisible"); //Muestra la alerta
  $("#alertaUsuarioEliminado").removeClass("collapse");
});

$(document).on("click", ".cerrar-alerta-eliminar-usuario", function () {
  $("#alertaUsuarioEliminado").addClass("invisible");
  $("#alertaUsuarioEliminado").addClass("collapse");
});
