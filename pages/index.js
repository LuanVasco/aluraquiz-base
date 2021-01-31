import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';



export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz Dota 2</title>
        <link rel="icon" href="https://image.flaticon.com/icons/png/128/871/871366.png" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Dotinha o melhor moba</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log("Fazendo uma submissão por meio do react");
            }}> <Input
                  name="nomeDoUsuario"
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Digite seu nome"
                  value={name}
                />
              <Button type="submit" disabled={name.length === 0}>{`Bora jogar ${name}`}</Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/LuanVasco" />
    </QuizBackground>

  );
}
