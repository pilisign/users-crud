// 1) Recuperar el parametro id de la url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
// 2) Recuperar los nodos con jQuery de mi HTML
const $nombre = $('input[name="nombre"]');
const $apellido = $('input[name="apellido"]');
const $telefono = $('input[name="telefono"]');
const $email = $('input[name="email"]');
// 3) Le pido al servidor la info del usuario con ese id
$.ajax(`/api/index/${id}`).done(function(user) {
    $nombre.val(user.nombre);
    $apellido.val(user.apellido);
    $telefono.val(user.telefono);
    $email.val(user.email);
});

$('#btn-edit').click(function () {
// 4) Creamos el nuevo objeto, tomando el val() de cada input
    $.ajax(`/api/index/${id}`,{
        method: "PUT",
        data: {
          nombre: $nombre.val(),
          apellido: $apellido.val(),
          telefono: $telefono.val(),
          email: $email.val(),
        }
    })    
    .done(function () {
        alert('usuario editado')
        location.href = '/index';
    })
      .fail(function (err) {
        alert('salio mal');
        console.log('salio todo mal: ', err);
      })
})
