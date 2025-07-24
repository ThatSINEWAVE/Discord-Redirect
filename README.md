<div align="center">

# Discord Invite Page with Animated Background

A sleek, interactive landing page that showcases your Discord server with animated wave effects and automatically redirects users to your Discord server after 5 seconds.

</div>

## Features

- **Animated Wave Background**: Smooth, interactive wave animation that responds to mouse movements
- **Discord Server Stats**: Real-time display of member count and online users
- **Automatic Redirect**: Users are automatically redirected to your Discord server after 5 seconds
- **Countdown Timer**: Visual countdown showing time remaining before redirect
- **Responsive Design**: Works on all device sizes
- **Glassmorphism UI**: Modern glass panel design with subtle animations

<div align="center">

# [Join my discord server](https://thatsinewave.github.io/Discord-Redirect/)

</div>

## Technologies Used

- HTML5
- CSS3 (with modern features like backdrop-filter)
- JavaScript (ES6+)
- Canvas API for animations
- Discord API for server statistics

## Installation

No installation required! This is a static website that can be hosted anywhere:

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/discord-invite-page.git
   ```
2. Upload the files to your web hosting service
3. That's it! The page is ready to use

<div align="center">

## ☕ [Support my work on Ko-Fi](https://ko-fi.com/thatsinewave)

</div>

## Customization

To customize for your own Discord server:

1. **Change Discord Invite Link**:
   - Update all instances of `https://discord.gg/2nHHHBWNDw` in:
     - `index.html`
     - `assets/js/main.js`

2. **Update Server Stats API Endpoint**:
   - In `assets/js/main.js`, change the API URL to your server's invite:
     ```javascript
     await fetch('https://discord.com/api/v9/invites/YOUR_INVITE_CODE?with_counts=true')
     ```

3. **Change Colors**:
   - Modify the color variables in `assets/css/main.css`:
     - Primary color (red): `#e60000`
     - Background colors
     - Text colors

4. **Change Text Content**:
   - Update the title, description, and any other text in `index.html`

## How It Works

1. When the page loads:
   - The wave animation initializes
   - A request is made to Discord's API to fetch server statistics
   - A 5-second countdown begins
2. During the countdown:
   - Users can still interact with the page
   - The wave animation responds to mouse movements
   - Server stats are displayed
3. After 5 seconds:
   - The page automatically redirects to your Discord server

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit pull requests.

## License

This project is open-source and available under the MIT License. See the LICENSE file for more details.
