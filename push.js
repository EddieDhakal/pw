var push = require('web-push')

let vpaidKeys = {
    publicKey: 'BDEUVWNAfZW4RnVQO9X_s6vy_DJTh423ZMqKw79XMJKufD4CZZAybYPgWsIIAV9x2lVFc0YsX9Zz1azqg6yUXYs',
    privateKey: 'Xw6RE86z4Gwafh24l5gd7ZgQP7dvNiIPD-m1famaExg'
}

push.setVapidDetails('mailto:test@code.co.uk', vpaidKeys.publicKey, vpaidKeys.privateKey)

let sub = {

}

push.sendNotification(sub, 'Hello Xuchhi')

