self.addEventListener('push', () => {
    self.registration.sendNotification('Hello Xuchhi', {});
});