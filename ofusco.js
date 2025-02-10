document.getElementById("whatsappButton").addEventListener("click", function() {
    const telefono = "549";
    const mensaje = "Hola! me quiero crear un usuario, Mi nombre es: .";
    const link = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(link, '_blank');
});
