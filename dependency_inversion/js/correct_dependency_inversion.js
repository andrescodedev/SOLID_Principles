/* 
    DEPENDENCY INVERSION

    - Los modulos de alto nivel, no deben depender de los modulos de bajo nivel. Ambos deben
      depender de interfaces.

    - Las interfaces no deben depender de los detalles, los detalles deben depender de las interfaces
    
*/
//CORRECT

//Interface for the notification methods
class NotificationMethod {
  sendNotification(){};
}

//Notification Methods
class EmailNotificacion extends NotificationMethod {
  sendNotification() {
    return `an email notification `;
  }
}

class PushNotification extends NotificationMethod {
  sendNotification() {
    return `a push notification`;
  }
}

class SmsNotification extends NotificationMethod {
  sendNotification() {
    return `a sms notification `;
  }
}

class NotificationService extends NotificationMethod {

  //this class isn't couple with a concrete notification method
  constructor(notificationMethod) {
    super();
    this.notification = notificationMethod;
  }

  sendNotification() {
    console.log(`Sending ${this.notification.sendNotification()}`);
  }
}

/*const emailNotification = new EmailNotificacion();
const notificationService = new NotificationService(emailNotification);
notificationService.sendNotification();*/

const pushNotification = new PushNotification();
const notificationService = new NotificationService(pushNotification);
notificationService.sendNotification();

