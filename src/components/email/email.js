import { Resend } from "resend";

const resend = new Resend("re_JhEbNYH4_3VRxTLUr8wWGmqvj98NiSxb4");

(async function () {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["anthony@customerscoops.com"],
    subject: "Test FE Developer-María Pilar Carranza",
    html: `<!DOCTYPE html>
<html>
  <head>
    <style>
      /* General Styles */
      body {
        font-family: Arial, sans-serif;
        color: #231331; /* Color de texto negro */
        background-color: #ffffff;
        margin: 0;
        padding: 0;
        width: 100%;
      }
      .container {
        width: 595px;
        margin: auto;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      /* Imagen en la parte superior de la hoja A4 */
      .header-image {
        width: 100%;
        height: 200px;
        background-image: url('/header.png');
        background-size: cover;
        background-position: center;
      }

      /* Main Content */
      .content {
        padding: 20px;
        text-align: justify;
      }

      /* Button Style */
      .button {
        display: inline-block;
        background-color: #231331; 
        color: #ffffff; 
        padding: 10px 20px;
        border-radius: 100px;
        text-decoration: none;
        font-size: 14px;
        margin: 20px 0;
      }

      /* Footer */
      .footer {
        background-color: #231331;
        color: #ffffff;
        padding: 10px;
        text-align: center;
        font-size: 12px;
      }

      .footer img {
        width: 80px; /* Ajusta el tamaño del logo */
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Imagen del Header en la parte superior -->
      <img src="/header.png" alt="Header Image" class="header-image" />

      <!-- Contenido Principal -->
      <div class="content">
        <p>Hola Anthony,</p>
        <p>
          En Customer Scoops nos importa mucho tu experiencia, y queremos asegurarnos de que nuestros servicios sigan cumpliendo tus expectativas. Por eso, hemos preparado unas breves preguntas para que puedas compartir tus comentarios y sugerencias.
        </p>
        <p>
          Tu opinión es clave para ayudarnos a mejorar y adaptarnos a lo que realmente necesitas. Nos tomará solo unos minutos de tu tiempo.
        </p>
        <!-- Botón -->
        <a href="https://your-form-url.com" class="button">Ingresar aquí</a>
        <p>
          Agradecemos de antemano tu participación y confianza en Customer Scoops. ¡Gracias por tu tiempo y por contribuir a nuestra mejora continua!
        </p>
        <p>Saludos,<br>Pilar<br>Equipo de Customer Scoops</p>
     <a href="https://github.com/MPCarranza/customer-Scoops/tree/master" class="button">Github</a>
     <a href="https://your-form-url.com" class="button">Vercel</a>
      </div>

      <!-- Pie de página -->
      <div class="footer">
        <img src="/logo.png" alt="Customer Scoops Logo" />
      </div>
    </div>
  </body>
</html>`,
  });

  if (error) {
    return console.error("Error:", error);
  }

  console.log("Data:", data);
})();
