const $tableUsers = $("#table-users");
let cabecera = '<tr class="header"><td>Nombre</td><td>Apellido</td><td>Teléfono</td><td>Email</td><td></td><td></td></tr>'
$tableUsers.append(cabecera)
$.ajax("/api/index").done(function(data) {
  buildTableUsers(data);
});

function buildTableUsers(users) {
  for (let i = 0; i < users.length; i++) {
    $tableUsers.append(`
        <tr class="fila-usuario" data-id=${users[i].id}>
            <td>${users[i].nombre}</td>
            <td>${users[i].apellido}</td>
            <td>${users[i].telefono}</td>
            <td>${users[i].email}</td>
            <td><button class="btn edit"><i class="far fa-edit"></i> Editar</button></td>
            <td><button class="btn delete"><i class="far fa-times-circle"></i> Borrar</button></td>
        </tr>
    `);
  }
}

$(document).on("click", ".btn.edit", function() {
  // Recupero el id que tiene la row
  // Tengo que hacer .parent().parent() porque el button esta dentro de un span
  // Su primer parent es el span
  // Su segundo parent es la row
  const id = $(this)
    .parent()
    .parent()
    .data("id");

  location.href = `/index/edit?id=${id}`;
});

$(document).on("click", ".btn.delete", function() {
  const id = $(this)
    .parent()
    .parent()
    .data("id");

  $(this)
    .parent()
    .parent()
    .remove();

  $.ajax(`/api/index/${id}`, { method: "delete" });
});

$('#filter-form button').click(function () {
  const search = $('#filter-form input').val();

  $.ajax('/api/index?search=' + search)
  .done(function (data) {
    $('table tr.fila-usuario').remove();
    buildTableUsers(data);
  })
});