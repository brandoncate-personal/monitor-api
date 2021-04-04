export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    websocket: {
        channel: process.env.CHANNEL || 'testresult'
    }
});