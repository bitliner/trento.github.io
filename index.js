const { google } = require('googleapis')

function listEvents () {
  const calendar = google.calendar({ version: 'v3' })
  calendar.events.list({
    calendarId: '85n99a8b4nad2v41u7d6f3uq9s',
    // timeMin: (new Date()).toISOString(),
    // maxResults: 10,
    // singleEvents: true,
    orderBy: 'startTime'
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err)
    const events = res.data.items
    if (events.length) {
      console.log('Upcoming 10 events:')
      events.map((event, i) => {
        const start = event.start.dateTime || event.start.date
        console.log(`${start} - ${event.summary}`)
      })
    } else {
      console.log('No upcoming events found.')
    }
  })
}

listEvents()