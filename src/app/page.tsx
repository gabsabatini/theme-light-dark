"use client"

import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Container>
        <Button></Button>
      </Container>
    </ThemeProvider>
  );
}
