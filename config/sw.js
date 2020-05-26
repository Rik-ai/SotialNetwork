import iconNotification from '!file-loader?name=assets/images/[name].[ext]?[hash]!assets/icons/notification.png'

self.addEventListener('push', (event) => {

  const payload = event.data.json()
  const {
    type,
    interactionId,
    user,
    url
  } = payload

  if(type !== 'takeover') {
    console.error('Unsupported web push received')
    return
  }

  const title = `Take over required`
  const name = (user.profile && user.profile.fullName) ? user.profile.fullName : user.name

  const options = {
    data: {
      interactionId,
      user,
      url
    },
    body: `${name === 'Anonymous' ? `An ${name} user` : name} is in need of assistance`,
    badge: iconNotification,
    lang: 'en',
    icon: iconNotification,
    vibrate: [500, 100, 500],
    tag: interactionId,
    timestamp: Date.now()
  }

  if(type === 'takeover') {
    options.requireInteraction = true
  }

  // console.info('SW: Showing notification', title, options)
  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  )
})
