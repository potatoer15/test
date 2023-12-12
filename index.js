import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

const events = [];

app.use(express.json());

app.get('/all-event', (req, res) => {
    res.json(events);
});

app.post('/create-event', (req, res) => {
    const createEvent = req.body;
    events.push(createEvent);
    res.json(createEvent);
});

app.post('/update-event', (req, res) => {
    const updateEvent = req.body;
    events[updateEvent.index] = updateEvent;
    res.json(updateEvent);
});

app.post('/delete-event', (req, res) => {
    const deleteEventIndex = req.body.index;
    events.splice(deleteEventIndex, 1);
    res.json({ message: 'Event deleted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
