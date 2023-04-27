function notifyUser() {
  // Comprobamos si el navegador soporta las notificaciones
  if (!("Notification" in window)) {
    alert(
      "Este navegador no es compatible con las notificaciones de escritorio"
    );
  }

  // Comprobamos si los permisos han sido concedidos anteriormente
  else if (Notification.permission === "granted") {
    // Si es correcto, lanzamos una notificación
    var notification = new Notification("Has activado las notificaciones");
  }

  // Si no, pedimos permiso para la notificación
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // Si el usuario nos lo concede, creamos la notificación
      if (permission === "granted") {
        var notification = new Notification("Has activado las notificaciones");
      }
    });
  }

  // Por último, si el usuario ha denegado el permiso,
  // y quiere ser respetuoso, no hay necesidad de molestarlo.
}
