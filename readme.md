## Aloware Hummingbird 

Simple PA system to announce stuff with a simple GET request. 

### Launching 

- Stand up the node server `DEBUG=myapp:* npm start`
- Open index: localhost:3000 
- Click "start". Give it 3 seconds to load the voices. This is necessary to be your user interaction.
- Send your stuff to `http://localhost:3000/intake?message=something-else`
- Turn up the volume.