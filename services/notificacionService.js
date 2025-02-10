class NotificationService {
  sendEmail = async (to, subject, message) => {
   
    console.log(`Enviando email a: ${to}`);
    console.log(`Asunto: ${subject}`);
    console.log(`Mensaje: ${message}`);
  };
}

export default new NotificationService();