import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { ButtonGroup } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

export default function Quiz() {
    const questions = [
        {
            questionText: "What is the capital of France?",
            answerOptions: [
                { answerText: "New York", isCorrect: false },
                { answerText: "London", isCorrect: false },
                { answerText: "Paris", isCorrect: true },
                { answerText: "Dublin", isCorrect: false },
            ],
        },
        {
            questionText: "Who is CEO of Tesla?",
            answerOptions: [
                { answerText: "Jeff Bezos", isCorrect: false },
                { answerText: "Elon Musk", isCorrect: true },
                { answerText: "Bill Gates", isCorrect: false },
                { answerText: "Tony Stark", isCorrect: false },
            ],
        },
        {
            questionText: "The iPhone was created by which company?",
            answerOptions: [
                { answerText: "Apple", isCorrect: true },
                { answerText: "Intel", isCorrect: false },
                { answerText: "Amazon", isCorrect: false },
                { answerText: "Microsoft", isCorrect: false },
            ],
        },
        {
            questionText: "How many Harry Potter books are there?",
            answerOptions: [
                { answerText: "1", isCorrect: false },
                { answerText: "4", isCorrect: false },
                { answerText: "6", isCorrect: false },
                { answerText: "7", isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{
                marginTop: 3
            }}>
                <Box>
                    <>
                        <Card variant="outlined">
                            <Box>
                                <div className=''>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            {showScore ? (
                                                <div>
                                                    <Typography variant="h5" component="h5" sx={{
                                                        marginTop: 3,
                                                        padding: 2,
                                                    }}>
                                                        You scored {score} out of {questions.length}
                                                    </Typography>
                                                    <Typography variant="h5" component="h5" sx={{
                                                        marginTop: 3,
                                                        padding: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column'
                                                    }}>
                                                            <Button
                                                                sx={{
                                                                    border: "1px solid", margin: '6px 0', color: "white"
                                                                }}
                                                                onClick={() => {
                                                                    setCurrentQuestion(0);
                                                                    setShowScore(false);
                                                                    setScore(0);
                                                                }}>
                                                                Reset
                                                            </Button>
                                                    </Typography>

                                                </div>
                                            ) : (
                                                <>
                                                    <Typography variant="h5" component="h5" sx={{
                                                        marginTop: 3,
                                                        padding: 2,
                                                    }}>
                                                        {currentQuestion + 1}) {questions[currentQuestion].questionText}
                                                    </Typography>
                                                    <Typography variant="h5" component="h5" sx={{
                                                        marginTop: 3,
                                                        padding: 2,
                                                        display: 'flex',
                                                        flexDirection: 'column'
                                                    }}>
                                                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                                                            <Button
                                                                sx={{
                                                                    border: "1px solid", margin: '6px 0', color: "white"
                                                                }}
                                                                key={answerOption.answerText}
                                                                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                                                                {answerOption.answerText}
                                                            </Button>
                                                        ))}
                                                    </Typography>

                                                </>
                                            )}
                                        </Grid>
                                    </Grid>
                                </div>
                            </Box>
                        </Card>
                    </>
                </Box>
            </Container>
        </React.Fragment>
    );
}