import React, { useState } from 'react';
import TimeInput from './components/TimeInput';
import Result from './components/Result';
import {Button, Stack} from '@mui/material';
import './App.css';

function App() {
    const [startHour, setStartHour] = useState('00:00');
    const [endHour, setEndHour] = useState('00:00');
    const [result, setResult] = useState('');

    const calculateSum = () => {
        const [startHours, startMinutes] = startHour.split(':').map(Number);
        const [endHours, endMinutes] = endHour.split(':').map(Number);

        let totalHours = startHours + endHours;
        let totalMinutes = startMinutes + endMinutes;

        if (totalMinutes >= 60) {
            totalHours += Math.floor(totalMinutes / 60);
            totalMinutes %= 60;
        }

        setResult(`${totalHours.toString().padStart(2, '0')}  horas e ${totalMinutes.toString().padStart(2, '0')} minutos`);
    };

    const calculateSub = () => {
        const startTime = new Date(`2023-01-01T${startHour}:00`);
        const endTime = new Date(`2023-01-01T${endHour}:00`);

        const timeDiff = endTime - startTime;

        const hours = Math.floor(timeDiff / 3600000);
        const minutes = Math.floor((timeDiff % 3600000) / 60000);

        setResult(`${hours} horas e ${minutes} minutos`);
    };

    const clear = () => {
        setStartHour('00:00');
        setEndHour('00:00');
    }

    return (
        <div className='App'>
            <h1>Somatório de Horas</h1>
            <Stack spacing={4} direction="row">
                <TimeInput label="Hora Inicial" value={startHour} onChange={(e) => setStartHour(e.target.value)} />
                <TimeInput label="Hora Final" value={endHour} onChange={(e) => setEndHour(e.target.value)} />
            </Stack>
            
            <Stack style={{margin: "5rem"}}  spacing={2} direction="row">
                <Button onClick={calculateSum} variant="contained">Somar</Button>
                <Button onClick={calculateSub} variant="contained">Subtrair</Button>
                <Button onClick={clear} variant="outlined">Limpar</Button>
            </Stack>

            <Result result={result} />
        </div>
    );
}

export default App;
