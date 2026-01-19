document.getElementById("form-agendamento").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const servico = document.getElementById("servico").value;

  const mensagem = `
✨ *Agendamento Confirmado – Studio HairStylist* ✨

👤 Cliente: ${nome}
📞 Telefone: ${telefone}
💇 Serviço: ${servico}
📅 Data: ${data}
⏰ Horário: ${hora}

Aguardo sua confirmação. Obrigado!
`;

  const numeroProfissional = "5511932063376"; //  WHATSAPP
  const url = `https://wa.me/${numeroProfissional}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");

  this.reset();
});


// LIGHTBOX FUNCIONAL
document.querySelectorAll('.carrossel-track img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

document.getElementById('close').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

