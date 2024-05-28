// Implementar function ocultoMail(email)
// Recibe un email válido y lo oculta, mantiene los primeros 5 caracteres y luego “...”. Si tiene menos de 5, lo deja igual.
// Ejemplo: recibe “anamaria@gmail.com”, retorna “anama...@gmail.com”

function ocultoMail(email) {
    let puntos = "";
    let mail = email;
    if (mail.length>15) {
        mail= email.slice(0,5) + puntos + email.slice(email.length-10);
    }
    
}
