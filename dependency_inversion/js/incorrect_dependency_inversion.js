/* 
    DEPENDENCY INVERSION

    - Los modulos de alto nivel, no deben depender de los modulos de bajo nivel. Ambos deben
      depender de interfaces.

    - Las interfaces no deben depender de los detalles, los detalles deben depender de las interfaces
    
*/

class EmailNotificacion {
  emailNotification() {
    return `an email notification`;
  }
}

class PushNotification {
  pushNotificacion() {
    return `a push notification`;
  }
}

class SmsNotification {
  smsNotification() {
    return `a sms notification`;
  }
}

class NotificationSystem {
  constructor() {
    //This is a strong dependency between notifcation methods and notification system.
    //The notification methods are the low level classes (modules)
    //The notification class is high level class (module)
    this.notification = new SmsNotification();
  }

  sendNotification() {
    console.log(`Sending ${this.notification.smsNotification()}`);
  }

}

const notification = new NotificationSystem();
notification.sendNotification();