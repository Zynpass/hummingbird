## Aloware Hummingbird 

Simple, browser-based, voice-enabled Public Announcement system for small teams. 

#### Why 

Our software [Aloware](https://www.aloware.com) is noisy. We (developers, admins) get a lot of notifications by email and on Slack. Sometimes things get lost. 

This tool solves for that specific issue by implementing Speech to Text as a standalone, web-driven and API-based microservice. 

Just hook it up to a TV, turn up the volume, and click start! Your developers can now push messages (and soon bells) 
to Hummingbird's API, and the message gets played, load and clear. 

### Run time

- Get a Pusher account.
- Stand up the node server `DEBUG=myapp:* npm start`
- Open index: localhost:3000 
- Give it 3 seconds to load the voices.
- Click "start". This is necessary to be your user interaction.
- Send your stuff to `http://localhost:3000/intake?type=text&message=a new user has registered`
- Turn up the volume.