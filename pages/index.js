import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
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
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: {opacity: 1, y: '0'},
            hidden: {opacity: 0, y:'100%'},
          }}
          initial="hidden"
          animate="show"
        >
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
        <Widget
         as={motion.section}
         transition={{ delay: 0.5, duration: 0.5 }}
         variants={{
           show: {opacity: 1},
           hidden: {opacity: 0},
         }}
         initial="hidden"
         animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app','')
                .split('.');
                  return (
                    <li key={linkExterno}>
                      <Widget.Topic 
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                    );
                })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer 
          as={motion.section}
          transition={{ delay: 0.8, duration: 0.5 }}
          variants={{
            show: {opacity: 1},
            hidden: {opacity: 0},
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/LuanVasco" />
    </QuizBackground>

  );
}
