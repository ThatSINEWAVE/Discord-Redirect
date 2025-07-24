document.addEventListener('DOMContentLoaded', function() {
    const cleanup = initWaves();
    fetchDiscordStats();

    // Set timeout for redirect
    setTimeout(() => {
        window.location.href = 'https://discord.gg/s9Wgr4QTg6';
    }, 5000); // 5000 milliseconds = 5 seconds
});

async function fetchDiscordStats() {
    try {
        const response = await fetch('https://discord.com/api/v9/invites/s9Wgr4QTg6?with_counts=true');
        const data = await response.json();

        if (data.approximate_member_count && data.approximate_presence_count) {
            document.querySelector('.total-members').textContent = `${data.approximate_member_count.toLocaleString()} members`;
            document.querySelector('.online-members').textContent = `${data.approximate_presence_count.toLocaleString()} online`;
        }
    } catch (error) {
        console.error('Error fetching Discord stats:', error);
        // Fallback values
        document.querySelector('.total-members').textContent = '200+ members';
        document.querySelector('.online-members').textContent = '30+ online';
    }
}